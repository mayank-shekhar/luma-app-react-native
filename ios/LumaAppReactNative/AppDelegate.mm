

#import "AppDelegate.h"
#import "AdobeBridge.h"

#import <React/RCTBundleURLProvider.h>
//#import <React/RCTLinkingManager.h>
//#import <React/RCTConvert.h>
#import <Firebase.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"LumaAppReactNative";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};
  [FIRApp configure];
  
  [AdobeBridge configureAnalytics:application];
  
//  return YES;

  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (NSArray<id<RCTBridgeModule>> *)extraModulesForBridge:(RCTBridge *)bridge
{
  // If you'd like to export some custom RCTBridgeModules, add them here!
  return @[];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  return [self bundleURL];
}

- (NSURL *)bundleURL
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}
//
//// Explicitly define remote notification delegates to ensure compatibility with some third-party libraries
//- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken
//{
//  return [super application:application didRegisterForRemoteNotificationsWithDeviceToken:deviceToken];
//}
//
//// Explicitly define remote notification delegates to ensure compatibility with some third-party libraries
//- (void)application:(UIApplication *)application didFailToRegisterForRemoteNotificationsWithError:(NSError *)error
//{
//  return [super application:application didFailToRegisterForRemoteNotificationsWithError:error];
//}
//
//// Explicitly define remote notification delegates to ensure compatibility with some third-party libraries
//- (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo fetchCompletionHandler:(void (^)(UIBackgroundFetchResult))completionHandler
//{
//  return [super application:application didReceiveRemoteNotification:userInfo fetchCompletionHandler:completionHandler];
//}

- (void) applicationWillEnterForeground:(UIApplication *)application {
  [AdobeBridge analyticsStart];
}

- (void) sceneWillEnterForeground:(UIScene *)scene {
  [AdobeBridge analyticsStart];
}

- (void) applicationDidEnterBackground:(UIApplication *)application {
  [AdobeBridge analyticsPause];
}

- (void) sceneDidEnterBackground:(UIScene *)scene {
  [AdobeBridge analyticsPause];
}

@end
