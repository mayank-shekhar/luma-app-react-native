import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const STORAGE_KEYS = {
  DEVICE_TOKEN: 'deviceToken',
  ENVIRONMENT_FILE_ID: 'environmentFileId',
  CONFIGURATION_PATH: 'configurationPath',
  APP_CONFIG: 'appConfig',
};

const storage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: null,
  enableCache: true,
  sync: {},
});

export function saveConfigurationPath(path: string) {
  storage.save({
    key: STORAGE_KEYS.CONFIGURATION_PATH,
    data: path,
  });
}

export function getUserDefinedConfigurationPath(): Promise<string> {
  return storage.load({
    key: STORAGE_KEYS.CONFIGURATION_PATH,
    autoSync: true,
    syncInBackground: true,
  });
}

export function saveAppConfig(appConfig: any) {
  storage.save({
    key: STORAGE_KEYS.APP_CONFIG,
    data: appConfig,
  });
}

export function getAppConfig(): Promise<any> {
  return storage.load({
    key: STORAGE_KEYS.APP_CONFIG,
    autoSync: true,
    syncInBackground: true,
  });
}

export default storage;
