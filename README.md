# Luma App (React Native v0.74.1)

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Packages

List of dependencies in this React Native Project

## AEP SDKs

| Name | Version | Description |
| --- | --- | --- |
| `@adobe/react-native-aepcore` | `6.0.1` | Core SDK for Adobe Experience Platform SDKs |
| `@adobe/react-native-aepedge` | `6.0.1` | Edge SDK for Adobe Experience Platform SDKs |
| `@adobe/react-native-aepedgeidentity` | `6.0.1` | Edge Identity SDK for Adobe Experience Platform SDKs |
| `@adobe/react-native-aepedgeconsent` | `6.0.1` | Edge Consent SDK for Adobe Experience Platform SDKs |
| `@adobe/react-native-aepedgebridge` | `6.0.1` | Edge Bridge SDK for Adobe Experience Platform SDKs |
| `@adobe/react-native-aepassurance` | `6.0.1` | Assurance SDK for Adobe Experience Platform SDKs |
| `@adobe/react-native-aepcampaignclassic` | `6.0.1` | Campaign Classic SDK for Adobe Experience Platform SDKs |
| `@adobe/react-native-aepmessaging` | `6.0.1` | Messaging SDK for Adobe Experience Platform SDKs |
| `@adobe/react-native-aepoptimize` | `6.0.1` | Optimize SDK for Adobe Experience Platform SDKs |
| `@adobe/react-native-aepplaces` | `6.0.1` | Places SDK for Adobe Experience Platform SDKs |
| `@adobe/react-native-aeptarget` | `6.0.1` | Target SDK for Adobe Experience Platform SDKs |
| `@adobe/react-native-aepuserprofile` | `6.0.1` | UserProfile SDK for Adobe Experience Platform SDKs |


Not all SDKs are being used in this project. Only the Core, Edge, Edge Identity, Edge Consent, Edge Bridge, and Messaging SDKs are being used. But all the SDKs are included in the project for future use and showcase how the SDKs can be integrated into a React Native project and build successfully.

## Other Important Packages

| Name | Version | Description |
| --- | --- | --- |
| `@react-native-async-storage/async-storage` | `1.23.1` | An asynchronous, unencrypted, persistent, key-value storage system for React Native. |
| `@react-navigation/native` | `6.1.17` | Routing and navigation for Expo and React Native apps. |
| `@react-navigation/stack` | `6.1.17` | Stack navigator for React Navigation. |
| `@react-navigation/bottom-tabs` | `6.1.17` | Bottom tab navigator for React Navigation. |
| `@react-native-firebase/app` | `20.1.0` | Firebase app |
| `@react-native-firebase/messaging` | `20.1.0` | Firebase messaging |






# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Install dependencies

In the root of your React Native project, run the following command to install the required dependencies:

```bash
# using npm
npm install

# OR using Yarn
yarn install
```

## Step 2: Link dependencies for iOS

Linking is the process of connecting the native modules with the JavaScript code. This is required when you use a library that has a native dependency.

```bash
cd ios/ && pod install && cd ..
```


## Step 3: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 4: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 5: Debugging your App

Now that you have successfully run the app, let's debug it.

1. Open `src/index.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

## Setting up Firebase - iOS

1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Click on **Add Project**.
3. Enter the name of your project and click on **Continue**.
4. Click on **Continue**.
5. Click on **Create Project**.
6. Click on **Continue**.
7. Click on **iOS**.
8. Enter the **iOS bundle ID** of your project and click on **Register App**.
9. Download the `GoogleService-Info.plist` file and place it in the `ios` directory of your project.

## Setting up Firebase - Android

1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Click on **Add Project**.
3. Enter the name of your project and click on **Continue**.
4. Click on **Continue**.
5. Click on **Create Project**.
6. Click on **Continue**.
7. Click on **Android**.
8. Enter the **Android package name** of your project and click on **Register App**.
9. Download the `google-services.json` file and place it in the `android/app` directory of your project.
10. Open the `android/build.gradle` file and add the following line to the `dependencies` block:

```gradle
classpath 'com.google.gms:google-services:4.3.10'
```

11. Open the `android/app/build.gradle` file and add the following line to the `dependencies` block:

```gradle
apply plugin: 'com.google.gms.google-services'
```

12. Open the `android/app/build.gradle` file and add the following line to the `dependencies` block:

```gradle
implementation platform('com.google.firebase:firebase-bom:28.4.0')
```

13. Open the `android/app/build.gradle` file and add the following line to the `dependencies` block:

```gradle
implementation 'com.google.firebase:firebase-messaging'
```

14. Open the `android/app/src/main/AndroidManifest.xml` file and add the following lines before the closing `</application>` tag:

```xml
<meta-data
    android:name="com.google.firebase.messaging.default_notification_icon"
    android:resource="@drawable/ic_stat_ic_notification" />
    <meta-data
        android:name="com.google.firebase.messaging.default_notification_color"
    />
```


### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
