import {AuthConfig} from 'angular-oauth2-oidc';

export const environment = {
  production: true,
  SERVICE_URL: 'https://<url-to-production>/api/v1'
};

export const authConfig: AuthConfig = {
  // Url of the Identity Provider
  issuer: 'http://localhost:8180/auth/realms/Hausrat%20Service%20Realm',

  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin,

  // The SPA's id. The SPA is registerd with this id at the auth-server
  // clientId: 'server.code',
  clientId: 'hausrat-service-clients',

  // Just needed if your auth server demands a secret. In general, this
  // is a sign that the auth server is not configured with SPAs in mind
  // and it might not enforce further best practices vital for security
  // such applications.
  // dummyClientSecret: '66ce1cc4-5426-4743-bcd7-06c2b0cdd581',

  responseType: 'code',

  // set the scope for the permissions the client should request
  // The first four are defined by OIDC.
  // Important: Request offline_access to get a refresh token
  scope: 'openid profile email offline_access',

  showDebugInformation: true,
};
