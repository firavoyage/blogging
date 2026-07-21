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
- mobile hotspot and tethering: mobile hotspot <!-- save -->
  - network name `f`
  - password `firafira`
  - advanced
    - turn off when no device connected for `60min`
    - power saving mode `off`
    - wlan sharing `on`

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

- <!-- choose --> default apps
  - browser app `firefox`
  - home app `lawnchair`
- remove
  - sogou keyboard
  - (all apps of zhcn names) <!-- no internationalization implies low quality. --> <!-- i guess i would just use paratheses. `[]` feels fit in a terminal. `{}` is like js template string. -->
- samsung app settings: messages: more settings: auto delete otp messages `on`
- clash meta for android
  - manage app if unused `off`
  - running in background `unrestricted`
- filter and sort: show system apps `on` <!-- unfortunately, phone is not shown in the list of "samsung app settings". you can search it and you can find the app for it though. -->
  - call settings: call settings settings <!-- i do not use phone calls. but it would be good to default to capture everything. it's better to screen record manually for chat apps and audio record (or take a vid) in the physical world. -->
    - record calls
      - voice transcription <!-- it could only transcribe one language, regardless how many you download to make available (default to phone localization or en). it seems to be completely local, and you can transcribe again on a different language on call recording app. (btw, it does not seem to work well to differ speakers when it's not en from my test.) -->
        - auto transcribe voice recordings `on`
        - auto transcribe recorded calls and direct voicemail `on`
      - auto record calls `on`
    - call blocking: blocked numbers: add manually <!-- block all spams -->
      - phone number `1` <!-- effectively every number in some regions -->
      - blocked number criteria `when includes the number`
      - what to block `incoming calls only` <!-- on messages, there are conversations (spammers, or sometimes real ppl yk), contacts, and services (sms verification, default page selected on dock) -->

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

- app notifications <!-- enable advanced settings: manage notification categories for each app first -->
  - (all) `off`
  - show system apps <!-- three dots -->
    - android system: notification categories: (all) `off` <!-- not grayed out <=> non critical -->
    - digital wellbeing: notification categories: (all) `off`
    - smart manager: notification categories: (all) `off`
    - wallpaper services `off`
    - wlan tips `off`
- status bar: notification style `none`
- lock screen: show notifications `off`
- do not disturb `on`
  - hide notifications: when the screen is on
    - (all) `on`
- advanced settings
  - notification history `on`
  - wireless emergency alerts `off`
  - manage notification categories for each app `on`

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
    - gesture sensitivity `low` <!-- or gboard swipe input might cause back action. i do not use a phone case at the end of the day. -->
- accidental touch protection `off` <!-- more compatible w scrcpy -->
- touch sensitivity `on` <!-- more compatible w gloves -->

## battery

- battery protection `maximum` <!-- never charge past 80% -->

<!-- i have too much battery, it never drops past 50%, and i always have a power bank with the phone -->

## wallpaper and style

- change wallpapers `smartisan lightblue grain`

## lock screen and aod

- now bar: audio broadcast, media player `on`
- now bar: (all others) `off`
- touch and hold to edit `off`

## security and privacy

- more security settings: allow apps to be pinned `on` <!-- to make rhythm games immune to navigation gestures -->

<!-- tap app icon to pin -->

<!-- swipe up and hold to unpin -->

## accounts and backup

- manage accounts: google services `on` <!-- normalize one of the zhcn ver quirks -->

## advanced features

- touch to search `off` <!-- `on` --> <!-- i guess it's too annoy than useful, and might cause conflicts -->
  - touch and hold screen to search `on` <!-- idk why there are two settings for the seemingly the same thing -->
  - manage languages to detect `en, jp, zh`
  - manage action capsules and cards
    - remove unwanted
- side button: long press: `firefox`
- screenshots and screen recordings: save screenshots in `~/Pictures/Screenshots`
- blocked calls/msgs: notification about blocking `off`

## general management

<!-- idk why this name, unclear. -->

- date and time
  - automatic time zone `off`
  - select time zone `asia/taipei`
- keyboard
  - default keyboard `gboard`
  - gboard `on`
  - spelling correction `off`

## accessibility

<!-- - interaction and dexterity: interaction control: interaction control shortcut `press side and volume up buttons` -->
<!-- - (app): set blocked area: block whole screen `on` -->

<!-- useless, adding visual noise, blocking everything -->

## about phone

- rename `phone`

# `quick panel`

<!-- drag downward from top right of the screen -->

- edit <!-- pencil button on the top right -->
  - remove `(unused features)` <!-- smart view, modes, nearby devices, smartthings -->
  - organize <!-- remove some unused/unchanged or vendor specific features -->
    - wlan
    - bluetooth
    - quick access <!-- only the first eight would be shown wo an extra drag -->
      - portrait <!-- screen rotation -->
      - flashlight
      - mobile data
      - mobile hotspot
      - location
      - take screenshot <!--idk why they use verb noun here, maybe it could be more intuitive when inconsistent -->
      - screen recorder
      - eye comfort shield
      - scan qr code
      - audio broadcast <!-- through bluetooth -->
    - brightness slider
    - volume slider
    - media output
- auto rotate <!-- long press -->
  - show rotate button at bottom of screen `off`

# `recent apps`

<!-- swipe up -->

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
  - hidden apps `(all existing on home screen and those rarely used)`
  - icons: show labels `off`
- folders
  - grid: maximum folder columns `2`
  - grid: maximum folder rows `2`
  - icons: show labels `off`
- search bar: search provider `google`
- gestures
  - double tap `sleep` <!-- give accessibility permission to lawnchair -->
  - swipe down `open recents screen`
- (home)
  - arrange apps

# `good lock`

- nav star `on`
  - enable extra gesture settings `on` <!-- wtf, a pattern strongly discouraged by kde hig -->
- nice catch `on`
  - (all) `on`
- one hand operation plus `on`
  - right handle: short swipe: diagonal up `quick popup view`
- quick star <!-- confusing name, making me misinstall lock star instead -->
  - advanced settings: split panel info: quick setting `90%`
  - visibility of indicator icons
    - network information: (all) `off`
    - system icon: ims network icons `off`
    - system icon: volume `off`
    - system icon: vpn `off`
- sound assistant
  - customize volume panel `on` <!-- adjust the volume of specific apps just in time -->
  - multi sound: all apps `on` <!-- `(aggressive muters)` --> <!-- prevent an app from muting others -->

# `clash meta`

- profile
  - add
- settings: app: auto restart `on`
- lock this app <!-- recent apps: tap app icon -->

# `shizuku`

- start via wireless debugging
  - pairing <!-- follow the instructions -->
  - start
- use shizuku in terminal apps
  - export files `Documents`

# `canta`

- remove
  - ad privacy
  - auth framework
  - auto blocker
  - autofill with samsung pass
  - galaxy avatar
  - galaxy store
  - game booster
  - hongbao assistant <!-- one of the zhcn quirks -->
  - minor mode <!-- ? -->
  - parental controls
  - qq music plugin
  - samsung checkout
  - samsung cloud
  - samsung internet
  - samsung kids installer
  - samsung pass
  - samsung payment framework
  - samsung push service
  - software update

# `termux`

init

```sh
termux-setup-storage
```

enter shell <!-- it's easier on laptop anyway -->

```sh
cd /sdcard/Documents
cp rish rish_shizuku.dex ~
cd ~
sed -i 's/PKG/com.termux/g' rish
chmod +x rish
./rish
```

# `files`

- remove `~/Music/Samsung`

# `play`

- login
- opt out `(all)`
- play protect `off`
- settings: network preferences
  - auto update apps `off`
  - auto play vids `off`

# `neo store`

- service
  - auto update `off`
  - notify about new versions of apps `off`

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

- search
  - default search engine `Google` <!-- google ai mode -->
    - add search engine
      - name `Google`
      - search string url `https://google.com/ai?q=%s&gl=us`
      - search suggestion api `off` <!-- i feel it's rarely helpful, while adding visual noise all the time -->
  - suggestions from firefox `off`
  - suggestions from sponsors `off`
- homepage: (all) `off`
- customize: show tab bar `on`
- accessibility: zoom on all websites `on`
- translations: offer to translate when possible `off`
- extensions
  - cookie editor
  - violent monkey
  - control panel for twitter
  - ublock origin
  - web archives
  - duolingo max

# `chrome`

<!-- if needed -->

- toggle flags <!-- chrome://flags/#{flag} -->
  - force-update-menu-type `none`
  - unsafely-treat-insecure-origin-as-secure `enabled`
    - fill in urls separated by comma <!-- e.g. http://192.168.1.50:80,http://192.168.1.55:80 -->
- settings <!-- three dots --> <!-- now on chrome android, when you click and drag three dots, it just highlights the current item selected, no more ripple effects. idk. seems clearer. -->
  - google services
    - allow chrome sign-in `off` <!-- might be useful, doesnt seem needed though -->
    - (telemetry) `off`
    - touch to search `off` <!-- be explicit and aware, be careful when things become frictionless -->
  - privacy and security
    - safe browsing `off`
  - homepage `off`
- customize new tab page <!-- three dots -->
  - (all) `off` <!-- well, google doodles, "account" (even wo login), ai mode, and incognito buttons are baked into new tab page. you could not install extensions. and it shows "discover - off" rather than hiding it completely (it's also quirky. when you disable it wo restarting chrome, the discover widget seems to be loading.). -->

# `metro`

- now playing: now playing theme `plain`
- personalize: library categories `songs, albums, artists, playlists, folders`

# `vlc`

- extra settings: subtitles: prefered lang `en`
- extra settings: audio: prefered lang `jp`

# `breezy weather`

<!-- md you ui update feels fun and vibrant -->

- appearance: units: temperature unit `degrees celsius`
- add location
  - (all) `accuweather`

# `aegis`

- import
  - file or scan qr
- behavior
  - copy tokens to clipboard `single tap`
- backups
  - backup reminder `off`

# `ayugram`

<!-- lite 2026.03.29 ~~2025.06.12~~ -->

<!-- on the newer version, account switching seems much more frustrating, until it popups an notification saying i could long press profile on app dock -->

<!-- for some reason, i could even scan to login on web from an app hacked through qr login -->

<!-- well, after some usage, the liquid glass inspired ui is not that bad actually. -->

- exteragram pref: appearance
  - (circular add chat icon) `on`
  - material design 3 `off`
  - icon pack `default`
- ayugram pref: customization: useful features: local telegram premium `on` <!-- i could pin 10 instead of 5, like in premium, but no more -->

# adb

remove dnd indicator

```sh
# unplugging and replugging the usb cable might help

# # normalize if needed
# adb kill-server
# adb start-server

adb shell
```

```sh
settings get secure icon_blacklist
```

```sh
settings put secure icon_blacklist rotate,left_clock_position,fuseboxon,headset,mute,slimindicator_home_carrier,volume,slimindicator_panel_carrier,vpn,ims_volte,ims_volte2,slimindicator_lock_carrier,do_not_disturb,dnd,zen # append to the list
```

(deprecated) remove quick panel footer <!-- e.g. proxy, organization management, background apps -->

```sh
settings put global sysui_qs_tiles_footer_policy 0
```

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
