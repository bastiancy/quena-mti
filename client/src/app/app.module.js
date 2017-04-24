"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var dashboard_component_1 = require("./heroes/dashboard.component");
var hero_detail_component_1 = require("./heroes/hero-detail.component");
var heroes_component_1 = require("./heroes/heroes.component");
var hero_service_1 = require("./heroes/hero.service");
var hero_search_component_1 = require("./heroes/hero-search.component");
var categoria_service_1 = require("./categorias/categoria.service");
var categorias_component_1 = require("./categorias/categorias.component");
var categoria_detail_component_1 = require("./categorias/categoria-detail.component");
var productos_component_1 = require("./productos/productos.component");
var producto_detail_component_1 = require("./productos/producto-detail.component");
var app_config_constants_1 = require("./app-config.constants");
var producto_service_1 = require("./productos/producto.service");
var establecimientos_component_1 = require("./establecimientos/establecimientos.component");
var establecimiento_service_1 = require("./establecimientos/establecimiento.service");
var establecimiento_detail_component_1 = require("./establecimientos/establecimiento-detail.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            // InMemoryWebApiModule.forRoot(InMemoryDataService),
            app_routing_module_1.AppRoutingModule
        ],
        declarations: [
            app_component_1.AppComponent,
            dashboard_component_1.DashboardComponent,
            hero_detail_component_1.HeroDetailComponent,
            heroes_component_1.HeroesComponent,
            hero_search_component_1.HeroSearchComponent,
            categorias_component_1.CategoriasComponent,
            categoria_detail_component_1.CategoriaDetailComponent,
            productos_component_1.ProductosComponent,
            producto_detail_component_1.ProductoDetailComponent,
            establecimientos_component_1.EstablecimientosComponent,
            establecimiento_detail_component_1.EstablecimientoDetailComponent,
        ],
        providers: [
            hero_service_1.HeroService,
            categoria_service_1.CategoriaService,
            producto_service_1.ProductoService,
            establecimiento_service_1.EstablecimientoService,
            {
                provide: app_config_constants_1.APP_CONFIG,
                useValue: app_config_constants_1.APP_DI_CONFIG
            }
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map