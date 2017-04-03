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
var categoria_service_1 = require("./categoria.service");
var CategoriasComponent = (function () {
    function CategoriasComponent(router, categoriaService) {
        this.router = router;
        this.categoriaService = categoriaService;
    }
    CategoriasComponent.prototype.getCategorias = function () {
        var _this = this;
        this.categoriaService.getCategorias().then(function (categorias) { return _this.categorias = categorias; });
    };
    CategoriasComponent.prototype.ngOnInit = function () {
        this.getCategorias();
    };
    CategoriasComponent.prototype.onSelect = function (categoria) {
        this.selectedCategoria = categoria;
    };
    CategoriasComponent.prototype.gotoDetail = function (categoria) {
        this.router.navigate(['/categorias/detail', categoria.id]);
    };
    CategoriasComponent.prototype.add = function (nombre, descripcion) {
        var _this = this;
        nombre = nombre.trim();
        descripcion = descripcion.trim();
        if (!nombre) {
            return;
        }
        this.categoriaService.create(nombre, descripcion)
            .then(function (categoria) {
            _this.categorias.push(categoria);
            _this.selectedCategoria = null;
        });
    };
    CategoriasComponent.prototype.delete = function (categoria) {
        var _this = this;
        this.categoriaService
            .delete(categoria.id)
            .then(function () {
            _this.categorias = _this.categorias.filter(function (h) { return h !== categoria; });
            if (_this.selectedCategoria === categoria) {
                _this.selectedCategoria = null;
            }
        });
    };
    return CategoriasComponent;
}());
CategoriasComponent = __decorate([
    core_1.Component({
        selector: 'my-categorias',
        templateUrl: './categorias.component.html',
        styleUrls: ['./categorias.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        categoria_service_1.CategoriaService])
], CategoriasComponent);
exports.CategoriasComponent = CategoriasComponent;
//# sourceMappingURL=categorias.component.js.map