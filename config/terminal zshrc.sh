# ================================
# Shell Settings
# ================================

setopt interactive_comments

# Set up the prompt
autoload -Uz promptinit
promptinit
prompt adam1

setopt histignorealldups sharehistory

# Use emacs keybindings even if our EDITOR is set to vi
bindkey -e

# Keep 1000 lines of history within the shell and save it to ~/.zsh_history:
HISTSIZE=1000
SAVEHIST=1000
HISTFILE=~/.zsh_history

# Use modern completion system
autoload -Uz compinit
compinit -C

zstyle ':completion:*' auto-description 'specify: %d'
zstyle ':completion:*' completer _expand _complete _correct _approximate
zstyle ':completion:*' format 'Completing %d'
zstyle ':completion:*' group-name ''
zstyle ':completion:*' menu select=2
eval "$(dircolors -b)"
zstyle ':completion:*:default' list-colors ${(s.:.)LS_COLORS}
zstyle ':completion:*' list-colors ''
zstyle ':completion:*' list-prompt %SAt %p: Hit TAB for more, or the character to insert%s
zstyle ':completion:*' matcher-list '' 'm:{a-z}={A-Z}' 'm:{a-zA-Z}={A-Za-z}' 'r:|[._-]=* r:|=* l:|=*'
zstyle ':completion:*' menu select=long
zstyle ':completion:*' select-prompt %SScrolling active: current selection at %p%s
zstyle ':completion:*' use-compctl false
zstyle ':completion:*' verbose true

zstyle ':completion:*:*:kill:*:processes' list-colors '=(#b) #([0-9]#)*=0=01;31'
zstyle ':completion:*:kill:*' command 'ps -u $USER -o pid,%cpu,tty,cputime,cmd'

# ================================
# Functions
# ================================

function push() {
    local tries=0
    local max_tries=3

    while (( tries < max_tries )); do
        ((tries++))
        echo "Push attempt $tries of $max_tries"

        set -e  # stop on any error
        cd ~

        cd Documents/f
        git add .
        git commit -m '.' || true
        git push -f g
        git push -f a
        git push -f e
        cd ..

        cd resources
        git add .
        git commit -m '.' || true
        git push -f g
        git push -f a
        git push -f e
        cd ..

        cd blogging
        git add .
        git commit -m '.' || true
        git push -f g
        git push -f a
        git push -f e
        cd ..

        cd memories
        git add .
        git commit -m '.' || true
        git push -f g
        git push -f a
        git push -f e
        cd ..

        cd school
        git add .
        git commit -m '.' || true
        git push -f g
        git push -f a
        git push -f e
        cd ..

        cd university
        git add .
        git commit -m '.' || true
        git push -f g
        git push -f a
        git push -f e
        cd ..

        cd fonts
        git add .
        git commit -m '.' || true
        git push -f g
        git push -f e
        cd ..

        cd ~
        echo "Push completed successfully."
        return 0  # exit loop on success

    # If we reach here, a command failed
    echo "Push failed on attempt $tries"
    sleep 10  # wait a bit before retrying
    done

    echo "Push failed after $max_tries attempts."
    return 1  # signal failure to systemd
}


release() {
    file="$1"
    case "$file" in
        *.js)
            terser "$file" -o "${file%.js}.min.js" -c -m
            ;;
        *.html)
            bundled_file="${file%.html}.bundled.html"
            minified_file="${file%.html}.bundled.min.html"

# Create bundled HTML
            node "$HOME/Documents/f/libraries/bundler.js" "$file" "$bundled_file"

# Create minified version from the bundled HTML
            html-minifier --remove-comments --minify-css --minify-js \
                --collapse-whitespace --conservative-collapse \
                "$bundled_file" -o "$minified_file"
            ;;
        *)
            echo "Unsupported file type: $file" >&2
            return 1
            ;;
    esac
}

sound() {
  echo "Starting sndcpy..."

  cd /usr/local/bin || return
  sndcpy
}

phone() {
# Restart ADB server
  adb kill-server
  adb start-server

# Mute media volume
  adb shell cmd media_session volume --stream 3 --set 0

# Start scrcpy in background
  scrcpy --fullscreen --turn-screen-off --power-off-on-close --screen-off-timeout=600 --window-title "phone" &

# Let scrcpy connect
  sleep 3

  echo "Waiting until Android allows sndcpy foreground..."

# Retry ONLY the Activity start
  while true; do
    result=$(adb shell am start \
      -n com.rom1v.sndcpy/.MainActivity 2>&1)

    echo "$result"

    if ! echo "$result" | grep -q "Error"; then
      break
    fi

    sleep 1
  done

  # sound
}

# ================================
# Aliases
# ================================

# alias pnpm='sudo pnpm'
alias apt='sudo apt -y'

# ================================
# Plugins / Completions
# ================================

# Fish-like autosuggestions
source ~/.zsh/zsh-autosuggestions/zsh-autosuggestions.zsh

# Syntax highlighting
source ~/.zsh/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh

bindkey '\t' autosuggest-accept

# bun completions
[ -s "/home/fira/.bun/_bun" ] && source "/home/fira/.bun/_bun"

# Load private secrets (not in git)
if [ -f "$HOME/.zshrc.private" ]; then
  source "$HOME/.zshrc.private"
fi

# ================================
# Proxy
# ================================

export HTTP_PROXY="http://127.0.0.1:7890"
export HTTPS_PROXY="http://127.0.0.1:7890"
export ALL_PROXY="socks5://127.0.0.1:7890"

# ================================
# Environment
# ================================

export PATH="$HOME/.local/bin:$PATH"

# ollama

export OLLAMA_HOST=127.0.0.1:11434

# opencode
export PATH=/home/fira/.opencode/bin:$PATH

# bun
export BUN_INSTALL="$HOME/.bun"
export PATH="$BUN_INSTALL/bin:$PATH"

# pnpm
export PNPM_HOME="$HOME/.local/bin"
export PATH="$PNPM_HOME:$PATH"

# nvm
export NVM_DIR="$HOME/.nvm"

_nvm_loaded=0

_preload_nvm() {
  (( _nvm_loaded )) && return
  _nvm_loaded=1
  [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
}

autoload -Uz add-zsh-hook
add-zsh-hook preexec _preload_nvm

# pg

export PATH=/usr/lib/postgresql/16/bin:$PATH

