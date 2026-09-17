hyper os <!-- an android tablet rom by mi -->

<!-- hyper os 2, zhcn ver -->

# `welcome` <!-- onboarding -->

- language `en-us`
- opt out everything
- uninstall all bloatware

# `settings`

## (account)

- name `__`

## my device

- os version (tap continuously)

## wlan

- wlan `on` <!-- connect -->

## bluetooth

- bluetooth `on`

## personalization

- wallpaper `phone wallpaper` <!-- or laptop one -->

## lock screen

- sleep `10min`
- raise to wake `on`
- wake screen `on double tap`
- double tap lock screen to sleep `on`
- smart over mode `off`

## notification & status bar

- app notifications
  - (all) `off`
- customize icon display
  - number of notification icons shown `none`
  - (all) `off`
- battery indicator `graphical`

## home screen

- home screen settings: (all) `off`
<!-- - dont show text `on` -->
- system navigation `buttons`
  <!-- - dont respond to three and four finger gestures `on`
  - shortcuts: (all) `off` -->

## display & brightness

- color scheme `dark mode`
- brightness level
  - automatic brightness `off`

## sound

- adjust volume
  - media `on`
  - (rest) `off`
- sound options
  - do not disturb `on`
- additional settings
  - volume adjustment
    - adjust media sound in multiple apps `on`
    - multiple audio sources `on`
  - system sounds: (all) `off`

## apps

- (uninstall bloatware)
- <!-- three dot --> other settings
  - default apps
    - launcher `lawnchair` <!-- failed, conservative error popup -->
      - solution

        ```
        ~ % adb shell pm list packages | grep lawnchair

        package:app.lawnchair.lawnicons.play
        package:app.lawnchair.play
        ~ % adb shell pm set-home-activity app.lawnchair.play
        Success
        ```

      - (failed attempt)

        ```
        ~ % adb shell am start -a android.intent.action.MAIN -c android.intent.category.HOME

        Starting: Intent { act=android.intent.action.MAIN cat=[android.intent.category.HOME] }
        Warning: Activity not started, intent has been delivered to currently running top-most instance.
        ~ % adb shell pm list packages | grep -E "launcher|home"

        package:android.miui.home.launcher.res
        package:com.miui.home
        ~ % adb shell pm disable-user --user 0 com.miui.home


        Exception occurred while executing 'disable-user':
        java.lang.SecurityException: Cannot disable system packages.
                at com.android.server.pm.PackageManagerServiceImpl.shouldRestrictEnabledSettingsChange(PackageManagerServiceImpl.java:864)
                at com.android.server.pm.PackageManagerService.setEnabledSettings(PackageManagerService.java:4068)
                at com.android.server.pm.PackageManagerService.-$$Nest$msetEnabledSettings(Unknown Source:0)
                at com.android.server.pm.PackageManagerService$IPackageManagerImpl.setApplicationEnabledSetting(PackageManagerService.java:6062)
                at com.android.server.pm.PackageManagerShellCommand.runSetEnabledSetting(PackageManagerShellCommand.java:2417)
                at com.android.server.pm.PackageManagerShellCommand.onCommand(PackageManagerShellCommand.java:292)
                at com.android.modules.utils.BasicShellCommandHandler.exec(BasicShellCommandHandler.java:97)
                at android.os.ShellCommand.exec(ShellCommand.java:38)
                at com.android.server.pm.PackageManagerService$IPackageManagerImpl.onShellCommand(PackageManagerService.java:6797)
                at android.os.Binder.shellCommand(Binder.java:1237)
                at android.os.Binder.onTransact(Binder.java:1050)
                at android.content.pm.IPackageManager$Stub.onTransact(IPackageManager.java:4620)
                at com.android.server.pm.PackageManagerService$IPackageManagerImpl.onTransact(PackageManagerService.java:6781)
                at android.os.Binder.execTransactInternal(Binder.java:1512)
                at android.os.Binder.execTransact(Binder.java:1451)
        ```

      - fix gesture navigation (failed)

        ```sh
        adb shell settings put global force_fsg_nav_bar 1
        adb shell cmd overlay enable com.android.internal.systemui.navbar.gestural
        adb shell pm suspend com.miui.home
        ```

      - revert fix gesture navigation

        ```sh
        adb shell settings put global force_fsg_nav_bar 0
        adb shell cmd overlay disable com.android.internal.systemui.navbar.gestural
        adb shell pm unsuspend com.miui.home
        ```

    - browser `firefox`
    - gallery `material files` <!-- image viewer -->
    - music `metro`
    - play video `vlc`
  - notify about updates `off`

## additional settings

- gesture shortcuts
  - take screen short `volume down + enter`
  - (rest) `off`
- side toolbox `off`
- floating windows `off`
- additional app features
  - (all) `off`
- developer settings
  - usb debugging `on`
  - install via usb `on`
  - default usb config `file transfer`
  - usb debugging (security settings) `on`
  - disable adb auth timeout `on`

# `lock screen`

- customize lock screen <!-- long press -->
  - time `hh:mm`
  - date `dd^day` <!-- {date}^{day of week} -->
  - none

# `lawnchair`

- general
  - notification dots `off`
    - allow notification access
  - icon shape `circle`
- home screen
  - general: add new apps to home screen `off`
  - icons: show labels `off`
- app drawer
  - hidden apps `(all existing on home screen and those rarely used)`
  - icons: show labels `off`
- folders
  - icons: show labels `off`
- search bar: search provider `google website`
- gestures
  - double tap `sleep` <!-- give accessibility permission to lawnchair -->
  - swipe down `open recents screen`

# `clash meta`

- profile
  - import from url
- settings: app: auto restart `on`
- persist in background <!-- on running screen, long press to lock -->
- (app settings)
  - autostart `on`
  - battery `no restrictions`

# `bitwarden` <!-- ? -->

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
- extensions <!-- disable "use desktop site" -->
  - ublock origin
  - violent monkey
  - cookie editor
  - control panel for twitter
  - web archives
  - duolingo max

# `vlc`

- extra settings: subtitles: prefered lang `en`
- extra settings: audio: prefered lang `jp`

# `astrodx`

- format files <!-- file ext is required. seems currently it reads from text metadata rather than filename, so the batch rename has no effect. -->

  ```
  ~ % adb shell "ls -la '/sdcard/Download'"

  total 32099569
  -rw-rw----  1 u0_a242 media_rw 32748869308 2026-09-17 22:41 MaiArchive.zip
  drwxrws--- 28 u0_a242 media_rw        3452 2026-09-18 01:40 adx
  -rw-rw----  1 u0_a242 media_rw    88774024 2026-09-18 01:22 astrodx.apk
  drwxrws---  2 u0_a242 media_rw        3452 2026-09-17 22:24 laptop
  drwxrws---  2 u0_a242 media_rw        4096 2026-09-17 22:24 phone
  drwxrws---  2 u0_a242 media_rw        3452 2026-09-17 22:23 self
  ~ % adb shell "find /sdcard/Download/adx/ -type f -name '*.zip' | while read -r file; do mv \"\$file\" \"\${file%.zip}.adx\"; done"


  ~ % adb shell "find /sdcard/Download/adx/ -type f -name '*.adx' | wc -l"

  1562
  ~ % adb shell "find /sdcard/Download/adx/ -type f \( -name '\[DX\] *.adx' -o -name '\[ST\] *.adx' \) | while read -r file; do
      dir=\$(dirname \"\$file\")
      base=\$(basename \"\$file\")

      if [[ \"\$base\" == \"[DX] \"* ]]; then
          new_base=\${base#\"[DX] \"}
          mv \"\$file\" \"\$dir/\$new_base\"
      elif [[ \"\$base\" == \"[ST] \"* ]]; then
          # Strip '[ST] ', then strip '.adx', and rebuild as 'name [ST].adx'
          name_only=\${base#\"[ST] \"}
          name_only=\${name_only%.adx}
          mv \"\$file\" \"\$dir/\$name_only [ST].adx\"
      fi
  done"
  ```

- import charts
  - select all
  - share <!-- not open with, which could only import one by one -->

# files

- copy `music` and `videos`

# apps

install apps

```
 ~ % cd /home/fira/apks
 ~/apks % fd
app.lawnchair.lawnicons.play/
app.lawnchair.lawnicons.play/base.apk
app.lawnchair.lawnicons.play/split_config.arm64_v8a.apk
app.lawnchair.lawnicons.play/split_config.de.apk
app.lawnchair.lawnicons.play/split_config.en.apk
app.lawnchair.lawnicons.play/split_config.xxhdpi.apk
app.lawnchair.play/
app.lawnchair.play/base.apk
app.lawnchair.play/split_config.arm64_v8a.apk
app.lawnchair.play/split_config.en.apk
app.lawnchair.play/split_config.xxhdpi.apk
chat.fluffy.fluffychat/
chat.fluffy.fluffychat/base.apk
com.PigeonGames.Phigros/
com.PigeonGames.Phigros/base.apk
com.a10miaomiao.bilimiao/
com.a10miaomiao.bilimiao/base.apk
com.aefyr.sai.fdroid/
com.aefyr.sai.fdroid/base.apk
com.android.vending/
com.android.vending/base.apk
com.anthropic.claude/
com.anthropic.claude/base.apk
com.anthropic.claude/split_config.arm64_v8a.apk
com.anthropic.claude/split_config.en.apk
com.anthropic.claude/split_config.xxhdpi.apk
com.atharok.screentime/
com.atharok.screentime/base.apk
com.aurora.store/
com.aurora.store/base.apk
com.autonavi.minimap/
com.autonavi.minimap/base.apk
com.autonavi.minimap/split_config.arm64_v8a.apk
com.autonavi.minimap/split_config.en.apk
com.autonavi.minimap/split_config.xxhdpi.apk
com.beemdevelopment.aegis/
com.beemdevelopment.aegis/base.apk
com.chess/
com.chess/base.apk
com.eusoft.eudic/
com.eusoft.eudic/base.apk
com.example.helloworld/
com.example.helloworld/base.apk
com.example.minimalapp/
com.example.minimalapp/base.apk
com.example.piliplus/
com.example.piliplus/base.apk
com.foxwq.yhwq/
com.foxwq.yhwq/base.apk
com.github.metacubex.clash.meta/
com.github.metacubex.clash.meta/base.apk
com.github.zly2006.zhplus.lite/
com.github.zly2006.zhplus.lite/base.apk
com.gitlab.mudlej.MjPdfReader/
com.gitlab.mudlej.MjPdfReader/base.apk
com.google.android.apps.authenticator2/
com.google.android.apps.authenticator2/base.apk
com.google.android.apps.authenticator2/split_config.en.apk
com.google.android.apps.authenticator2/split_config.xxhdpi.apk
com.google.android.apps.docs.editors.docs/
com.google.android.apps.docs.editors.docs/base.apk
com.google.android.apps.docs.editors.docs/split_config.arm64_v8a.apk
com.google.android.apps.docs.editors.docs/split_config.en.apk
com.google.android.apps.docs.editors.docs/split_config.xxhdpi.apk
com.google.android.apps.docs.editors.sheets/
com.google.android.apps.docs.editors.sheets/base.apk
com.google.android.apps.docs.editors.sheets/split_config.arm64_v8a.apk
com.google.android.apps.docs.editors.sheets/split_config.en.apk
com.google.android.apps.docs.editors.sheets/split_config.xxhdpi.apk
com.google.android.apps.docs.editors.slides/
com.google.android.apps.docs.editors.slides/base.apk
com.google.android.apps.docs.editors.slides/split_config.arm64_v8a.apk
com.google.android.apps.docs.editors.slides/split_config.en.apk
com.google.android.apps.docs.editors.slides/split_config.xxhdpi.apk
com.google.android.apps.dynamite/
com.google.android.apps.dynamite/base.apk
com.google.android.apps.dynamite/split_config.arm64_v8a.apk
com.google.android.apps.dynamite/split_config.en.apk
com.google.android.apps.dynamite/split_config.xxhdpi.apk
com.google.android.apps.labs.language.tailwind/
com.google.android.apps.labs.language.tailwind/base.apk
com.google.android.apps.labs.language.tailwind/split_config.arm64_v8a.apk
com.google.android.apps.labs.language.tailwind/split_config.xxhdpi.apk
com.google.android.apps.maps/
com.google.android.apps.maps/base.apk
com.google.android.apps.maps/split_config.arm64_v8a.apk
com.google.android.apps.maps/split_config.en.apk
com.google.android.apps.maps/split_config.xxhdpi.apk
com.google.android.apps.photos/
com.google.android.apps.photos/base.apk
com.google.android.apps.photos/split_config.arm64_v8a.apk
com.google.android.apps.photos/split_config.en.apk
com.google.android.apps.photos/split_config.xxhdpi.apk
com.google.android.apps.tasks/
com.google.android.apps.tasks/base.apk
com.google.android.apps.tasks/split_config.arm64_v8a.apk
com.google.android.apps.tasks/split_config.en.apk
com.google.android.apps.tasks/split_config.xxhdpi.apk
com.google.android.calculator/
com.google.android.calculator/base.apk
com.google.android.calculator/split_config.xxhdpi.apk
com.google.android.calendar/
com.google.android.calendar/base.apk
com.google.android.calendar/split_config.arm64_v8a.apk
com.google.android.calendar/split_config.en.apk
com.google.android.calendar/split_config.xxhdpi.apk
com.google.android.gms/
com.google.android.gms/base.apk
com.google.android.gms/split_AdsDynamite_installtime.apk
com.google.android.gms/split_CronetDynamite_installtime.apk
com.google.android.gms/split_DynamiteLoader_installtime.apk
com.google.android.gms/split_DynamiteModulesA_installtime.apk
com.google.android.gms/split_DynamiteModulesC_installtime.apk
com.google.android.gms/split_GoogleCertificates_installtime.apk
com.google.android.gms/split_MapsDynamite_installtime.apk
com.google.android.gms/split_MeasurementDynamite_installtime.apk
com.google.android.gms/split_config.en.apk
com.google.android.gms/split_config.xxhdpi.apk
com.google.android.gms/split_maps_core_dynamite_ondemand.apk
com.google.android.inputmethod.latin/
com.google.android.inputmethod.latin/base.apk
com.google.android.inputmethod.latin/split_brella_feature_split.apk
com.google.android.inputmethod.latin/split_config.xxhdpi.apk
com.google.android.inputmethod.latin/split_tenoranimation_feature_split.apk
com.google.android.keep/
com.google.android.keep/base.apk
com.google.android.keep/split_config.arm64_v8a.apk
com.google.android.keep/split_config.en.apk
com.google.android.keep/split_config.xxhdpi.apk
com.google.android.syncadapters.contacts/
com.google.android.syncadapters.contacts/base.apk
com.ichi2.anki/
com.ichi2.anki/base.apk
com.machiav3lli.fdroid/
com.machiav3lli.fdroid/base.apk
com.niksoftware.snapseed/
com.niksoftware.snapseed/base.apk
com.radolyn.ayugram/
com.radolyn.ayugram/base.apk
com.rom1v.sndcpy/
com.rom1v.sndcpy/base.apk
com.sega.pjsekai/
com.sega.pjsekai/base.apk
com.sega.pjsekai/split_UnityDataAssetPack.apk
com.sega.pjsekai/split_config.arm64_v8a.apk
com.soulgamechst.majsoul/
com.soulgamechst.majsoul/base.apk
com.tencent.mm/
com.tencent.mm/base.apk
com.tencent.mm/split_config.arm64_v8a.apk
com.tencent.mm/split_config.en.apk
com.tencent.mm/split_config.xxhdpi.apk
com.tencent.mm/split_delivery.apk
com.tencent.mm/split_delivery.config.arm64_v8a.apk
com.tencent.mobileqq/
com.tencent.mobileqq/base.apk
com.tencent.tmgp.supercell.clashroyale/
com.tencent.tmgp.supercell.clashroyale/base.apk
com.termux/
com.termux/base.apk
com.x8bit.bitwarden/
com.x8bit.bitwarden/base.apk
com.x8bit.bitwarden/split_config.arm64_v8a.apk
com.x8bit.bitwarden/split_config.en.apk
com.x8bit.bitwarden/split_config.xxhdpi.apk
com.xycz.simple_live/
com.xycz.simple_live/base.apk
de.danoeh.antennapod/
de.danoeh.antennapod/base.apk
eu.depau.etchdroid/
eu.depau.etchdroid/base.apk
io.github.muntashirakon.Music/
io.github.muntashirakon.Music/base.apk
io.github.samolego.canta/
io.github.samolego.canta/base.apk
jp.pxv.android/
jp.pxv.android/base.apk
me.zhanghai.android.files/
me.zhanghai.android.files/base.apk
moe.shizuku.privileged.api/
moe.shizuku.privileged.api/base.apk
net.osmand/
net.osmand/base.apk
net.osmand/split_config.arm64_v8a.apk
net.osmand/split_config.xxhdpi.apk
org.breezyweather/
org.breezyweather/base.apk
org.catrobat.paintroid/
org.catrobat.paintroid/base.apk
org.fcitx.fcitx5.android/
org.fcitx.fcitx5.android/base.apk
org.fossify.voicerecorder/
org.fossify.voicerecorder/base.apk
org.lichess.mobileapp.free/
org.lichess.mobileapp.free/base.apk
org.mewx.wenku8/
org.mewx.wenku8/base.apk
org.mozilla.firefox/
org.mozilla.firefox/base.apk
org.thunderdog.challegram/
org.thunderdog.challegram/base.apk
org.videolan.vlc/
org.videolan.vlc/base.apk
sh.ppy.osulazer/
sh.ppy.osulazer/base.apk
```

install in batch

```
 ~/apks % for dir in */; do
   pkg="${dir%/}"
   if adb shell pm list packages | grep -q "^package:$pkg$"; then
     echo "Skipping: $pkg is already installed"
   else
     echo "Installing missing app: $pkg"
     adb install-multiple "$dir"*.apk < /dev/null
   fi
done
```

automate confirmation

```
~ % xdotool getmouselocation

x:999 y:967 screen:0 window:44040680
 ~ % while true; do xdotool mousemove 999 967 click 1; sleep 3; done

^C%
```

install other apps

[astrodx](https://github.com/2394425147/astrodx/releases) [direct](https://github.com/2394425147/astrodx/releases/download/v2.2.0.0023/2.2.0.0023.apk)


