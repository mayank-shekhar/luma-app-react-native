import {ExperienceEvent, Edge} from '@adobe/react-native-aepedge';
import {Consent} from '@adobe/react-native-aepedgeconsent';
import {MobileCore, Identity} from '@adobe/react-native-aepcore';
import {AppplicationStateType} from '../providers/StateProvider/StateProvider';
import {setCrid, setEcid, setEmail} from '../reducers/actions';
import {
  Identity as EdgeIdentity,
  IdentityMap,
  IdentityItem,
  AuthenticatedState,
} from '@adobe/react-native-aepedgeidentity';

export class MobileSDK {
  private state: AppplicationStateType;
  private dispatch: any;
  constructor(state: AppplicationStateType, dispatch: any) {
    this.state = state;
    this.dispatch = dispatch;
  }

  /**
   * Sends a track screen event with the specified screen name.
   * @param screenName - The name of the screen to track.
   */
  public sendTrackScreenEvent(screenName: string): void {
    // implementation
    console.log(`Track screen event: ${screenName}`);

    const xdmData: Record<string, any> = {
      eventType: 'application.scene',
      tenant: {
        appInformation: {
          appStateDetails: {
            screenType: 'App',
            screenName: screenName,
            screenView: {
              value: 1,
            },
          },
        },
      },
    };
    const trackScreenEvent = new ExperienceEvent({xdmData: xdmData});
    Edge.sendEvent(trackScreenEvent);
  }

  /**
   * Retrieves the consents.
   * @returns {void}
   */
  public getConsents(): void {
    Consent.getConsents()
      .then(consents => {
        console.log('Consents: ' + JSON.stringify(consents));
      })
      .catch(error => {
        console.log('Consents Error: ' + error);
      });
  }

  /**
   * Updates the content based on the provided value.
   * @param value - The value to update the content with. Must be either 'y' or 'n'.
   */
  public updateContent(value: 'y' | 'n'): void {
    // implementation
    console.log(`Update content: ${value}`);
    const collectConsent = {collect: {value: value}};
    const currentConstent = {consents: collectConsent};
    Consent.update(currentConstent);

    MobileCore.updateConfiguration(currentConstent);
  }

  public async getIdentities(): Promise<string> {
    console.log('Get identities');
    let newEcid = '';
    Identity.getExperienceCloudId()
      .then(ecid => {
        console.log('AdobeExperienceSDK: ECID = ' + ecid);
        newEcid = ecid;
        this.dispatch(setEcid(newEcid));
      })
      .catch(error => {
        console.log('AdobeExperienceSDK: getIdentities Error = ' + error);
      });

    // TODO: Need to revisit this code for geting and setting email id from identities
    EdgeIdentity.getIdentities()
      .then(identities => {
        console.log(
          'AdobeExperienceSDK: EdgeIdentity = ' + JSON.stringify(identities),
        );
        const identityMap = identities.identityMap;
        const emailIdentity = identityMap?.Email;
        const crmIdentity = identityMap?.lumaCRMId;
        if (emailIdentity) {
          const currentEmail = emailIdentity[emailIdentity.length - 1].id;
          console.log('Email: ' + currentEmail);
          this.dispatch(setEmail(currentEmail));
        }
        if (crmIdentity) {
          const currentCrmId = crmIdentity[crmIdentity.length - 1].id;
          console.log('CRM ID: ' + currentCrmId);
          this.dispatch(setCrid(currentCrmId));
        }
      })
      .catch(error => {
        console.log('AdobeExperienceSDK: EdgeIdentity Error = ' + error);
      });
    return Promise.resolve(newEcid);
  }

  public updateIdentites(email: string, crmId: string): void {
    const identityMap = new IdentityMap();
    console.log(`Update identities: ${email}, ${crmId}`);
    console.log('IdentityMap: ' + JSON.stringify(identityMap));

    const emailIdentity = new IdentityItem(
      email,
      AuthenticatedState.AUTHENTICATED,
    );
    const crmIdentity = new IdentityItem(
      crmId,
      AuthenticatedState.AUTHENTICATED,
      true,
    );
    identityMap.addItem(emailIdentity, 'Email');
    identityMap.addItem(crmIdentity, 'lumaCRMId');
    EdgeIdentity.updateIdentities(identityMap);
  }

  public sendAppInteractionEvent(actionName: string): void {
    // implementation
    console.log(`App interaction event: ${actionName}`);
    const xdmData: Record<string, any> = {
      eventType: 'application.interaction',
      tenant: {
        appInformation: {
          appInteraction: {
            name: actionName,
            appAction: {
              value: 1,
            },
          },
        },
      },
    };
    const appInteractionEvent = new ExperienceEvent({xdmData: xdmData});
    Edge.sendEvent(appInteractionEvent);
  }

  public async removeIdentities(
    emailAddress: string,
    crmId: string,
  ): Promise<void> {
    try {
      const emailIdentity = new IdentityItem(
        emailAddress,
        AuthenticatedState.LOGGED_OUT,
      );
      const crmIdentity = new IdentityItem(
        crmId,
        AuthenticatedState.LOGGED_OUT,
        true,
      );
      EdgeIdentity.removeIdentity(emailIdentity, 'Email');
      EdgeIdentity.removeIdentity(crmIdentity, 'lumaCRMId');
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
