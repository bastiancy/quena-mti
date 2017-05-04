import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Categoria } from './categoria';
import { CategoriaService } from './categoria.service';

@Component({
    selector: 'my-categorias',
    templateUrl: './admin-categorias.component.html'
})
export class AdminCategoriasComponent implements OnInit {
    categorias: Categoria[];
    selectedCategoria: Categoria;

    constructor(
        private router: Router,
        private categoriaService: CategoriaService) { }

    getCategorias(): void {
        this.categoriaService.getCategorias().then(categorias => this.categorias = categorias);
    }

    ngOnInit(): void {
        this.getCategorias();
    }

    onSelect(categoria: Categoria): void {
        this.selectedCategoria = categoria;
    }

    gotoDetail(categoria: Categoria): void {
        this.router.navigate(['/admin/categorias/detail', categoria.id]);
    }

    add(nombre: string, descripcion: string): void {
        nombre = nombre.trim();
        descripcion = descripcion.trim();

        if (!nombre) { return; }
        this.categoriaService.create(nombre, descripcion)
            .then(categoria => {
                this.categorias.push(categoria);
                this.selectedCategoria = null;
            });
    }

    delete(categoria: Categoria): void {
        this.categoriaService
            .delete(categoria.id)
            .then(() => {
                this.categorias = this.categorias.filter(h => h !== categoria);
                if (this.selectedCategoria === categoria) { this.selectedCategoria = null; }
            });
    }
}

