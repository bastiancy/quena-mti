import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Producto } from './producto';
import { ProductoService } from './producto.service';
import {Categoria} from "../categorias/categoria";
import {CategoriaService} from "../categorias/categoria.service";

@Component({
    selector: 'producto-detail',
    templateUrl: './admin-producto-detail.component.html',
})
export class AdminProductoDetailComponent implements OnInit {
    producto: Producto;
    categorias: Categoria[];

    constructor(
        private productoService: ProductoService,
        private categoriaService: CategoriaService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.productoService.getProducto(params['id']))
            .subscribe(producto => this.producto = producto);

        this.categoriaService.getCategorias().then(items => this.categorias = items);
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.productoService.update(this.producto)
            .then(() => this.goBack());
    }
}
