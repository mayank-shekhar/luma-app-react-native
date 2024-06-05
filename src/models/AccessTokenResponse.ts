export type AccessTokenResponse = {
  accessToken: string;
  tokenType: string;
  expiresIn: number;
};

export enum CodingKeys {
  accessToken = 'access_token',
  tokenType = 'token_type',
  expiresIn = 'expires_in',
}
