# Shell Settings

setopt interactive_comments

# set up the prompt
autoload -Uz promptinit
promptinit
prompt adam1

base_prompt='%K{blue}%k '

setopt histignorealldups sharehistory

# use emacs keybindings even if our editor is set to vi
bindkey -e

# keep 10000 lines of history within the shell and save it to ~/.zsh_history:
HISTSIZE=10000
SAVEHIST=10000
HISTFILE=~/.zsh_history

# use modern completion system
autoload -Uz compinit
compinit -C

# disable history expansion (!ls -> the latest ls command)
unsetopt BANG_HIST

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

# Plugins / Completions

# fish-like autosuggestions
source ~/.zsh/zsh-autosuggestions/zsh-autosuggestions.zsh

# syntax highlighting
source ~/.zsh/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh

bindkey '\t' autosuggest-accept

# bun completions
[ -s "/home/fira/.bun/_bun" ] && source "/home/fira/.bun/_bun"

# load r secrets (not in git)
if [ -f "$HOME/.zshrc.private" ]; then
  source "$HOME/.zshrc.private"
fi

# Proxies

export HTTP_PROXY="http://127.0.0.1:7890"
export HTTPS_PROXY="http://127.0.0.1:7890"
export ALL_PROXY="socks5://127.0.0.1:7890"

# Functions & Aliases

# inspired by whoami
whereami() {
  pwd
}

repo_save() {
  cd ~

  cd Documents/f
  git add .
  git commit -m '.' || true
  cd ..

  cd resources
  git add .
  git commit -m '.' || true
  cd ..

  cd blogging
  git add .
  git commit -m '.' || true
  cd ..

  cd memories
  git add .
  git commit -m '.' || true
  cd ..

  cd school
  git add .
  git commit -m '.' || true
  cd ..

  cd university
  git add .
  git commit -m '.' || true
  cd ..

  cd fonts
  git add .
  git commit -m '.' || true
  cd ~
}

repo_sync() {
  # set -e  # no need to stop, rather push more, not less
  echo "Starting push..."

  cd ~

  cd Documents/f
  git push -f g
  git push -f a
  git push -f e
  cd ..

  cd resources
  git push -f g
  git push -f a
  git push -f e
  cd ..

  cd blogging
  git push -f g
  git push -f a
  git push -f e
  cd ..

  cd memories
  git push -f g
  git push -f a
  git push -f e
  cd ..

  cd school
  git push -f g
  git push -f a
  git push -f e
  cd ..

  cd university
  git push -f g
  git push -f a
  git push -f e
  cd ..

  cd fonts
  git push -f g
  git push -f e
  cd ~

  echo "Push completed successfully."
}

sound() {
  echo "Starting sndcpy..."

  cd /usr/local/bin || return
  sndcpy
}

phone() {
  # # Restart ADB server
  # adb kill-server
  # adb start-server

  # # Mute media volume
  # adb shell cmd media_session volume --stream 3 --set 0

  # Start scrcpy in background
  scrcpy --fullscreen --turn-screen-off --power-off-on-close --screen-off-timeout=600 --window-title "phone" &

  # # Retry ONLY the Activity start
  # while true; do
  #   result=$(adb shell am start \
  #     -n com.rom1v.sndcpy/.MainActivity 2>&1)

  #   echo "$result"

  #   if ! echo "$result" | grep -q "Error"; then
  #     break
  #   fi

  #   sleep 1
  # done

  # sleep 5

  # sound
}

# # tsx with env
# tsxe() {
#   local current_dir="$PWD"
#   local env_path=""

#   while [[ "$current_dir" != "/" ]]; do
#     if [[ -f "$current_dir/.env" ]]; then
#       env_path="$current_dir/.env"
#       break
#     fi
#     current_dir=$(dirname "$current_dir")
#   done

#   if [[ -n "$env_path" ]]; then
#     tsx --env-file="$env_path" "$@"
#   else
#     tsx "$@"
#   fi
# }

# # bun with config on parent folders
# bun_root_run() {
#     local dir="$PWD"
#     # Search upwards from current folder until hitting system root
#     while [ "$dir" != "" ] && [ "$dir" != "/" ]; do
#         if [ -f "$dir/bunfig.toml" ]; then
#             # Found it! Execute bun passing the specific configuration path
#             bun --config="$dir/bunfig.toml" "$@"
#             return $?
#         fi
#         dir=$(dirname "$dir")
#     done
#     # Fallback: execute standard bun if no bunfig.toml file exists upstream
#     bun "$@"
# }
# 
# alias br="bun_root_run"

alias apt='sudo apt -y'

alias fd='fdfind'

alias nano='code'

alias docker='sudo docker'

alias claude='claude --dangerously-skip-permissions'

npm(){
  echo 'use pnpm instead'
}

# Environment

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

# nvm (slow, run after the first command to avoid eating input)
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

# android
JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64

# openclaw
source "/home/fira/.openclaw/completions/openclaw.zsh"

# mise
# eval "$(mise activate zsh)" # it sometimes dumps noise even when you cd
export PATH="$HOME/.local/share/mise/shims:$PATH"

# dart
export PATH="$PATH:/usr/lib/dart/bin"
