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

- config source

  `/etc/apt/sources.list.d/`

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

## `utilities`

- install

  ```
  sudo apt install -y curl wget

  sudo apt install -y neofetch
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

  - install extension manager

    ```
    flatpak install -y flathub com.mattjakeman.ExtensionManager
    ```

  - ubuntu dock: launchers: show applications icon `off`

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
  - chromium
    - `env BAMF_DESKTOP_FILE_HINT=/var/lib/snapd/desktop/applications/chromium_chromium.desktop /snap/bin/chromium %U`
  - code
    - `/usr/share/code/code %F`
  - fcitx5
    - `/usr/bin/fcitx5`
  - backups
  - goldendict
  - (removed) vlc media player
    - `env BAMF_DESKTOP_FILE_HINT=/var/lib/snapd/desktop/applications/vlc_vlc.desktop /snap/bin/vlc %U`
  - (removed) solanum
    - `flatpak run org.gnome.Solanum`

<!-- todo: startup apps -->

## `fonts`

<!-- todo -->

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

## `terminal`

- install zsh and config

  ```
  #!/usr/bin/env bash

  set -e

  echo "Starting Zsh + Oh My Zsh + plugins + Powerlevel10k setup …"

  # -------------------------
  # 1. Install core packages
  # -------------------------
  echo "Installing essentials …"
  sudo apt update
  sudo apt install -y git zsh fonts-powerline unzip

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
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/mkasberg/ghostty-ubuntu/HEAD/install.sh)"
```

## `scrcpy` `sndcpy`

<!-- run on zshrc -->

<!-- todo: apps -->

- install

  ```
  #!/usr/bin/env bash
  set -e

  echo "Updating system and enabling universe..."
  sudo add-apt-repository universe
  sudo apt update

  echo "Installing prerequisites (ADB, VLC, build tools)..."
  sudo apt install -y git unzip adb libsdl2-2.0-0 ffmpeg vlc

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
  ```

  <!-- zsh -ic, with -i flag you no longer need to source zshrc -->

- fix touchpad emulation <!-- emulation, middle click, ... only respect finger count, ignore location. -->

  ```
  gsettings set org.gnome.desktop.peripherals.touchpad click-method 'fingers'
  gsettings set org.gnome.desktop.peripherals.touchpad tap-to-click true
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

## `gparted`

<!-- migrate from the old system. shrink old data gradually. expand new system progressively. take over the full disk eventually. -->

- install

  ```
  sudo apt install gparted
  ```

<!-- maybe i dont need gparted. just use built in disk. -->

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

- remove snap firefox <!-- built in by ubuntu -->

  ```
  sudo snap remove firefox
  flatpak install -y flathub org.mozilla.firefox # install flatpak one
  ```

- install `chromium 124.0.6367.118` <!-- newer versions dont provide flags to choose classic ui -->

  ```sh
  sudo snap install chromium --revision 2842
  ```

- disable new look
  - chrome://flags/#customize-chrome-side-panel
  - chrome://flags/#chrome-refresh-2023
  - chrome://flags/#chrome-webui-refresh-2023
- config title bar <!-- right click the title bar -->
  - use system title bar `off`
- config `new tab page`
  - -> `customize chromium`
  - show shortcuts `off`
- import bookmarks
  `chromium bookmarks.html`
- import passwords
  `chromium passwords.csv`
- config extensions
  - justblack https://chromewebstore.google.com/detail/just-black/aghfnjkcakhmadgdomlmlhhaocbkloab
  - ublock origin https://chromewebstore.google.com/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm
    - add filter list `browser ublock origin.txt`
  - tampermonkey https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmhtmlkfjojejmpbldmpobfkfo
    - disable update popup
      - settings: config mode `advanced`
      - settings: appearance: show update notification `disabled`
    - install `userscripts`
  - bewlybewly https://chromewebstore.google.com/detail/bewlybewly/bbbiejemhfihiooipfcjmjmbfdmobobp
  - wayback machine https://chromewebstore.google.com/detail/wayback-machine/fpnmgdkabkmnadcjpehmlllkndpkmiak
  - intention
    - allow in incognito
    - extension: keyboard shortcuts: intention: Open a new window with Intention's custom new tab `ctrl n`
  - buster https://chrome.google.com/webstore/detail/mpbjkejclgfgadiemmefgebjfooflfhl
  - authenticator https://chromewebstore.google.com/detail/authenticator/bhghoamapcdpbohphigoooaddinpkbai
  - picture in picture https://chromewebstore.google.com/detail/picture-in-picture-extens/hkgfoiooedgoejojocmhlaklaeopbecg?hl=en
  - control panel for twitter https://chromewebstore.google.com/detail/control-panel-for-twitter/kpmjjdhbcfebfjgdnpjagcndoelnidfj
  - Alternate Player for Twitch.tv https://chromewebstore.google.com/detail/alternate-player-for-twit/bhplkbgoehhhddaoolmakpocnenplmhf
  - Cookie Profile Switcher https://chromewebstore.google.com/detail/cookie-profile-switcher/dicajblfgcpecbkhkjaljphlmkhohelc
- config fonts
  - -> `chrome://settings/fonts`
  - standard `roboto`
  - serif `noto serif cjk sc`
  - sans-serif `noto sans cjk sc`
  - fixed-width `fira code`
  - mathematical `dejavu serif`
- enhance performance
  - -> `chrome://settings/performance`
  - memory saver `on`
- disable spellcheck
  - `chrome://settings/languages`

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

<!-- todo: auto push daily. -->

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

  <!-- todo: find all dicts using agent -->

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
- config english
  - `input method > pinyin > settings icon`
  - trigger hint mode `empty`
  - trigger hint mode one time `empty`
- add other languages
  - fcitx5-configtool: input method: available input method: only show current language `off`
  - add `pinyin` `mozc`
- config pinyin
  - input method: pinyin: settings icon`
  - fuzzy pinyin `on`
  - prediction `off`
  - character `half-width`
  - enable cloud pinyin `off`
  - action when switching input method `commit current preedit`
  - remove all punctuation (-> punctuation > `-` button on the right)
- config japanese
- config theme
  ```sh
  git clone https://github.com/tonyfettes/fcitx5-nord.git
  mkdir -p ~/.local/share/fcitx5/themes/
  cd fcitx5-nord
  cp -r Nord-Dark/ Nord-Light/ ~/.local/share/fcitx5/themes/
  ```
  - -> `~/.config/fcitx5/conf/classicui.conf`
    ```text
    Theme=Nord-Dark
    Theme=Default
    ```
- enlarge clipboard
  - fcitx5-configtool: addons: clipboard: number of entries `30`
- use shortcuts
  - clipboard `ctrl ;`

## `wine`

- install
  ```sh
  sudo dpkg --add-architecture i386
  wget -O - https://dl.winehq.org/wine-builds/winehq.key | sudo apt-key add -
  sudo add-apt-repository 'deb https://dl.winehq.org/wine-builds/ubuntu/ jammy main'
  sudo apt update
  sudo apt install --install-recommends winehq-stable
  ```
- install libraries
  ```sh
  sudo apt install libasound2-dev
  sudo apt install libfontconfig-dev
  ```
- config sound library
  ```sh
  sudo apt install winetricks
  winetricks sound=pulse
  ```
- config wine
  ```sh
  winecfg
  ```

## `obs`

- config `source`
  - mic/aux(pulseaudio)
  - screen capsule(pipewire)
  - desktop audio
- config `setting/video`
  - output resolution `2560x1600`
  - frame rate `60fps //or 30fps`

## `goldendict`

- install dictionaries
  - -> `Edit > Dictionaries`
    - Longman Dictionary of Contemporary English
      https://mdx.mdict.org/%E5%85%AD%E5%A4%A7%E7%9F%A5%E5%90%8D%E8%AF%8D%E5%85%B8/%E6%9C%97%E6%96%87_Longman/STFU%20LongmanBundle-%E7%BB%AE%E5%8F%A5%E6%85%A8%E9%90%97-By%20Amazon%2020160928/Longman%20Dictionary%20Of%20Contemporary%20English%206th%20EnEn/LongmanDictionaryOfContemporaryEnglish6thEnEn.mdd
      https://mdx.mdict.org/%E5%85%AD%E5%A4%A7%E7%9F%A5%E5%90%8D%E8%AF%8D%E5%85%B8/%E6%9C%97%E6%96%87_Longman/STFU%20LongmanBundle-%E7%BB%AE%E5%8F%A5%E6%85%A8%E9%90%97-By%20Amazon%2020160928/Longman%20Dictionary%20Of%20Contemporary%20English%206th%20EnEn/LongmanDictionaryOfContemporaryEnglish6thEnEn.mdx
    - Oxford Advanced Learner's Dictionary
      https://mdx.mdict.org/%E5%85%AD%E5%A4%A7%E7%9F%A5%E5%90%8D%E8%AF%8D%E5%85%B8/%E7%89%9B%E6%B4%A5_Oxford/OALD8C%20V1.9%20By%20Amazon%2020160318/OALD8C.mdd
      https://mdx.mdict.org/%E5%85%AD%E5%A4%A7%E7%9F%A5%E5%90%8D%E8%AF%8D%E5%85%B8/%E7%89%9B%E6%B4%A5_Oxford/OALD8C%20V1.9%20By%20Amazon%2020160318/OALD8C.mdx
    - Macmillan English Dictionary
      https://mdx.mdict.org/%E5%85%AD%E5%A4%A7%E7%9F%A5%E5%90%8D%E8%AF%8D%E5%85%B8/%E9%BA%A6%E5%85%8B%E7%B1%B3%E4%BC%A6_Macmillan/Macmillan%20English%20Dictionary/MacmillanEnEn.mdd
      https://mdx.mdict.org/%E5%85%AD%E5%A4%A7%E7%9F%A5%E5%90%8D%E8%AF%8D%E5%85%B8/%E9%BA%A6%E5%85%8B%E7%B1%B3%E4%BC%A6_Macmillan/Macmillan%20English%20Dictionary/MacmillanEnEn.mdx
    - Collins Cobuild Advanced Learner's English Dictionary
      https://mdx.mdict.org/%E5%85%AD%E5%A4%A7%E7%9F%A5%E5%90%8D%E8%AF%8D%E5%85%B8/%E6%9F%AF%E6%9E%97%E6%96%AF_Collins/Collins%20COBUILD%20Advanced%20Learner_s%20Dictinary%208th_%2016-4-20/Collins_COBUILD_Advanced_Learner%27s_Dictinary_8th_edition.mdx
    - Cambridge Advanced Learner’s Dictionary
      https://mdx.mdict.org/%E5%85%AD%E5%A4%A7%E7%9F%A5%E5%90%8D%E8%AF%8D%E5%85%B8/%E5%89%91%E6%A1%A5_Cambridge/Cambridge%20Advanced%20Learner_s%20Dictionary%203rd%20v1.5/Cambridge%20Advanced%20Learner%27s%20Dictionary%203th.mdd
      https://mdx.mdict.org/%E5%85%AD%E5%A4%A7%E7%9F%A5%E5%90%8D%E8%AF%8D%E5%85%B8/%E5%89%91%E6%A1%A5_Cambridge/Cambridge%20Advanced%20Learner_s%20Dictionary%203rd%20v1.5/Cambridge%20Advanced%20Learner%27s%20Dictionary%203th.mdx
    - Merriam-Webster's Advanced Learner's English Dictionary
      https://mdx.mdict.org/%E5%85%AD%E5%A4%A7%E7%9F%A5%E5%90%8D%E8%AF%8D%E5%85%B8/%E9%9F%A6%E6%B0%8F_Merriam-Webster/Merriam-Webster_s%20Advanced%20Learner_s%20English%20Dictionary%20By%20Amazon/mwaled.mdd
      https://mdx.mdict.org/%E5%85%AD%E5%A4%A7%E7%9F%A5%E5%90%8D%E8%AF%8D%E5%85%B8/%E9%9F%A6%E6%B0%8F_Merriam-Webster/Merriam-Webster_s%20Advanced%20Learner_s%20English%20Dictionary%20By%20Amazon/mwaled.mdx
    - 英汉大词典-第 2 版
      https://mdx.mdict.org/Recommend/%E8%8B%B1%E6%B1%89%E5%A4%A7.zip
    - 牛津高阶英汉双解词典（第 9 版）
      https://mdx.mdict.org/Recommend/%E7%89%9B%E6%B4%A5%E9%AB%98%E9%98%B6%E8%8B%B1%E6%B1%89%E5%8F%8C%E8%A7%A3%E8%AF%8D%E5%85%B8%EF%BC%88%E7%AC%AC9%E7%89%88%EF%BC%89-%20%E5%B8%A6%E9%AB%98%E6%B8%85%E7%89%88%E5%9B%BE%E7%89%87.zip
    - 现代英汉汉英综合大辞典
      https://dl.mdict.org/1/%E7%8E%B0%E4%BB%A3%E8%8B%B1%E6%B1%89%E6%B1%89%E8%8B%B1%E7%BB%BC%E5%90%88%E5%A4%A7%E8%BE%9E%E5%85%B8.zip
    - 新世纪汉英大词典
      https://mdx.mdict.org/Recommend/%E6%96%B0%E4%B8%96%E7%BA%AA%E6%B1%89%E8%8B%B1%E5%A4%A7.zip
    - The Free Dictionary's Idioms dictionary
      https://mdx.mdict.org/Recommend/fmidioms.zip
    - Penguin English Dictionary (third Edition)
      https://mdx.mdict.org/Recommend/The%20Penguin%20English%20Dictionary%203rd%2C%202007_2.zip
- config dicts order
  - 英汉大词典（第 2 版）
  - 牛津高阶英汉双解词典（第 9 版）
  - Cambridge Advanced Learner's Dictionary 3th
  - Collins COBUILD Advanced Learner's Dictinary | 8th ed (En-En)
  - Longman Dictionary of Contemporary English 6th edition
  - Macmillan English Dictionary, 2016
  - Merriam-Webster's Advanced Learner's English Dictionary
  - The Penguin English Dictionary 3rd, 2007
  - FreeDictionary-Idioms
  - 现代英汉汉英综合大辞典
  - 新世纪汉英大词典
- config appearance
  - -> `view`
  - navigation `on`
  - others `off`
- config behavior
  - -> `edit > preferences > interface > tabbed browsing`
  - open new tabs in background `off`
- use shortcuts
  - open screen word selector `ctrl c ctrl c`
  - _show main window_
    - removed

## `vlc`

- config
  - -> `tools > preferences`
  - show settings `all`
- config jump length
  - -> `interface > hotkeys settings`
  - short jump length `5`
- config interface
  - -> `interface > main interfaces > qt`
  - show notification popup on track change `never`
  - continue playback `never`

## `qbittorrent`

- install

  ```
  sudo flatpak install -y flathub org.qbittorrent.qBittorrent
  ```

- config trackers
  - tools: preferences: bitorrent: automatically add these trackers to new downloads

    `trackers.txt`

## `ayugram`

- install

  ```
  # Set variables
  URL="https://github.com/0FL01/AyuGramDesktop-flatpak/releases/download/flatpak-v6.3.10-20260124152331/ayugram-desktop-6.3.10.flatpak"
  FILE="ayugram.flatpak"

  # Download the Flatpak file
  echo "Downloading AyuGram Desktop..."
  wget -c -O "$FILE" "$URL"

  # Check if download was successful
  if [ ! -f "$FILE" ]; then
      echo "Download failed. Exiting."
      exit 1
  fi

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

## misc

```sh
sudo apt install figlet
sudo apt install fortune
sudo apt install ghostscript

sudo apt install goldendict
sudo apt install imagemagick
sudo apt install nodejs
sudo apt install npm
sudo apt install python3
sudo apt install virtualbox

sudo flatpak install flathub org.gimp.GIMP
sudo flatpak install flathub org.gnome.Solanum
sudo npm config set registry https://registry.npmjs.org/
sudo npm install -g @wenyan/cli
sudo npm install -g jsdoc
sudo npm install -g marked
sudo npm install -g terser
sudo snap install android-studio
sudo snap install blender --classic
sudo snap install chromium --revision 2842
sudo snap install docker
sudo snap install firefox
sudo snap install gnome-boxes
sudo snap install inkscape
sudo snap install kdenlive
sudo snap install kolourpaint
sudo snap install krita
sudo snap install obs-studio
sudo snap install thunderbird
sudo snap install vlc
```

Clash.Verge_2.4.4+autobuild.1202.550a7e0_amd64

autostart light weight mode nodes

port config 7890

lilypad. collapse `tray_icon_tray_app`

<!-- todo: journal systemd. -->

rm

```
 ...lib/snapd/snaps % ls
android-studio_157.snap  cups_1044.snap               kf5-5-110-qt-5-15-11-core22_3.snap  snapd-desktop-integration_157.snap
bare_5.snap              cups_1047.snap               kf5-5-111-qt-5-15-11-core22_7.snap  snapd-desktop-integration_83.snap
blender_5234.snap        docker_2932.snap             kf5-5-113-qt-5-15-11-core22_1.snap  snap-store_1113.snap
chromium_2842.snap       eden-emulator_28.snap        kf6-core22_37.snap                  snap-store_959.snap
core_16574.snap          gnome-3-28-1804_198.snap     kf6-core24_34.snap                  telegram-desktop_5810.snap
core_16928.snap          gnome-3-38-2004_143.snap     lxqt-support-core24_3.snap          telegram-desktop_5820.snap
core18_2812.snap         gnome-42-2204_172.snap       mesa-2404_44.snap                   thunderbird_470.snap
core18_2823.snap         gnome-42-2204_176.snap       obs-studio_1298.snap                thunderbird_478.snap
core20_2264.snap         gnome-46-2404_39.snap        obs-studio_1299.snap                typst_6.snap
core20_2318.snap         gnome-weather_6.snap         partial                             v2raya_28.snap
core22_1122.snap         gtk2-common-themes_13.snap   sabaki_1.snap                       v2raya_30.snap
core22_1380.snap         gtk-common-themes_1535.snap  snapd_21465.snap
core24_423.snap          inkscape_10555.snap          snapd_21759.snap
```

it's likely that im gonna live with the old system in case something important left.

im not gonna fmt it.

```
 ...lib/flatpak/runtime % ls
app.drey.Dialect.Locale                    org.gnome.Platform
com.github.finefindus.eyedropper.Locale    org.gnome.Platform.Compat.i386
com.github.johnfactotum.Foliate.Locale     org.gnome.Platform.Locale
com.rafaelmardojai.Blanket.Locale          org.gnome.Solanum.Locale
com.usebottles.bottles.Locale              org.gtk.Gtk3theme.Yaru
dev.geopjr.Tuba.Locale                     org.gtk.Gtk3theme.Yaru-dark
io.gitlab.gregorni.Letterpress.Locale      org.kde.kigo.Locale
io.gitlab.news_flash.NewsFlash.Locale      org.kde.kolourpaint.Locale
io.mpv.Mpv.Locale                          org.kde.krita.Locale
net.davidotek.pupgui2.Locale               org.kde.Platform
org.freedesktop.LinuxAudio.Plugins.swh     org.kde.Platform.Locale
org.freedesktop.LinuxAudio.Plugins.TAP     org.kde.PlatformTheme.QGnomePlatform
org.freedesktop.Platform                   org.kde.WaylandDecoration.QAdwaitaDecorations
org.freedesktop.Platform.codecs-extra      org.kde.WaylandDecoration.QGnomePlatform-decoration
org.freedesktop.Platform.ffmpeg-full       org.mozilla.firefox.Locale
org.freedesktop.Platform.ffmpeg_full.i386  org.videolan.VLC.Locale
org.freedesktop.Platform.GL32.default      org.winehq.Wine.gecko
org.freedesktop.Platform.GL.default        org.winehq.Wine.mono
org.freedesktop.Platform.Locale            org.yuzu_emu.yuzu.Locale
org.freedesktop.Platform.openh264          page.kramo.Cartridges.Locale
org.geogebra.GeoGebra.Locale
```

```
 ...fira/.var/app % ls
app.drey.Dialect                     org.gimp.GIMP
com.github.cassidyjames.clairvoyant  org.gnome.Solanum
com.github.finefindus.eyedropper     org.kde.kigo
com.github.johnfactotum.Foliate      org.kde.kolourpaint
com.rafaelmardojai.Blanket           org.kde.krita
com.usebottles.bottles               org.libretro.RetroArch
com.valvesoftware.Steam              org.localsend.localsend_app
dev.geopjr.Tuba                      org.mozilla.firefox
im.fluffychat.Fluffychat             org.qbittorrent.qBittorrent
im.riot.Riot                         org.shotcut.Shotcut
io.gitlab.gregorni.Letterpress       org.videolan.VLC
io.gitlab.news_flash.NewsFlash       org.yuzu_emu.yuzu
io.mpv.Mpv                           page.kramo.Cartridges
org.geogebra.GeoGebra                sh.ppy.osu
```
