import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Establecimiento } from './establecimiento';
import { EstablecimientoService } from './establecimiento.service';
import {Producto} from "../productos/producto";
import {ProductoService} from "../productos/producto.service";
import {Inventario} from "../inventarios/inventario";

@Component({
    selector: 'establecimiento-detail',
    templateUrl: './admin-establecimiento-detail.component.html',
})
export class AdminEstablecimientoDetailComponent implements OnInit {
    establecimiento: Establecimiento;
    productos: Producto[];
    inventarios: Inventario[];

    constructor(
        private establecimientoService: EstablecimientoService,
        private productoService: ProductoService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.establecimientoService.getEstablecimiento(params['id']))
            .subscribe(establecimiento => this.loadEstablecimiento(establecimiento))
        ;

        this.productoService.getProductos().then(productos => this.productos = productos);
    }

    addInventario(inventarioProducto: Producto, inventarioPrecioMoneda: string, inventarioPrecio: string): void {
        console.log(inventarioProducto);
        console.log(inventarioPrecioMoneda);
        console.log(inventarioPrecio);
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.establecimientoService.update(this.establecimiento)
            .then(() => this.goBack());
    }

    private loadEstablecimiento(establecimiento: Establecimiento) {
      this.establecimiento = establecimiento;

      this.establecimientoService
        .getInventarioByEstablecimiento(establecimiento)
        .then(items => {
            return this.replaceProductos(items);
        })
        .then(items => {
          return this.inventarios = items;
        });
    }

    private replaceProductos(items: Inventario[]) {
      let ps = [];

      for (let it of items) {
        if (it.producto && !it.producto.nombre) {
          let p = this.productoService.getProducto(it.producto.id).then(prod => {
            it.producto = prod;
            return it;
          });
          ps.push(p);
        }
        else {
          ps.push(it);
        }
      }

      return Promise.all(ps);
    }
}
