import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router }   from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Categoria } from './categoria';
import { CategoriaService } from './categoria.service';
import { Producto } from "../productos/producto";
import { ProductoService } from "../productos/producto.service";
import { Inventario } from "../establecimientos/inventario";

@Component({
    selector: 'categorias-widget',
    templateUrl: './categorias-widget.component.html',
})
export class CategoriasWidgetComponent implements OnInit {
  categorias: Categoria[];

  constructor(
    private router: Router,
    private categoriaService: CategoriaService) { }

  getCategorias(): void {
    this.categoriaService.getCategorias().then(categorias => this.categorias = categorias);
  }

  ngOnInit(): void {
    this.getCategorias();
  }

  goToProductos(cat: Categoria): void {
    this.router.navigate(['/productos', {'categoria': cat._id}]);
  }

}
