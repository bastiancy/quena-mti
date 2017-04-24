import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Establecimiento } from './establecimiento';
import { EstablecimientoService } from './establecimiento.service';

@Component({
    selector: 'my-establecimientos',
    templateUrl: './establecimientos.component.html',
    styleUrls: [ './establecimientos.component.css' ]
})
export class EstablecimientosComponent implements OnInit {
    establecimientos: Establecimiento[];
    selectedEstablecimiento: Establecimiento;

    constructor(
        private router: Router,
        private establecimientoService: EstablecimientoService) { }

    getEstablecimientos(): void {
        this.establecimientoService.getEstablecimientos().then(establecimientos => this.establecimientos = establecimientos);
    }

    ngOnInit(): void {
        this.getEstablecimientos();
    }

    onSelect(establecimiento: Establecimiento): void {
        this.selectedEstablecimiento = establecimiento;
    }

    gotoDetail(establecimiento: Establecimiento): void {
        this.router.navigate(['/establecimientos/detail', establecimiento.id]);
    }

    add(nombre: string, descripcion: string): void {
        nombre = nombre.trim();
        descripcion = descripcion.trim();

        if (!nombre) { return; }
        this.establecimientoService.create(nombre, descripcion)
            .then(establecimiento => {
                this.establecimientos.push(establecimiento);
                this.selectedEstablecimiento = null;
            });
    }

    delete(establecimiento: Establecimiento): void {
        this.establecimientoService
            .delete(establecimiento.id)
            .then(() => {
                this.establecimientos = this.establecimientos.filter(h => h !== establecimiento);
                if (this.selectedEstablecimiento === establecimiento) { this.selectedEstablecimiento = null; }
            });
    }
}

