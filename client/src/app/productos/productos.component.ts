import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

import { Producto } from './producto';
import { ProductoService } from './producto.service';

@Component({
    selector: 'my-productos',
    templateUrl: './productos.component.html',
    styleUrls: ['css/shop-item.css', './productos.component.css' ]
})
export class ProductosComponent implements OnInit {
    productos: Producto[];
    selectedProducto: Producto;

    constructor(
        private router: Router,
        private productoService: ProductoService) { }

    getProductos(): void {
        this.productoService.getProductos().then(productos => this.productos = productos);
    }

    ngOnInit(): void {
        this.getProductos();
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

