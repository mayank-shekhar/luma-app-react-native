package com.adobe.luma.tutorial.reactnative

import android.app.Application
import android.util.Log
//import com.adobe.marketing.mobile.AdobeCallback;
import com.adobe.marketing.mobile.Assurance;
import com.adobe.marketing.mobile.Edge;
import com.adobe.marketing.mobile.Messaging;
//import com.adobe.marketing.mobile.Identity;
//import com.adobe.marketing.mobile.InvalidInitException;
import com.adobe.marketing.mobile.Lifecycle;
import com.adobe.marketing.mobile.LoggingMode;
import com.adobe.marketing.mobile.MobileCore;
import com.adobe.marketing.mobile.Signal;
import com.adobe.marketing.mobile.UserProfile;
import com.adobe.marketing.mobile.edge.consent.Consent;
import com.adobe.marketing.mobile.optimize.Optimize;
//import com.adobe.marketing.mobile.edge.identity.Identity;
import com.facebook.react.PackageList
import com.facebook.react.ReactApplication
import com.facebook.react.ReactHost
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.load
import com.facebook.react.defaults.DefaultReactHost.getDefaultReactHost
import com.facebook.react.defaults.DefaultReactNativeHost
import com.facebook.soloader.SoLoader
import java.util.Arrays
//import com.lugg.RNCConfig.RNCConfigPackage;


class MainApplication : Application(), ReactApplication {

  override val reactNativeHost: ReactNativeHost =
      object : DefaultReactNativeHost(this) {
        override fun getPackages(): List<ReactPackage> =
            PackageList(this).packages.apply {
              // Packages that cannot be autolinked yet can be added manually here, for example:
              // add(MyReactNativePackage())
//              add(RNCConfigPackage())
            }

        override fun getJSMainModuleName(): String = "index"

        override fun getUseDeveloperSupport(): Boolean = BuildConfig.DEBUG

        override val isNewArchEnabled: Boolean = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED
        override val isHermesEnabled: Boolean = BuildConfig.IS_HERMES_ENABLED
      }

  override val reactHost: ReactHost
    get() = getDefaultReactHost(applicationContext, reactNativeHost)

  override fun onCreate() {
    super.onCreate()
    SoLoader.init(this, false)

    // SDK
    MobileCore.setApplication(this)
    MobileCore.setLogLevel(LoggingMode.DEBUG)
    // MobileCore.configureWithAppID("3149c49c3910/7f6d22873d0d/launch-62375a272e8b-development")
//     MobileCore.configureWithAppID("bf7248f92b53/e1048832e7d6/launch-cf1d310fbda7")
    // bf7248f92b53/e1048832e7d6/launch-41a6b2bb04da-development

//    MobileCore.configureWithAppID("bf7248f92b53/e1048832e7d6/launch-41a6b2bb04da-development")
    MobileCore.configureWithAppID("bf7248f92b53/9c21d9ace637/launch-606018f3d351-development")
    MobileCore.updateConfiguration(mapOf(
      "messaging.useSandbox" to true,
    ))

    val extensions = Arrays.asList(
      Messaging.EXTENSION,
      Assurance.EXTENSION,
      Lifecycle.EXTENSION,
      Signal.EXTENSION,
      Edge.EXTENSION,
      com.adobe.marketing.mobile.Identity.EXTENSION,
      Consent.EXTENSION,
      UserProfile.EXTENSION,
      com.adobe.marketing.mobile.edge.identity.Identity.EXTENSION,
      Optimize.EXTENSION
    )
    MobileCore.registerExtensions(extensions) { o: Any? ->
      MobileCore.lifecycleStart(null)
      Log.d("AEP SDK", "Initialized AEP SDK")
    }

    if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {
      // If you opted-in for the New Architecture, we load the native entry point for this app.
      load()
    }
  }
}
