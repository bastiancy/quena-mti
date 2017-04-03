"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
require("rxjs/add/operator/switchMap");
var categoria_service_1 = require("./categoria.service");
var CategoriaDetailComponent = (function () {
    function CategoriaDetailComponent(categoriaService, route, location) {
        this.categoriaService = categoriaService;
        this.route = route;
        this.location = location;
    }
    CategoriaDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.categoriaService.getCategoria(params['id']); })
            .subscribe(function (categoria) { return _this.categoria = categoria; });
    };
    CategoriaDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    CategoriaDetailComponent.prototype.save = function () {
        var _this = this;
        this.categoriaService.update(this.categoria)
            .then(function () { return _this.goBack(); });
    };
    return CategoriaDetailComponent;
}());
CategoriaDetailComponent = __decorate([
    core_1.Component({
        selector: 'categoria-detail',
        templateUrl: './categoria-detail.component.html',
    }),
    __metadata("design:paramtypes", [categoria_service_1.CategoriaService,
        router_1.ActivatedRoute,
        common_1.Location])
], CategoriaDetailComponent);
exports.CategoriaDetailComponent = CategoriaDetailComponent;
//# sourceMappingURL=categoria-detail.component.js.map