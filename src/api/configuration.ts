import {Configuration} from '../models/Configuration';
import configurationData from '../models/data/configuration.json';
import {getUserDefinedConfigurationPath} from '../reducers/storage';

export async function loadConfiguration(): Promise<Configuration | undefined> {
  // load configuration from user defined path
  let path = '';
  try {
    path = await getUserDefinedConfigurationPath();
  } catch (e) {
    console.error('Error loading configuration:', e);
    return Promise.reject(e);
  }
  if (path) {
    console.info('\nUser defined configuration path:', path);
    // fetch configuration from path.

    try {
      const response = await fetch(path);
      if (response.ok) {
        const configuration = await response.json();
        console.log('configuration fetched from url:', configuration);
        return Promise.resolve(configuration as unknown as Configuration);
      }
    } catch (e) {
      console.error('Error loading configuration:', e);
      return Promise.reject(e);
    }
  }
}

export async function getAppConfiguration() {
  return (await loadConfiguration()) || configurationData;
}
