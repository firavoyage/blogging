one ui <!-- an android rom by samsung -->

<!-- one ui 8, zhcn ver -->

# onboarding

- language `en-us`
- insert sim card
- opt out all optional checkboxes

# `settings`

<!-- seems the search bar is moved to the bottom, as a floating bar instead of an icon button. smart. -->

## connections

- wlan `on` <!-- connect -->
- nfc and contactless payments `off`
- mobile hotspot and tethering: mobile hotspot
  - network name `f`
  - password `firafira`

## account

- sign in

## about phone

- software information
  - enable developer mode <!-- tap build number continuously -->

## developer options

- debugging 
  - usb debugging `on`
  - wireless debugging `on`
- networking: default usb config `transferring files`

## apps

- default apps
  - browser app `firefox`
  - home app `lawnchair`
- remove
  - sogou keyboard
  - (all apps of zhcn names) <!-- no internationalization implies low quality. --> <!-- i guess i would just use paratheses. `[]` feels fit in a terminal. `{}` is like js template string. -->

## sounds and vibration

<!-- it focuses on the current selection by default. scroll up to see "silent". -->

- ringtone `silent`
- notification sound `silent`
- system sound: (all) `off` <!-- i would use (all) instead of `*` -->
- volume
  - notifications `0`
  - system `0`
- call vibration `silent`
- notification vibration `silent`
- system vibration: (all) `off`
- vibration intensity: (all) `0`

## notifications

- app notifications: (all) `off`
- status bar: notification style `none`
- lock screen: show notifications `off`
- do not disturb `on`
- 

## display

- dark mode `on`
- brightness `low`
- adaptive brightness `off`
- eye comfort shield `on`
- screen timeout `10min`
- edge panels `off`
- navigation bar `swipe gestures` <!-- seems default on newer phones -->
  - more options <!-- enable via nav star on good lock, would be redirected here -->
    - gesture hint `off`
    - switch apps when hint hidden `on`
- touch sensitivity `on` <!-- more compatible w gloves -->

## wallpaper and style

- change wallpapers `smartisan lightblue grain`

## lock screen and aod

- now bar: audio broadcast, media player `on`
- now bar: (all others) `off`
- touch and hold to edit `off`

## accounts and backup

- manage accounts: google services `on` <!-- normalize one of the zhcn ver quirks -->

## advanced features

- touch to search `on`
  - touch and hold screen to search `on` <!-- idk why there are two settings for the seemingly the same thing -->
  - manage languages to detect `en, jp, zh`
  - manage action capsules and cards
    - remove unwanted
- side button: long press: `firefox`
- screenshots and screen recordings: save screenshots in `~/Pictures/Screenshots`

## general management 

<!-- idk why this name, unclear. -->

- keyboard
  - default keyboard `gboard`
  - gboard `on`
  - spelling correction `off`

# `recent apps`

- settings <!-- three dot --> : show recommended apps `off` 



# `launcher` <!-- one ui home -->

- remove unwanted builtin apps <!-- seems simple, no need to involve adb or llms to decide automatically, which might be unpredictable --> <!-- multi select is supported, though i still have to confirm one by one for batch removal --> <!-- the internationalization of many builtin apps sucks. only zhcn supported it seems. -->

# `lawnchair`

- general
  - icon shape `circle`
- home screen
  - general: add new apps to home screen `off`
  - layout: home screen grid: `3x4`
  - icons: show labels `off`
- app drawer
  - icons: show labels `off`
- folders
  - grid: maximum folder columns `2`
  - grid: maximum folder rows `2`
  - icons: show labels `off`

# `good lock`

- nav star `on`
  - enable extra gesture settings `on` <!-- wtf, a pattern strongly discouraged by kde hig -->
- nice catch `on`
  - (all) `on`
- one hand operation plus `on`
  - right handle: short swipe: diagonal up `quick popup view`
- quick star <!-- confusing name, making me misinstall lock star instead -->
  - visibility of indicator icons
    - network information: (all) `off`
    - system icon: ims network icons `off`
    - system icon: volume `off`
    - system icon: vpn `off`

# `clash meta`

- profile
  - add
- lock this app <!-- recent apps: tap app icon -->

# `play`

- login
- opt out `(all)`

# `gboard`

- lang
  - en
  - jp `qwerty`
    - use half width space `on`
  - zh
    - fuzzy pinyin `on`
- pref
  - number row `on`
  - lang switch key `on` <!-- faster wo tradeoff, as i never use emojis -->
- theme `system auto` 
  - key borders `off` <!-- a bit confusing, you could tap again on your current selection, not common in radio group like components -->
- corrections & suggestions
  - don't suggest offensive wordsd `off`
- clipboard
  - show addresses, ... `off`
- (bar)
  - text editing
  - clipboard

# `firefox`

- homepage: (all) `off`
- customize: show tab bar `on`

# `vlc`

- extra settings: subtitles: prefered lang `en`
- extra settings: audio: prefered lang `jp`

# files

- copy `music` and `videos`

# apps

install

```sh
cd apks || exit
for dir in */; do
   pkg="${dir%/}" 
   if adb shell pm list packages | grep -q "^package:$pkg$"; then
     echo "Skipping: $pkg is already installed"
   else
     echo "Installing missing app: $pkg"
     adb install-multiple "$dir"*.apk < /dev/null
   fi
done
```

```sh
cd apks/com.android.vending
adb install-multiple *.apk < /dev/null
```

<!-- 32 bit apps might be incompatible -->

export

```sh
mkdir -p apks
for pkg in $(adb shell pm list packages | cut -d: -f2); do
  echo "Exporting: $pkg"
  mkdir -p "apks/$pkg"
  adb shell pm path "$pkg" | cut -d: -f2 | while read -r apk_path; do
    adb pull "$apk_path" "./apks/$pkg/" < /dev/null
  done
done
```


