import {Configuration} from '../models/Configuration';
import configurationData from '../models/data/configuration.json';

export function loadConfiguration(): Promise<Configuration> {
  return Promise.resolve(configurationData as unknown as Configuration);
}
