#!/bin/bash

# Function to display error messages and exit
error_exit() {
    echo "Error: $1" >&2
    exit 1
}

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check if running as root when needed
check_root() {
    if [[ $EUID -eq 0 ]]; then
        echo "Running with root privileges"
    else
        echo "Root privileges required for system-wide installation"
        return 1
    fi
}

# Extract app name from tar file
get_app_name() {
    local tar_file="$1"
    basename "$tar_file" | sed 's/\.tar\.xz$//' | sed 's/\.tar$//' | sed 's/\.xz$//'
}

# Find .desktop file in directory
find_desktop_file() {
    local dir="$1"
    find "$dir" -name "*.desktop" -type f | head -n 1
}

# Main installation function
install_app() {
    local tar_file="$1"
    local install_type="$2"
    
    # Check if file exists
    if [[ ! -f "$tar_file" ]]; then
        error_exit "File '$tar_file' not found!"
    fi
    
    # Check if it's a tar.xz file
    if [[ "$tar_file" != *.tar.xz ]]; then
        error_exit "File must be a .tar.xz archive!"
    fi
    
    # Create temporary directory for extraction
    local temp_dir
    temp_dir=$(mktemp -d)
    if [[ ! "$temp_dir" || ! -d "$temp_dir" ]]; then
        error_exit "Could not create temporary directory!"
    fi
    
    echo "Extracting $tar_file to temporary directory..."
    
    # Extract the tar.xz file
    if command_exists tar; then
        tar -xf "$tar_file" -C "$temp_dir" || error_exit "Failed to extract archive!"
    else
        error_exit "tar command not found!"
    fi
    
    # Find the extracted content (handle cases where there's a single directory or multiple files)
    local extracted_content=("$temp_dir"/*)
    if [[ ${#extracted_content[@]} -eq 0 ]]; then
        error_exit "No content found in archive!"
    fi
    
    local app_dir
    if [[ ${#extracted_content[@]} -eq 1 && -d "${extracted_content[0]}" ]]; then
        app_dir="${extracted_content[0]}"
    else
        app_dir="$temp_dir"
    fi
    
    echo "Found application content in: $(basename "$app_dir")"
    
    # Find .desktop file
    local desktop_file
    desktop_file=$(find_desktop_file "$app_dir")
    
    if [[ -z "$desktop_file" ]]; then
        echo "Warning: No .desktop file found in the archive!"
        echo "Application extracted to: $app_dir"
        echo "You'll need to create a .desktop file manually or run the application directly."
        return 0
    fi
    
    echo "Found .desktop file: $(basename "$desktop_file")"
    
    # Get app name for directory
    local app_name
    app_name=$(get_app_name "$tar_file")
    
    if [[ -z "$app_name" ]]; then
        app_name="$(basename "$app_dir")"
    fi
    
    case "$install_type" in
        "system")
            install_system "$app_dir" "$desktop_file" "$app_name"
            ;;
        "user")
            install_user "$app_dir" "$desktop_file" "$app_name"
            ;;
        *)
            error_exit "Invalid installation type!"
            ;;
    esac
    
    # Cleanup
    rm -rf "$temp_dir"
    echo "Temporary files cleaned up."
}

# System-wide installation
install_system() {
    local app_dir="$1"
    local desktop_file="$2"
    local app_name="$3"
    
    if ! check_root; then
        echo "Please run this script with sudo for system-wide installation"
        exit 1
    fi
    
    local install_dir="/opt/$app_name"
    
    echo "Installing system-wide to $install_dir..."
    
    # Remove existing installation
    if [[ -d "$install_dir" ]]; then
        echo "Removing existing installation at $install_dir..."
        rm -rf "$install_dir"
    fi
    
    # Copy application
    cp -r "$app_dir" "$install_dir" || error_exit "Failed to copy application to /opt!"
    
    # Make main executable executable (if identifiable)
    find "$install_dir" -type f -executable -name "*.sh" -o -name "*.bin" -o -name "$app_name" | head -n 1 | while read -r exec_file; do
        if [[ -f "$exec_file" ]]; then
            chmod +x "$exec_file"
            echo "Made executable: $(basename "$exec_file")"
        fi
    done
    
    # Install .desktop file
    local desktop_dest="/usr/share/applications/$(basename "$desktop_file")"
    cp "$desktop_file" "$desktop_dest" || error_exit "Failed to copy .desktop file!"
    
    # Update .desktop file Exec path
    sed -i "s|^Exec=.*|Exec=$install_dir/$(basename "$(find "$install_dir" -type f -executable | head -n 1)")|" "$desktop_dest"
    
    chmod +x "$desktop_dest"
    
    echo "System-wide installation completed!"
    echo "Application installed to: $install_dir"
    echo "Desktop file installed to: $desktop_dest"
}

# User-specific installation
install_user() {
    local app_dir="$1"
    local desktop_file="$2"
    local app_name="$3"
    
    local install_dir="$HOME/.local/opt/$app_name"
    local applications_dir="$HOME/.local/share/applications"
    
    echo "Installing for current user to $install_dir..."
    
    # Create directories if they don't exist
    mkdir -p "$(dirname "$install_dir")" || error_exit "Failed to create application directory!"
    mkdir -p "$applications_dir" || error_exit "Failed to create applications directory!"
    
    # Remove existing installation
    if [[ -d "$install_dir" ]]; then
        echo "Removing existing installation at $install_dir..."
        rm -rf "$install_dir"
    fi
    
    # Copy application
    cp -r "$app_dir" "$install_dir" || error_exit "Failed to copy application!"
    
    # Make main executable executable
    find "$install_dir" -type f -executable -name "*.sh" -o -name "*.bin" -o -name "$app_name" | head -n 1 | while read -r exec_file; do
        if [[ -f "$exec_file" ]]; then
            chmod +x "$exec_file"
            echo "Made executable: $(basename "$exec_file")"
        fi
    done
    
    # Install .desktop file
    local desktop_dest="$applications_dir/$(basename "$desktop_file")"
    cp "$desktop_file" "$desktop_dest" || error_exit "Failed to copy .desktop file!"
    
    # Update .desktop file Exec path if needed
    if grep -q "^Exec=" "$desktop_dest"; then
        local main_exec
        main_exec=$(find "$install_dir" -type f -executable | head -n 1)
        if [[ -n "$main_exec" ]]; then
            sed -i "s|^Exec=.*|Exec=$main_exec|" "$desktop_dest"
        fi
    fi
    
    chmod +x "$desktop_dest"
    
    # Update desktop database
    if command_exists update-desktop-database; then
        update-desktop-database "$applications_dir"
        echo "Desktop database updated."
    fi
    
    echo "User installation completed!"
    echo "Application installed to: $install_dir"
    echo "Desktop file installed to: $desktop_dest"
}

# Main script
show_usage() {
    echo "Usage: $0 <tar.xz_file> [install_type]"
    echo ""
    echo "Arguments:"
    echo "  tar.xz_file   Path to the .tar.xz application file"
    echo "  install_type  Installation type: 'system' or 'user' (default: user)"
    echo ""
    echo "Examples:"
    echo "  $0 /path/to/app.tar.xz"
    echo "  $0 /path/to/app.tar.xz user"
    echo "  sudo $0 /path/to/app.tar.xz system"
}

# Check arguments
if [[ $# -lt 1 || $# -gt 2 ]]; then
    show_usage
    exit 1
fi

TAR_FILE="$1"
INSTALL_TYPE="${2:-user}"

if [[ "$INSTALL_TYPE" != "system" && "$INSTALL_TYPE" != "user" ]]; then
    echo "Error: Install type must be 'system' or 'user'"
    show_usage
    exit 1
fi

echo "=== Application Installer ==="
echo "File: $TAR_FILE"
echo "Install type: $INSTALL_TYPE"
echo ""

# Confirm installation
read -p "Proceed with installation? (y/N): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Installation cancelled."
    exit 0
fi

# Run installation
install_app "$TAR_FILE" "$INSTALL_TYPE"

echo "Installation completed successfully!"