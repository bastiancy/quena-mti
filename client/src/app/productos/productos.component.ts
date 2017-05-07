import { Component, OnInit } from '@angular/core';
import {Router, Params, ActivatedRoute} from "@angular/router";

import { Producto } from './producto';
import { ProductoService } from './producto.service';
import {Categoria} from "../categorias/categoria";
import {CategoriaService} from "../categorias/categoria.service";
import {EstablecimientoService} from "../establecimientos/establecimiento.service";
import {Establecimiento} from "../establecimientos/establecimiento";

@Component({
    selector: 'my-productos',
    templateUrl: './productos.component.html',
    styleUrls: ['./productos.component.css' ]
})
export class ProductosComponent implements OnInit {
    productos: Producto[];
    selectedProducto: Producto;
    filtroCategoria: Categoria;
    filtroEstablecimiento: Establecimiento;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private productoService: ProductoService,
        private categoriaService: CategoriaService,
        private establecimientoService: EstablecimientoService
    ) { }

    getProductos(): void {
        this.productoService.getProductos().then(productos => this.productos = productos);
    }

    ngOnInit(): void {
        this.route.params
          .switchMap((params: Params) => {
            this.filtroCategoria = null;
            this.filtroEstablecimiento = null;

            if (params['categoria']) {

              return this.categoriaService.getCategoria(params['categoria']).then(cat => {
                if (cat) {
                  this.filtroCategoria = cat;
                  return this.productoService.getProductosBy({'categoria': cat._id});
                }
                else {
                  return [];
                }
              });

            }
            else if (params['establecimiento']) {

              return this.establecimientoService.getEstablecimiento(params['establecimiento']).then(est => {
                if (est) {
                  this.filtroEstablecimiento = est;
                  return this.establecimientoService.getProductosEnStock(est);
                }
                else {
                  return [];
                }
              });

            }

            return this.productoService.getProductos()
          })
          .subscribe(items => this.productos = items);
    }

    onSelect(producto: Producto): void {
        this.selectedProducto = producto;
    }

    refreshProductos(productos: Producto[]): void {
      this.productos = productos;
    }

    gotoDetail(producto: Producto): void {
        this.router.navigate(['/productos/detail', producto._id]);
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

