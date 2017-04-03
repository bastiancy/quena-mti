import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Categoria } from './categoria';

@Injectable()
export class CategoriaService {
    private categoriasUrl = 'http://localhost:8080/categorias';  // URL to web api
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    getCategorias(): Promise<Categoria[]> {
        return this.http.get(this.categoriasUrl)
            .toPromise()
            .then(response => response.json() as Categoria[])
            // .then(function (response): Categoria[] {
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

    getCategoria(id: string): Promise<Categoria> {
        const url = `${this.categoriasUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as Categoria)
            .catch(this.handleError);
    }

    update(categoria: Categoria): Promise<Categoria> {
        const url = `${this.categoriasUrl}/${categoria.id}`;
        return this.http
            .put(url, JSON.stringify(categoria), {headers: this.headers})
            .toPromise()
            .then(() => categoria)
            .catch(this.handleError);
    }

    create(nombre: string, descripcion: string): Promise<Categoria> {
        return this.http
            .post(this.categoriasUrl,
                JSON.stringify({nombre: nombre, descripcion: descripcion}),
                {headers: this.headers})
            .toPromise()
            .then(res => res.json() as Categoria)
            .catch(this.handleError);
    }

    delete(id: string): Promise<void> {
        const url = `${this.categoriasUrl}/${id}`;
        return this.http
            .delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }
}