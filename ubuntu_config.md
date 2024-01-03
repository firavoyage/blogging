Ubuntu Config

# Ubuntu
## Appearance
- Dark
- Auto hide the dock 
- Panel mode off
- Icon size max
- Dont show trash
- Remove some favs on the dock
- Select bg

## Displays
- Nightlight
- dont show desktop icons `sudo apt install gnome-shell-extension-prefs`

## Keyboard
- close_window Ctrl Q
- screenshot Prsc
- home_folder Super E
- fullscreen F11

## Multitasking
- Number of workspaces 1

## Date&Time
- lang en

## Users
- no passwd
```
sudo visudo `fira ALL=(ALL) NOPASSWD:ALL`

// admin:///etc/polkit-1/localauthority/50-local.d/nopw.pkla
[No password prompt]
Identity=unix-group:sudo
Action=*
ResultActive=yes
```

## Power
- automatic screen brightness off

## Printer
- search for driver(`linux64 ij debian`) `https://in.canon/en/support/search`

# Files
- add templates

# Gedit
- autosave
- tab use spaces: 2spaces
- dont show line nums
- dont display status bar

# Chromium
- Dont use sys title bar
- Add Bookmarks
- Exs: adguard newtab justblack lulutranslate

# Code
- dont show welcome page on startup
- auto save
- hide activity & tab & status & menu bar
- workspace trust `/home`
- sudo apt install g++
- Exs: atom-style code-runner idea-shortcuts cmake
- Code-runner: run_in_ter auto_focus_ter
```
    "code-runner.executorMap": {
        // "cpp": "cd $dir && g++ $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
        "cpp": "cd $dir && g++ \"$fileName\" -o \"$fileNameWithoutExt\" && \"$dir$fileNameWithoutExt\"",
    }
```
- font: "Fira Code"
- shortcuts
```
run_code ctrl r
stop_running ctrl e
close_file ctrl w
open_containing_folder ctrl shift o
```

# Sogou input
- Fcitx
- Fcitx autostart `sudo cp /usr/share/applications/fcitx.desktop /etc/xdg/autostart/`
- Fcitx globalcfg:appearance `dont show input method hint`
- Delete ibus `sudo apt purge ibus`
- Install dependence 
```
sudo apt install libqt5qml5 libqt5quick5 libqt5quickwidgets5 qml-module-qtquick2
sudo apt install libgsettings-qt1
```
- hide status bar
- skin setting

# ThunderBird
- Config mail devvhy@zohomail.cn
- junk settings

# v2raya
- dependence `sudo apt install v2ray`
- login: name f pw firafira
- proxy only gfwlist

# Wine


# Fonts
- From gh/firavoyage/fonts
- install

# Softwares
- git
- VLC
- OBS
- Eudic
- Tg Desktop
- Dingtalk




