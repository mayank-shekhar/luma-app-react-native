import {Configuration} from '../models/Configuration';
import configurationData from '../models/data/configuration.json';
import {getUserDefinedConfigurationPath} from '../reducers/storage';

export async function loadConfiguration(): Promise<Configuration> {
  try {
    const path = await getUserDefinedConfigurationPath();
    if (path) {
      console.info('\nUser defined configuration path:', path);
      // fetch configuration from path.
      fetch(path)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('Failed to fetch configuration');
        })
        .then(configuration => {
          console.log('configuration fetched from url:', configuration);
          return Promise.resolve(configuration as unknown as Configuration);
        })
        .catch(err => {
          console.error('Error loading configuration:', err);
          return Promise.reject(err);
        });
    }
  } catch (e) {
    console.error('Error loading configuration:', e);
    return Promise.reject(e);
  }

  return Promise.resolve(configurationData as unknown as Configuration);
}
