import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Establecimiento } from './establecimiento';
import { EstablecimientoService } from './establecimiento.service';

@Component({
    selector: 'establecimiento-detail',
    templateUrl: './establecimiento-detail.component.html',
})
export class EstablecimientoDetailComponent implements OnInit {
    establecimiento: Establecimiento;

    constructor(
        private establecimientoService: EstablecimientoService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.establecimientoService.getEstablecimiento(params['id']))
            .subscribe(establecimiento => this.establecimiento = establecimiento);
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.establecimientoService.update(this.establecimiento)
            .then(() => this.goBack());
    }
}
