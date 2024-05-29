//
//  AdobeBridge.m
//  LumaAppReactNative
//
//  Created by Mayank Shekhar on 28/05/24.
//

#import "AdobeBridge.h"

//#import "RCTAEPCore.h"
@import AEPCore;
@import AEPServices;
@import AEPSignal;
@import AEPLifecycle;
@import AEPIdentity;
@import AEPUserProfile;
@import AEPEdge;
@import AEPEdgeIdentity;
@import AEPEdgeConsent;
@import AEPAssurance;
@import AEPOptimize;

// Environment file id / App id
//static NSString* const EnvironmentId = @"94f571f308d5/9f2af394457b/launch-93ae8288aa66-staging";

@implementation AdobeBridge

+ (void)configureAnalytics:(UIApplication *)application
{
  const UIApplicationState appState = application.applicationState;
  
  [AEPMobileCore setLogLevel:AEPLogLevelDebug];
  [AEPMobileCore configureWithAppId:@"b5cbd1a1220e/1857ef6cacb5/launch-2594f26b23cd-development"];
  [AEPMobileCore
        registerExtensions:@[
          AEPMobileEdgeIdentity.class,
          AEPMobileEdge.class,
          AEPMobileEdgeConsent.class,
          AEPMobileOptimize.class,
          AEPMobileLifecycle.class,
          AEPMobileAssurance.class,
          AEPMobileIdentity.class
        ]
    completion:^{
    // only start lifecycle if the application is not in the background
      if (appState != UIApplicationStateBackground) {
        [AEPMobileCore lifecycleStart:nil];
      }
    }];
}

+ (void)analyticsStart
{
  [AEPMobileCore lifecycleStart:nil];
}

+ (void)analyticsPause
{
  [AEPMobileCore lifecyclePause];
}

@end
