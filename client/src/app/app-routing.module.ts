import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductoDetailComponent } from './productos/producto-detail.component';
import { EstablecimientosComponent } from './establecimientos/establecimientos.component';
import { AdminCategoriaDetailComponent } from "./categorias/admin-categoria-detail.component";
import { AdminCategoriasComponent } from "./categorias/admin-categorias.component";
import { AdminEstablecimientosComponent } from "./establecimientos/admin-establecimientos.component";
import {AdminEstablecimientoDetailComponent} from "./establecimientos/admin-establecimiento-detail.component";
import {AdminProductosComponent} from "./productos/admin-productos.component";
import {AdminProductoDetailComponent} from "./productos/admin-producto-detail.component";

const routes: Routes = [
  { path: 'admin/categorias/detail/:id', component: AdminCategoriaDetailComponent },
  { path: 'admin/categorias',            component: AdminCategoriasComponent },
  { path: 'admin/establecimientos/detail/:id',  component: AdminEstablecimientoDetailComponent },
  { path: 'admin/establecimientos',             component: AdminEstablecimientosComponent },
  { path: 'admin/productos/detail/:id',         component: AdminProductoDetailComponent },
  { path: 'admin/productos',                    component: AdminProductosComponent },

  { path: 'productos/detail/:id',  component: ProductoDetailComponent },
  { path: 'productos',             component: ProductosComponent },
  { path: 'establecimientos',      component: EstablecimientosComponent },

  { path: 'dashboard',             component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
