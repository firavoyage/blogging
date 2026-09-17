hyper os <!-- an android tablet rom by mi -->

<!-- hyper os 2, zhcn ver -->

# `welcome` <!-- onboarding -->

- language `en-us`
- opt out everything
- uninstall all bloatware

# `settings`

## my device

- os version (tap continuously)

## wlan

- wlan `on` <!-- connect -->

## bluetooth

- bluetooth `on`

## personalization

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

- usb debugging `on`
- install via usb `on`
- default usb config `file transfer`
- usb debugging (security settings) `on`
- disable adb auth timeout `on`

# `lawnchair`

- general
  - notification dots
    - allow notification access

# `clash meta`

- profile
  - import from url
- settings: app: auto restart `on`

# `bitwarden`


