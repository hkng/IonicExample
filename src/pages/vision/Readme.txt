Google Cloud Vision with Ionic and Firease (Not Hotday App)

Reference:
https://angularfirebase.com/lessons/google-cloud-vision-with-ionic-and-firebase/
https://github.com/AngularFirebase/83-ionic-not-hotdog

1. Setup firebase tool
   npm install firebase-tools -g

2. Initialize cloud function in Ionic
   firebase login (with Firebase account and create firebase project first)
   firebase init functions
   cd functions
   npm install @google/cloud-vision -s

3. edit /functions/src/index.ts

4. Deploy firebase functions
  > firebase deploy --only functions

5. Install angularfire2
Reference: https://javebratt.com/angularfire2-ionic-setup/
  > npm install firebase angularfire2 --save

6. Install Camera
  npm install @ionic-native/camera -save
  ionic cordova plugin add cordova-plugin-camera
  npm install @ionic-native-mocks/camera -save
