# ubuntu

## .

- ubuntu 22
- ubuntu 24 (current)

## `settings`

### appearance

- config
  - style `dark`
  - wallpaper `jelly fish in black background`

### ubuntu desktop

- config
  - desktop icons `off`
  - auto hide dock `on`
  - panel mode `off`
  - icon size `max`
  - configure dock behavior
    - show trash `off`
- config dock pins
  - chromium
  - thunderbird
  - code
  - goldendict
  - solanum
- config dock application icon
  - -> `extensions > ubuntu dock > more > settings > launchers`
  - show application icon `off`

### apps

- -> `default apps`
- web `chromium web browser`
- mail `thunderbird mail`
- calendar `calendar`
- music `vlc media player`
- video `vlc media player`
- photos `image viewer`

### displays

- desktop icons `off`

```
sudo apt install gnome-shell-extension-prefs
```

- config
  - nightlight `0 to 0`

### keyboard

- use shortcuts
  - close window `ctrl q`
  - home folder `super e`
  - screenshot `prsc`
  - fullscreen `f11`

### multitasking

- config `number of workspaces 1`

### date&time

- config `lang en`
  ```
  sudo localectl set-locale lc_time=en_us.utf8
  ```

### users

- remove password
  - -> `admin:///etc/polkit-1/localauthority/50-local.d/nopw.pkla`
    ```
    sudo visudo `fira all=(all) nopasswd:all`
    ```
    ```
    [no password prompt]
    identity=unix-group:sudo
    action=*
    resultactive=yes
    ```
- disable `keyring popup`
  - ref https://linuxconfig.org/how-to-disable-keyring-popup-on-ubuntu
  - open `passwords and keys`
  - select `change passwd`
  - enter old passwd
  - leave it blank & enter

### sound

- system sound `off`
- config
  - alert sound `none`

### power

- power mode `performance`
- automatic screen brightness `off`
- dim screen `on`
- screen blank `5 min`
- automatic power saver `off`
- automatic suspend `20min` `off`
- power button behavior `power off`
- show battery percentage `off`

### privacy

- -> `tmpfile&trash`
- config `auto delete files after 30days`

### fonts

- install fonts
  - -> `git/fonts`
- config `preferred cjk fonts`
  - (ubuntu 22) -> `admin:///etc/fonts/conf.d/64-language-selector-prefer.conf`
  - (ubuntu 24) -> `admin:///etc/fonts/conf.d/64-language-selector-cjk-prefer.conf`
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

## `software & updates`

- config source
  - -> `/etc/apt/sources.list.d/`
- disable `software updater popup`
  ```
  sudo apt-get remove update-notifier
  ```
- disable `auto update`
  - -> `softwares & updates > other softwares`
  - `*` `off`

## `software(flatpak)`

- disable `auto update`
  - -> `preferences`
  - software updates `manual`

## `gnome tweaks`

- config `fonts`
  - interface text `ubuntu sans`
  - document text `noto sans cjk sc`
  - monospace text `fira code`
- config `mouse and touchpad`
  - mouse middle click paste `off`
  - accelerations `on`
- config `appearance`
  - styles `yaru`
  - background `jellyfish`
- config `windows`
  - titlebar actions
    - double click `toggle maximize`
    - middle click `none`
    - secondary click `menu`
  - titlebar buttons
    - maximize `off`
      - use `super up` or `double click` instead
    - minimize `on`
    - placement `right`
  - click actions
    - attach modal dialogs `on`
    - center new windows `on`
    - window action key `super`
    - resize with secondary click `off`
  - window `click to focus`
- config `startup applications`
  - chromium
    - `env BAMF_DESKTOP_FILE_HINT=/var/lib/snapd/desktop/applications/chromium_chromium.desktop /snap/bin/chromium %U`
  - code
    - `/usr/share/code/code %F`
  - fcitx5
    - `/usr/bin/fcitx5`
  - vlc media player
    - `env BAMF_DESKTOP_FILE_HINT=/var/lib/snapd/desktop/applications/vlc_vlc.desktop /snap/bin/vlc %U`
  - solanum
    - `flatpak run org.gnome.Solanum`

## `backup`

- config
  - storage `/backup`
  - schedule
    - -> `preferences`
    - backup automatically `on`
    - frequency `daily`
    - keep `forever`

## `files`

- add templates
  - -> `templates`
  - markdown.md
  - cpp.cpp

## `chromium`

- disable `new look`
  - ref https://snapcraft.io/docs/revisions https://snapcraft.io/docs/managing-updates
  - install `chromium 124.0.6367.118`
    ```
    sudo snap install chromium --revision 2842
    sudo snap refresh --hold=forever
    ```
- disable `flags`
  ```
  chrome://flags/#customize-chrome-side-panel
  chrome://flags/#chrome-refresh-2023
  chrome://flags/#chrome-webui-refresh-2023
  ```
- config title bar
  - (right click the title bar)
  - use system title bar `off`
- config `new tab page`
  - -> `customize chromium`
  - show shortcuts `off`
- import bookmarks
  - -> `git/blogging/config/chromium bookmarks.html`
- import passwords `git/blogging/config/chromium_passwords.zip`
- config extensions
  - justblack https://chromewebstore.google.com/detail/just-black/aghfnjkcakhmadgdomlmlhhaocbkloab
  - adguard https://chromewebstore.google.com/detail/adguard-adblocker/bgnkhhnnamicmpeenaelnjfhikgbkllg
    - general / activate the most appropriate filters automatically `off`
    - filters `ad blocking` `privacy` `annoyance`
    - user rules / import settings `git/blogging/config/list_adguard.txt`
    - additional settings / notify about extension updates `off`
  - google translate https://chromewebstore.google.com/detail/google-translate/aapbdbdomjkkjkaonfhkkikfgjllcleb
    - my primary language `chinese(simplified)`
    - pop-up translations `immediately popup`
  - tampermonkey https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo
    - zhihu enhancement https://greasyfork.org/en/scripts/419081
    - zhihu dark mode https://greasyfork.org/en/scripts/408224
    - allow copy https://greasyfork.org/en/scripts/12561-allow-copy-and-context-menu-continued
      - original includes `off`
      - user matches `on`
        - zhihu `*://www.zhihu.com/*`
        - zhihu article `*://zhuanlan.zhihu.com/*`
        - nga `*://nga.178.com/*`
  - bewlybewly https://chromewebstore.google.com/detail/bewlybewly/bbbiejemhfihiooipfcjmjmbfdmobobp
  - wayback machine https://chromewebstore.google.com/detail/wayback-machine/fpnmgdkabkmnadcjpehmlllkndpkmiak
    - login
  - wakatime
    - add api key
    - logging type `entire url`
    - theme `dark`
- config fonts
  - -> `chrome://settings/fonts`
  - standard `roboto`
  - serif `noto serif cjk sc`
  - sans-serif `noto sans cjk sc`
  - fixed-width `fira code`
  - mathematical `dejavu serif`

## `code`

- install
  - fix `fcitx compatibilty issue`
    ```
    sudo snap remove code
    curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
    sudo install -o root -g root -m 644 packages.microsoft.gpg /usr/share/keyrings/
    sudo sh -c 'echo "deb [arch=amd64 signed-by=/usr/share/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/vscode stable main" > /etc/apt/sources.list.d/vscode.list'
    sudo apt install apt-transport-https
    sudo apt update
    sudo apt install code
    ```
- config appearance
  - -> `view > appearance`
  - menu & status & ... bar `off`
  - minimap `off`
  - render control characters `off`
  - sticky scroll `on`
  - toggle bread crumbs `off`
- config behavior
  - -> `file > preferences > settings`
  - autosave `after delay`
  - font family `"Fira Code", "Noto Sans CJK SC", monospace`
  - font ligatures `on`
  - font size `16`
  - git:enabled `off`
  - lightbulb `off`
  - render whitespace `none`
  - tab `2 spaces`
  - workspace `off`
- install theme
  - dracula official (current)
  - one dark pro
  - monokai pro
- install extensions
  - wakatime
    - add api key
  - eslint
  - prettier
  - javascript snippets
  - javascript (es6) code snippets
  - code runner
    - -> `settings`
    - run in terminal `on`
    - auto focus terminal `on`
    - -> `settings.json`
    - fix `cjk filename issue`
      ```
      "code-runner.executormap": {
        // "cpp": "cd $dir && g++ $filename -o $filenamewithoutext && $dir$filenamewithoutext",
        "cpp": "cd $dir && g++ \"$filename\" -o \"$filenamewithoutext\" && \"$dir$filenamewithoutext\"",
      }
      ```
- config user snippets
  - -> `git/blogging/config/config cpp.code-snippets`
  - -> `file > preferences > configure snippets`
- use shortcuts
  - -> `file > preferences > keyboard shortcuts` `ctrl shift p open keyboard shortcuts json`
  - - do anything `ctrl shift p`
  - - open settings `ctrl ,`
    - open nav bar `alt`
    - open side bar `ctrl b`
    - _open panel_ `ctrl shift n`
    - _new window_ `ctrl shift n`
      - removed
    - open terminal `ctrl backquote`
    - open explorer `ctrl shift e`
    - open extensions `ctrl shift x`
  - - new file `ctrl n`
    - close file `ctrl w`
    - _save as_ `ctrl alt s`
  - - auto indent (format code) `ctrl shift i`
    - preview markdown `ctrl shift v`
  - - _run code_ `ctrl r`
    - _stop running in terminal_ `ctrl c`
  - - _move cursor left_ `ctrl h` `left`
    - _move cursor right_ `ctrl l` `right`
    - _select line_ `ctrl l`
      - removed
    - _move cursor down_ `ctrl j` `down`
    - _move cursor up_ `ctrl k` `up`
    - _move cursor word left_ `ctrl alt h` `alt h` `ctrl left`
    - _move cursor word right_ `ctrl alt l` `alt l` `ctrl right`
    - _select left_ `ctrl shift h` `shift left`
    - _select right_ `ctrl shift l` `shift right`
    - _select all matches_ `ctrl shift l`
      - removed
    - _select down_ `ctrl shift j` `ctrl shift down`
    - _select up_ `ctrl shift k` `ctrl shift up`
    - _delete line_ `ctrl shift k`
      - removed
    - _select word left_ `ctrl shift alt h` `shift alt h` `ctrl shift left`
    - _select word right_ `ctrl shift alt l` `shift alt l` `ctrl shift right`
    - _expand selection_ `ctrl s` `shift alt right`
    - _save_ `ctrl s`
      - removed
    - _shrink selection_ `ctrl shift s` `shift alt left`
    - _save as_ `ctrl shift s`
      - removed
    - _duplicate selection_ `ctrl d`
    - add cursor `alt click`
    - _add cursor below_ `ctrl alt j` `ctrl shift alt j` `ctrl shift down`
    - _add cursor above_ `ctrl alt k` `ctrl shift alt k` `ctrl shift up`
    - reset cursor `esc`
    - _move line down_ `alt j` `alt down`
    - _move line up_ `alt k` `alt up`
    - _insert line below_ `shift enter`
    - _insert line above_ `ctrl shift enter`
    - _delete to word start_ `ctrl backspace`
    - delete to word end `ctrl delete`
  - - _indent line_ `tab` `ctrl ]`
      - when `!hasNextTabstop && !suggestWidgetVisible`
    - _outdent line_ `shift tab` `ctrl [`
    - _tab_ `tab`
      - removed
    - fold code `ctrl shift [`
    - unfold code `ctrl shift ]`
  - - find `ctrl f`
    - _replace_ `ctrl h`
      - when `findInputFocussed`
    - _find all references_ `ctrl shift r`
    - find symbol in current file `ctrl shift o`
    - find symbol everywhere `ctrl t`
  - - go to line `ctrl g`
  - - rename `f2`
  - - _triggle parameter hints_ `ctrl p`
    - _go to file_ `ctrl p`
      - removed
  - - zoom in `ctrl +`
    - zoom out `ctrl -`
  - - split screen `ctrl \`

## `git`

- config github
  - ref https://docs.github.com/en/get-started/getting-started-with-git/about-remote-repositories#cloning-with-https-urls
- config gitee (github mirror)
  - use username and password
- config zshrc
  - -> `~/.zshrc`
  - -> `git/blogging/config/terminal zshrc.txt` 
- use shortcuts
  - -> `git/blogging/config/terminal git shortcut.txt`
  - `push` sync all git repos

## `fcitx5`

- install app
  ```
  sudo apt install fcitx5 fcitx5-chinese-addons fcitx5-frontend-gtk4 fcitx5-frontend-gtk3 fcitx5-frontend-gtk2 fcitx5-frontend-qt5
  ```
- install dict
  ```
  wget https://github.com/felixonmars/fcitx5-pinyin-zhwiki/releases/download/0.2.4/zhwiki-20220416.dict
  mkdir -p ~/.local/share/fcitx5/pinyin/dictionaries/
  mv zhwiki-20220416.dict ~/.local/share/fcitx5/pinyin/dictionaries/
  ```
- install another dict
  - -> https://github.com/wuhgit/CustomPinyinDictionary
  - download CustomPinyinDictionary_Fcitx.dict
    ```
    mv CustomPinyinDictionary_Fcitx.dict ~/.local/share/fcitx5/pinyin/dictionaries/
    ```
- config default
  ```
  im-config
  ```
- config environment variables
  - -> `admin:///etc/environment`
    ```
    GTK_IM_MODULE=fcitx
    QT_IM_MODULE=fcitx
    XMODIFIERS=@im=fcitx
    SDL_IM_MODULE=fcitx
    GLFW_IM_MODULE=fcitx
    ```
- disable `input method hint`
  - -> `fcitx5-configtool > global options > behavior`
  - show input method infomation `off`
- config english
  - -> `input method > pinyin > settings icon`
  - trigger hint mode `empty`
  - trigger hint mode one time `empty`
- config pinyin
  - -> `input method > pinyin > settings icon`
  - fuzzy pinyin `on`
  - prediction `off`
  - character&punctuation `half-width`
- config theme
  ```
  git clone https://github.com/tonyfettes/fcitx5-nord.git
  mkdir -p ~/.local/share/fcitx5/themes/
  cd fcitx5-nord
  cp -r Nord-Dark/ Nord-Light/ ~/.local/share/fcitx5/themes/
  ```
  - -> `~/.config/fcitx5/conf/classicui.conf`
    ```
    Theme=Nord-Dark
    Theme=Default
    ```
- use shortcuts
  - clipboard `ctrl ;`

## `thunderbird`

- config `mail`
  - zoho
  - outlook
  - gmail
  - qq
- config `junk`

## `v2raya`

- install dependence
  ```
  sudo apt install v2ray
  ```
- config account
  ```
  name `f`
  passwd `firafira`
  ```
- config `proxy only gfwlist` or `proxy except cn sites`
- config proxy nodes
  - ref `git/blogging/swim.md`
  - repos
    - https://github.com/aiboboxx/v2rayfree
      - https://raw.githubusercontent.com/aiboboxx/v2rayfree/main/v2
    - https://github.com/adiwzx/freenode/
      - https://raw.githubusercontent.com/adiwzx/freenode/main/adispeed.txt
    - https://github.com/pawdroid/free-servers
      - https://raw.githubusercontent.com/pawdroid/free-servers/main/sub
    - https://github.com/mksshare/mksshare.github.io
      - https://raw.githubusercontent.com/mksshare/mksshare.github.io/main/README.md
    - https://github.com/chengaopan/AutoMergePublicNodes
      - https://raw.githubusercontent.com/chengaopan/AutoMergePublicNodes/master/list.txt
  - mirrors
    - githubraw.com
    - raw.staticdn.net
    - mirror.ghproxy.com
    - raw.gitmirror.com
    - raw.kkgithub.com
    - raw.fastgit.org
  -

## `wine`

- install
  ```
  sudo dpkg --add-architecture i386
  wget -O - https://dl.winehq.org/wine-builds/winehq.key | sudo apt-key add -
  sudo add-apt-repository 'deb https://dl.winehq.org/wine-builds/ubuntu/ jammy main'
  sudo apt update
  sudo apt install --install-recommends winehq-stable
  ```
- install libraries
  ```
  sudo apt install libasound2-dev
  sudo apt install libfontconfig-dev
  ```
- config sound library
  ```
  sudo apt install winetricks
  winetricks sound=pulse
  ```
- config wine
  ```
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
  - open screen word selector `ctrl c c`
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

- config trackers
  - -> `tools > preferences > bitorrent`
  - automatically add these trackers to new downloads `config/list_trackers.md`

## `terminal`

- install `oh-my-zsh`
- set default `sudo chsh -s /bin/zsh`

## misc

- install
  ```
  sudo apt install git
  git config --global user.name "Fira"
  git config --global user.email "devvhy@zohomail.cn"
  git config --global push.autoSetupRemote true
  git config --global credential.helper store
  sudo apt install cbonsai
  sudo apt install cowsay
  sudo apt install figlet
  sudo apt install flatpak
  sudo apt install fortune
  sudo apt install gnome-software-plugin-flatpak
  sudo apt install gnome-tweaks
  sudo apt install goldendict
  sudo apt install imagemagick
  sudo apt install neofetch
  sudo apt install nodejs
  sudo apt install npm
  sudo apt install python3
  sudo apt install virtualbox
  sudo apt install zsh
  sudo flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo
  sudo npm config set registry https://registry.npmjs.org/
  sudo npm install -g @wenyan/cli
  sudo npm install -g marked
  sudo npm install -g terser
  sudo snap install android-studio
  sudo snap install blender --classic
  sudo snap install chromium --revision 2842
  sudo snap install docker
  sudo snap install firefox
  sudo snap install gimp
  sudo snap install gnome-boxes
  sudo snap install inkscape
  sudo snap install kdenlive
  sudo snap install kolourpaint
  sudo snap install krita
  sudo snap install obs-studio
  sudo snap install qbittorrent-arnatious
  sudo snap install telegram-desktop
  sudo snap install thunderbird
  sudo snap install v2raya
  sudo snap install vlc
  ```
- install code
  ```
  sudo snap remove code
  curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
  sudo install -o root -g root -m 644 packages.microsoft.gpg /usr/share/keyrings/
  sudo sh -c 'echo "deb [arch=amd64 signed-by=/usr/share/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/vscode stable main" > /etc/apt/sources.list.d/vscode.list'
  sudo apt install apt-transport-https
  sudo apt update
  sudo apt install code
  ```
