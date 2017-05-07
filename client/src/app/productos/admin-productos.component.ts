import { Component, OnInit, Inject} from '@angular/core';
import { Router } from "@angular/router";

import { APP_CONFIG } from "../app-config.constants";
import { IAppConfig } from "../app-config.interface";
import { Producto } from './producto';
import { ProductoService } from './producto.service';

@Component({
    selector: 'my-productos',
    templateUrl: './admin-productos.component.html'
})
export class AdminProductosComponent implements OnInit {
    productos: Producto[];
    selectedProducto: Producto;

    constructor(
        private router: Router,
        private productoService: ProductoService,
        @Inject( APP_CONFIG ) private config: IAppConfig
    ) { }

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
        this.router.navigate(['/admin/productos/detail', producto._id]);
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
            .delete(producto._id)
            .then(() => {
                this.productos = this.productos.filter(h => h !== producto);
                if (this.selectedProducto === producto) { this.selectedProducto = null; }
            });
    }
}

