ubuntu config

# ubuntu
## appearance
- style dark
- auto hide the dock 
- panel mode off
- icon size max
- trash hidden
- remove some favs on the dock
- select bg

## displays
- nightlight `18 to 7`
- desktop icons hidden `sudo apt install gnome-shell-extension-prefs`

## keyboard
- shortcuts
```
close_window ctrl q
home_folder super e
screenshot prsc
fullscreen f11
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

// admin:///etc/polkit-1/localauthority/50-local.d/nopw.pkla
[no password prompt]
identity=unix-group:sudo
action=*
resultactive=yes
```
- disable keyring auth popup
```
ref `https://linuxconfig.org/how-to-disable-keyring-popup-on-ubuntu`
- open passwords and keys
- change pw
- enter old pw
- leave it blank & enter
```


## sound
- system_sound off

## power
- automatic screen brightness off

## printer
- search for driver(`linux64 ij debian`) `https://in.canon/en/support/search`

## privacy:tmpfile&trash
- auto delete files after 30days

# fonts
- from gh/firavoyage/fonts
- install
- change default fonts
```
/etc/fonts/conf.d/64-language-selector-prefer.conf
add to prefer
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
- tab 2spaces
- line_nums & status_bar hidden

# chromium
- sys_title_bar hidden
- add bookmarks: 
```
oi,github,recreation...
folders todo,tools,blogs,...
```
- exs adguard lulutranslate justblack tampermonkey clearnewtab
- exs `allow in incognito`
- exs settings
```
adguard 
- ad_rules.txt
lulutranslate 
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
- dependence `sudo apt install v2ray`
- login: name f pw firafira
- proxy only gfwlist

# wine
- install nessary libraries
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

# shell
- zsh `sudo apt install zsh`
- install oh-my-zsh
- set def `sudo chsh -s /bin/zsh`

# softwares
- virtualbox
- vlc
- eudic
- telegram desktop
- dingtalk





