import { Component, OnInit } from '@angular/core';
import {Router, Params, ActivatedRoute} from "@angular/router";

import { Producto } from './producto';
import { ProductoService } from './producto.service';
import {Categoria} from "../categorias/categoria";

@Component({
    selector: 'my-productos',
    templateUrl: './productos.component.html',
    styleUrls: ['./productos.component.css' ]
})
export class ProductosComponent implements OnInit {
    productos: Producto[];
    selectedProducto: Producto;
    filtroCategoria: Categoria;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private productoService: ProductoService) { }

    getProductos(): void {
        this.productoService.getProductos().then(productos => this.productos = productos);
    }

    ngOnInit(): void {
        this.route.params
          .switchMap((params: Params) => {
            if (params['categoria']) {
              return this.productoService.getProductosBy({'categoria': params['categoria']})
            }
            else if (params['establecimiento']) {
              return this.productoService.getProductosBy({'establecimiento': params['establecimiento']})
            }

            return this.productoService.getProductos()
          })
          .subscribe(items => this.productos = items);
    }

    onSelect(producto: Producto): void {
        this.selectedProducto = producto;
    }

    gotoDetail(producto: Producto): void {
        this.router.navigate(['/productos/detail', producto.id]);
    }

    add(nombre: string, descripcion: string): void {
        nombre = nombre.trim();
        descripcion = descripcion.trim();

        if (!nombre) { return; }
        this.productoService.create(nombre, descripcion)
            .then(producto => {
                this.productos.push(producto);
                this.selectedProducto = null;
            });
    }

    delete(producto: Producto): void {
        this.productoService
            .delete(producto.id)
            .then(() => {
                this.productos = this.productos.filter(h => h !== producto);
                if (this.selectedProducto === producto) { this.selectedProducto = null; }
            });
    }
}

