import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule }     from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';

import { APP_CONFIG, APP_DI_CONFIG } from "./app-config.constants";
import { CategoriaService }     from "./categorias/categoria.service";
import { ProductoService } from "./productos/producto.service";
import { EstablecimientoService } from "./establecimientos/establecimiento.service";

import { AdminCategoriasComponent }  from "./categorias/admin-categorias.component";
import { AdminCategoriaDetailComponent } from "./categorias/admin-categoria-detail.component";

import { ProductosComponent} from "./productos/productos.component";
import { ProductoDetailComponent } from "./productos/producto-detail.component";
import { EstablecimientosComponent } from "./establecimientos/establecimientos.component";
import {AdminEstablecimientosComponent} from "./establecimientos/admin-establecimientos.component";
import {AdminEstablecimientoDetailComponent} from "./establecimientos/admin-establecimiento-detail.component";
import {AdminProductosComponent} from "./productos/admin-productos.component";
import {AdminProductoDetailComponent} from "./productos/admin-producto-detail.component";
import {CategoriasWidgetComponent} from "./categorias/categorias-widget.component";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    AdminCategoriasComponent,
    AdminCategoriaDetailComponent,
    AdminEstablecimientosComponent,
    AdminEstablecimientoDetailComponent,
    AdminProductosComponent,
    AdminProductoDetailComponent,
    ProductosComponent,
    ProductoDetailComponent,
    EstablecimientosComponent,
    CategoriasWidgetComponent
  ],
  providers: [
      CategoriaService,
      ProductoService,
      EstablecimientoService,
      {
        provide: APP_CONFIG,
        useValue: APP_DI_CONFIG
      }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
