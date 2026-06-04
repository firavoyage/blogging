one ui <!-- an android rom by samsung -->

<!-- one ui 8, zhcn ver -->

# onboarding

- language `en-us`
- insert sim card
- opt out all optional checkboxes

# `settings`

## connections

- wlan `on`

## account

- sign in

## about phone

- software information
  - enable developer mode <!-- tap build number continuously -->

## developer options

- debugging 
  - usb debugging `on`
  - wireless debugging `on`

## apps

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

# `launcher` <!-- home -->

- remove unwanted builtin apps <!-- seems simple, no need to involve adb or llms to decide automatically, which might be unpredictable --> <!-- multi select is supported, though i still have to confirm one by one for batch removal --> <!-- the internationalization of many builtin apps sucks. only zhcn supported it seems. -->

