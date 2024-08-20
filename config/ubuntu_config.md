ubuntu config

# ubuntu
- ubuntu 22
- ubuntu 24(current)

# settings
## appearance
- config
  - style `dark`
  - wallpaper `jelly fish in black background`

## ubuntu desktop
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
  - endeavour
- config dock application icon
  - show application icon `off`
> -> extensions > ubuntu dock > more > settings > launchers

## apps
- web `chromium web browser`
- mail `thunderbird mail`
- calendar `calendar`
- music `vlc media player`
- video `vlc media player`
- photos `image viewer`
> -> default apps

## displays
- desktop icons `off` 
```
sudo apt install gnome-shell-extension-prefs
```
- config
  - nightlight `0 to 0`

## keyboard
- use shortcuts
```
close_window `ctrl q`
home_folder `super e`
screenshot `prsc`
fullscreen `f11`
```

## multitasking
- config `number of workspaces 1`

## date&time
- config `lang en`
```
sudo localectl set-locale lc_time=en_us.utf8
```

## users
- remove password
```
sudo visudo `fira all=(all) nopasswd:all`
```
```
[no password prompt]
identity=unix-group:sudo
action=*
resultactive=yes
```
> -> admin:///etc/polkit-1/localauthority/50-local.d/nopw.pkla
- disable `keyring popup`
  - open `passwords and keys`
  - select `change passwd`
  - enter old passwd
  - leave it blank & enter
> ref `https://linuxconfig.org/how-to-disable-keyring-popup-on-ubuntu`

## sound
- system sound `off`
- config
  - alert sound `none`

## power
- automatic screen brightness `off`
- config `screen blank 5 min`
- config `automatic suspend`
  - battery power `20min`
  - plugged in `off`

## printer
- install canon printer driver
> ref `https://in.canon/en/support/search` `linux64 ij debian`

## privacy
- config `auto delete files after 30days`
> -> tmpfile&trash

# backup
- config 
  - storage `local folder:backup`
  - schedule 
    - backup automatically `on`
    - frequency `daily`
    - keep `forever`
> -> preferences

# fonts
- install fonts
> -> git/fonts
- config `system default fonts`
  - interface text `ubuntu sans`
  - document text `noto sans cjk sc`
  - monospace text `fira code`
> -> gnome tweaks > fonts
- config `preferred cjk fonts`
```
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
> ubuntu 22 -> admin:///etc/fonts/conf.d/64-language-selector-prefer.conf
> ubuntu 24 -> admin:///etc/fonts/conf.d/64-language-selector-cjk-prefer.conf

# softwares & updates
- disable `software updater popup`
```
sudo sed --in-place 's/NoDisplay=true/NoDisplay=false/g' /etc/xdg/autostart/update-notifier.desktop
```
- disable `auto update`
  - (all) `off`
> -> softwares & updates > other softwares

# gnome tweaks
- config `startup applications`
```
chromium
code
fcitx5
vlc media player
```

# files
- add templates
```
markdown.md
cpp.cpp
```

# chromium
- disable `new look`
  - install `chromium 124.0.6367.118`
```
sudo snap install chromium --revision 2842
sudo snap refresh --hold=forever
```
> ref https://snapcraft.io/docs/revisions https://snapcraft.io/docs/managing-updates
  - disable `flags`
```
chrome://flags/#customize-chrome-side-panel
chrome://flags/#chrome-refresh-2023
chrome://flags/#chrome-webui-refresh-2023
```
- config title bar
  - use system title bar `off`
> right click the title bar
- config `new tab page`
  - show shortcuts `off`
> -> customize chromium
- import bookmarks
> -> git/blogging/config/chromium_bookmarks.html
- import passwords
> -> git/blogging/config/chromium_passwords.zip
- config extensions
  - justblack `https://chromewebstore.google.com/detail/just-black/aghfnjkcakhmadgdomlmlhhaocbkloab`
  - adguard `https://chromewebstore.google.com/detail/adguard-adblocker/bgnkhhnnamicmpeenaelnjfhikgbkllg`
    - filters `ad blocking` `privacy` `annoyance` `...`
    - import settings `git/blogging/config/list_adguard.json`
    - allow in incognito
  - google translate `https://chromewebstore.google.com/detail/google-translate/aapbdbdomjkkjkaonfhkkikfgjllcleb`
    - my primary language `chinese(simplified)`
    - pop-up translations `immediately popup`
  - tampermonkey `https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo`
    - zhihu enhancement `https://greasyfork.org/en/scripts/419081`
    - zhihu dark mode `https://greasyfork.org/en/scripts/408224`
    - allow in incognito
  - bewlybewly `https://chromewebstore.google.com/detail/bewlybewly/bbbiejemhfihiooipfcjmjmbfdmobobp`
  - wayback machine `https://chromewebstore.google.com/detail/wayback-machine/fpnmgdkabkmnadcjpehmlllkndpkmiak`
    - login
- config fonts
  - standard `roboto`
  - serif `noto serif cjk sc`
  - sans-serif `noto sans cjk sc`
  - fixed-width `fira code`
  - mathematical `dejavu serif`
> -> chrome://settings/fonts

# code
- install (fix fcitx compatibilty issue)
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
  - menu & status & ... bar `off` 
  - minimap `off`
  - toggle bread crumbs `off`
  - render control characters `off`
  - sticky scroll `on`
> -> view > appearance
- config behavior
  - autosave `after delay`
  - font family `"Fira Code", "Noto Sans CJK SC", monospace`
  - font size `16`
  - font ligatures `on`
  - tab `2 spaces`
  - render whitespace `none`
  - lightbulb `off`
  - workspace `off`
> -> file > preferences > settings
- install theme
  - dracula official (current)
  - one dark pro
  - monokai pro
- install extensions
  - code geex
  - fitten code
  - eslint
  - prettier
  - code runner
    - run in terminal `on`
    - auto focus terminal `on`
    - fix `cjk filename` issue
```
"code-runner.executormap": {
  // "cpp": "cd $dir && g++ $filename -o $filenamewithoutext && $dir$filenamewithoutext",
  "cpp": "cd $dir && g++ \"$filename\" -o \"$filenamewithoutext\" && \"$dir$filenamewithoutext\"",
}
```
> -> settings.json
- config user snippets
> from -> git/blogging/config/cpp.code-snippets
> to -> file > preferences > configure user snippets
- config shortcuts
  - duplicate selection `ctrl d`
  - insert line below `shift enter`
  - run code `ctrl r`
> ctrl k ctrl s
- use shortcuts
  - do anything `ctrl shift p`
  - open settings page `ctrl ,`
  - open nav bar `alt`
  - open side bar `ctrl b`
  - open explorer `ctrl shift e`
  - open extensions `ctrl shift x`
  - new file `ctrl n`
  - close file `ctrl w`
  - format code `ctrl shift i`
  - preview markdown `ctrl shift v`
  - view all markdown headers `ctrl t`
  - stop code running in terminal `ctrl c`
  - skip words `ctrl leftarrow|rightarrow`
  - scroll page `ctrl uparrow|downarrow`
  - select letters `shift leftarrow|rightarrow`
  - select words `ctrl shift leftarrow|rightarrow`
  - select line `ctrl l`
  - select blocks `shift alt leftarrow|rightarrow`
  - duplicate cursor `ctrl shift uparrow|downarrow` | `shift alt uparrow|downarrow` | `alt click` 
  - move current line `alt uparrow|downarrow`
  - reset cursor `esc`

# git
- config 
```
git config --global user.name "Fira"
git config --global user.email "devvhy@zohomail.cn"
git config --global push.autoSetupRemote true
git config --global credential.helper store
```
> -> git/blogging/config/git_config.txt
  - github 
> -> https://docs.github.com/en/get-started/getting-started-with-git/about-remote-repositories#cloning-with-https-urls
  - gitee (sync mirror)
> use username and password
- use shortcuts
> -> git/blogging/config/git_shortcut.txt

# fcitx5
- install
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
```
// download CustomPinyinDictionary_Fcitx.dict
mv CustomPinyinDictionary_Fcitx.dict ~/.local/share/fcitx5/pinyin/dictionaries/
```
> -> https://github.com/wuhgit/CustomPinyinDictionary
  - set default
```
im-config
```
  - set environment variables
```
GTK_IM_MODULE=fcitx
QT_IM_MODULE=fcitx
XMODIFIERS=@im=fcitx
SDL_IM_MODULE=fcitx
GLFW_IM_MODULE=fcitx
```
> -> admin:///etc/environment
- disable `input method hint`
  - show input method infomation `off` 
> -> fcitx5-configtool > global options > behavior
- config pinyin
  - fuzzy pinyin `on`
  - prediction `off`
  - character&punctuation `half-width`
> -> input method > pinyin > settings icon
- config theme
```
git clone https://github.com/tonyfettes/fcitx5-nord.git
mkdir -p ~/.local/share/fcitx5/themes/
cd fcitx5-nord
cp -r Nord-Dark/ Nord-Light/ ~/.local/share/fcitx5/themes/
```
```
Theme=Nord-Dark
Theme=Default //current
```
> -> ~/.config/fcitx5/conf/classicui.conf
- use shortcuts
```
clipboard `ctrl ;`
```

# thunderbird
- config `mail`
  - zoho
  - outlook
  - gmail
  - _qq
- config `junk`

# v2raya
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
- config nodes
  - ref
> -> git/blogging/swim.md
  - repos
```
https://github.com/aiboboxx/v2rayfree
https://raw.githubusercontent.com/aiboboxx/v2rayfree/main/v2

https://github.com/adiwzx/freenode/
https://raw.githubusercontent.com/adiwzx/freenode/main/adispeed.txt

https://github.com/pawdroid/free-servers
https://raw.githubusercontent.com/pawdroid/free-servers/main/sub

https://github.com/mksshare/mksshare.github.io
https://raw.githubusercontent.com/mksshare/mksshare.github.io/main/README.md

https://github.com/chengaopan/AutoMergePublicNodes
https://raw.githubusercontent.com/chengaopan/AutoMergePublicNodes/master/list.txt
```
  - mirrors
```
githubraw.com
raw.staticdn.net
mirror.ghproxy.com
raw.gitmirror.com
raw.kkgithub.com
raw.fastgit.org
```

# wine
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

# obs
- config `source`
  - mic/aux(pulseaudio)
  - screen capsule(pipewire)
  - desktop audio
- config `setting/video`
  - output resolution `2560x1600`
  - frame rate `60fps //or 30fps`

# goldendict
- install dictionaries
```
Longman Dictionary of Contemporary English
https://mdx.mdict.org/%E5%85%AD%E5%A4%A7%E7%9F%A5%E5%90%8D%E8%AF%8D%E5%85%B8/%E6%9C%97%E6%96%87_Longman/STFU%20LongmanBundle-%E7%BB%AE%E5%8F%A5%E6%85%A8%E9%90%97-By%20Amazon%2020160928/Longman%20Dictionary%20Of%20Contemporary%20English%206th%20EnEn/LongmanDictionaryOfContemporaryEnglish6thEnEn.mdd
https://mdx.mdict.org/%E5%85%AD%E5%A4%A7%E7%9F%A5%E5%90%8D%E8%AF%8D%E5%85%B8/%E6%9C%97%E6%96%87_Longman/STFU%20LongmanBundle-%E7%BB%AE%E5%8F%A5%E6%85%A8%E9%90%97-By%20Amazon%2020160928/Longman%20Dictionary%20Of%20Contemporary%20English%206th%20EnEn/LongmanDictionaryOfContemporaryEnglish6thEnEn.mdx

Oxford Advanced Learner's Dictionary
https://mdx.mdict.org/%E5%85%AD%E5%A4%A7%E7%9F%A5%E5%90%8D%E8%AF%8D%E5%85%B8/%E7%89%9B%E6%B4%A5_Oxford/OALD8C%20V1.9%20By%20Amazon%2020160318/OALD8C.mdd
https://mdx.mdict.org/%E5%85%AD%E5%A4%A7%E7%9F%A5%E5%90%8D%E8%AF%8D%E5%85%B8/%E7%89%9B%E6%B4%A5_Oxford/OALD8C%20V1.9%20By%20Amazon%2020160318/OALD8C.mdx

Macmillan English Dictionary
https://mdx.mdict.org/%E5%85%AD%E5%A4%A7%E7%9F%A5%E5%90%8D%E8%AF%8D%E5%85%B8/%E9%BA%A6%E5%85%8B%E7%B1%B3%E4%BC%A6_Macmillan/Macmillan%20English%20Dictionary/MacmillanEnEn.mdd
https://mdx.mdict.org/%E5%85%AD%E5%A4%A7%E7%9F%A5%E5%90%8D%E8%AF%8D%E5%85%B8/%E9%BA%A6%E5%85%8B%E7%B1%B3%E4%BC%A6_Macmillan/Macmillan%20English%20Dictionary/MacmillanEnEn.mdx

Collins Cobuild Advanced Learner's English Dictionary
https://mdx.mdict.org/%E5%85%AD%E5%A4%A7%E7%9F%A5%E5%90%8D%E8%AF%8D%E5%85%B8/%E6%9F%AF%E6%9E%97%E6%96%AF_Collins/Collins%20COBUILD%20Advanced%20Learner_s%20Dictinary%208th_%2016-4-20/Collins_COBUILD_Advanced_Learner%27s_Dictinary_8th_edition.mdx

Cambridge Advanced Learner’s Dictionary
https://mdx.mdict.org/%E5%85%AD%E5%A4%A7%E7%9F%A5%E5%90%8D%E8%AF%8D%E5%85%B8/%E5%89%91%E6%A1%A5_Cambridge/Cambridge%20Advanced%20Learner_s%20Dictionary%203rd%20v1.5/Cambridge%20Advanced%20Learner%27s%20Dictionary%203th.mdd
https://mdx.mdict.org/%E5%85%AD%E5%A4%A7%E7%9F%A5%E5%90%8D%E8%AF%8D%E5%85%B8/%E5%89%91%E6%A1%A5_Cambridge/Cambridge%20Advanced%20Learner_s%20Dictionary%203rd%20v1.5/Cambridge%20Advanced%20Learner%27s%20Dictionary%203th.mdx

Merriam-Webster's Advanced Learner's English Dictionary
https://mdx.mdict.org/%E5%85%AD%E5%A4%A7%E7%9F%A5%E5%90%8D%E8%AF%8D%E5%85%B8/%E9%9F%A6%E6%B0%8F_Merriam-Webster/Merriam-Webster_s%20Advanced%20Learner_s%20English%20Dictionary%20By%20Amazon/mwaled.mdd
https://mdx.mdict.org/%E5%85%AD%E5%A4%A7%E7%9F%A5%E5%90%8D%E8%AF%8D%E5%85%B8/%E9%9F%A6%E6%B0%8F_Merriam-Webster/Merriam-Webster_s%20Advanced%20Learner_s%20English%20Dictionary%20By%20Amazon/mwaled.mdx

// en-ch dicts
英汉大词典-第2版
https://mdx.mdict.org/Recommend/%E8%8B%B1%E6%B1%89%E5%A4%A7.zip
// * remember to keep css file

牛津高阶英汉双解词典（第9版）
https://mdx.mdict.org/Recommend/%E7%89%9B%E6%B4%A5%E9%AB%98%E9%98%B6%E8%8B%B1%E6%B1%89%E5%8F%8C%E8%A7%A3%E8%AF%8D%E5%85%B8%EF%BC%88%E7%AC%AC9%E7%89%88%EF%BC%89-%20%E5%B8%A6%E9%AB%98%E6%B8%85%E7%89%88%E5%9B%BE%E7%89%87.zip

// ch-en dicts
现代英汉汉英综合大辞典
https://dl.mdict.org/1/%E7%8E%B0%E4%BB%A3%E8%8B%B1%E6%B1%89%E6%B1%89%E8%8B%B1%E7%BB%BC%E5%90%88%E5%A4%A7%E8%BE%9E%E5%85%B8.zip

新世纪汉英大词典
https://mdx.mdict.org/Recommend/%E6%96%B0%E4%B8%96%E7%BA%AA%E6%B1%89%E8%8B%B1%E5%A4%A7.zip

// idoim dicts
The Free Dictionary's Idioms dictionary
https://mdx.mdict.org/Recommend/fmidioms.zip

//other dicts
Penguin English Dictionary (third Edition)
https://mdx.mdict.org/Recommend/The%20Penguin%20English%20Dictionary%203rd%2C%202007_2.zip
```
> -> Edit > Dictionaries
- config dicts order
```
英汉大词典（第2版）
牛津高阶英汉双解词典（第9版）
Cambridge Advanced Learner's Dictionary 3th
Collins COBUILD Advanced Learner's Dictinary | 8th ed (En-En)
Longman Dictionary of Contemporary English 6th edition
Macmillan English Dictionary, 2016
Merriam-Webster's Advanced Learner's English Dictionary
The Penguin English Dictionary 3rd, 2007
FreeDictionary-Idioms
现代英汉汉英综合大辞典
新世纪汉英大词典
```
> -> Edit > Dictionaries
- config appearance
  - navigation `on`
  - others `off`
> -> View
- config behavior
  - open new tabs in background `off`
> -> Edit > Preferences > Interface > Tabbed Browsing
- use shortcuts
```
open screen word selector `ctrl c ctrl c`
```

# vlc
- config
  - show settings `all`
> -> tools > preferences
- config jump length
  - short jump length `5`
> -> interface > hotkeys settings
- config interface
  - show notification popup on track change `never`
  - continue playback `never`
> -> interface > main interfaces > qt

# qbittorrent
- config trackers
  - automatically add these trackers to new downloads `config/list_trackers.md`
> -> tools > preferences > bitorrent

# terminal
- install `oh-my-zsh`
- set default `sudo chsh -s /bin/zsh`

# apps
- install in terminal
```
sudo apt install git
sudo apt install zsh
sudo apt install nodejs
sudo apt install npm
sudo apt install python3
sudo apt install imagemagick
sudo apt install gnome-tweaks
sudo apt install goldendict
sudo snap install android-studio
sudo snap install chromium --revision 2842
sudo snap install firefox
sudo snap install gimp
sudo snap install inkscape
sudo snap install kdenlive
sudo snap install krita
sudo snap install obs-studio
sudo snap install qbittorrent-arnatious
sudo snap install shotcut --classicDD
sudo snap install telegram-desktop
sudo snap install thunderbird
sudo snap install v2raya
sudo snap install vlc
```
- install from websites
  - virtualbox
  - dingtalk
  - onsyuri
  - localsend



