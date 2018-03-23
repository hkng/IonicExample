Fingerprint Login
Reference: https://ionicacademy.com/ionic-fingerprint-login/

1. Setup Fingerprint plugin
ionic cordova plugin add cordova-plugin-fingerprint-aio
npm install --save @ionic-native/fingerprint-aio

2. update /src/app/app.module.ts

3. update /src/pages/login.ts

4. Fingerprint AIO use older cordova android verison (6.0)
   > ionic cordova platform rm android
   > ionic cordova platform add android@6

  or
   Install latest cordova-plugin-ionic-keyboard at github


How To Install ionic native plugin

1. add plugin
>ionic cordova plugin add cordova-plugin-file
>npm install --save @ionic-native/file

2. Remove the plugin
>ionic cordova plugin rm cordova-plugin-file
>npm uninstall --save @ionic-native/file

3. Install plugin from github

> git clone https://github.com/ato-team/cordova-plugin-abrakm-sdk.git
> cordova plugin add --link ../cordova-plugin-abrakm-sdk

4. Remove GitHub plugin
> cordova plugin rm cordova-plugin-abrakm-sdk

5. Check your project’s plugins:
> ionic cordova plugin ls


