//
//  AdobeBridge.h
//  LumaAppReactNative
//
//  Created by Mayank Shekhar on 28/05/24.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeDelegate.h>

@interface AdobeBridge : NSObject

+ (void)configureAnalytics:(UIApplication *)application;

+ (void)analyticsStart;

+ (void)analyticsPause;

@end
