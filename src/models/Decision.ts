export type Decision = {
  name?: string;
  activityId: string;
  placementId: string;
  itemCount: number;
};

export type Decisions = {
  decisionScopes: Decision[];
};
