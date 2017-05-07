import { InjectionToken } from '@angular/core';
import { IAppConfig } from './app-config.interface';

export const APP_DI_CONFIG: IAppConfig = {

  API_ENDPOINT: 'http://api.quenamti.bastianc.info',
  GOOGLE_MAPS_EMBED_API_KEY: 'AIzaSyCavAyTJkyb70LwuYjB9P_CPwNluXG8guE'

};

export let APP_CONFIG = new InjectionToken< IAppConfig >( 'app.config' );
