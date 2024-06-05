export interface Configuration {
  config: {
    tenant: string;
    sandbox: string;
    showProducts: boolean;
    showPersonalisation: boolean;
    showGeofences: boolean;
    showBeacons: boolean;
    ldap: string;
    emailDomain: string;
    tms: string;
  };
  customer: {
    name: string;
    logo: string;
    productsType: string;
    productsSystemImage: string;
    currency: string;
  };
  testPush: {
    name: string;
    eventType: string;
  };
  target: {
    location: string;
  };
  map: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
}
