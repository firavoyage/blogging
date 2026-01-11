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
compinit

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

function push(){

cd Documents
cd f
git add .
git commit -m '.'
git push -f g
git push -f a
git push -f e
cd ..

cd resources
git add .
git commit -m '.'
git push -f g
git push -f a
git push -f e
cd ..

cd blogging
git add .
git commit -m '.'
git push -f g
git push -f a
git push -f e
cd ..

cd memories
git add .
git commit -m '.'
git push -f g
git push -f a
git push -f e
cd ..

cd school
git add .
git commit -m '.'
git push -f g
git push -f a
git push -f e
cd ..

cd fonts
git add .
git commit -m '.'
git push -f g
git push -f e
cd ..

cd ..
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

phone() {
  # Restart ADB server to ensure proper connection
  adb kill-server
  adb start-server

  # Mute the phone's media volume
  adb shell cmd media_session volume --stream 3 --set 0

  # Start scrcpy and wait until it's ready
  scrcpy --fullscreen

  # Give scrcpy some time to fully start
  sleep 3

  # Now start sndcpy
  cd /usr/local/bin
  sndcpy
}

export PATH="$HOME/.local/bin:$PATH"

alias npm='sudo npm'

export http_proxy="http://127.0.0.1:7890"
export https_proxy="http://127.0.0.1:7890"
export NODE_TLS_REJECT_UNAUTHORIZED=0

# Fish-like autosuggestions
source ~/.zsh/zsh-autosuggestions/zsh-autosuggestions.zsh

# Syntax highlighting
source ~/.zsh/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh

bindkey '\t' autosuggest-accept

# opencode
export PATH=/home/fira/.opencode/bin:$PATH
