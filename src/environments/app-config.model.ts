import {AuthConfig} from 'angular-oauth2-oidc';
import {InjectionToken} from '@angular/core';

/**
 * The environment of the app.
 */
export interface AppConfig {
    /**
     * The flag indicating whether we run in production mode or not.
     */
    production: boolean;
    /**
     * The authentication configuration.
     * If defined, the user firstly has to log into the app.
     */
    authConfig?: AuthConfig;
    /**
     * The URL to the backend.
     */
    apiEndpoint: string;
}

/**
 * The injection token to get the app config.
 */
export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');
/**
 * The injection token to get the auth config.
 */
export const AUTH_CONFIG = new InjectionToken<AuthConfig>('app.auth.config');
/**
 * The injection token to get the api endpoint.
 */
export const API_ENDPOINT = new InjectionToken<string>('api.endpoint');
