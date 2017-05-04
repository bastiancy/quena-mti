import { Injectable, Inject }    from '@angular/core';
import {Headers, Http, URLSearchParams} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Producto } from './producto';
import { IAppConfig } from "../app-config.interface";
import { APP_CONFIG } from "../app-config.constants";
import {Inventario} from "../inventarios/inventario";

@Injectable()
export class ProductoService {
    private productosUrl:string;
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(
        private http: Http,
        @Inject( APP_CONFIG ) private config: IAppConfig
    ) {

        this.productosUrl = this.config.API_ENDPOINT + '/productos';
    }

    getProductos(): Promise<Producto[]> {
        return this.http.get(this.productosUrl)
            .toPromise()
            .then(response => response.json() as Producto[])
            // .then(function (response): Producto[] {
            //     console.log(response);
            //     console.log(response.json());
            //     console.log(response.json().data);
            //     return response.json();
            // })
            .catch(this.handleError);
    }

    getProductosBy(data: any): Promise<Producto[]> {
        let params = new URLSearchParams();
        if (data.categoria) {
          params.set('categoria', data.categoria);
        }
        if (data.establecimiento) {
          params.set('establecimiento', data.establecimiento);
        }

        return this.http.get(this.productosUrl, {search: params})
            .toPromise()
            .then(response => response.json() as Producto[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    getProducto(id: string): Promise<Producto> {
        const url = `${this.productosUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as Producto)
            .catch(this.handleError);
    }

    update(producto: Producto): Promise<Producto> {
        const url = `${this.productosUrl}/${producto.id}`;
        return this.http
            .put(url, JSON.stringify(producto), {headers: this.headers})
            .toPromise()
            .then(() => producto)
            .catch(this.handleError);
    }

    create(nombre: string, descripcion: string): Promise<Producto> {
        return this.http
            .post(this.productosUrl,
                JSON.stringify({nombre: nombre, descripcion: descripcion}),
                {headers: this.headers})
            .toPromise()
            .then(res => res.json() as Producto)
            .catch(this.handleError);
    }

    delete(id: string): Promise<void> {
        const url = `${this.productosUrl}/${id}`;
        return this.http
            .delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

}
