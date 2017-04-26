import { InjectionToken } from '@angular/core';
import { IAppConfig } from './app-config.interface';

export const APP_DI_CONFIG: IAppConfig = {

  API_ENDPOINT: 'http://localhost:5000'

};

export let APP_CONFIG = new InjectionToken< IAppConfig >( 'app.config' );
