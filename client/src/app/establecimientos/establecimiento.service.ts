import { Injectable, Inject }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Establecimiento } from './establecimiento';
import { IAppConfig } from "../app-config.interface";
import { APP_CONFIG } from "../app-config.constants";

@Injectable()
export class EstablecimientoService {
    private establecimientosUrl:string;
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(
        private http: Http,
        @Inject( APP_CONFIG ) private config: IAppConfig
    ) {

        this.establecimientosUrl = this.config.API_ENDPOINT + '/establecimientos';
    }

    getEstablecimientos(): Promise<Establecimiento[]> {
        return this.http.get(this.establecimientosUrl)
            .toPromise()
            .then(response => response.json() as Establecimiento[])
            // .then(function (response): Establecimiento[] {
            //     console.log(response);
            //     console.log(response.json());
            //     console.log(response.json().data);
            //     return response.json();
            // })
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    getEstablecimiento(id: string): Promise<Establecimiento> {
        const url = `${this.establecimientosUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as Establecimiento)
            .catch(this.handleError);
    }

    update(establecimiento: Establecimiento): Promise<Establecimiento> {
        const url = `${this.establecimientosUrl}/${establecimiento.id}`;
        return this.http
            .put(url, JSON.stringify(establecimiento), {headers: this.headers})
            .toPromise()
            .then(() => establecimiento)
            .catch(this.handleError);
    }

    create(nombre: string, descripcion: string): Promise<Establecimiento> {
        return this.http
            .post(this.establecimientosUrl,
                JSON.stringify({nombre: nombre, descripcion: descripcion}),
                {headers: this.headers})
            .toPromise()
            .then(res => res.json() as Establecimiento)
            .catch(this.handleError);
    }

    delete(id: string): Promise<void> {
        const url = `${this.establecimientosUrl}/${id}`;
        return this.http
            .delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }
}
