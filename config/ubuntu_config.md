ubuntu config

# ubuntu
## appearance
- style dark
- auto hide the dock 
- panel mode off
- icon size max
- trash hidden
- remove some favs on the dock
- select wallpaper(i prefer the jelly fish on black bg)

## displays
- nightlight `0 to 0`
- desktop icons hidden `sudo apt install gnome-shell-extension-prefs`

## keyboard
- shortcuts
```
close_window `ctrl q`
home_folder `super e`
screenshot `prsc`
fullscreen `f11`
```

## multitasking
- num_workspaces 1

## date&time
- lang en
```
sudo localectl set-locale lc_time=en_us.utf8
```


## users
- no passwd
```
sudo visudo `fira all=(all) nopasswd:all`

// edit admin:///etc/polkit-1/localauthority/50-local.d/nopw.pkla
[no password prompt]
identity=unix-group:sudo
action=*
resultactive=yes
```
- disable keyring auth popup
```
// ref `https://linuxconfig.org/how-to-disable-keyring-popup-on-ubuntu`
- open `passwords and keys`
- select `change passwd`
- enter old passwd
- leave it blank & enter
```


## sound
- system_sound off

## power
- automatic screen brightness off
- screen blank `5 min`

## printer
- search for driver(`linux64 ij debian`) `https://in.canon/en/support/search`

## privacy:tmpfile&trash
- auto delete files after 30days

# fonts
- install from gh/firavoyage/fonts
- change default fonts
```
/etc/fonts/conf.d/64-language-selector-prefer.conf
put the default font to the top

Noto Sans CJK SC
Noto Serif CJK SC
Fira Code
```

# software&updates
- never check for upds

# files
- add templates
```
markdown.md
cpp.cpp
```

# gedit
- autosave
- tab = 2spaces
- line_nums & status_bar hidden
- font `fira code`

# image viewer
- smooth while zoom out

# chromium
- sys_title_bar hidden
- add bookmarks: 
```
// git/firavoyage/blogging/config/chromium_bookmarks.html
```
- add extensions
```
adguard
lulutranslate
tampermonkey
clear new tab
justblack
```
- extensions `allow in incognito`
- extension settings
```
adguard 
- ad_rules.txt

lulutranslate 
- press `alt l` to open
- press `alt t` to translate
```

# code
- welcome_page hidden, activity & tab & status & menu bar hidden, minimap hidden
- autosave
- font-family `'Fira Code', 'Source Han Serif CN', monospace`
- workspace_trust `/`
- install g++
```
sudo apt install g++
```
- install extensions `atom-style code-runner idea-shortcuts`
- code-runner settings
  - run in terminal
  - auto focus terminal
  - chinese support
```
// in settings.json
// chinese file name ok
"code-runner.executormap": {
  // "cpp": "cd $dir && g++ $filename -o $filenamewithoutext && $dir$filenamewithoutext",
  "cpp": "cd $dir && g++ \"$filename\" -o \"$filenamewithoutext\" && \"$dir$filenamewithoutext\"",
}
```
- shortcuts
```
// install ex `idea-shortcuts` first

open_side_bar ctrl b
open_explorer ctrl shift e
open_ex ctrl shift x

new_file ctrl n
close_file ctrl w
rename_file alt enter
open_containing_folder ctrl shift o

run_code ctrl r
stop_running ctrl e

dup_line ctrl d
insert_line shift enter
show_para_hints ctrl p
```

# git
- config 
```
git config user.email _email
git config user.name _name

//save passwd
git config --global credential.helper store
```
- commands
```
git init
git clone https://_.git
git add .
git commit -m '.'
git remote add e https://_.git
git push e
git pull e master
```

# chinese input
- ref `https://zhuanlan.zhihu.com/p/508797663`
- fcitx5
```
// install
sudo apt install fcitx5 \
fcitx5-chinese-addons \
fcitx5-frontend-gtk4 fcitx5-frontend-gtk3 fcitx5-frontend-gtk2 \
fcitx5-frontend-qt5

// chinese support
sudo apt install --install-recommends fcitx5 fcitx5-chinese-addons

// install chinese pkg
wget https://github.com/felixonmars/fcitx5-pinyin-zhwiki/releases/download/0.2.4/zhwiki-20220416.dict

// move chinese pkg
mkdir -p ~/.local/share/fcitx5/pinyin/dictionaries/
mv zhwiki-20220416.dict ~/.local/share/fcitx5/pinyin/dictionaries/

// set default
im-config

// environment variables
sudo vi /etc/environment

gtk_im_module=fcitx
qt_im_module=fcitx
xmodifiers=@im=fcitx
sdl_im_module=fcitx
glfw_im_module=ibus

// auto start by tweaks
sudo apt install gnome-tweaks

// config
fcitx5-configtool

// debug
sudo apt install ibus
```
- pinyin settings
```
fuzzy pinyin

character&punctuation half-width

cloud pinyin backend baidu

useless hotkey empty
sc2tc hotkey empty

prediction off
```
- global options - behavior
```
show input method info off
```

# thunderbird
- config mail
- junk settings

# v2raya
- install dependence 
```
sudo apt install v2ray
```
- login 
```
name `f` pw `firafira`
```
- proxy only gfwlist
- free nodes
```
//you can search for lastest infomation qwq...
//change the domain with a mirror especially when you are in china mainland or india

//repos
https://github.com/aiboboxx/v2rayfree
https://raw.githubusercontent.com/aiboboxx/v2rayfree/main/v2

https://github.com/adiwzx/freenode/
https://raw.githubusercontent.com/adiwzx/freenode/main/adispeed.txt

https://github.com/Pawdroid/Free-servers
https://raw.githubusercontent.com/Pawdroid/Free-servers/main/sub

https://github.com/mksshare/mksshare.github.io

//mirrors
raw.staticdn.net
raw.gitmirror.com
github.com.cnpmjs.org
kkgithub.com
proxy.v2gh.com
hub.njuu.cf
...

```

# wine
- install necessary libraries
```
sudo apt install libasound2-dev
sudo apt install libfontconfig-dev
```
- `winecfg`
- exe `open with wine windows program loader`
- delete a program `/home/fira/.local/share/applications/`

# obs
- source
  - mic/aux(pulseaudio)
  - screen capsule(pipewire)
  - desktop audio
- setting/video
  - output resolution 2560x1600
  - frame rate 60fps

# eudic
- dictionary
```
put en-en dict right after en-zh dict
```

# terminal
- zsh `sudo apt install zsh`
- install oh-my-zsh
- set def `sudo chsh -s /bin/zsh`

# softwares
- terminal -> apt
  - nodejs
  - wine
- software store -> snap
  - virtualbox
  - vlc
  - obs
  - telegram desktop
  - terminal-parrot
  - kolourpaint
  - shotcut
  - inkscape
- chromium -> dl online
  - dingtalk
  - eudic

# .the_apps_i_love
- ubuntu
- chrome
- git
- code
- luogu
- codeforces


