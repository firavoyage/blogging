ubuntu

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

- disable auto update
  - software: preferences: software updates `manual`
  - software: preferences: automatic update notifications `off`

## utilities

install

```sh
# tools
sudo apt install -y curl wget ca-certificates gnupg lsb-release p7zip-full unzip unrar build-essential

# toys
sudo apt install -y neofetch fortune-mod cowsay cbonsai figlet lolcat toilet sl

# snap
sudo apt install -y snapd # maybe not needed

# flatpak (log out to apply)
sudo apt install flatpak
sudo flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo
sudo apt install gnome-software-plugin-flatpak

# automate mouse, keyboard, and screenshot: xdotool, xte, scrot
sudo apt install -y xdotool xautomation scrot accerciser 

# normalize desktop
sudo apt install -y gnome-tweaks
flatpak install -y flathub org.gnome.Extensions # seems not needed
flatpak install -y flathub com.mattjakeman.ExtensionManager

# find: rg, grep, tree, find, fdfind, ack
sudo apt install -y ripgrep grep tree findutils fd-find ack
# example: find . -maxdepth 2 -not -path '*/.*'

# process images, docs, fonts
sudo apt install -y imagemagick ghostscript ffmpeg fontforge fonttools

# support audio formats
sudo apt install -y gstreamer1.0-plugins-good gstreamer1.0-plugins-bad gstreamer1.0-plugins-ugly gstreamer1.0-libav

# convert docs
sudo apt install -y pandoc
sudo apt install -y texlive-latex-base texlive-latex-recommended texlive-fonts-recommended texlive-latex-extra
sudo apt install -y texlive-xetex texlive-lang-chinese
# example: pandoc '~.md' -o o.pdf --pdf-engine=xelatex -V CJKmainfont="Noto Sans CJK SC" -V geometry:"top=2cm, bottom=1.5cm, left=2cm, right=2cm"

# terminal: set zsh default
sudo apt install -y zsh fonts-powerline
chsh -s "$(which zsh)"

# terminal: oh my zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" "" --unattended

# terminal: zsh plugins
mkdir -p ~/.zsh
git clone https://github.com/zsh-users/zsh-autosuggestions ~/.zsh/zsh-autosuggestions
git clone https://github.com/zsh-users/zsh-syntax-highlighting ~/.zsh/zsh-syntax-highlighting

# terminal: ghostty
curl -fsSL https://raw.githubusercontent.com/mkasberg/ghostty-ubuntu/HEAD/install.sh | zsh

# terminal: tmux (keep things running in background)
sudo apt -y install tmux

# proxy: rev proxy for like foo.localhost and bar.localhost
sudo apt install -y caddy jq yq
sudo caddy trust # normalize https

# docker
curl -fsSL https://get.docker.com | sudo sh

# mise
sudo install -dm 755 /etc/apt/keyrings
curl -fSs https://mise.jdx.dev/gpg-key.pub | sudo tee /etc/apt/keyrings/mise-archive-keyring.asc 1> /dev/null
echo "deb [signed-by=/etc/apt/keyrings/mise-archive-keyring.asc] https://mise.jdx.dev/deb stable main" | sudo tee /etc/apt/sources.list.d/mise.list
sudo apt update
sudo apt install -y mise
# add `export PATH="$HOME/.local/share/mise/shims:$PATH"` to zshrc, dont `eval "$(mise activate zsh)"` (noisy, unpredictable)

# count lines of code: ocloc, tokei, scc
mise use -g github:adhishthite/ocloc tokei@latest aqua:boyter/scc # might be rate limited by github apis (since it complies)
# example: ocloc .

# rust: rustup, rustc, cargo
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
# mkdir -p ~/.cargo
# cat <<EOF >> ~/.cargo/config.toml
#
# [source.crates-io]
# replace-with = 'ustc'
#
# [source.ustc]
# registry = "sparse+https://mirrors.ustc.edu.cn/crates.io-index/"
# EOF
# # use a mirror if needed
# true > ~/.cargo/config.toml # revert mirror

# git
sudo apt install -y git

# js/ts: node, deno, pnpm, tsx, cloc, ...
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash - # use the latest version
sudo apt install -y nodejs
# npm config set registry https://registry.npmmirror.com # use a mirror if needed
# npm config set registry https://tsinghua.edu.cn # other mirrors
# npm config set registry https://registry.npmjs.org/ # use the official site for publishing
# npm config set //registry.npmjs.org/:_authToken {auth_token}
sudo npm install -g pnpm
# warning: pnpm opens as much concurrent connections as possible for speed. it might not work with mobile hotspots. use `--network-concurrency 1` or `pnpm config set fetch-retries 5` to fix.
pnpm config set update-notifier false --global # remove the noisy update notification, which is often not needed
# pnpm config set loglevel error --global # remove noisy deprecated warnings. it's overkill, hiding essential feedback, though.
# reset: pnpm config delete loglevel --global
# pnpm config set registry https://registry.npmmirror.com # use a mirror if needed
pnpm add -g cloc
# example: cloc . --vcs=git --exclude-lang=YAML,JSON,Markdown --exclude-ext=yaml,yml --exclude-dir=node_modules,.build --not-match-f=my_filename_regex --not-match-d=my_dir_regex
pnpm add -g tsx
pnpm add -g parcel # simple, fast (esp with cache), less reliable
# pnpm add -g parcel-reporter-static-files-copy
# example: cd $dir && parcel serve '$fileName' --open --dist-dir .build --cache-dir .build/.parcel-cache
pnpm add -g vite # more reliable, fast enough, showy, clever
# example: cd $dir && vite --open '$fileName'
pnpm add -g webpack webpack-cli webpack-dev-server # legacy, complex
# pnpm add -g webpack webpack-cli webpack-dev-server css-loader style-loader babel-loader file-loader url-loader ts-loader
pnpm add -g eslint
pnpm add -g dotenv-cli
sudo apt install -y direnv

pnpm add -g --allow-build=deno deno
pnpm add -g --allow-build=yarn yarn
pnpm add -g --allow-build=bun bun

# python
sudo apt install -y python3 pip pipx
python3 -m pip config set global.break-system-packages true # simplify: remove meaningless warning for current user.

# sudo mkdir -p /etc;
# sudo tee /etc/pip.conf > /dev/null << EOF
# [global]
# break-system-packages = true
# EOF
# # simplify: remove meaningless warning system wide

cargo install --locked uv # locked makes it predictable by using the specifc version needed instead of the latest one
uv tool install ruff

# c/cpp
sudo apt install -y gcc g++ clang
sudo snap install cling # interactive cpp from cern
sudo docker pull emscripten/emsdk:latest # emscripten
# example: docker run --rm -v $(pwd):/src emscripten/emsdk emcc main.cpp -o main.js

# android: android studio, gradle, java
flatpak install -y flathub com.google.AndroidStudio
sudo snap install gradle --classic
sudo apt install -y openjdk-17-jdk
sudo apt install -y openjdk-21-jdk

# haskell: ghci
sudo apt install -y ghc cabal-install

# ruby: ruby, irb, ri, gem
sudo apt install -y ruby-full
sudo gem install amazing_print

# brainfuck: beef
sudo apt install -y beef
# example: beef -p "++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>."

# perl (it might be preinstalled, though)
sudo apt install -y perl perl-doc

# wine
sudo dpkg --add-architecture i386
sudo apt install -y libasound2-plugins:i386 libsdl2-2.0-0:i386 libdbus-1-3:i386 libsqlite3-0:i386
sudo apt install -y libvulkan1 libvulkan1:i386 mesa-vulkan-drivers mesa-vulkan-drivers:i386
sudo apt install -y wine64 wine32 # seems apt version is more reliable. sabbat of witch and senrenbanka would err on wine-stable (read/write without access). yosuga no sora also works after installing 32 bit packages (instead of showing a transparent window), idk.
sudo apt install -y libasound2-dev
sudo apt install -y libfontconfig-dev
sudo apt install -y winetricks
winetricks sound=pulse # fix silence

# memory: earlyoom, enlarge swap
sudo apt install -y earlyoom zram-tools
sudo systemctl enable --now earlyoom
sudo swapoff /swap.img # disable current swap
sudo rm -f /swap.img # remove old swap image
sudo fallocate -l 8G /swap.img # create new 8GB swap image
sudo chmod 600 /swap.img
sudo mkswap /swap.img
sudo swapon /swap.img
grep -q '/swap.img' /etc/fstab || echo '/swap.img none swap sw 0 0' | sudo tee -a /etc/fstab # make swap permanent in fstab
sudo sed -i 's/^#ALLOCATION=.*/ALLOCATION=8192/' /etc/default/zramswap # config zRAM for 8GB compressed memory
sudo systemctl enable --now zramswap.service
sudo sed -i 's/^#EARLYOOM_ARGS=.*/EARLYOOM_ARGS="-m 2 -s 2"/' /etc/default/earlyoom
# sudo sed -i 's/^#EARLYOOM_ARGS=.*/EARLYOOM_ARGS="-m 10 -s 10"/' /etc/default/earlyoom
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
- power saving
  - automatic screen brightness `off`
  - screen blank `10 min`
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
  sudo apt remove -y update-notifier
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

- sync settings <!-- login -->

  - settings

    ```json
    {
      "workbench.startupEditor": "none",
      "workbench.editor.empty.hint": "hidden",
      "workbench.colorTheme": "Dracula Theme",
      "files.autoSave": "afterDelay",
      "files.autoSaveDelay": 100,
      "code-runner.preserveFocus": false,
      "code-runner.runInTerminal": true,
      "editor.fontFamily": "\"Fira Code\", \"Noto Sans CJK SC\", \"Adobe Kaiti Std\", monospace",
      "workbench.activityBar.location": "hidden",
      "code-runner.executorMap": {
        "html": "cd $dir && parcel serve '$fileName' --open --dist-dir .build --cache-dir .build/.parcel-cache",
        // "html": "cd $dir && vite --open '$fileName'",

        "pdf": "cd $dir && xdg-open '$fileName'",
        "md": "cd $dir && xdg-open '$fileName'",
        "javascript": "cd $dir && tsx '$fileName'",
        "java": "cd $dir && javac '$fileName' && java '$fileNameWithoutExt'",
        "c": "cd $dir && gcc '$fileName' -o '$fileNameWithoutExt' && $dir'$fileNameWithoutExt'",
        "zig": "cd $dir && zig run '$fileName'",
        "cpp": "cd $dir && g++ '$fileName' -o '$fileNameWithoutExt' && $dir'$fileNameWithoutExt'",
        "objective-c": "cd $dir && gcc -framework Cocoa '$fileName' -o '$fileNameWithoutExt' && $dir'$fileNameWithoutExt'",
        "php": "cd $dir && php '$fileName'",
        "python": "cd $dir && python3 -u '$fileName'",
        "perl": "cd $dir && perl '$fileName'",
        "perl6": "cd $dir && perl6 '$fileName'",
        "ruby": "cd $dir && ruby '$fileName'",
        "go": "cd $dir && go run '$fileName'",
        "lua": "cd $dir && lua '$fileName'",
        "groovy": "cd $dir && groovy '$fileName'",
        "powershell": "cd $dir && powershell -ExecutionPolicy ByPass -File '$fileName'",
        "bat": "cd $dir && cmd /c '$fileName'",
        "shellscript": "cd $dir && bash '$fileName'",
        "fsharp": "cd $dir && fsi '$fileName'",
        "csharp": "cd $dir && scriptcs '$fileName'",
        "vbscript": "cd $dir && cscript //Nologo '$fileName'",
        "typescript": "cd $dir && tsx '$fileName'",
        "coffeescript": "cd $dir && coffee '$fileName'",
        "scala": "cd $dir && scala '$fileName'",
        "swift": "cd $dir && swift '$fileName'",
        "julia": "cd $dir && julia '$fileName'",
        "crystal": "cd $dir && crystal '$fileName'",
        "ocaml": "cd $dir && ocaml '$fileName'",
        "r": "cd $dir && Rscript '$fileName'",
        "applescript": "cd $dir && osascript '$fileName'",
        "clojure": "cd $dir && lein exec '$fileName'",
        "haxe": "cd $dir && haxe --cwd $dirWithoutTrailingSlash --run '$fileNameWithoutExt'",
        "rust": "cd $dir && rustc '$fileName' && $dir'$fileNameWithoutExt'",
        "racket": "cd $dir && racket '$fileName'",
        "scheme": "cd $dir && csi -script '$fileName'",
        "ahk": "cd $dir && autohotkey '$fileName'",
        "autoit": "cd $dir && autoit3 '$fileName'",
        "dart": "cd $dir && dart '$fileName'",
        "pascal": "cd $dir && fpc '$fileName' && $dir'$fileNameWithoutExt'",
        "d": "cd $dir && dmd '$fileName' && $dir'$fileNameWithoutExt'",
        "haskell": "cd $dir && runghc '$fileName'",
        "nim": "cd $dir && nim compile --verbosity:0 --hints:off --run '$fileName'",
        "lisp": "cd $dir && sbcl --script '$fileName'",
        "kit": "cd $dir && kitc --run '$fileName'",
        "v": "cd $dir && v run '$fileName'",
        "sass": "cd $dir && sass --style expanded '$fileName'",
        "scss": "cd $dir && scss --style expanded '$fileName'",
        "less": "cd $dir && lessc '$fileName' '$fileNameWithoutExt.css'",
        "FortranFreeForm": "cd $dir && gfortran '$fileName' -o '$fileNameWithoutExt' && $dir'$fileNameWithoutExt'",
        "fortran-modern": "cd $dir && gfortran '$fileName' -o '$fileNameWithoutExt' && $dir'$fileNameWithoutExt'",
        "fortran_fixed-form": "cd $dir && gfortran '$fileName' -o '$fileNameWithoutExt' && $dir'$fileNameWithoutExt'",
        "fortran": "cd $dir && gfortran '$fileName' -o '$fileNameWithoutExt' && $dir'$fileNameWithoutExt'",
        "sml": "cd $dir && sml '$fileName'",
        "mojo": "cd $dir && mojo run '$fileName'"
      },
      "workbench.editor.showTabs": "none",
      "window.menuBarVisibility": "toggle",
      "git.openRepositoryInParentFolders": "never",
      "terminal.integrated.enableMultiLinePasteWarning": "never",
      "editor.minimap.enabled": false,
      "workbench.statusBar.visible": false,
      "update.showReleaseNotes": false,
      "explorer.confirmDelete": false,
      "editor.fontLigatures": true,
      "window.confirmSaveUntitledWorkspace": false,
      "editor.tabSize": 2,
      "editor.lightbulb.enabled": "off",
      "editor.renderWhitespace": "none",
      "editor.renderControlCharacters": false,
      "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
      },
      "git.enabled": false,
      "[json]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
      },
      "editor.unicodeHighlight.invisibleCharacters": false,
      "[html]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
      },
      "[markdown]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
      },
      "markdown.extension.katex.macros": {},
      "markdown.extension.theming.decoration.renderCodeSpan": false,
      "extensions.autoUpdate": false,
      "markdown.extension.list.toggle.candidate-markers": [
        "-",
        "*",
        "+",
        "1.",
        "1)"
      ],
      "breadcrumbs.enabled": false,
      "editor.stickyScroll.enabled": false,
      "[css]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
      },
      "editor.defaultFormatter": "vscode.typescript-language-features",
      "editor.cursorBlinking": "solid",
      "editor.occurrencesHighlight": "off",
      "workbench.editor.editorActionsLocation": "hidden",
      "workbench.navigationControl.enabled": false,
      "window.commandCenter": false,
      "window.titleBarStyle": "native",
      "editor.codeActionsOnSave": {},
      "[snippets]": {
        "editor.defaultFormatter": "vscode.json-language-features"
      },
      "editor.maxTokenizationLineLength": 999999999,
      "markdown.extension.syntax.decorationFileSizeLimit": 50000000,
      "workbench.colorCustomizations": {},
      "[python]": {
        "editor.defaultFormatter": "ms-python.black-formatter"
      },
      "explorer.confirmDragAndDrop": false,
      "code-runner.ignoreSelection": true,
      "markdown.preview.breaks": true,
      "[rust]": {
        "editor.defaultFormatter": "rust-lang.rust-analyzer"
      },
      "[jsonc]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
      },
      "window.customTitleBarVisibility": "never",
      "editor.fontSize": 12,
      "security.workspace.trust.untrustedFiles": "open",
      "editor.unicodeHighlight.ambiguousCharacters": false,
      "workbench.secondarySideBar.defaultVisibility": "hidden",
      "chat.disableAIFeatures": true,
      "extensions.ignoreRecommendations": true,
      "security.workspace.trust.enabled": false,
      "update.mode": "none",
      "security.workspace.trust.banner": "never",
      "security.workspace.trust.startupPrompt": "never",
      "json.schemaDownload.trustedDomains": {
        "*": true
      },
      "typescript.updateImportsOnFileMove.enabled": "always",
    }
    ```

  - shortcuts

    ```json
    // Place your key bindings in this file to override the defaultsauto[]
    [
      {
        "key": "ctrl+r",
        "command": "code-runner.run"
      },
      {
        "key": "ctrl+alt+n",
        "command": "-code-runner.run"
      },
      {
        "key": "ctrl+alt+m",
        "command": "-code-runner.stop"
      },
      {
        "key": "ctrl+alt+j",
        "command": "-code-runner.runByLanguage"
      },
      {
        "key": "ctrl+w",
        "command": "-editor.action.smartSelect.grow",
        "when": "editorTextFocus"
      },
      {
        "key": "ctrl+alt+r",
        "command": "-revealFileInOS",
        "when": "!editorFocus"
      },
      {
        "key": "ctrl+n",
        "command": "-workbench.action.showAllSymbols"
      },
      {
        "key": "ctrl+shift+n",
        "command": "-workbench.action.quickOpen"
      },
      {
        "key": "ctrl+shift+alt+n",
        "command": "-workbench.action.gotoSymbol",
        "when": "editorTextFocus"
      },
      {
        "key": "shift+f6",
        "command": "-editor.action.rename",
        "when": "editorHasRenameProvider && editorTextFocus && !editorReadonly"
      },
      {
        "key": "ctrl+alt+b",
        "command": "-editor.action.goToImplementation",
        "when": "editorHasImplementationProvider && editorTextFocus && !isInEmbeddedEditor"
      },
      {
        "key": "ctrl+shift+b",
        "command": "-editor.action.goToTypeDefinition",
        "when": "editorHasTypeDefinitionProvider && editorTextFocus && !isInEmbeddedEditor"
      },
      {
        "key": "ctrl+b",
        "command": "-editor.action.goToDeclaration",
        "when": "editorTextFocus"
      },
      {
        "key": "ctrl+d",
        "command": "-editor.action.addSelectionToNextFindMatch",
        "when": "editorFocus"
      },
      {
        "key": "ctrl+k e",
        "command": "-workbench.files.action.focusOpenEditorsView",
        "when": "workbench.explorer.openEditorsView.active"
      },
      {
        "key": "ctrl+e",
        "command": "-workbench.action.quickOpen"
      },
      {
        "key": "ctrl+e",
        "command": "-workbench.action.openPreviousEditorFromHistory",
        "when": "inQuickOpen"
      },
      {
        "key": "ctrl+shift+e",
        "command": "-workbench.action.quickOpenNavigatePreviousInFilePicker",
        "when": "inFilesPicker && inQuickOpen"
      },
      {
        "key": "ctrl+e",
        "command": "-workbench.action.quickOpenNavigateNextInFilePicker",
        "when": "inFilesPicker && inQuickOpen"
      },
      {
        "key": "ctrl+k ctrl+e",
        "command": "-keybindings.editor.defineWhenExpression",
        "when": "inKeybindings && keybindingFocus"
      },
      {
        "key": "ctrl+shift+r ctrl+e",
        "command": "-editor.action.codeAction",
        "when": "editorTextFocus && editorLangId =~ /^(c|(cuda-)?cpp)$/ && !(config.C_Cpp.intelliSenseEngine =~ /^[dD]isabled$/)"
      },
      {
        "key": "ctrl+shift+e",
        "command": "-workbench.view.explorer",
        "when": "viewContainer.workbench.view.explorer.enabled"
      },
      {
        "key": "ctrl+e",
        "command": "-editor.action.toggleScreenReaderAccessibilityMode",
        "when": "accessibilityHelpIsShown"
      },
      {
        "key": "ctrl+; e",
        "command": "-testing.reRunFailTests"
      },
      {
        "key": "ctrl+; ctrl+e",
        "command": "-testing.debugFailTests"
      },
      {
        "key": "ctrl+shift+e",
        "command": "workbench.view.explorer"
      },
      {
        "key": "alt+numpad1",
        "command": "-workbench.view.explorer",
        "when": "editorFocus && viewContainer.workbench.view.explorer.enabled"
      },
      {
        "key": "ctrl+shift+space",
        "command": "-issue.suggestRefresh",
        "when": "suggestWidgetVisible"
      },
      {
        "key": "ctrl+shift+backspace",
        "command": "-workbench.action.navigateToLastEditLocation"
      },
      {
        "key": "ctrl+alt+backspace",
        "command": "-editor.action.removeBrackets",
        "when": "editorTextFocus"
      },
      {
        "key": "ctrl+shift+backspace",
        "command": "-search.searchEditor.action.deleteFileResults",
        "when": "inSearchEditor"
      },
      {
        "key": "ctrl+shift+space",
        "command": "-editor.action.triggerParameterHints",
        "when": "editorHasSignatureHelpProvider && editorTextFocus"
      },
      {
        "key": "ctrl+space",
        "command": "-editor.action.triggerSuggest",
        "when": "editorHasCompletionItemProvider && textInputFocus && !editorReadonly && !suggestWidgetVisible"
      },
      {
        "key": "ctrl+backspace",
        "command": "-deleteWordLeft",
        "when": "textInputFocus && !editorReadonly"
      },
      {
        "key": "ctrl+backspace",
        "command": "-deleteWordLeft",
        "when": "editorTextFocus && !config.intellij-idea-keybindings.useCamelHumpsWords && !editorReadonly"
      },
      {
        "key": "ctrl+backspace",
        "command": "-deleteWordPartLeft",
        "when": "config.intellij-idea-keybindings.useCamelHumpsWords && editorTextFocus && !editorReadonly"
      },
      {
        "key": "ctrl+space",
        "command": "-focusSuggestion",
        "when": "suggestWidgetVisible && textInputFocus && !suggestWidgetHasFocusedSuggestion"
      },
      {
        "key": "ctrl+space",
        "command": "-toggleSuggestionDetails",
        "when": "suggestWidgetHasFocusedSuggestion && suggestWidgetVisible && textInputFocus"
      },
      {
        "key": "ctrl+alt+space",
        "command": "-toggleSuggestionFocus",
        "when": "suggestWidgetVisible && textInputFocus"
      },
      {
        "key": "ctrl+space",
        "command": "-workbench.action.terminal.sendSequence",
        "when": "terminalFocus && terminalShellIntegrationEnabled && !accessibilityModeEnabled && terminalShellType == 'pwsh'"
      },
      {
        "key": "ctrl+space",
        "command": "-workbench.action.terminal.sendSequence",
        "when": "config.terminal.integrated.shellIntegration.suggestEnabled && terminalFocus && terminalShellIntegrationEnabled && !accessibilityModeEnabled && terminalShellType == 'pwsh'"
      },
      {
        "key": "ctrl+backspace",
        "command": "-workbench.action.terminal.sendSequence",
        "when": "terminalFocus"
      },
      {
        "key": "ctrl+d",
        "command": "editor.action.duplicateSelection"
      },
      {
        "key": "shift+enter",
        "command": "editor.action.insertLineAfter",
        "when": "editorTextFocus && !editorReadonly"
      },
      {
        "key": "ctrl+enter",
        "command": "-editor.action.insertLineAfter",
        "when": "editorTextFocus && !editorReadonly"
      },
      {
        "key": "ctrl+alt+k",
        "command": "-code-runner.runCustomCommand"
      },
      {
        "key": "ctrl+shift+alt+s",
        "command": "-workbench.action.tasks.configureTaskRunner"
      },
      {
        "key": "ctrl+shift+t",
        "command": "-java.test.goToTest",
        "when": "editorTextFocus && java:testRunnerActivated"
      },
      {
        "key": "f7",
        "command": "-editor.action.accessibleDiffViewer.next",
        "when": "isInDiffEditor"
      },
      {
        "key": "shift+f7",
        "command": "-editor.action.accessibleDiffViewer.prev",
        "when": "isInDiffEditor"
      },
      {
        "key": "ctrl+shift+up",
        "command": "-editor.action.insertCursorAbove",
        "when": "editorTextFocus"
      },
      {
        "key": "shift+alt+up",
        "command": "-editor.action.insertCursorAbove",
        "when": "editorTextFocus"
      },
      {
        "key": "ctrl+shift+down",
        "command": "-editor.action.insertCursorBelow",
        "when": "editorTextFocus"
      },
      {
        "key": "shift+alt+down",
        "command": "-editor.action.insertCursorBelow",
        "when": "editorTextFocus"
      },
      {
        "key": "shift+alt+i",
        "command": "-editor.action.insertCursorAtEndOfEachLineSelected",
        "when": "editorTextFocus"
      },
      {
        "key": "ctrl+k ctrl+c",
        "command": "-editor.action.addCommentLine",
        "when": "editorTextFocus && !editorReadonly"
      },
      {
        "key": "shift+alt+[IntlBackslash]",
        "command": "-editor.action.autoFix",
        "when": "textInputFocus && !editorReadonly && supportedCodeAction =~ /(\\s|^)quickfix\\b/"
      },
      {
        "key": "shift+alt+.",
        "command": "-editor.action.autoFix",
        "when": "textInputFocus && !editorReadonly && supportedCodeAction =~ /(\\s|^)quickfix\\b/"
      },
      {
        "key": "alt+o",
        "command": "-C_Cpp.SwitchHeaderSource",
        "when": "editorTextFocus && editorLangId =~ /^(c|(cuda-)?cpp)$/ && !(config.C_Cpp.intelliSenseEngine =~ /^[dD]isabled$/)"
      },
      {
        "key": "alt+f4",
        "command": "-workbench.action.closeWindow"
      },
      {
        "key": "ctrl+shift+w",
        "command": "-workbench.action.closeWindow"
      },
      {
        "key": "ctrl+k ctrl+shift+w",
        "command": "-workbench.action.closeAllGroups"
      },
      {
        "key": "ctrl+k ctrl+w",
        "command": "-workbench.action.closeAllEditors"
      },
      {
        "key": "ctrl+k w",
        "command": "-workbench.action.closeEditorsInGroup"
      },
      {
        "key": "ctrl+shift+w",
        "command": "-editor.action.smartSelect.shrink",
        "when": "editorTextFocus"
      },
      {
        "key": "ctrl+shift+i",
        "command": "-workbench.action.toggleDevTools",
        "when": "isDevelopment"
      },
      {
        "key": "ctrl+; ctrl+shift+i",
        "command": "-testing.toggleInlineCoverage"
      },
      {
        "key": "ctrl+shift+r ctrl+i",
        "command": "-editor.action.codeAction",
        "when": "editorTextFocus && editorLangId =~ /^(c|(cuda-)?cpp)$/ && !(config.C_Cpp.intelliSenseEngine =~ /^[dD]isabled$/)"
      },
      {
        "key": "ctrl+shift+i",
        "command": "-editor.action.previewDeclaration"
      },
      {
        "key": "ctrl+shift+alt+i",
        "command": "-workbench.action.quickchat.toggle",
        "when": "chatIsEnabled"
      },
      {
        "key": "ctrl+t",
        "command": "-git.sync",
        "when": "!operationInProgress"
      },
      {
        "key": "ctrl+k t",
        "command": "-notebook.cell.collapseCellOutput",
        "when": "notebookCellHasOutputs && notebookCellListFocused && !inputFocus && !notebookCellOutputIsCollapsed"
      },
      {
        "key": "ctrl+k t",
        "command": "-notebook.cell.expandCellOutput",
        "when": "notebookCellListFocused && notebookCellOutputIsCollapsed"
      },
      {
        "key": "ctrl+shift+alt+down",
        "command": "-workbench.action.editor.nextChange",
        "when": "editorTextFocus && !textCompareEditorActive"
      },
      {
        "key": "shift+alt+down",
        "command": "-editor.action.moveLinesDownAction",
        "when": "editorTextFocus && !editorReadonly"
      },
      {
        "key": "shift+alt+down",
        "command": "-notebook.cell.copyDown",
        "when": "notebookEditorFocused && !inputFocus"
      },
      {
        "key": "alt+down",
        "command": "-notebook.cell.moveDown",
        "when": "notebookEditorFocused && !inputFocus"
      },
      {
        "key": "ctrl+shift+down",
        "command": "-editor.action.moveLinesDownAction",
        "when": "editorTextFocus && !editorReadonly"
      },
      {
        "key": "ctrl+shift+r",
        "command": "references-view.findReferences",
        "when": "editorHasReferenceProvider"
      },
      {
        "key": "shift+alt+f12",
        "command": "-references-view.findReferences",
        "when": "editorHasReferenceProvider"
      },
      {
        "key": "ctrl+shift+r",
        "command": "-editor.action.refactor",
        "when": "editorHasCodeActionsProvider && textInputFocus && !editorReadonly"
      },
      {
        "key": "ctrl+shift+r",
        "command": "-rerunSearchEditorSearch",
        "when": "inSearchEditor"
      },
      {
        "key": "tab",
        "command": "-tab",
        "when": "editorTextFocus && !editorReadonly && !editorTabMovesFocus"
      },
      {
        "key": "tab",
        "command": "editor.action.indentLines",
        "when": "!hasNextTabstop && !suggestWidgetVisible"
      },
      {
        "key": "shift+tab",
        "command": "outdent",
        "when": "editorTextFocus && !editorReadonly && !editorTabMovesFocus"
      },
      {
        "key": "shift+tab",
        "command": "-outdent",
        "when": "editorTextFocus && !editorReadonly && !editorTabMovesFocus"
      },
      {
        "key": "ctrl+shift+j",
        "command": "-workbench.action.search.toggleQueryDetails",
        "when": "inSearchEditor || searchViewletFocus"
      },
      {
        "key": "ctrl+j",
        "command": "-workbench.action.togglePanel"
      },
      {
        "key": "ctrl+j",
        "command": "cursorDown",
        "when": "textInputFocus"
      },
      {
        "key": "ctrl+k",
        "command": "cursorUp",
        "when": "textInputFocus"
      },
      {
        "key": "alt+l",
        "command": "cursorWordEndRight",
        "when": "textInputFocus"
      },
      {
        "key": "ctrl+l",
        "command": "-expandLineSelection",
        "when": "textInputFocus"
      },
      {
        "key": "ctrl+shift+k",
        "command": "-editor.action.deleteLines",
        "when": "textInputFocus && !editorReadonly"
      },
      {
        "key": "ctrl+alt+j",
        "command": "editor.action.insertCursorBelow"
      },
      {
        "key": "ctrl+shift+alt+j",
        "command": "editor.action.insertCursorBelow"
      },
      {
        "key": "ctrl+alt+p",
        "command": "workbench.action.togglePanel"
      },
      {
        "key": "ctrl+shift+n",
        "command": "-workbench.action.newWindow"
      },
      {
        "key": "ctrl+h",
        "command": "editor.action.startFindReplaceAction",
        "when": "findInputFocussed"
      },
      {
        "key": "ctrl+h",
        "command": "-editor.action.startFindReplaceAction",
        "when": "editorFocus || editorIsOpen"
      },
      {
        "key": "ctrl+shift+alt+h",
        "command": "cursorWordLeftSelect",
        "when": "textInputFocus"
      },
      {
        "key": "ctrl+shift+alt+l",
        "command": "cursorWordEndRightSelect",
        "when": "textInputFocus"
      },
      {
        "key": "ctrl+shift+h",
        "command": "-workbench.action.replaceInFiles"
      },
      {
        "key": "ctrl+shift+l",
        "command": "-selectAllSearchEditorMatches",
        "when": "inSearchEditor"
      },
      {
        "key": "ctrl+shift+j",
        "command": "cursorDownSelect",
        "when": "textInputFocus"
      },
      {
        "key": "ctrl+shift+k",
        "command": "cursorUpSelect",
        "when": "textInputFocus"
      },
      {
        "key": "ctrl+alt+k",
        "command": "editor.action.insertCursorAbove"
      },
      {
        "key": "ctrl+h",
        "command": "cursorLeft",
        "when": "textInputFocus"
      },
      {
        "key": "ctrl+l",
        "command": "cursorRight",
        "when": "textInputFocus"
      },
      {
        "key": "ctrl+alt+h",
        "command": "cursorWordLeft",
        "when": "textInputFocus"
      },
      {
        "key": "alt+h",
        "command": "cursorWordLeft",
        "when": "textInputFocus"
      },
      {
        "key": "alt+j",
        "command": "editor.action.moveLinesDownAction",
        "when": "editorTextFocus && !editorReadonly"
      },
      {
        "key": "alt+k",
        "command": "editor.action.moveLinesUpAction",
        "when": "editorTextFocus && !editorReadonly"
      },
      {
        "key": "ctrl+s",
        "command": "-workbench.action.files.save"
      },
      {
        "key": "ctrl+shift+l",
        "command": "cursorRightSelect",
        "when": "textInputFocus"
      },
      {
        "key": "ctrl+shift+h",
        "command": "cursorLeftSelect",
        "when": "textInputFocus"
      },
      {
        "key": "shift+alt+h",
        "command": "cursorWordLeftSelect",
        "when": "textInputFocus"
      },
      {
        "key": "shift+alt+l",
        "command": "cursorWordEndRightSelect",
        "when": "textInputFocus"
      },
      {
        "key": "ctrl+alt+s",
        "command": "workbench.action.files.saveAs"
      },
      {
        "key": "ctrl+shift+s",
        "command": "-workbench.action.files.saveAs"
      },
      {
        "key": "ctrl+alt+l",
        "command": "cursorWordEndRight",
        "when": "textInputFocus"
      },
      {
        "key": "ctrl+shift+alt+k",
        "command": "editor.action.insertCursorAbove"
      },
      {
        "key": "ctrl+backspace",
        "command": "deleteWordLeft"
      },
      {
        "key": "shift+tab",
        "command": "-acceptAlternativeSelectedSuggestion",
        "when": "suggestWidgetHasFocusedSuggestion && suggestWidgetVisible && textInputFocus"
      },
      {
        "key": "shift+tab",
        "command": "-insertPrevSuggestion",
        "when": "hasOtherSuggestions && textInputFocus && !inSnippetMode && !suggestWidgetVisible && config.editor.tabCompletion == 'on'"
      },
      {
        "key": "ctrl+shift+/",
        "command": "editor.action.blockComment",
        "when": "editorTextFocus && !editorReadonly"
      },
      {
        "key": "ctrl+shift+a",
        "command": "-editor.action.blockComment",
        "when": "editorTextFocus && !editorReadonly"
      },
      {
        "key": "ctrl+s",
        "command": "editor.fold",
        "when": "editorTextFocus && foldingEnabled"
      },
      {
        "key": "ctrl+j",
        "command": "selectNextSuggestion",
        "when": "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus || suggestWidgetVisible && textInputFocus && !suggestWidgetHasFocusedSuggestion"
      },
      {
        "key": "ctrl+k",
        "command": "selectPrevSuggestion",
        "when": "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus || suggestWidgetVisible && textInputFocus && !suggestWidgetHasFocusedSuggestion"
      },
      {
        "key": "ctrl+b",
        "command": "-markdown.extension.editing.toggleBold",
        "when": "editorTextFocus && !editorReadonly && editorLangId =~ /^markdown$|^rmd$|^quarto$/"
      },
      {
        "key": "backspace",
        "command": "-markdown.extension.onBackspaceKey",
        "when": "editorTextFocus && !editorHasMultipleSelections && !editorReadonly && !markdown.extension.editor.cursor.inFencedCodeBlock && !markdown.extension.editor.cursor.inMathEnv && !suggestWidgetVisible && vim.mode != 'CommandlineInProgress' && vim.mode != 'EasyMotionInputMode' && vim.mode != 'EasyMotionMode' && vim.mode != 'Normal' && vim.mode != 'Replace' && vim.mode != 'SearchInProgressMode' && vim.mode != 'SurroundInputMode' && vim.mode != 'Visual' && vim.mode != 'VisualBlock' && vim.mode != 'VisualLine' && editorLangId =~ /^markdown$|^rmd$|^quarto$/"
      },
      {
        "key": "ctrl+i",
        "command": "editor.action.insertSnippet"
      },
      {
        "key": "shift+tab",
        "command": "-markdown.extension.onShiftTabKey",
        "when": "editorTextFocus && markdown.extension.editor.cursor.inList && !editorHasMultipleSelections && !editorReadonly && !editorTabMovesFocus && !hasOtherSuggestions && !hasSnippetCompletions && !inSnippetMode && !markdown.extension.editor.cursor.inFencedCodeBlock && !markdown.extension.editor.cursor.inMathEnv && !suggestWidgetVisible && editorLangId =~ /^markdown$|^rmd$|^quarto$/"
      },
      {
        "key": "tab",
        "command": "-markdown.extension.onTabKey",
        "when": "editorTextFocus && markdown.extension.editor.cursor.inList && !editorHasMultipleSelections && !editorReadonly && !editorTabMovesFocus && !hasOtherSuggestions && !hasSnippetCompletions && !inSnippetMode && !inlineSuggestionVisible && !markdown.extension.editor.cursor.inFencedCodeBlock && !markdown.extension.editor.cursor.inMathEnv && !suggestWidgetVisible && editorLangId =~ /^markdown$|^rmd$|^quarto$/"
      },
      {
        "key": "ctrl+j",
        "command": "list.focusDown",
        "when": "listFocus && !inputFocus && !treestickyScrollFocused"
      },
      {
        "key": "ctrl+j",
        "command": "quickInput.next",
        "when": "inQuickInput && quickInputType == 'quickPick'"
      },
      {
        "key": "ctrl+k",
        "command": "quickInput.previous",
        "when": "inQuickInput && quickInputType == 'quickPick'"
      },
      {
        "key": "ctrl+shift+[IntlBackslash]",
        "command": "-breadcrumbs.toggleToOn",
        "when": "!config.breadcrumbs.enabled"
      },
      {
        "key": "ctrl+shift+.",
        "command": "-breadcrumbs.toggleToOn",
        "when": "!config.breadcrumbs.enabled"
      },
      {
        "key": "ctrl+shift+[IntlBackslash]",
        "command": "-breadcrumbs.focusAndSelect",
        "when": "breadcrumbsPossible && breadcrumbsVisible"
      },
      {
        "key": "ctrl+shift+.",
        "command": "-breadcrumbs.focusAndSelect",
        "when": "breadcrumbsPossible && breadcrumbsVisible"
      },
      {
        "key": "ctrl+shift+;",
        "command": "-breadcrumbs.focus",
        "when": "breadcrumbsPossible && breadcrumbsVisible"
      },
      {
        "key": "ctrl+shift+s",
        "command": "editor.foldAll",
        "when": "editorTextFocus && foldingEnabled"
      },
      {
        "key": "ctrl+k ctrl+0",
        "command": "-editor.foldAll",
        "when": "editorTextFocus && foldingEnabled"
      },
      {
        "key": "`",
        "command": "markdown.extension.editing.toggleCodeSpan",
        "when": "editorTextFocus"
      },
      {
        "key": "ctrl+shift+`",
        "command": "-workbench.action.terminal.new",
        "when": "terminalProcessSupported || terminalWebExtensionContributedProfile"
      },
      {
        "key": "ctrl+shift+`",
        "command": "markdown.extension.editing.toggleCodeBlock"
      },
      {
        "key": "ctrl+k ctrl+j",
        "command": "-editor.unfoldAll",
        "when": "editorTextFocus && foldingEnabled"
      },
      {
        "key": "ctrl+alt+e",
        "command": "editor.unfoldAll"
      },
      {
        "key": "ctrl+e",
        "command": "editor.unfold",
        "when": "editorTextFocus && foldingEnabled"
      },
      {
        "key": "ctrl+shift+]",
        "command": "-editor.unfold",
        "when": "editorTextFocus && foldingEnabled"
      }
    ]
    ```

  <!-- use the latest -->

- install theme <!-- https://vscodethemes.com/ -->
  - dracula
  - atom one dark
  - nord
- install extensions
  <!-- automate -->
  - formulahendry.code-runner
  <!-- analyze, lint, format, auto complete, ... -->
  - dbaeumer.vscode-eslint
  - ms-python.black-formatter
  - ms-python.debugpy
  - ms-python.python
  - ms-python.vscode-pylance
  - rust-lang.rust-analyzer
  - golang.go
  - xabikos.javascriptsnippets
  - akamud.vscode-javascript-snippet-pack
  <!-- view -->
  - yzhang.markdown-all-in-one
  - tomoki1207.pdf
  - janisdd.vscode-edit-csv
  - ms-vscode.live-server <!-- live preview -->
  - jasonheld.jsonl-pretty-editor
  <!-- program -->
  - saoudrizwan.claude-dev <!-- cline -->
  <!-- ship -->
  - github.vscode-pull-request-github
- config appearance
  - view: appearance <!-- things might be changed or nested in different ways -->
    - custom titlebar `off`
    - `*` bar `off`
    - minimap `off`
    - sticky scroll `off`
    - toggle bread crumbs `off`
  - explorer <!-- ctrl shift e -->
    - outline & timeline `off`
- config behavior <!-- ctrl , -->

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
  - chat: disable ai features `on`
  - security: workspace: trust: enabled `off`
  - update: mode `none`
  - code-runner: run in terminal `on`
  - code-runner: preserve focus `off`
  - code runner: executor map <!-- `settings.json` -->

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

- switch from wayland to x11 <!-- might not needed, unless you feel it too conservative on permissions -->

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

  ```sh
  clash_url="https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.4.4/Clash.Verge_2.4.4_amd64.deb" # add https://gh-proxy.com prefix if needed
  clash_file="clash-verge.deb"
  wget -c -O "$clash_file" "$clash_url"
  sudo dpkg -i "$clash_file"
  rm "$clash_file" # clean up
  ```

- home
  - tun mode `on` <!-- make sure it's x11 not wayland -->
- profiles
  - add nodes <!-- github search "nodes", paid nodes, vps, etc. -->
- settings
  - auto launch `on`
  - silent start `on`
  - port config `7890`

## `extension manager`

- install extensions <!-- browse -->
  - lilypad
  - Alt+Tab Scroll Workaround <!-- sometimes when you lock the screen and unlock, it might popup "gnome session failed". just unselect "always on top", the system is completely functional. (upd: log out to apply, making everything more predictable) -->
- remove "show apps" icon on system dock
  - system extensions: ubuntu dock: launchers: show applications icon `off`
- remove clash vergetray icon
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
  - goldendict
  - elisa

## `flatseal`

- all applications: file system
  - `*` `on`
- steam: file system <!-- conservative. not compatible with redundant permission -->
  - `*` `off`
- heroic: file system <!-- remove the nonsensical folder on home -->
  - `*` `off`
- make zed work with fcitx5
  - all permission `on`

## `gear lever`

- appimage default location `~/.appimages`

## `fonts`

- install fonts

  `repo: fonts`

  - copy the full fonts folder as a subfolder under `~/.local/share/fonts`

  <!-- why full fonts folder: it handles things like subfolders, duplicates, changed filenames, unrelated files, well, while it does not seem to support VariableFont (e.g. font weights) well by default. -->

  <!-- why `~/.local/share/fonts/fonts/myfont...` instead of `~/.local/share/fonts/myfont...`: later we will put some processed noto sans on `~/.local/share/fonts/noto...`, so having an extra nested fonts folder is actually clearer -->

- prefer sc for kanji

  - replace the font files with sc at first <!-- optimal -->

    ```sh
    # Define path constants
    WORK_DIR="$HOME/_"
    INPUT_DIR="$WORK_DIR/input"
    TMP_DIR="$WORK_DIR/tmp"
    OUTPUT_DIR="$WORK_DIR/output"
    NOTO_FONT_DIR="/usr/share/fonts/opentype/noto"
    LOCAL_FONT_DIR="$HOME/.local/share/fonts"

    # Create directories
    mkdir -p "$INPUT_DIR" "$TMP_DIR" "$OUTPUT_DIR"

    # Copy Noto fonts to input
    cp -a "$NOTO_FONT_DIR"/* "$INPUT_DIR/"

    # Process each file in input
    for src in "$INPUT_DIR/"*; do
      [ -f "$src" ] || continue
      base="$(basename "$src")"
      ext="${base##*.}"
      ext_lc="$(echo "$ext" | tr '[:upper:]' '[:lower:]')"

      # Clear tmp directory
      rm -rf "$TMP_DIR"
      mkdir -p "$TMP_DIR"

      if [ "$ext_lc" = "ttc" ]; then
        cp "$src" "$TMP_DIR/font.ttc"
        cd "$TMP_DIR"

        # Extract TTC to individual TTFs
        python3 -c "from fontTools.ttLib.ttCollection import TTCollection; [f.save(f'font_{i}.ttf') for i,f in enumerate(TTCollection('font.ttc'))]"

        sc_list=()
        other_list=()

        # Read each font name, log it, and separate SC fonts
        for f in font_*.ttf; do
          [ -f "$f" ] || continue
          font_name=$(python3 -c "from fontTools.ttLib import TTFont; import sys; font=TTFont(sys.argv[1]); names=[n.string.decode('utf-16-be') if n.isUnicode() else n.string.decode('latin-1') for n in font['name'].names if n.nameID==1]; print(names[0] if names else '')" "$f")
          echo "Font file: $f, Name: $font_name"

          if echo "$font_name" | tr '[:upper:]' '[:lower:]' | grep -q 'sc'; then
            sc_list+=("$f")
          else
            other_list+=("$f")
          fi
        done

        # Build ordered python list literal: sc first
        pylist=""
        for f in "${sc_list[@]}" "${other_list[@]}"; do
          pylist="$pylist,'$f'"
        done
        pylist=${pylist#,}

        # Pack ordered fonts into a new TTC
        python3 -c "from fontTools.ttLib import TTFont; from fontTools.ttLib.ttCollection import TTCollection; files=[$pylist]; ttc=TTCollection(); ttc.fonts=[TTFont(f) for f in files]; ttc.save('output.ttc')"

        mv -f output.ttc "$OUTPUT_DIR/$base"
        cd "$INPUT_DIR"

        rm -rf "$TMP_DIR"
        mkdir -p "$TMP_DIR"
      else
        # Copy non-TTC files unchanged
        cp -a "$src" "$OUTPUT_DIR/$base"
      fi
    done

    # Move fonts to local directory
    mv -f "$OUTPUT_DIR/"* "$LOCAL_FONT_DIR/"

    # Clear system noto directory
    sudo rm -rf "$NOTO_FONT_DIR/*"

    # Update cache
    fc-cache -f -v "$LOCAL_FONT_DIR/"

    # Cleanup
    rm -rf "$WORK_DIR"
    ```

  - write a preference <!-- unreliable -->

    - ubuntu <!-- not needed after the optimal one -->

      ```sh
      font=$(cat <<EOF
      <?xml version="1.0"?>
      <!DOCTYPE fontconfig SYSTEM "fonts.dtd">
      <fontconfig>
        <alias>
          <family>sans-serif</family>
          <prefer>
            <family>Ubuntu Sans</family>
            <family>Noto Sans CJK SC</family>
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
      EOF
      )

      printf "$font" | sudo tee /etc/fonts/conf.d/64-language-selector-cjk-prefer.conf > /dev/null
      mkdir -p ~/.config/fontconfig/conf.d
      # printf "$font" | tee ~/.config/fontconfig/conf.d/64-prefer-noto-cjk-sc.conf > /dev/null # might cause issue on system tray time (weird full width semicolon)

      sudo fc-cache -f -v # apply (log out if needed)
      # fc-match -s sans:lang=zh # confirm
      ```

    - flatpak <!-- not needed? -->

      ```sh
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

- normalize default font variant on chromium <!-- if needed, in case chromium prefers the condensed variant by default  -->
  - search and remove all "condensed", "compressed", or "VariableFont" fonts <!-- on nautilus (files) -->
- apply <!-- log out -->

  ```sh
  sudo fc-cache -f -v
  ```

## `ghostty` <!-- `terminal` -->

- put zshrc

  `terminal zshrc.sh`

- install ghostty nightly <!-- not needed since it's already stable -->

  ```sh
  set -e

  # source: https://github.com/mkasberg/ghostty-ubuntu/

  URL="https://productionresultssa4.blob.core.windows.net/actions-results/32b82df1-cdd9-4464-953e-88bfc0d48a39/workflow-job-run-a0d2f2e3-9ee7-5779-8c89-82ed3454b79c/artifacts/73fd278f2e6afa3bb7875b44543335bbc45b0029aa025df3503fba46e775dc0c.zip?rscd=attachment%3B+filename%3D%22package-ubuntu-24.04-amd64-0.15.2.zip%22&rsct=application%2Fzip&se=2026-03-06T12%3A14%3A12Z&sig=hhsYxPTiesPtoJqX8Jahp6piNsdEM6KZjqqMpWmXnS0%3D&ske=2026-03-06T13%3A33%3A46Z&skoid=ca7593d4-ee42-46cd-af88-8b886a2f84eb&sks=b&skt=2026-03-06T09%3A33%3A46Z&sktid=398a6654-997b-47e9-b12b-9515b896b4de&skv=2025-11-05&sp=r&spr=https&sr=b&st=2026-03-06T12%3A04%3A07Z&sv=2025-11-05" # https://github.com/mkasberg/ghostty-ubuntu/actions/runs/22700833381/artifacts/5772559005, https://github.com/mkasberg/ghostty-ubuntu/actions/runs/22700833381

  ZIP="ghostty_artifact.zip"

  # download
  wget -c -O "$ZIP" "$URL"

  # extract
  unzip -o "$ZIP"

  # find the deb package
  DEB=$(find . -maxdepth 1 -type f -name "*.deb" | head -n 1) # stable: https://github.com/mkasberg/ghostty-ubuntu/releases/download/1.2.3-0-ppa1/ghostty_1.2.3-0.ppa1_amd64_24.04.deb

  # install
  sudo dpkg -i "$DEB"

  # cleanup only if installation succeeded
  rm -f "$ZIP" "$DEB"
  ```

- config ghostty

  ```sh
  mkdir -p ~/.config/ghostty

  cat > ~/.config/ghostty/config <<'EOF'
  # normalize: keep terminal alive after failure (like with `set -e`)
  wait-after-command = true
  abnormal-command-exit-runtime = 0

  # normalize: add scrollbar # need version >= 1.3
  scrollbar = system

  # simplify: disable the "are you sure you want to close?" confirmation
  confirm-close-surface = false

  # simplify: disable the paste-protection warning
  clipboard-paste-protection = false

  # style: make it fullscreen by default
  fullscreen = true
  window-width = 9999
  window-height = 9999
  EOF
  ```

- use tmux

  <!-- `ctrl b` `d` to keep something running in the bg, `tmux attach` to back. -->

## `plymouth`

- remove the oem logo on startup

  ```sh
  sudo sed -i 's/UseFirmwareBackground=true/UseFirmwareBackground=false/g' /usr/share/plymouth/themes/bgrt/bgrt.plymouth
  sudo update-initramfs -u # apply
  ```

## `scrcpy` `sndcpy`

- phone: settings
  - allow usb debugging `on`
  - allow usb installation `on`
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
  StartupWMClass=scrcpy
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

- import bookmarks

  `chromium bookmarks.html`

- import passwords

  `chromium passwords.csv`

- install extensions
  - style: justblack https://chromewebstore.google.com/detail/just-black/aghfnjkcakhmadgdomlmlhhaocbkloab
  - style: stylus <!-- download the mv2 version and load unpacked. https://github.com/openstyles/stylus -->
    <!-- move to Documents/.storage -->
    - lichess chessdotcom icons https://github.com/eigenpaul/lichess-custom-pieces/blob/main/chessdotcom.css
  - simplify: ublock origin https://chromewebstore.google.com/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm
    - filter lists: add `cookie notices`, `annoyances`.
    - my fliters: `browser ublock origin.txt`
  - automate: tampermonkey https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmhtmlkfjojejmpbldmpobfkfo
    - disable update popup
      - settings: config mode `advanced`
      - settings: appearance: show update notification `disabled`
    - install `userscripts`
  - normalize: don't close window with last tab https://chromewebstore.google.com/detail/dont-close-window-with-la/dlnpfhfhmkiebpnlllpehlmklgdggbhn?gl=us
  - enhance new tab: intention <!-- repo: f: intention. load unpacked with dev mode on. -->
    - allow in incognito
    - extension: keyboard shortcuts: intention: Open a new window with Intention's custom new tab `ctrl n`
    - intention settings: url to open when enter is empty `https://chatgpt.com/` <!-- `https://chatgpt.com/branch/69a713fd-5b58-83a3-958e-c38e92cffc74/4bccd054-037e-4707-88ff-4be087bb475e` use the latest one -->
    - intention settings: search url `https://www.google.com/ai?q=%s&gl=us` <!-- it's good to set ai mode default in case it doesnt always show up automatically, sometimes not even available on nav bar on regular search, while you can easily go to "all" from ai mode. legacy: `https://www.google.com/search?q=%s&gl=us`. unfortunately, gl=us is not preserved when switching to all. -->
  - automate captcha solving: buster https://chrome.google.com/webstore/detail/mpbjkejclgfgadiemmefgebjfooflfhl <!-- theoretically highly possible, but practically unexpectedly reliable -->
  - manage access to accounts: authenticator https://chromewebstore.google.com/detail/authenticator/bhghoamapcdpbohphigoooaddinpkbai
  - manage multiple accounts: cookie profile switcher https://chromewebstore.google.com/detail/cookie-profile-switcher/dicajblfgcpecbkhkjaljphlmkhohelc
  - manage crypto accounts: meta mask https://chrome.google.com/webstore/detail/nkbihfbeogaeaoehlefnkodbefgpgknn <!-- deprecated. incompatible without the extension. -->
  - trade crypto: phantom https://chromewebstore.google.com/detail/phantom/bfnaelmomeimhlpmgjnjophhpkkoljpa
  - enhance youtube: picture in picture https://chromewebstore.google.com/detail/picture-in-picture-extens/hkgfoiooedgoejojocmhlaklaeopbecg?hl=en
  - enhance twitter: control panel for twitter https://chromewebstore.google.com/detail/control-panel-for-twitter/kpmjjdhbcfebfjgdnpjagcndoelnidfj
    - x fixes: premium blue checks `hide`
  - enhance twitch: alternate player for twitch.tv https://chromewebstore.google.com/detail/alternate-player-for-twit/bhplkbgoehhhddaoolmakpocnenplmhf
  - enhance bilibili: bewlybewly https://chromewebstore.google.com/detail/bewlybewly/bbbiejemhfihiooipfcjmjmbfdmobobp
  - see history of sites: wayback machine https://chromewebstore.google.com/detail/wayback-machine/fpnmgdkabkmnadcjpehmlllkndpkmiak
  - dev: react developer tools https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en

## `firefox`

- allow persistent "load unpacked" extensions like chromium <!-- might not work with standard version. might not work fine even on dev versions. -->
  - about:config `xpinstall.signatures.required` `false`

## `clocks`

- add world clocks <!-- appear aside notifications -->
  - san francisco
  - london
  - taipei
  - tokyo

## `weather`

- add cities
  - tokyo
  - taipei
  - shanghai
  - hong kong

## `git`

- install

  ```
  sudo apt install git
  git config --global user.name "Fira"
  git config --global user.email "xoyage@gmail.com"
  git config --global push.autoSetupRemote true
  git config --global credential.helper store
  ```

- normalize connectivity

  ```sh
  git config --global http.sslVerify false
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
  - copy `terminal zshrc.sh` to `~/.zshrc`
  - use `push` function to sync all git repos
- set timer to auto push daily

  ```sh
  # Define the script and service paths
  SCRIPT_PATH="/usr/local/bin/run_push.sh"
  SERVICE_PATH="/etc/systemd/system/run_push.service"
  TIMER_PATH="/etc/systemd/system/run_push.timer"

  # systemd needs shebang (`#!/usr/bin/env zsh`) to work.
  # Create the script that will run the push command and retry on failure
  echo "Creating the push command script..."
  sudo tee $SCRIPT_PATH > /dev/null << 'EOF'
  #!/usr/bin/env zsh
  zsh -ic 'push'
  EOF

  # Make the script executable
  sudo chmod +x $SCRIPT_PATH

  # Create the systemd service
  echo "Creating the systemd service..."
  sudo tee $SERVICE_PATH > /dev/null << EOF
  [Unit]
  Description=Run push command at 23:00 daily
  After=network.target
  StartLimitIntervalSec=1h
  StartLimitBurst=3

  [Service]
  ExecStart=$SCRIPT_PATH
  Restart=on-failure
  RestartSec=600
  User=$USER
  Environment=DISPLAY=:0
  Environment=XAUTHORITY=/home/$USER/.Xauthority

  [Install]
  WantedBy=multi-user.target
  EOF

  # Create the systemd timer
  echo "Creating the systemd timer..."
  sudo tee $TIMER_PATH > /dev/null << EOF
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
  sudo systemctl enable --now run_push.timer

  echo "Setup complete. The push command will run daily at 23:00 and retry if it fails."
  ```

<!-- use the latest config -->

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
sudo systemctl disable run_push.service # dont enable it unless you wanna run it at once when the system boots.

sudo systemctl enable --now run_push.timer # enable it. `--now` flag means both enable (start when reboot) and start (start now).

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

- add environment variables

  ```
  sudo tee /etc/environment > /dev/null <<EOF
  GTK_IM_MODULE=fcitx
  QT_IM_MODULE=fcitx
  XMODIFIERS=@im=fcitx
  SDL_IM_MODULE=fcitx
  GLFW_IM_MODULE=fcitx
  EOF
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
    - simplified and traditional chinese translation: toggle key `none`
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

## `vlc`

- open in new window for each file

  ```sh
  sudo sed -i 's/--started-from-file/--no-one-instance/g' /var/lib/flatpak/app/org.videolan.VLC/current/active/export/share/applications/org.videolan.VLC.desktop
  ```

- preferences <!-- ctrl p -->
  - audio: tracks: preferred audio language `japanese`

## `elisa`

- config <!-- ctrl shift , -->
  - general: keep running in system tray when main window is closed `on`

## `goldendict`

- install dictionaries <!-- f3 -->

  - add

    ```sh
    # i dont want it to be with a ton of hidden folders on ~. just name it storage. static is also a good choice.
    ~ % cd /home/fira/Documents/.storage/dict
    ...Documents/.storage/dict % ls
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

    <!-- https://mdx.mdict.org -->

  - remove
    - english wikipedia

- simplify

  - view: navigation `on`
  - view: `*` `off`

  <!-- menubar becomes a button on the top right. ctrl m toggle on. -->

- normalize <!-- f4 -->

  - interface: tabbed browsing: open new tabs in background `off`
  - start to system tray `on`

- use shortcuts
  - open screen word selector `ctrl c ctrl c`

## `qbittorrent`

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

- run in background

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
  sudo systemctl enable --now ipfs

  echo "Done."
  echo "Check status with: sudo systemctl status ipfs"
  ```

## `tor browser`

- normalize

  `about:config`

  - privacy.resistFingerprinting.letterboxing: `false`

## `ayugram`

- disable notifications
  - settings: notifications and sounds: global settings: `*` `off`

## `eden`

<!-- yuzu fork -->

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

- install appimage with gear lever

  ```sh
  wget -c -O "sabaki.AppImage" "https://github.com/SabakiHQ/Sabaki/releases/download/v0.52.2/sabaki-v0.52.2-linux-x64.AppImage"
  ```

- install <!-- deprecated -->

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

  cat > $DESKTOP_PATH <<EOF
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

## `foliate`

- autohide cursor `on`
- font & layout settings <!-- alt , -->
  - font
    - serif font `adobe kaiti std`
    - sans font `noto sans cjk sc`
  - behavior
    - reduce animation `on`

## `xmrig`

- install and start

  ```sh
  # 1. Update and install dependencies
  sudo apt install -y git build-essential cmake libuv1-dev libssl-dev libhwloc-dev

  # 2. Download XMRig (the engine)
  cd /home/fira/Documents/_/opensource
  git clone https://github.com/xmrig/xmrig.git
  cd xmrig && mkdir build && cd build

  # 3. Compile the miner
  cmake ..
  make -j$(nproc)

  # 4. Start Mining (using a BTC-payout pool like Unmineable)
  # REPLACE 'YourBTCAddress' with your actual Bitcoin wallet address.
  # The 'm' at the end of the worker name is for identification.
  sudo ./xmrig -o rx.unmineable.com:3333 -u BTC:bc1qszfqwtp8lva8cmptmj330m90k7mms4szk08e0w.UbuntuLaptop#ivrt-8ebj -p x
  ```

## apps

remove

```sh
sudo snap remove -y firefox

sudo snap remove -y thunderbird # use web (gmail, outlook, etc.) instead. thunderbird is free and consistent, but slow. And it produces nonsense, thunderbird.tmp on downloads

sudo apt remove -y gnome-text-editor # aka gedit or text editor, let it auto bind vscode then

sudo apt remove -y update-notifier # simplify noise
```

install

```sh
# normalize flatpak
flatpak install -y flathub com.github.tchx84.Flatseal # fix all flatpak sandbox issues

# view flatpaks on gui
flatpak install -y flathub io.github.flattool.Warehouse

# install appimages
flatpak install -y flathub it.mijorus.gearlever

# process disks
sudo apt install -y gparted

# browse: chromium, firefox, lagrange
sudo snap install chromium --revision 2842
# use a saved .snap file if needed
# flatpak does not keep old versions. to build from source, see https://github.com/flathub/org.chromium.Chromium/commit/df2bc0c59344afd0d5248ed4f43d0dcffbb19ae0 https://commondatastorage.googleapis.com/chromium-browser-official/chromium-124.0.6367.118.tar.xz
flatpak install -y flathub org.mozilla.firefox # use flatpak one instead
flatpak install -y flathub fi.skyjake.Lagrange

# update apt packages index
sudo apt update

# program: mg (used by linus torvalds, on a personal fork though)
sudo apt install -y mg

# program: emacs, vim
sudo apt install -y emacs-nox
sudo rm /usr/share/applications/emacsclient.desktop # dont let it appear on app picker, always use them as cli
sudo apt install -y vim
sudo rm /usr/share/applications/vim.desktop

# program: code
curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
sudo install -o root -g root -m 644 packages.microsoft.gpg /usr/share/keyrings/
sudo sh -c 'echo "deb [arch=amd64 signed-by=/usr/share/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/vscode stable main" > /etc/apt/sources.list.d/vscode.list'
sudo apt install apt-transport-https
sudo apt update
sudo apt install code # code from snap seems incompatible with fcitx5

# program: zed
flatpak install -y flathub dev.zed.Zed

# program: cursor
# download from https://cursor.com/download, install with gear lever
# cli command: %F --no-sandbox
# it does not seem to work without the flag

# program with llms: opencode, cline, codex, claude
pnpm add -g opencode-ai@latest
pnpm add -g cline
pnpm add -g @openai/codex
pnpm add -g @anthropic-ai/claude-code

# program with version control on gui
# flatpak install -y flathub org.gnome.gitg # perf issue, legacy gnome ui (and weird fonts), use github instead
flatpak install -y flathub io.github.shiftey.Desktop # seems reliable
# flatpak install -y flathub com.axosoft.GitKraken # commercial but powerful due to the complexity of git and github, noisy and compact

# chat with agentic llms: openclaw
pnpm add -g openclaw@latest # seems no use cases btw

# look up vocab
flatpak install -y flathub org.goldendict.GoldenDict
flatpak install -y flathub dev.mufeed.Wordbook

# draw, sketch, pick color
flatpak install -y flathub org.gimp.GIMP
flatpak install -y flathub org.kde.kolourpaint
flatpak install -y flathub org.kde.krita
flatpak install -y flathub org.inkscape.Inkscape
flatpak install -y flathub com.github.finefindus.eyedropper

# graph
flatpak install -y flathub org.geogebra.GeoGebra

# watch, record, cut
flatpak install -y flathub com.obsproject.Studio
flatpak install -y flathub org.kde.kdenlive
flatpak install -y flathub org.shotcut.Shotcut
flatpak install -y flathub org.blender.Blender

# play vids, dl vids
flatpak install -y flathub org.videolan.VLC
flatpak install -y flathub io.mpv.Mpv
flatpak install -y flathub org.kde.elisa
flatpak install -y flathub net.lrclib.lrcget
pipx install yt-dlp
mkdir -p ~/.config/yt-dlp # use browser cookies by default
tee ~/.config/yt-dlp/config > /dev/null <<EOF
--cookies-from-browser chromium:'/home/fira/snap/chromium/common/chromium/Default'
EOF
flatpak install -y flathub io.github.Predidit.Kazumi # test it

# read, normalize
flatpak install -y flathub com.github.johnfactotum.Foliate
# sudo snap install foliate # fix fonts access in sandbox. there's nothing wrong with snap. no extra config needed. (upd: fixed by flatseal)
flatpak install -y flathub com.sigil_ebook.Sigil
# flatpak install -y flathub com.calibre_ebook.calibre # remove possible noise on home folder

# dl, share, host, browse anonymously
flatpak install -y flathub org.qbittorrent.qBittorrent
flatpak install -y flathub org.torproject.torbrowser-launcher
IPFS_URL="https://dist.ipfs.tech/kubo/v0.39.0/kubo_v0.39.0_linux-amd64.tar.gz"
IPFS_FILE="ipfs.tar.gz"
IPFS_FOLDER="kubo"
wget -c -O "$IPFS_FILE" "$IPFS_URL"
tar -xzf "$IPFS_FILE"
sudo bash "$IPFS_FOLDER/install.sh"
rm -rf "$IPFS_FOLDER" "$IPFS_FILE"

# chat, socialize, sync
flatpak install -y flathub io.gitlab.news_flash.NewsFlash
flatpak install -y flathub dev.geopjr.Tuba
flatpak install -y flathub im.fluffychat.Fluffychat
AYUGRAM_URL="https://github.com/0FL01/AyuGramDesktop-flatpak/releases/download/flatpak-v6.3.10-20260124152331/ayugram-desktop-6.3.10.flatpak"
AYUGRAM_FILE="ayugram.flatpak"
wget -c -O "$AYUGRAM_FILE" "$AYUGRAM_URL"
sudo flatpak install -y "$AYUGRAM_FILE" # -y flag only work with sudo
rm "$AYUGRAM_FILE" # clean up

# run vm
flatpak install -y flathub org.gnome.Boxes
sudo apt install -y qemu-utils
sudo apt install -y virtualbox # more reliable
sudo apt install -y cpu-checker
sudo apt install -y virt-manager qemu-kvm libvirt-daemon-system libvirt-clients bridge-utils
sudo usermod -aG libvirt $USER # give user root access to vms
sudo usermod -aG kvm $USER
# reboot
sudo systemctl enable --now libvirtd
# check: sudo systemctl status libvirtd

# render docs
cargo install mdbook

# scan qr code
flatpak install -y flathub com.belmoussaoui.Decoder

# check weather
flatpak install -y flathub org.gnome.Weather

# play: steam, nintendo, proton
flatpak install -y flathub com.valvesoftware.Steam
# sudo snap install steam
flatpak install -y flathub sh.ppy.osu
flatpak install -y flathub org.libretro.RetroArch
EDEN_URL="https://github.com/eden-emulator/Releases/releases/download/v0.2.0-rc1/Eden-Ubuntu-24.04-v0.2.0-rc1-amd64.deb"
EDEN_FILE="eden.deb"
wget -c -O "$EDEN_FILE" "$EDEN_URL"
sudo dpkg -i "$EDEN_FILE"
sudo apt install -f -y  # Fix any missing deps
rm "$EDEN_FILE" # clean up
flatpak install -y flathub com.usebottles.bottles
flatpak install -y flathub com.heroicgameslauncher.hgl
flatpak install -y flathub net.lutris.Lutris

# play chess, go
pip install katrain
sudo apt install -y stockfish pychess
flatpak install -y flathub org.gnome.Chess
Croissant_URL="https://github.com/franciscoBSalgueiro/en-croissant/releases/download/v0.15.0/en-croissant_0.15.0_amd64.deb"
Croissant_FILE="croissant.deb"
wget -c -O "$Croissant_FILE" "$Croissant_URL"
sudo dpkg -i "$Croissant_FILE"
rm "$Croissant_FILE" # clean up

# play doom
flatpak install -y flathub net.dengine.Doomsday # need game files (wad)
sudo apt install -y chocolate-doom

# play network infra
flatpak install -y flathub io.github.Archeb.opentrace

# trade crypto
bisq_url="https://github.com/bisq-network/bisq2/releases/download/v2.1.10/Bisq-2.1.10.deb" # bisq2
bisq_file="bisq.deb"
wget -c -O "$bisq_file" "$bisq_url"
sudo apt install -y -f
sudo dpkg -i "$bisq_file"
rm "$bisq_file"
# flatpak install -y flathub network.bisq.Bisq # bisq1, outdated, laggy

# extract text from images
flatpak install -y flathub com.github.tenderowl.frog
```
