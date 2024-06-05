import {Decisions} from '../models/Decision';
import decisionData from '../models/data/decisions.json';

export function loadDecisions(): Promise<Decisions['decisionScopes']> {
  return Promise.resolve(decisionData.decisionScopes);
}
