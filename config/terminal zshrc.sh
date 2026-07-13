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

alias apt='sudo apt -y'

alias snap='sudo snap'

alias fd='fdfind'

alias nano='code'

alias docker='sudo docker'

alias claude='claude --dangerously-skip-permissions'

alias npm='pnpm'
# npm(){
#   echo 'use pnpm instead'
# }

alias npx='pnpx'

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
  cd /usr/local/bin || return
  sndcpy
}

phone() {
  adb kill-server
  adb start-server

  sleep 1

  # # mute media
  # adb shell cmd media_session volume --stream 3 --set 0

  # start scrcpy in background
  scrcpy --fullscreen --turn-screen-off --power-off-on-close --screen-off-timeout=600 --window-title "phone" &

  # capture sound
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

riptmux(){
  local reset=$(tput sgr0)
  local bold=$(tput bold)
  local italic=$(tput sitm)
  local underline=$(tput smul)
  # indentation already gives hierarchy, no style/color needed
  local heading=""
  # local heading=$italic
  # local heading=$underline
  local version="tmux 0.2 (2026.07.12)"
  local help=$(cat <<- EOF | sed 's/^  //'
  Run and manage background daemons

  ${bold}${heading}Usage:${reset} 
    ${bold}tmux${reset}                  Start a new terminal
    ${bold}tmux${reset} <name>           Start a new named terminal
    ${bold}tmux${reset} <command>        Perform an action
    ${bold}tmux${reset} [flag]           Check version or help

  ${bold}${heading}Commands:${reset}
    ${bold}ls${reset}                    List all sessions
    ${bold}a${reset}                     Back to the last session
    ${bold}a${reset} <name>              Back to a named session
    ${bold}clear${reset}                 Clear inactive sessions of last command finished
    ${bold}kill${reset} <name>           Kill a session
    ${bold}rename${reset} <old> <new>    Rename a session

  ${bold}${heading}Options:${reset}
    ${bold}-v, --version${reset}         Print version
    ${bold}-h, --help${reset}            Print help

  Use ctrl+b d to detach in a terminal, exit to remove the session
	EOF
	)

  if test $# -eq 0; then
    command tmux
  elif test $# -eq 1; then
    if test $1 = "ls"; then
      command tmux ls
    elif test $1 = "a"; then
      command tmux a
    elif test $1 = "clear"; then
      tmux_clear
    elif test $1 = "--help" -o $1 = "-h"; then
      echo $help
    elif test $1 = "--version" -o $1 = "-v"; then
      echo $version
    else
      # named
      command tmux new -s $1
    fi
  elif test $# -eq 2 -a $1 = "a"; then
    command tmux a -t $2
  elif test $# -eq 2 -a $1 = "kill"; then
    tmux_kill $2
  elif test $# -eq 3 -a $1 = "rename"; then
    tmux_rename $2 $3
  else
    echo $help
    # echo "no arg to tmux, one arg to have a named tmux session"
  fi
}

alias tmux='riptmux'

tmux_ls(){
  command tmux ls
}

tmux_a(){
  command tmux a
}

tmux_rename(){
  if test $# -eq 2; then
    command tmux rename-session -t $1 $2
  else 
    echo "args: old name, new name"
  fi
}

tmux_kill(){
  if test $# -eq 1; then
    command tmux kill-session -t $1
  else 
    echo "arg: session name to be killed"
  fi
}

tmux_clear(){
  # Loop through all active tmux session names
  for s in $(command tmux ls -F '#{session_name}' 2>/dev/null); do
      # Count the number of active child processes running in this session
      child_process_count=$(command tmux list-panes -t "$s" -F '#{pane_pid}' | xargs -I {} pgrep -P {} | wc -l)

      # If the count is 0, nothing is running except the idle shell prompt
      if [ "$child_process_count" -eq 0 ]; then
          # echo "Killing idle session: $s"
          command tmux kill-session -t "$s"
      else
          # echo "Keeping active session: $s"
      fi
  done
}

link(){
  local reset=$(tput sgr0)
  local bold=$(tput bold)
  local italic=$(tput sitm)
  local underline=$(tput smul)
  local heading=""
  # local heading=$italic
  # local heading=$underline

  local version="link 0.0 (2026.07.12)"
  local help=$(cat <<- EOF | sed 's/^  //'
  Create and check symlinks

  ${bold}${heading}Usage:${reset}
    ${bold}link${reset} <source> <target>    Create symlink
    ${bold}link${reset} <target>             Check symlink
    ${bold}link${reset} [flag]               Check version or help

  ${bold}${heading}Options:${reset}
    ${bold}-v, --version${reset}             Print version
    ${bold}-h, --help${reset}                Print help
	EOF
	)

  if test $# -eq 1; then
    if test $1 = "--help" -o $1 = "-h"; then
      echo $help
    elif test $1 = "--version" -o $1 = "-v"; then
      echo $version
    else
      ls -l $1
    fi
  elif test $# -eq 2; then
      ln -snf $1 $2
  else
    echo $help
  fi
}

normalize(){
  local reset=$(tput sgr0)
  local bold=$(tput bold)
  local italic=$(tput sitm)
  local underline=$(tput smul)
  local heading=""
  # local heading=$italic
  # local heading=$underline

  local version="normalize 0.0 (2026.07.13)"
  local help=$(cat <<- EOF | sed 's/^  //'
  Make a shell script executable

  ${bold}${heading}Usage:${reset}
    ${bold}normalize${reset} <script>    Normalize a script
    ${bold}normalize${reset} [flag]      Check version or help

  ${bold}${heading}Options:${reset}
    ${bold}-v, --version${reset}         Print version
    ${bold}-h, --help${reset}            Print help
	EOF
	)

  if test $# -eq 1; then
    if test $1 = "--help" -o $1 = "-h"; then
      echo $help
    elif test $1 = "--version" -o $1 = "-v"; then
      echo $version
    else
      chmod +x $1
    fi
  else
    echo $help
  fi
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
