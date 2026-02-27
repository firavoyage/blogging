# ubuntu

## .

- ubuntu 22
- ubuntu 24 (current)

## `apt`

- set mirror

  `/etc/apt/sources.list/`

  ```
  # Ubuntu sources have moved to /etc/apt/sources.list.d/ubuntu.sources
  deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ noble main restricted universe multiverse
  deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ noble-updates main restricted universe multiverse
  deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ noble-security main restricted universe multiverse
  ```

  <!-- `/etc/apt/sources.list.d/` -->

## `snap`

- disable auto update

  ```
  sudo snap refresh --hold
  ```

## `flatpak`

- install

  ```
  sudo apt install flatpak
  sudo flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo
  sudo apt install gnome-software-plugin-flatpak
  ```

- apply
  - log out and log in
- disable auto update
  - software: preferences: software updates `manual`
  - software: preferences: automatic update notifications `off`

## utilities

```
sudo apt install -y curl wget ca-certificates gnupg lsb-release

sudo apt install -y snapd

sudo apt install -y gnome-tweaks
flatpak install -y flathub com.mattjakeman.ExtensionManager

sudo apt install -y imagemagick ghostscript

sudo apt install -y neofetch fortune-mod cowsay figlet lolcat toilet

sudo apt install -y tree

sudo apt install -y git nodejs npm python3 pip pipx ffmpeg
sudo npm install -g pnpm

npm config set registry https://registry.npmmirror.com
pnpm config set registry https://registry.npmmirror.com

python3 -m pip config set global.break-system-packages true # user space is enough. no need to be system wide.
# sudo mkdir -p /etc
# printf '[global]\nbreak-system-packages = true\n' | sudo tee /etc/pip.conf >/dev/null
```

```
sudo apt install -y earlyoom zram-tools
sudo systemctl enable --now earlyoom

echo "Disabling current swap..."
sudo swapoff /swap.img

echo "Removing old swap image..."
sudo rm -f /swap.img

echo "Creating new 8GB swap image..."
sudo fallocate -l 8G /swap.img
sudo chmod 600 /swap.img
sudo mkswap /swap.img
sudo swapon /swap.img

echo "Making swap permanent in fstab..."
grep -q '/swap.img' /etc/fstab || echo '/swap.img none swap sw 0 0' | sudo tee -a /etc/fstab

echo "Configuring zRAM for 8GB compressed memory..."
sudo sed -i 's/^#ALLOCATION=.*/ALLOCATION=8192/' /etc/default/zramswap
sudo systemctl enable --now zramswap.service

sudo sed -i 's/^#EARLYOOM_ARGS=.*/EARLYOOM_ARGS="-m 10 -s 10"/' /etc/default/earlyoom
sudo systemctl restart earlyoom
```

## `settings`

### displays

- nightlight `on`
- schedule `manual schedule`
- times `from 0 to 0`
- color temperature `1/3`

### sound

- sounds
  - volume levels
    - system sound `off`
  - alert sound `none`

### power

- power mode `performance`
- automatic screen brightness `off`
- automatic power saver `off`

### multitasking

- workspaces `fixed number of workspaces`
- number of workspaces `1`

### appearance

- style `dark`
- background `jelly fish`

### ubuntu desktop

- desktop icons
  - show home folder `off`
- dock
  - auto hide dock `on`
  - panel mode `off`
  - icon size `max`
  - configure dock behavior
    - show volumes and devices `off`
    - show trash `off`
- set dock pins
  - chromium
  - code
- remove "show apps" icon
  - extension manager: system extensions: ubuntu dock: launchers: show applications icon `off`

### apps

- default apps
  - web `chromium web browser`
  - mail `thunderbird mail`
  - calendar `calendar`
  - music `vlc media player`
  - video `vlc media player`
  - photos `image viewer`

### notifications

- do not disturb `on`
- lock screen notifications `off`

### mouse & touchpad

- mouse
  - pointer speed `max`
- touchpad
  - disable touchpad while typing `off`
  - pointer speed `max`

### keyboard

- keyboard shortcuts
  - _close window_ `ctrl q`
  - _home folder_ `super e`
  - _take screenshot_ `prtsc` <!-- take a screenshot interactively `fn prtsc` -->
  - _toggle fullscreen_ `f11`
  - open terminal `ctrl alt t`
  - open quick settings `super s`
  - switch apps `super tab`
  - switch windows `alt tab`
  - switch windows of the same app `super backquote`

### system / users

- remove password, remove keyring popup

  ```
  sudo passwd -d fira

  rm -rf ~/.local/share/keyrings
  ```

## `software & updates`

- updates
  - auto check new updates `never`
  - notify new ubuntu version `never`
- other softwares
  - `*` `off` <!-- disable auto update -->
- remove software updater popup

  ```sh
  sudo apt remove update-notifier
  ```

## `code`

- install <!-- snap code is incompatible with fcitx -->

  ```
  curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
  sudo install -o root -g root -m 644 packages.microsoft.gpg /usr/share/keyrings/
  sudo sh -c 'echo "deb [arch=amd64 signed-by=/usr/share/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/vscode stable main" > /etc/apt/sources.list.d/vscode.list'
  sudo apt install apt-transport-https
  sudo apt update
  sudo apt install code
  ```

- config settings
  - login and sync
- install theme <!-- https://vscodethemes.com/ -->
  - dracula
  - atom one dark
  - nord
- install extensions
  - dbaeumer.vscode-eslint
  - formulahendry.code-runner
  - ms-python.black-formatter
  - ms-python.debugpy
  - ms-python.python
  - ms-python.vscode-pylance
  - rust-lang.rust-analyzer
  - xabikos.javascriptsnippets
  - yzhang.markdown-all-in-one
  - ziyasal.vscode-open-in-github
- config appearance
  - view: appearance <!-- things might be changed or nested in different ways -->
    - custom titlebar `off`
    - `*` bar `off`
    - minimap `off`
    - sticky scroll `off`
    - toggle bread crumbs `off`
  - explorer <!-- ctrl shift e -->
    - outline & timeline `off`
- config behavior

  - file: preferences: settings <!-- ctrl , -->

    - auto save `after delay`
      - after delay `100`
    - font family `"Fira Code", "Noto Sans CJK SC", monospace`
    - font ligatures `on`
    - font size `16`
    - editor: cursor blinking `solid`
    - editor: occurrences highlight `off`
    - git:enabled `off`
    - lightbulb `off`
    - render whitespace `none`
    - editor: tab size `2 spaces`
    - workspace `off`
    - extensions: auto update `none`
    - markdown: preview: breaks `on`
    - markdown: extension: theming: decoration: render code span `off`
    - markdown: extension: theming: syntax: decoration file size limit `50000000`
    - code-runner: run in terminal `on`
    - code-runner: preserve focus `off`
    - code runner: executor map

      `settings.json`

      ```json
      "code-runner.executormap": {
        // "cpp": "cd $dir && g++ $filename -o $filenamewithoutext && $dir$filenamewithoutext",
        "cpp": "cd $dir && g++ \"$filename\" -o \"$filenamewithoutext\" && \"$dir$filenamewithoutext\"",
        // "python": "python -u",
        "python": "python3 -u",
      }
      ```

- use shortcuts

  `file > preferences > keyboard shortcuts` `ctrl shift p open keyboard shortcuts json`

  - .
    - do anything `ctrl shift p`
    - go to file `ctrl p`
    - go to line `ctrl g`
    - go to symbol `ctrl t`
  - toggle visibility
    - open settings `ctrl ,`
    - toggle nav bar `alt`
    - toggle side bar `ctrl b`
    - toggle terminal in panel `ctrl backquote`
    - toggle explorer `ctrl shift e`
    - toggle search `ctrl shift f`
    - toggle extensions `ctrl shift x`
    - _toggle panel_ `ctrl alt p`
    - toggle problems panel `ctrl shift m`
    - toggle terminal panel `` ctrl `  ``
  - navigate
    - _move cursor left_ `ctrl h` `left`
    - _move cursor right_ `ctrl l` `right`
    - _move cursor down_ `ctrl j` `down`
    - _quickInput.next_ `ctrl j` `down`
    - _move cursor up_ `ctrl k` `up`
    - _quickInput.previous_ `ctrl k` `down`
    - _move cursor word left_ `ctrl alt h` `alt h` `ctrl left`
    - _move cursor word right_ `ctrl alt l` `alt l` `ctrl right`
    - add cursor `alt click`
    - _add cursor below_ `ctrl alt j` `ctrl shift alt j` `ctrl shift down`
    - _add cursor above_ `ctrl alt k` `ctrl shift alt k` `ctrl shift up`
    - reset cursor `esc`
    - select next suggestion `ctrl j`
      - when `suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus || suggestWidgetVisible && textInputFocus && !suggestWidgetHasFocusedSuggestion`
    - select prev suggestion `ctrl k`
      - when `suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus || suggestWidgetVisible && textInputFocus && !suggestWidgetHasFocusedSuggestion`
  - select
    - _select left_ `ctrl shift h` `shift left`
    - _select right_ `ctrl shift l` `shift right`
    - _select down_ `ctrl shift j` `ctrl shift down`
    - _select up_ `ctrl shift k` `ctrl shift up`
    - _select word left_ `ctrl shift alt h` `shift alt h` `ctrl shift left`
    - _select word right_ `ctrl shift alt l` `shift alt l` `ctrl shift right`
  - view
    - _shrink code (fold)_ `ctrl s`
    - _shirnk all (fold all)_ `ctrl shift s`
    - _expand code (unfold)_ `ctrl e`
    - _expand code (unfold all)_ `ctrl alt e`
    - zoom in `ctrl +`
    - zoom out `ctrl -`
    - split screen `ctrl \`
  - save
    - new file `ctrl n`
    - close file `ctrl w`
    - _save as_ `ctrl alt s`
  - edit
    - _duplicate current line or current selection_ `ctrl d`
    - _insert line below_ `shift enter`
    - _insert line above_ `ctrl shift enter`
    - _indent line_ `tab` `ctrl ]`
      - when `!hasNextTabstop && !suggestWidgetVisible`
    - _outdent line_ `shift tab` `ctrl [`
    - _move line down_ `alt j` `alt down`
    - _move line up_ `alt k` `alt up`
    - _delete to word start_ `ctrl backspace`
    - delete to word end `ctrl delete`
  - find and replace
    - rename symbol `f2`
    - find `ctrl f`
    - _replace_ `ctrl h`
      - when `findInputFocussed`
    - _find all references_ `ctrl shift r`
    - find symbol in current file `ctrl shift o`
  - comment
    - toggle comment `ctrl /`
    - _toggle block comment_ `ctrl shift /`
    - add jsdoc comment `/** enter`
  - format
    - format document `ctrl shift i` <!-- indent, remove redundant spaces, ... -->
  - write markdown
    - preview document `ctrl shift v`
    - insert snippet `ctrl i`
    - toggle math environment `ctrl m`
    - toggle code span `` ` ``
      - when `editorTextFocus`
    - toggle code block `` ctrl shift ` ``
    - toggle strike through `alt s`
    - toggle task list `alt c`
  - run code
    - _run code_ `ctrl r`
    - _stop running in terminal_ `ctrl c`

- remove conflicting shortcuts
  - _markdown all in one: toggle bold_ `ctrl b`
  - _select line_ `ctrl l`
  - _select all matches_ `ctrl shift l`
  - _delete line_ `ctrl shift k`
  - _save as_ `ctrl shift s`
  - _tab_ `tab`
  - _save_ `ctrl s`
  - _markdown all in one: toggle italic_ `ctrl i`
  - _markdown.extension.onBackspaceKey_ `backspace`
  - _markdown.extension.onTabKey_ `tab`
  - _markdown.extension.onshifttabkey_ `shift tab`
  - _breadcrumbs.toggletoon_ _breadcrumbs.focusandselect_ `ctrl shift <` `ctrl shift .`
  - _breadcrumbs.focus_ `ctrl shift ;`

## `x11`

- switch from wayland to x11

  `/etc/gdm3/custom.conf`

  ```
  # GDM configuration storage
  #
  # See /usr/share/gdm/gdm.schemas for a list of available options.

  [daemon]
  AutomaticLoginEnable=true
  AutomaticLogin=fira

  # Uncomment the line below to force the login screen to use Xorg
  WaylandEnable=false

  # Enabling automatic login

  # Enabling timed login
  #  TimedLoginEnable = true
  #  TimedLogin = user1
  #  TimedLoginDelay = 10

  [security]

  [xdmcp]

  [chooser]

  [debug]
  # Uncomment the line below to turn on debugging
  # More verbose logs
  # Additionally lets the X server dump core if it crashes
  #Enable=true
  ```

- apply

  ```
  sudo systemctl restart gdm3
  ```

## `policykit`

- remove auth popup <!-- always root. give all permissions. -->

  `/etc/polkit-1/rules.d/49-noprompt.rules`

  ```
  polkit.addRule(function(action, subject) {
    if (subject.user == "fira") {
        return polkit.Result.YES;
    }
  });
  ```

- apply

  ```
  sudo systemctl restart polkit
  ```

## `clash verge`

- install

  ```
  # Set variables
  URL="https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.4.4/Clash.Verge_2.4.4_amd64.deb"
  FILE="clash-verge.deb"

  # Download
  echo "Downloading..."
  wget -c -O "$FILE" "$URL"

  # Install
  echo "Installing..."
  sudo dpkg -i "$FILE"

  # Clean up
  echo "Cleaning up..."
  rm "$FILE"

  echo "Complete."
  ```

- home
  - tun mode `on` <!-- make sure it's x11 not wayland -->
- profiles
  - add nodes <!-- github search "nodes", paid nodes, vps, etc. -->
- settings
  - auto launch `on`
  - silent start `on`
  - port config `7890`
- remove tray icon
  - extension manager: browse `lilypad`
  - lilypad: general: collapse `tray_icon_tray_app`
  - lilypad: display: display: hide lilypad icon `always`

## `gnome tweaks`

- install

  ```
  sudo apt install gnome-tweaks
  ```

- fonts
  - monospace text `fira code`
- mouse and touchpad
  - middle click paste `off`
  - touchpad acceleration `on`
- windows
  - titlebar actions
    - middle click `none`
- startup applications
  - fcitx5
  - clash verge <!-- no need to add. config on clash verge.  -->
  - chromium
  - code
  - vlc
  - goldendict

## `fonts`

<!-- todo: learn on google fonts. find all fonts i love. organize. install. -->

- install fonts
  `repo: fonts`
- prefer sc for kanji

  `admin:///etc/fonts/conf.d/64-language-selector-cjk-prefer.conf`

  ```xml
  <?xml version="1.0"?>
  <!DOCTYPE fontconfig SYSTEM "fonts.dtd">
  <fontconfig>
    <alias>
      <family>sans-serif</family>
      <prefer>
        <family>Noto Sans CJK SC</family>
        <family>Noto Sans CJK JP</family>
        <family>Noto Sans CJK KR</family>
        <family>Noto Sans CJK TC</family>
        <family>Noto Sans CJK HK</family>
      </prefer>
    </alias>
    <alias>
      <family>serif</family>
      <prefer>
        <family>Noto Serif CJK SC</family>
        <family>Noto Serif CJK JP</family>
        <family>Noto Serif CJK KR</family>
        <family>Noto Serif CJK TC</family>
      </prefer>
    </alias>
    <alias>
      <family>monospace</family>
      <prefer>
        <family>Noto Sans Mono CJK SC</family>
        <family>Noto Sans Mono CJK JP</family>
        <family>Noto Sans Mono CJK KR</family>
        <family>Noto Sans Mono CJK TC</family>
        <family>Noto Sans Mono CJK HK</family>
      </prefer>
    </alias>
  </fontconfig>
  ```

  <!-- making everything cjk will cause weird full width characters. -->

  <!--

  `admin:///etc/fonts/local.conf`

  `~/.config/fontconfig/fonts.conf`

  ```xml
  <?xml version="1.0"?>
  <!DOCTYPE fontconfig SYSTEM "fonts.dtd">
  <fontconfig>
    <alias>
      <family>sans-serif</family>
      <prefer>
        <family>Ubuntu Sans</family>
        <family>Noto Sans CJK SC</family>
        <family>Noto Sans CJK JP</family>
        <family>Noto Sans CJK KR</family>
        <family>Noto Sans CJK TC</family>
        <family>Noto Sans CJK HK</family>
      </prefer>
    </alias>
    <alias>
      <family>serif</family>
      <prefer>
        <family>EB Garamond</family>
        <family>Noto Serif CJK SC</family>
        <family>Noto Serif CJK JP</family>
        <family>Noto Serif CJK KR</family>
        <family>Noto Serif CJK TC</family>
      </prefer>
    </alias>
    <alias>
      <family>monospace</family>
      <prefer>
        <family>Fira Code</family>
      </prefer>
    </alias>
  </fontconfig>
  ```

  -->

- apply

  ```
  sudo fc-cache -f -v
  ```

  <!-- log out log in when needed -->

- apply to flatpak apps

  <!-- flatpak apps run in isolated world -->

  ```
  APP="org.goldendict.GoldenDict"
  SRC_FRAGMENT="/etc/fonts/conf.d/64-language-selector-cjk-prefer.conf"
  DST_CONF="$HOME/.var/app/$APP/config/fontconfig"
  DST_CONFD="$DST_CONF/conf.d"
  FONTS_CONF="$DST_CONF/fonts.conf"
  TS=$(date +%s)

  echo "App: $APP"
  echo "Source fragment: $SRC_FRAGMENT"
  echo "Destination config: $DST_CONF"
  echo

  # Try to stop running instances (best-effort)
  echo "Stopping running flatpak instances (best-effort)..."
  flatpak kill "$APP" 2>/dev/null || true

  # Ensure base destination exists
  mkdir -p "$DST_CONF"

  # If conf.d exists and is a symlink, move it aside (it may point to a nonexistent target)
  if [ -L "$DST_CONFD" ]; then
    echo "Found $DST_CONFD as a symlink. Backing up and replacing."
    mv -v "$DST_CONFD" "${DST_CONFD}.symlink.bak.$TS"
  fi

  # If conf.d exists but is not a directory, back it up
  if [ -e "$DST_CONFD" ] && [ ! -d "$DST_CONFD" ]; then
    echo "Found $DST_CONFD but it's not a directory. Backing up."
    mv -v "$DST_CONFD" "${DST_CONFD}.bak.$TS"
  fi

  # Create proper conf.d directory
  mkdir -p "$DST_CONFD"

  # Create a minimal fonts.conf which includes the local conf.d and host conf.d if present
  cat > "$FONTS_CONF" <<'EOF'
  <?xml version="1.0"?>
  <!DOCTYPE fontconfig SYSTEM "fonts.dtd">
  <fontconfig>
    <!-- Prefer host font directories -->
    <dir>/run/host/fonts</dir>
    <dir>/run/host/usr/share/fonts</dir>
    <dir>/usr/share/fonts</dir>

    <!-- Include local conf fragments -->
    <include ignore_missing="yes">conf.d</include>

    <!-- Also include host /etc/fonts/conf.d if available inside sandbox -->
    <include ignore_missing="yes">/run/host/etc/fonts/conf.d</include>
  </fontconfig>
  EOF

  echo "Wrote $FONTS_CONF"

  # Copy the host fragment into the app conf.d using install (avoids symlink creation issues)
  if [ -f "$SRC_FRAGMENT" ]; then
    install -Dm644 "$SRC_FRAGMENT" "$DST_CONFD/$(basename "$SRC_FRAGMENT")"
    echo "Installed fragment into $DST_CONFD/$(basename "$SRC_FRAGMENT")"
  else
    echo "Warning: source fragment not found at $SRC_FRAGMENT — created fonts.conf and conf.d anyway."
  fi

  # Fix permissions so sandbox can read
  chmod -R u+rwX,go+rX "$DST_CONF"

  # Tell flatpak to use this config and give the sandbox read access to it.
  # Also expose /etc/fonts (host) read-only so fragments that reference system paths can be read.
  flatpak override --user \
    --env="FONTCONFIG_PATH=$DST_CONF" \
    --env="FONTCONFIG_FILE=$FONTS_CONF" \
    --filesystem="$DST_CONF:ro" \
    --filesystem="/etc/fonts:ro" \
    "$APP" || {
      echo "Note: flatpak override failed or returned non-zero (continuing anyway)."
    }

  echo
  echo "Set flatpak env:"
  echo "  FONTCONFIG_PATH=$DST_CONF"
  echo "  FONTCONFIG_FILE=$FONTS_CONF"
  echo "Exposed filesystem: $DST_CONF (read-only) and /etc/fonts (read-only)"
  echo

  # Refresh font cache inside sandbox (best-effort)
  echo "Refreshing font caches inside sandbox (best-effort)..."
  flatpak run --command=fc-cache "$APP" >/dev/null 2>&1 || true

  # Verify env and files inside sandbox and show fc-match output
  echo "Sandbox verification (environment and files):"
  flatpak run --command=sh "$APP" -c \
    "echo FONTCONFIG_PATH=\$FONTCONFIG_PATH; echo FONTCONFIG_FILE=\$FONTCONFIG_FILE; ls -la \"$DST_CONF\" || true; echo '----- fc-match output -----'; fc-match || true"

  echo
  echo "Done."
  ```

## `terminal`

- install zsh and config

  ```
  set -e

  echo "Starting Zsh + Oh My Zsh + plugins + Powerlevel10k setup …"

  # -------------------------
  # 1. Install core packages
  # -------------------------
  echo "Installing essentials …"
  sudo apt update
  sudo apt install -y zsh fonts-powerline unzip

  # -------------------------
  # 2. Install Zsh
  # -------------------------
  if ! command -v zsh &> /dev/null; then
    echo "Installing Zsh …"
    sudo apt install -y zsh
  else
    echo "Zsh already present, skipping."
  fi

  # Change default shell to Zsh
  echo "Setting Zsh as default shell …"
  chsh -s "$(which zsh)"

  # -------------------------
  # 3. Install Oh My Zsh
  # -------------------------
  if [ ! -d "$HOME/.oh-my-zsh" ]; then
    echo "Installing Oh My Zsh …"
    sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" "" --unattended
  else
    echo "Oh My Zsh already installed, skipping."
  fi

  # -------------------------
  # 4. Add plugins
  # -------------------------
  echo "Installing plugins …"
  mkdir -p ~/.zsh

  # autosuggestions
  git clone https://github.com/zsh-users/zsh-autosuggestions ~/.zsh/zsh-autosuggestions

  # syntax highlighting
  git clone https://github.com/zsh-users/zsh-syntax-highlighting ~/.zsh/zsh-syntax-highlighting

  echo ""
  ```

- put zshrc

  `terminal zshrc.sh`

- install ghostty

  <!-- inspired by innei & others -->

  ```
  curl -fsSL https://raw.githubusercontent.com/mkasberg/ghostty-ubuntu/HEAD/install.sh
  ```

- install tmux

<!-- ctrl b d to keep something running, tmux attach to back. -->

```
sudo apt -y install tmux
```

## `scrcpy` `sndcpy`

- install

  ```
  set -e

  echo "Updating system and enabling universe..."
  sudo add-apt-repository universe
  sudo apt update

  echo "Installing prerequisites (ADB, VLC, build tools)..."
  sudo apt install -y unzip adb libsdl2-2.0-0 vlc

  echo
  echo "Installing latest scrcpy from official release..."

  cd /tmp

  # Scrcpy official latest release
  SCRCPY_VERSION="3.3.3"
  SCRCPY_TAR="scrcpy-linux-x86_64-v${SCRCPY_VERSION}.tar.gz"

  wget https://github.com/Genymobile/scrcpy/releases/download/v${SCRCPY_VERSION}/${SCRCPY_TAR}

  tar -xzf ${SCRCPY_TAR}

  # Move official scrcpy binary to /usr/local/bin
  sudo mv scrcpy*/* /usr/local/bin/
  sudo chmod +x /usr/local/bin/scrcpy

  echo
  echo "Installing official sndcpy v1.1..."

  # Download sndcpy official release
  wget https://github.com/rom1v/sndcpy/releases/download/v1.1/sndcpy-v1.1.zip

  unzip -o sndcpy-v1.1.zip

  # Place both script and APK where sndcpy script can find it
  sudo mv sndcpy /usr/local/bin/
  sudo mv sndcpy.apk /usr/local/bin/
  sudo chmod +x /usr/local/bin/sndcpy

  echo
  echo "Adding udev rules for Android devices..."

  sudo tee /etc/udev/rules.d/51-android.rules > /dev/null <<EOF
  SUBSYSTEM=="usb", ATTR{idVendor}=="18d1", MODE="0666", GROUP="plugdev"
  EOF

  sudo udevadm control --reload-rules
  sudo udevadm trigger

  echo
  echo "Done."
  echo
  echo "Unplug and replug your phone."
  echo "Enable USB debugging in Developer Options."
  ```

- remove `/usr/share/applications/vlc.desktop` <!-- let sndcpy work with apt vlc while i only use flatpak one. -->
- add app

  `/home/fira/.local/share/applications/phone.desktop`

  ```
  [Desktop Entry]
  Name=phone
  GenericName=phone
  Comment=Display and control your Android device
  Exec=zsh -ic 'phone'
  Icon=/usr/local/bin/icon.png
  Terminal=false
  Type=Application
  Categories=Utility;RemoteAccess;
  StartupNotify=false
  StartupWMClass=/usr/local/bin/icon.png
  ```

  <!-- zsh -ic, with -i flag you no longer need to source zshrc -->

  <!-- prepare phone fn on zshrc -->

- fix touchpad emulation <!-- emulation, middle click, ... only respect finger count, ignore location. -->

  ```
  gsettings set org.gnome.desktop.peripherals.touchpad click-method 'fingers'
  gsettings set org.gnome.desktop.peripherals.touchpad tap-to-click true
  ```

## `files`

- add templates
  - `templates`
  - file
- add bookmarks
  - f
  - blogging
  - resources
  - books
  - memories
  - school
  - university
  - fonts
  - screenshots
  - screencasts
- add resources
  - music
  - videos

## `chromium`

- install `chromium 124.0.6367.118` <!-- newer versions dont provide flags to choose classic ui -->

  ```sh
  sudo snap install chromium --revision 2842
  ```

- disable new look
  - chrome://flags/#customize-chrome-side-panel
  - chrome://flags/#chrome-refresh-2023
  - chrome://flags/#chrome-webui-refresh-2023
- use system title bar `off` <!-- right click the title bar -->
- import bookmarks

  `chromium bookmarks.html`

- import passwords

  `chromium passwords.csv`

- config extensions
  - style: justblack https://chromewebstore.google.com/detail/just-black/aghfnjkcakhmadgdomlmlhhaocbkloab
  - simplify things: ublock origin https://chromewebstore.google.com/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm
    - filter lists: add `cookie notices`, `annoyances`.
    - my fliters: `browser ublock origin.txt`
  - automate things: tampermonkey https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmhtmlkfjojejmpbldmpobfkfo
    - disable update popup
      - settings: config mode `advanced`
      - settings: appearance: show update notification `disabled`
    - install `userscripts`
  - enhance new tab: intention <!-- repo: f: intention. load unpacked with dev mode on. -->
    - allow in incognito
    - extension: keyboard shortcuts: intention: Open a new window with Intention's custom new tab `ctrl n`
    - intention settings: url to open when enter is empty `https://chatgpt.com/branch/6984eac4-fa58-8322-828e-7dc5207d884a/bc5000bc-2439-46b3-8560-abd40414e51c` <!-- use the lastest one -->
    - intention settings: search url `https://www.google.com/ai?q=%s` <!-- legacy: `https://www.google.com/search?q=%s` -->
  - automate captcha solving: buster https://chrome.google.com/webstore/detail/mpbjkejclgfgadiemmefgebjfooflfhl
  - manage access to accounts: authenticator https://chromewebstore.google.com/detail/authenticator/bhghoamapcdpbohphigoooaddinpkbai
  - manage multiple accounts: cookie profile switcher https://chromewebstore.google.com/detail/cookie-profile-switcher/dicajblfgcpecbkhkjaljphlmkhohelc
  - enhance youtube: picture in picture https://chromewebstore.google.com/detail/picture-in-picture-extens/hkgfoiooedgoejojocmhlaklaeopbecg?hl=en
  - enhance twitter: control panel for twitter https://chromewebstore.google.com/detail/control-panel-for-twitter/kpmjjdhbcfebfjgdnpjagcndoelnidfj
  - enhance twitch: alternate player for twitch.tv https://chromewebstore.google.com/detail/alternate-player-for-twit/bhplkbgoehhhddaoolmakpocnenplmhf
  - enhance bilibili: bewlybewly https://chromewebstore.google.com/detail/bewlybewly/bbbiejemhfihiooipfcjmjmbfdmobobp
  - see history of sites: wayback machine https://chromewebstore.google.com/detail/wayback-machine/fpnmgdkabkmnadcjpehmlllkndpkmiak
  - dev: react developer tools https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en
- config fonts

  `chrome://settings/fonts`

  - standard `eb garamond`
  - serif `noto serif cjk sc`
  - sans-serif `noto sans cjk sc`
  - fixed-width `fira code`
  - mathematical `xits`

- disable spellcheck

  `chrome://settings/languages`

  - spell check: check for spelling errors when you type text on web pages: `off`

## `git`

- install

  ```
  sudo apt install git
  git config --global user.name "Fira"
  git config --global user.email "xoyage@gmail.com"
  git config --global push.autoSetupRemote true
  git config --global credential.helper store
  ```

- config secrets

  `~/.git-credentials`

  ```
  https://username:ghp_...@github.com
  https://username:password@gitea.com
  https://username:password@gitee.com
  ```

  - use personal access token `ghp_...` as password

  <!-- interactive one does the same -->

- add remotes
  - add github
    ```sh
    git remote add g https://github.com/username/project.git
    ```
  - add gitea
    ```sh
    git remote add a https://gitea.com/username/project.git
    ```
  - add gitlab
    ```sh
    git remote add l git@gitlab.com:username/project.git
    ```
  - add gitee
    ```sh
    git remote add e https://gitee.com/username/project.git
    ```
- config zshrc
  `~/.zshrc`
  - -> `terminal zshrc.sh`
- use shortcuts
  - `push` sync all git repos
- set timer to push daily

  ```sh
  # Define the script and service paths
  SCRIPT_PATH="/usr/local/bin/run_push.sh"
  SERVICE_PATH="/etc/systemd/system/run_push.service"
  TIMER_PATH="/etc/systemd/system/run_push.timer"

  # Create the script that will run the push command and retry on failure
  echo "Creating the push command script..."
  cat << 'EOF' | sudo tee $SCRIPT_PATH > /dev/null
  zsh -ic 'push'
  EOF

  # Make the script executable
  sudo chmod +x $SCRIPT_PATH

  # Create the systemd service
  echo "Creating the systemd service..."
  cat << EOF | sudo tee $SERVICE_PATH > /dev/null
  [Unit]
  Description=Run push command at 23:00 daily
  After=network.target

  [Service]
  ExecStart=$SCRIPT_PATH
  Restart=always
  RestartSec=10
  User=$USER
  Environment=DISPLAY=:0
  Environment=XAUTHORITY=/home/$USER/.Xauthority

  [Install]
  WantedBy=multi-user.target
  EOF

  # Create the systemd timer
  echo "Creating the systemd timer..."
  cat << EOF | sudo tee $TIMER_PATH > /dev/null
  [Unit]
  Description=Run push command daily

  [Timer]
  OnCalendar=16:00
  OnCalendar=21:00
  OnCalendar=23:00
  OnCalendar=02:00
  Unit=run_push.service

  [Install]
  WantedBy=timers.target
  EOF

  # Reload systemd and enable/start the timer
  echo "Reloading systemd, enabling and starting the timer..."
  sudo systemctl daemon-reload
  sudo systemctl enable run_push.timer
  sudo systemctl start run_push.timer

  echo "Setup complete. The push command will run daily at 23:00 and retry if it fails."
  ```

<!-- use the lastest config -->

<!-- 

check log

```
sudo journalctl -u run_push.service -r
```

check status

```
sudo systemctl status run_push.timer
```

```
sudo systemctl list-timers
```

```
sudo systemctl status run_push.service
```

stop

```
sudo systemctl stop run_push.service
sudo systemctl disable run_push.service
sudo systemctl stop run_push.timer
sudo systemctl disable run_push.timer
```

apply

```
sudo systemctl disable run_push.service # to enable a service means to run it when the system boots. dont enable it.
sudo systemctl enable run_push.timer # start counting if i reboot
sudo systemctl start run_push.timer # start counting now

sudo systemctl daemon-reload
sudo systemctl restart run_push.timer
```

test

```
sudo systemctl start run_push.service
```

```
zsh -ic 'push'
```

 -->

## `fcitx5`

- install app

  ```sh
  sudo apt install -y \
  fcitx5 \
  fcitx5-config-qt \
  fcitx5-frontend-gtk3 \
  fcitx5-frontend-gtk4 \
  fcitx5-frontend-qt5 \
  fcitx5-frontend-qt6 \
  fcitx5-chinese-addons \
  fcitx5-mozc

  im-config -n fcitx5

  DICT_DIR="$HOME/.local/share/fcitx5/pinyin/dictionaries"
  mkdir -p "$DICT_DIR"

  wget -O "$DICT_DIR/zhwiki.dict" https://github.com/felixonmars/fcitx5-pinyin-zhwiki/releases/download/0.2.4/zhwiki-20220416.dict

  wget -O "$DICT_DIR/pinyin.dict" https://github.com/wuhgit/CustomPinyinDictionary/releases/download/assets/CustomPinyinDictionary_Fcitx.dict

  wget -O "$DICT_DIR/moegirl.dict" https://github.com/outloudvi/mw2fcitx/releases/latest/download/moegirl.dict
  ```

  <!-- todo: find all dicts using an agent -->

- add environment variables

  `admin:///etc/environment`

  ```text
  GTK_IM_MODULE=fcitx
  QT_IM_MODULE=fcitx
  XMODIFIERS=@im=fcitx
  SDL_IM_MODULE=fcitx
  GLFW_IM_MODULE=fcitx
  ```

- disable input method hint
  - fcitx5-configtool: global options: behavior: show first input method infomation `off`
- add languages
  - fcitx5-configtool: input method: available input method: only show current language `off`
  - add `pinyin` `mozc`
- config pinyin
  - input method: pinyin: settings icon
    - character `half-width`
      - punctuation: `*`: `-` button <!-- remove all punctuations -->
    - fuzzy pinyin: `*` `on` <!-- except an-ang f-h l-n -->
- enlarge clipboard
  <!-- ctrl ; -->
  - fcitx5-configtool: addons: clipboard: number of entries `30`
- remove conflicting shortcuts
  - input method: keyboard - english (us): settings button
    - trigger hint mode `none`
    - trigger hint mode one time `none`
  - global options: hotkey: toggle embedded preedit `none`
- apply
  - reboot <!-- or it might not be compatible with chromium -->

## `wine`

- install

  ```
  sudo dpkg --add-architecture i386

  sudo apt install libasound2-plugins:i386 libsdl2-2.0-0:i386 libdbus-1-3:i386 libsqlite3-0:i386 -y

  sudo apt install wine64 wine32 -y
  ```

  <!-- it seems that apt version is more reliable. sabbat of witch and senrenbanka could only work on that and err on wine-stable (r/w somewhere without access). -->

  <!-- yosuga no sora also works after installing 32 bit packages (instead of showing a transparent window), idk. -->

- fix sound library

  ```sh
  sudo apt install -y libasound2-dev
  sudo apt install -y libfontconfig-dev

  sudo apt install -y winetricks
  winetricks sound=pulse
  ```

- config

  ```sh
  winecfg
  ```

## `obs`

- add sources
  - audio input capture `mic/aux`
  - audio output capture `desktop audio`
  - display capture (xshm) <!-- pipewire does not seem to work, outputing a black screen -->
- config output
  - settings: output: recoding
    - recording path `/home/fira/Videos/Screencasts`
  - settings: video: general
    - base (canvas) resolution `2560x1600`
    - output (scaled) resolution `2560x1600`
    - common fps values `60` <!-- 30 when not possible -->

## `goldendict`

- install dictionaries

  `edit`

  ```
  ~ % cd /home/fira/Documents/_/dict
  ...Documents/_/dict % ls
  big.mdx
  "Cambridge Advanced Learner's Dictionary 3th.mdd"
  "Cambridge Advanced Learner's Dictionary 3th.mdx"
  "Collins_COBUILD_Advanced_Learner's_Dictinary_8th_edition.mdx"
  ecd.css
  En-En-WordNet3_gl_1_0_abrv.dsl
  En-En-WordNet3_gl_1_0.ann
  En-En-WordNet3_gl_1_0.bmp
  En-En-WordNet3_gl_1_0.dsl.dz
  fmidioms.mdx
  LongmanDictionaryOfContemporaryEnglish6thEnEn.mdd
  LongmanDictionaryOfContemporaryEnglish6thEnEn.mdx
  MacmillanEnEn.mdd
  MacmillanEnEn.mdx
  mwaled.mdd
  mwaled.mdx
  penguin.mdd
  penguin.mdx
  新世纪汉英大.mdx
  牛津高阶英汉双解词典（第9版）.mdd
  牛津高阶英汉双解词典（第9版）.mdx
  现代英汉汉英综合大辞典.mdd
  现代英汉汉英综合大辞典.mdx
  ```

- simplify

  `view`

  - navigation `on`
  - `*` `off`

  <!-- menubar becomes a button on the top right. ctrl m toggle on. -->

- normalize

  `edit: preferences: interface: tabbed browsing`

  - open new tabs in background `off`

- use shortcuts
  - open screen word selector `ctrl c ctrl c`

<!-- https://mdx.mdict.org -->

## `qbittorrent`

- install

  ```
  sudo flatpak install -y flathub org.qbittorrent.qBittorrent
  ```

- config trackers

  - tools: preferences: bitorrent: automatically append these trackers to new downloads

    `trackers.txt`

## `bitmagnet`

- install

  ```sh
  mkdir -p ~/docker/bitmagnet
  ```

  `docker-compose.yml`

  ```
  services:
  bitmagnet:
    image: ghcr.io/bitmagnet-io/bitmagnet:latest
    container_name: bitmagnet
    restart: unless-stopped
    ports:
      - "3333:3333"
      - "3334:3334/tcp"
      - "3334:3334/udp"
    environment:
      - POSTGRES_HOST=postgres
      - POSTGRES_PASSWORD=postgres
      - HTTP_PROXY=http://host.docker.internal:7890
      - HTTPS_PROXY=http://host.docker.internal:7890
      # optional, later:
      # - TMDB_API_KEY=your_api_key
    volumes:
      - ./config:/root/.config/bitmagnet
    command:
      - worker
      - run
      - --all
    depends_on:
      postgres:
        condition: service_healthy

  postgres:
    image: postgres:16-alpine
    container_name: bitmagnet-postgres
    restart: unless-stopped
    volumes:
      - ./data/postgres:/var/lib/postgresql/data
    environment:
      - POSTGRES_PASSWORD=postgres
      - POSTGRES_DB=bitmagnet
      - PGUSER=postgres
    shm_size: 1g
    healthcheck:
      test: ["CMD-SHELL", "pg_isready"]
      interval: 10s
      timeout: 5s
      retries: 5
  ```

  ```sh
  docker compose up -d
  ```

- open
  - http://localhost:3333/

## `ipfs`

- install

  ```
  VERSION="v0.39.0"
  URL="https://dist.ipfs.tech/kubo/${VERSION}/kubo_${VERSION}_linux-amd64.tar.gz"

  echo "Downloading Kubo IPFS $VERSION..."
  curl -LO "$URL"

  echo "Extracting..."
  tar -xzf "kubo_${VERSION}_linux-amd64.tar.gz"

  echo "Installing..."
  cd kubo
  sudo bash install.sh

  echo "Cleaning up..."
  cd ..
  rm -rf kubo "kubo_${VERSION}_linux-amd64.tar.gz"

  echo "Done! Installed Kubo IPFS $VERSION"
  echo "Run: ipfs --version"
  ```

- run

  ```
  # Detect current user
  USER_NAME="$(whoami)"
  IPFS_PATH="/home/$USER_NAME/.ipfs"
  IPFS_BIN="$(which ipfs)"

  if [ -z "$IPFS_BIN" ]; then
    echo "ipfs binary not found in PATH."
    exit 1
  fi

  echo "Using IPFS binary at: $IPFS_BIN"
  echo "Using IPFS path at: $IPFS_PATH"

  # Initialize IPFS if not already initialized
  if [ ! -d "$IPFS_PATH" ]; then
    echo "Initializing IPFS..."
    ipfs init
  fi

  # Create systemd service file
  sudo tee /etc/systemd/system/ipfs.service > /dev/null <<EOF
  [Unit]
  Description=IPFS daemon
  After=network.target

  [Service]
  User=$USER_NAME
  Environment=IPFS_PATH=$IPFS_PATH
  ExecStart=$IPFS_BIN daemon --enable-gc
  Restart=always
  LimitNOFILE=1024000

  [Install]
  WantedBy=multi-user.target
  EOF

  echo "Reloading systemd..."
  sudo systemctl daemon-reload

  echo "Enabling IPFS service..."
  sudo systemctl enable ipfs

  echo "Starting IPFS service..."
  sudo systemctl start ipfs

  echo "Done."
  echo "Check status with: sudo systemctl status ipfs"
  ```

## `tor browser`

- normalize

  `about:config`

  - privacy.resistFingerprinting.letterboxing: `false`

## `ayugram`

- install

  ```
  # Set variables
  URL="https://github.com/0FL01/AyuGramDesktop-flatpak/releases/download/flatpak-v6.3.10-20260124152331/ayugram-desktop-6.3.10.flatpak"
  FILE="ayugram.flatpak"

  # Download the Flatpak file
  echo "Downloading AyuGram Desktop..."
  wget -c -O "$FILE" "$URL"

  # Install the Flatpak
  echo "Installing AyuGram Desktop..."
  sudo flatpak install -y "$FILE"

  # Clean up
  echo "Cleaning up..."
  rm "$FILE"

  echo "AyuGram Desktop installation complete."
  ```

  <!-- without sudo, -y wont work. wget -c flag means continue. -->

- disable notifications
  - settings: notifications and sounds: global settings: `*` `off`

## `eden`

<!-- yuzu fork -->

- install

```
wget -c -O "eden.deb" https://github.com/eden-emulator/Releases/releases/download/v0.2.0-rc1/Eden-Ubuntu-24.04-v0.2.0-rc1-amd64.deb
sudo dpkg -i eden.deb
sudo apt install -f -y  # Fix any missing deps
```

- install keys

  `tools: install decryption keys`

  `prod.keys`

  ```
  aes_kek_generation_source = 4d870986c45d20722fba1053da92e8a9
  aes_key_generation_source = 89615ee05c31b6805fe58f3da24f7aa8
  bis_kek_source = 34c1a0c48258f8b4fa9e5e6adafc7e4f
  bis_key_00 = e4a4ffc9ed2ea374a3640c21866e3e354c13b9bc5ed8e4f3e8c23d4f84d8e891
  bis_key_01 = fa75c2f34ed18a87ae43dec46dede848de9e0c761a2b67604b7de88d9bd476d9
  bis_key_02 = f421b1376196944e7fd1b41b166e2dbe201165d2f480781543af1a8da83935b7
  bis_key_03 = f421b1376196944e7fd1b41b166e2dbe201165d2f480781543af1a8da83935b7
  bis_key_source_00 = f83f386e2cd2ca32a89ab9aa29bfc7487d92b03aa8bfdee1a74c3b6e35cb7106
  bis_key_source_01 = 41003049ddccc065647a7eb41eed9c5f44424edab49dfcd98777249adc9f7ca4
  bis_key_source_02 = 52c2e9eb09e3ee2932a10c1fb6a0926c4d12e14b2a474c1c09cb0359f015f4e4
  device_key_4x = f94322f4b1123c1f79d0ad499b004a3e
  eticket_rsa_kek = 19c8b441d318802bad63a5beda283a84
  eticket_rsa_kek_personalized = d3ea417566cfc41495d24bf9c0bad036
  eticket_rsa_kek_source = dba451124ca0a9836814f5ed95e3125b
  eticket_rsa_kekek_source = 466e57b74a447f02f321cde58f2f5535
  eticket_rsa_keypair = d277bfef675633d05bd71031e8237f68beed2b8c0f45edc2a0b1d9253cccf6d34243645e080d2b4e71a6ed51a30b090a0af317970296905c1eb2225e77d79f0e60ee00c4f84a5c6f0dc1b9d1cefb1989f68da93342504b70c67d136955b442c85de3973941e2bb360d9552bcfe031afc64d0cad85ff38ba1542984fb3ebf6772b4a0490bd1f256cd51cba8f36bb72c6384c41b38c17bd12130ccd8a6dfb0b1ecab994e496b26364e50dea3053fe2a6ec6ae5844c36347c459b4b5fb237a208692a095fbe19a0aa2c3863e8d239a3a600f73a98e731f5b55ab0511fd8370fde1cf170af80a9535564d53668549683cb63a1b8541dc194182b8e2dc5804202c091f11b1b1511946e330e6000c19077878561e9c56e1b4bddc2dbabcac80633f8092b576fb3cdfc5f5d9aa6c59e9a492e7c1ac84b9db061d09b133d0723d9467a5c0772a39a91cbacb891bd4be2ead0d79a02a3723951fd79a03d100f47644d2153a8e6e347a906ffc1e49ec9350d670bd0d5a21b98d2ba56ae62009ad076782410f1013e92e6152dfcd3ec728d8e396a431afb1bce3135a07f5e9f1dec6d85e959d7f77deed12cc6f3161149995e96bb0b17ae83b1a881826f54b5031d503fa22560c5ebed409aed738e0180e09ff4e1721e1a7c9cd91a7733d167f3d11a9fea729b27c0eefde0795c6eaf859c68cbb37ffc62300b7cedd656f2815ca71b3ae68900010001000000000000000000000000
  header_kek_source = 1f12913a4acbf00d4cde3af6d523882a
  header_key = aeaab1ca08adf9bef12991f369e3c567d6881e4e4a6a47a51f6e4877062d542d
  header_key_source = 5a3ed84fdec0d82631f7e25d197bf5d01c9b7bfaf628183d71f64d73f150b9d2
  key_area_key_application_00 = ef979e289a132c23d39c4ec5a0bba969
  key_area_key_application_01 = cdedbab97b69729073dfb2440bff2c13
  key_area_key_application_02 = 75716ed3b524a01dfe21456ce26c7270
  key_area_key_application_03 = f428306544cf5707c25eaa8bc0583fd1
  key_area_key_application_04 = 798844ec099eb6a04b26c7c728a35a4d
  key_area_key_application_05 = a57c6eecc5410ada22712eb3ccbf45f1
  key_area_key_application_06 = 2a60f6c4275df1770651d5891b8e73ec
  key_area_key_application_07 = 32221bd6ed19b938bec06b9d36ed9e51
  key_area_key_application_08 = fb20aa9e3dbf67350e86479eb431a0b3
  key_area_key_application_09 = ce8d5fa79e220d5f48470e9f21be018b
  key_area_key_application_0a = 38b865725adcf568a81d2db3ceaa5bcc
  key_area_key_application_0b = bbddfd40a59d0ff555c0954239972213
  key_area_key_application_0c = 3fee7204e21c6b0ff1373226c0c3e055
  key_area_key_application_0d = 7b05d214fa554bc3e91b044fb412fc0d
  key_area_key_application_0e = 061667d7668b76a423e3f1aea52a8baa
  key_area_key_application_0f = 7ee19b046987ba2588e852cc24bc2953
  key_area_key_application_10 = fd8a4be923d9a464793cd2f3a27557ee
  key_area_key_application_11 = d8178dba2fb20ed3141612b6cb2e8e9d
  key_area_key_application_12 = 56debb519556d05e8ab3ddb9a1e4c1d9
  key_area_key_application_13 = 76a3a1e5963759e5c0c178a93b547880
  key_area_key_application_14 = dbd99c9834f2bb2bf8dacef3f8e090d5
  key_area_key_application_source = 7f59971e629f36a13098066f2144c30d
  key_area_key_ocean_00 = b33813e4c9c4399c75fabc673ab4947b
  key_area_key_ocean_01 = c54166efa8c9c0f6511fa8b580191677
  key_area_key_ocean_02 = 3061ce73461e0b0409d6a33da85843c8
  key_area_key_ocean_03 = 06f170025a64921c849df168e74d37f2
  key_area_key_ocean_04 = dc857fd6dc1c6213076ec7b902ec5bb6
  key_area_key_ocean_05 = 131d76b70bd8a60036d8218c15cb610f
  key_area_key_ocean_06 = 17d565492ba819b0c19bed1b4297b659
  key_area_key_ocean_07 = 37255186f7678324bf2b2d773ea2c412
  key_area_key_ocean_08 = 4115c119b7bd8522ad63c831b6c816a6
  key_area_key_ocean_09 = 792bfc652870cca7491d1685384be147
  key_area_key_ocean_0a = dfcc9e87e61c9fba54a9b1c262d41e4d
  key_area_key_ocean_0b = 66fe3107f5a6a8d8eda2459d920b07a1
  key_area_key_ocean_0c = b79b6bf3d6cdc5ec10277fc07a4fec93
  key_area_key_ocean_0d = 9a20ffbdcb03cfc5b8e88b058d27ae6c
  key_area_key_ocean_0e = 1e8bba40c91ca4d55163cdfb779a2f4e
  key_area_key_ocean_0f = 2a51262c614e175f22cb0bf7907418b0
  key_area_key_ocean_10 = 97b66913f9683a9e7b733b96a35cabf3
  key_area_key_ocean_11 = 42da6ca5bc5dc88dac81ba0729414af1
  key_area_key_ocean_12 = 0a9a14c74c9f46a3e0826c6e0857d199
  key_area_key_ocean_13 = f74d1295fdadce4a54d142e6f93f8f4f
  key_area_key_ocean_14 = 632f252b1553707e7293ab860a1af19f
  key_area_key_ocean_source = 327d36085ad1758dab4e6fbaa555d882
  key_area_key_system_00 = 6dd02aa15b440d6231236b6677de86bc
  key_area_key_system_01 = 4ab155e7f29a292037fd147592770b12
  key_area_key_system_02 = b7a74adeaf89c2a198c327bdff322d7d
  key_area_key_system_03 = d5aab1acd23a8aec284a316df859d377
  key_area_key_system_04 = 9b44b45b37de9d14754b1d22c2ca742c
  key_area_key_system_05 = 0012e957530d3dc7af34fbbe6fd44559
  key_area_key_system_06 = 01744e3b0818445cd54ee9f89da43192
  key_area_key_system_07 = d0d30e46f5695b875f11522c375c5a80
  key_area_key_system_08 = bd06cb1b86bd5c433667470a09eb63de
  key_area_key_system_09 = e19f788f658eda8bbf34a1dd2a9503a9
  key_area_key_system_0a = 7070e7ff5cfe448630143a9874903c38
  key_area_key_system_0b = 3fa471d4483e58b8f7756fcb64f63890
  key_area_key_system_0c = 7bfd381df3369407ab1c6bdd9fabf522
  key_area_key_system_0d = 53ed531cd657edf443b551a964f44ecc
  key_area_key_system_0e = fa9d4958e8f8f2c8c8ae33b1034a0a02
  key_area_key_system_0f = 91eae4eeb5335cc5a706c4fe81d8d8af
  key_area_key_system_10 = ae11fa6821b123419e0a54f3a89d9a8b
  key_area_key_system_11 = 6cb02ff14b6bb1145345dcbe6daaa0a9
  key_area_key_system_12 = 9ba3e06e93313a726e23bd2d32c494a2
  key_area_key_system_13 = 2215008857d08cba3fe69764d7adb0a4
  key_area_key_system_14 = eae7d84910294d0c5e5c9b1b26b315b5
  key_area_key_system_source = 8745f1bba6be79647d048ba67b5fda4a
  keyblob_key_source_00 = df206f594454efdc7074483b0ded9fd3
  keyblob_key_source_01 = 0c25615d684ceb421c2379ea822512ac
  keyblob_key_source_02 = 337685ee884aae0ac28afd7d63c0433b
  keyblob_key_source_03 = 2d1f4880edeced3e3cf248b5657df7be
  keyblob_key_source_04 = bb5a01f988aff5fc6cff079e133c3980
  keyblob_key_source_05 = d8cce1266a353fcc20f32d3b517de9c0
  keyblob_mac_key_source = 59c7fb6fbe9bbe87656b15c0537336a5
  mariko_master_kek_source_05 = 77605ad2ee6ef83c3f72e2599dac5e56
  mariko_master_kek_source_06 = 1e80b8173ec060aa11be1a4aa66fe4ae
  mariko_master_kek_source_07 = 940867bd0a00388411d31adbdd8df18a
  mariko_master_kek_source_08 = 5c24e3b8b4f700c23cfd0ace13c3dc23
  mariko_master_kek_source_09 = 8669f00987c805aeb57b4874de62a613
  mariko_master_kek_source_0a = 0e440cedb436c03faa1daebf62b10982
  mariko_master_kek_source_0b = e541acecd1a7d1abed0377f127caf8f1
  mariko_master_kek_source_0c = 52719bdfa78b61d8d58511e48e4f74c6
  mariko_master_kek_source_0d = d268c6539d94f9a8a5a8a7c88f534b7a
  mariko_master_kek_source_0e = ec61bc821e0f5ac32b643f9dd619222d
  mariko_master_kek_source_0f = a5ec16391a3016082ecf096f5e7ceea9
  mariko_master_kek_source_10 = 8dee9e11363a9b0a6ac7bbe9d103f780
  mariko_master_kek_source_11 = 4f413c3bfb6a012a689f83e953bd16d2
  mariko_master_kek_source_12 = 31be25fbdbb4ee495c7705c2369f3480
  mariko_master_kek_source_13 = 1a316287a809caf8691545c26baa5a8a
  mariko_master_kek_source_14 = ebf35b2d4a2dce453a6f61380b003b46
  master_kek_05 = 94a92da1d73c2b3e165c891ced5607fc
  master_kek_06 = a6c7b7870e42d5302fe6110883aa3889
  master_kek_07 = 5cf8c1d58063aff640aaa681f0ce426c
  master_kek_08 = e42f1ec8002043d746575ae6dd9f283f
  master_kek_09 = cec2885fbeef5f6a989db84a4cc4b393
  master_kek_0a = dd1a730232522b5cb4590cd43869ab6a
  master_kek_0b = fc6f0c891d42710180724ed9e112e72a
  master_kek_0c = 43f7fc20fcec22a5b2a744790371b094
  master_kek_0d = 8dc9a8223671daa73ccd8b93cdaaed9f
  master_kek_0e = f3f857257c3f63ca63b9c9710b8f673e
  master_kek_0f = 1e8f01c4927a76a66097df44c3bad27d
  master_kek_10 = 8b523b9d476508daadc2036582ce5aa8
  master_kek_11 = c618d3fd0ee15ffcea22bc98ad2489b5
  master_kek_12 = f540a14ea2cce8d0ede62a56586bfb0e
  master_kek_13 = 5ab6b61cf29dd5d8e40fbb43e459fa88
  master_kek_14 = 2698651a8c2984253767669ba71b9346
  master_kek_source_06 = 374b772959b4043081f6e58c6d36179a
  master_kek_source_07 = 9a3ea9abfd56461c9bf6487f5cfa095c
  master_kek_source_08 = dedce339308816f8ae97adec642d4141
  master_kek_source_09 = 1aec11822b32387a2bedba01477e3b67
  master_kek_source_0a = 303f027ed838ecd7932534b530ebca7a
  master_kek_source_0b = 8467b67f1311aee6589b19af136c807a
  master_kek_source_0c = 683bca54b86f9248c305768788707923
  master_kek_source_0d = f013379ad56351c3b49635bc9ce87681
  master_kek_source_0e = 6e7786ac830a8d3e7db766a022b76e67
  master_kek_source_0f = 99220957a7f95e94fe787f41d6e756e6
  master_kek_source_10 = 71b9a6c0ff976b0cb440b9d5815d8190
  master_kek_source_11 = 00045df04dcd14a31cbfde4855ba35c1
  master_kek_source_12 = d76374464eba780a7c9db3e87a3d71e3
  master_kek_source_13 = a36b0ab56f574c5e00fd5621f5066bd1
  master_kek_source_14 = 92bf37800e79568c5775720a48d81539
  master_key_00 = c2caaff089b9aed55694876055271c7d
  master_key_01 = 54e1b8e999c2fd16cd07b66109acaaa6
  master_key_02 = 4f6b10d33072af2f250562bff06b6da3
  master_key_03 = 84e04ec20b9373818c540829cf147f3d
  master_key_04 = cfa2176790a53ff74974bff2af180921
  master_key_05 = c1dbedcebf0dd6956079e506cfa1af6e
  master_key_06 = 0aa90e6330cdc12d819b3254d11a4e1e
  master_key_07 = 929f86fbfe4ef7732892bf3462511b0e
  master_key_08 = 23cfb792c3cb50cd715da0f84880c877
  master_key_09 = 75c93b716255319b8e03e14c19dea64e
  master_key_0a = 73767484c73088f629b0eeb605f64aa6
  master_key_0b = 8500b14bf4766b855a26ffc614097a8f
  master_key_0c = b3c503709135d4b35de31be4b0b9c0f7
  master_key_0d = 6d2b26416ab030dc504cbfd6bb2977b7
  master_key_0e = 3b995e3bf23207c3cacb07f8c57415e6
  master_key_0f = ff22454d86237004c750e2dcb4b16c80
  master_key_10 = 252c7d95f296d07f2369bdba6d42c615
  master_key_11 = 03d1d722e91bf7f2c8f3c00283bf5c6c
  master_key_12 = 32ecadc8986540f930f54d159fcba88e
  master_key_13 = 5146f2e7096bd2f8fa14030b883a98d0
  master_key_14 = 4c9b499cc482b0fe8c6c2f698e19ff64
  master_key_source = d8a2410ac6c59001c61d6a267c513f3c
  package2_key_00 = a35a19cb14404b2f4460d343d178638d
  package2_key_01 = a0dd1eacd438610c85a191f02c1db8a8
  package2_key_02 = 7e5ba2aafd57d47a85fd4a57f2076679
  package2_key_03 = bf03e9889fa18f0d7a55e8e9f684323d
  package2_key_04 = 09df6e361e28eb9c96c9fa0bfc897179
  package2_key_05 = 444b1a4f9035178b9b1fe262462acb8e
  package2_key_06 = 442cd9c21cfb8914587dc12e8e7ed608
  package2_key_07 = 70c821e7d6716feb124acbac09f7b863
  package2_key_08 = 8accebcc3d15a328a48365503f8369b6
  package2_key_09 = f562a7c6c42e3d4d3d13ffd504d77346
  package2_key_0a = 0803167ec7fc0bc753d8330e5592a289
  package2_key_0b = 341db6796aa7bdb8092f7aae6554900a
  package2_key_0c = 4e97dc4225d00c6ae33d49bddd17637d
  package2_key_0d = db13c2de2c313540b18a32b4f106d4a1
  package2_key_0e = 254d393b26e6d98963c1c8c4fa6d11e2
  package2_key_0f = 1c87f9650cca54af03df3590021e457d
  package2_key_10 = 2d64ee13cece88746b375f1a43b9fdf6
  package2_key_11 = 73a9680bbd12d3a05c6eddb9545c4077
  package2_key_12 = 64f022a4150139a118608f55e5621c72
  package2_key_13 = 56adb5ca4e65d0ce48b2d70129cb87e1
  package2_key_14 = d8118afae97877041ae563eff14de93c
  package2_key_source = fb8b6a9c7900c849efd24d854d30a0c7
  per_console_key_source = 4f025f0eb66d110edc327d4186c2f478
  retail_specific_aes_key_source = e2d6b87a119cb880e822888a46fba195
  save_mac_kek_source = d89c236ec9124e43c82b038743f9cf1b
  save_mac_key = d798cbbd382b7891c3c6ae909da62936
  save_mac_key_source = e4cd3d4ad50f742845a487e5a063ea1f
  save_mac_sd_card_kek_source = 0489ef5d326e1a59c4b7ab8c367aab17
  save_mac_sd_card_key_source = 6f645947c56146f9ffa045d595332918
  sd_card_custom_storage_key_source = 370c345e12e4cefe21b58e64db52af354f2ca5a3fc999a47c03ee004485b2fd0
  sd_card_kek_source = 88358d9c629ba1a00147dbe0621b5432
  sd_card_nca_key_source = 5841a284935b56278b8e1fc518e99f2b67c793f0f24fded075495dca006d99c2
  sd_card_save_key_source = 2449b722726703a81965e6e3ea582fdd9a951517b16e8f7f1f68263152ea296a
  sd_seed = 8b9a52ccb21081c5062bd5df46eef75f
  ssl_rsa_kek = b011100660d1dccbad1b1b733afa9f95
  ssl_rsa_kek_personalized = 57564664130531a71731195fb31069e2
  ssl_rsa_kek_source = 9a383bf431d0bd8132534ba964397de3
  ssl_rsa_kekek_source = 7f5bb0847b25aa67fac84be23d7b6903
  ssl_rsa_key = 2a395466565d0ca12145e9a01c50432bdbda09961a7a3dd9a655dccb31663a83e5215c0ace43a046e1655f4b0903b47b4ce3ec796241b11497c12f8204946761c6f6be5fe33b61ae8440a7364990afc9ab78a74bbb2da584777e1bd9474721f9758b61d3836fdd0a15b885b4965692444dbaf3187ffa1c7f4e9d9ad05d7499f8e7add7a0854925e72248edb478b936142cdd9ab0fcd61f9a939a795e6e448513acfa9aa2841e8ddf08a70bdd25e6c0c05b4b0884e3615aa96ba8ae99f91d234cf075e7d5ee113cab36f28700957c7e8973056d35fc5dc65b7bb2fb642be88f3a235020fde51e3754fecc90cad3e32d22e93a60ab5234497b2163bd3418fefe1d
  titlekek_00 = 62a24d6e6d0d0e0abf3554d259be3dc9
  titlekek_01 = 8821f642176969b1a18021d2665c0111
  titlekek_02 = 5d15b9b95a5739a0ac9b20f600283962
  titlekek_03 = 1b3f63bcb67d4b06da5badc7d89acce1
  titlekek_04 = e45c1789a69c7afbbf1a1e61f2499459
  titlekek_05 = ddc67f7189f4527a37b519cb051eee21
  titlekek_06 = b1532b9d38ab036068f074c0d78706ac
  titlekek_07 = 81dc1b1783df268789a6a0edbf058343
  titlekek_08 = 47dfe4bf0eeda88b17136b8005ab08ea
  titlekek_09 = adaa785d90e1a9c182ac07bc276bf600
  titlekek_0a = 42daa957c128f75bb1fda56a8387e17b
  titlekek_0b = d08903363f2c8655d3de3ccf85d79406
  titlekek_0c = be2682599db34caa9bc7ebb2cc7c654c
  titlekek_0d = 41071f95beddc4114a03e0072e6ccab7
  titlekek_0e = e342365a0fa0fa4a28a7bc00e45b3f68
  titlekek_0f = 105999eaf8b71d199bf201f525b2c68d
  titlekek_10 = 3796fcdb27351d58cc3f3379dda04202
  titlekek_11 = b16d793f4be5394e60a6e426e172c16a
  titlekek_12 = 0cd263cbddcbeca9ffa779edbe708664
  titlekek_13 = 8d4d403cd8c5ec76c3d777ac55c7ef35
  titlekek_14 = 2d44b28c78de6ef226d9d70e2f6362a2
  titlekek_source = 1edc7b3b60e6b4d878b81715985e629b
  ```

- install firmware <!-- might be optional -->

  ```
  wget -c -O "firmware.zip" https://github.com/THZoria/NX_Firmware/releases/download/21.2.0/Firmware_21.2.0.zip # seems not needed
  ```

  `tools: install firmware`

- install games

  ```
  # let's try stardew valley
  # download on https://nswpedia.com/download/stardew-valley-18800
  # xci and nsp are the same
  # save to a dedicated folder
  ```

## `sabaki`

- install

  ```sh
  # install sabaki

  # sudo snap install sabaki
  # sudo snap remove sabaki # some font rendering issues exist

  # Set variables
  mkdir -p ~/.local/share/appimages
  mkdir -p ~/.local/share/applications

  URL="https://github.com/SabakiHQ/Sabaki/releases/download/v0.52.2/sabaki-v0.52.2-linux-x64.AppImage"
  # URL="https://master.dl.sourceforge.net/project/sabaki.mirror/v0.52.2/sabaki-v0.52.2-linux-x64.AppImage"
  FILE="sabaki.AppImage"
  APPDIR="$HOME/.local/share/appimages"
  DESKTOPDIR="$HOME/.local/share/applications"

  # Download
  echo "Downloading..."
  wget -c -O "$APPDIR/$FILE" "$URL"
  chmod +x "$APPDIR/$FILE"

  APPIMAGE_PATH="$APPDIR/$FILE"

  # Extract .desktop and icon if possible
  mkdir -p tmp_extract
  cd tmp_extract
  "$APPIMAGE_PATH" --appimage-extract >/dev/null 2>&1

  DESKTOP_FILE=$(find squashfs-root -name '*.desktop' | head -n1)

  NAME=$(grep -m1 '^Name=' "$DESKTOP_FILE" | sed 's/^Name=//')
  ICON=$(grep -m1 '^Icon=' "$DESKTOP_FILE" | sed 's/^Icon=//')

  # Copy icon if exists
  ICON_PATH=""
  if [ -n "$ICON" ]; then
    ICON_SRC=$(find squashfs-root -name "$ICON*" | head -n1)
    if [ -n "$ICON_SRC" ]; then
      cp "$ICON_SRC" "$APPDIR/"
      ICON_PATH="$APPDIR/$(basename $ICON_SRC)"
    fi
  fi

  cd ..
  rm -rf tmp_extract

  # Create desktop entry
  mkdir -p "$DESKTOPDIR"
  DESKTOP_PATH="$DESKTOPDIR/${NAME// /_}.desktop"

  cat > "$DESKTOP_PATH" <<EOF
  [Desktop Entry]
  Type=Application
  Name=$NAME
  Exec=$APPIMAGE_PATH --no-sandbox %U
  Icon=$ICON_PATH
  Terminal=false
  Categories=Game;Utility;
  Comment=Sabaki — SGF editor
  MimeType=application/x-go-sgf;
  EOF

  update-desktop-database ~/.local/share/applications
  xdg-mime default sabaki.desktop application/x-go-sgf
  ```

## apps

```sh
# remove builtin stuff
sudo snap remove firefox
flatpak install -y flathub org.mozilla.firefox # use flatpak one instead

sudo snap remove thunderbird # use web (gmail, outlook, etc.) instead. thunderbird is free and consistent, but slow. And it produces nonsense, thunderbird.tmp on downloads
```

```sh
curl -fsSL https://get.docker.com | sudo sh

flatpak install -y flathub dev.mufeed.Wordbook
flatpak install -y flathub org.goldendict.GoldenDict

flatpak install -y flathub org.gimp.GIMP
flatpak install -y flathub org.kde.kolourpaint
flatpak install -y flathub org.kde.krita
flatpak install -y flathub org.inkscape.Inkscape

flatpak install -y flathub com.obsproject.Studio
flatpak install -y flathub org.kde.kdenlive
flatpak install -y flathub org.shotcut.Shotcut

flatpak install -y flathub org.blender.Blender

flatpak install -y flathub org.gnome.Weather

flatpak install -y flathub com.github.johnfactotum.Foliate

flatpak install -y flathub com.github.finefindus.eyedropper

flatpak install -y flathub io.gitlab.news_flash.NewsFlash
flatpak install -y flathub dev.geopjr.Tuba
flatpak install -y flathub im.fluffychat.Fluffychat

flatpak install -y flathub org.geogebra.GeoGebra

flatpak install -y flathub com.valvesoftware.Steam
flatpak install -y flathub sh.ppy.osu
flatpak install -y flathub org.libretro.RetroArch

flatpak install -y flathub org.torproject.torbrowser-launcher

pipx install yt-dlp
```
