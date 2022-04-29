import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {API_ENDPOINT, APP_CONFIG, AppConfig, AUTH_CONFIG, normalize} from './environments/app-config.model';

fetch('app-config.json', {cache: 'reload'}) // TODO if error, open from cache or use default values
    .then(response => response.json() as unknown as AppConfig)
    .then(config => normalize(config))
    .catch(error => {
        console.error(error);
        return {
            production: true,
            apiEndpoint: './api/v1'
        } as AppConfig;
    })
    .then(config => {
        if (config.production) {
            enableProdMode();
        }
        return platformBrowserDynamic([
            {provide: APP_CONFIG, useValue: config},
            {provide: AUTH_CONFIG, useValue: config.authConfig},
            {provide: API_ENDPOINT, useValue: config.apiEndpoint}
        ]).bootstrapModule(AppModule);
    })
    .catch(err => console.error(err))
;
