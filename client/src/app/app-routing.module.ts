import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './heroes/dashboard.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroDetailComponent }  from './heroes/hero-detail.component';
import { CategoriasComponent }  from "./categorias/categorias.component";
import { CategoriaDetailComponent } from "./categorias/categoria-detail.component";
import { ProductosComponent } from "./productos/productos.component";
import { ProductoDetailComponent } from "./productos/producto-detail.component";
import {EstablecimientosComponent} from "./establecimientos/establecimientos.component";
import {EstablecimientoDetailComponent} from "./establecimientos/establecimiento-detail.component";

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard',  component: DashboardComponent },
    { path: 'detail/:id', component: HeroDetailComponent },
    { path: 'heroes',     component: HeroesComponent },
    { path: 'categorias/detail/:id', component: CategoriaDetailComponent },
    { path: 'categorias',            component: CategoriasComponent },
    { path: 'productos/detail/:id',  component: ProductoDetailComponent },
    { path: 'productos',             component: ProductosComponent },
    { path: 'establecimientos/detail/:id',  component: EstablecimientoDetailComponent },
    { path: 'establecimientos',             component: EstablecimientosComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
