import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule }     from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './heroes/dashboard.component';
import { HeroDetailComponent }  from './heroes/hero-detail.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroService }          from './heroes/hero.service';
import { HeroSearchComponent }  from "./heroes/hero-search.component";

import { CategoriaService }     from "./categorias/categoria.service";
import { CategoriasComponent }  from "./categorias/categorias.component";
import { CategoriaDetailComponent } from "./categorias/categoria-detail.component";
import { ProductosComponent} from "./productos/productos.component";
import { ProductoDetailComponent } from "./productos/producto-detail.component";

import { APP_CONFIG, APP_DI_CONFIG } from "./app-config.constants";
import {ProductoService} from "./productos/producto.service";
import {EstablecimientosComponent} from "./establecimientos/establecimientos.component";
import {EstablecimientoService} from "./establecimientos/establecimiento.service";
import {EstablecimientoDetailComponent} from "./establecimientos/establecimiento-detail.component";

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
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent,
    CategoriasComponent,
    CategoriaDetailComponent,
    ProductosComponent,
    ProductoDetailComponent,
    EstablecimientosComponent,
    EstablecimientoDetailComponent
  ],
  providers: [
      HeroService,
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
