import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Categoria } from './categoria';
import { CategoriaService } from './categoria.service';

@Component({
    selector: 'categoria-detail',
    templateUrl: './categoria-detail.component.html',
})
export class CategoriaDetailComponent implements OnInit {
    categoria: Categoria;

    constructor(
        private categoriaService: CategoriaService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.categoriaService.getCategoria(params['id']))
            .subscribe(categoria => this.categoria = categoria);
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.categoriaService.update(this.categoria)
            .then(() => this.goBack());
    }
}