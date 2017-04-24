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
var producto_service_1 = require("./producto.service");
var ProductosComponent = (function () {
    function ProductosComponent(router, productoService) {
        this.router = router;
        this.productoService = productoService;
    }
    ProductosComponent.prototype.getProductos = function () {
        var _this = this;
        this.productoService.getProductos().then(function (productos) { return _this.productos = productos; });
    };
    ProductosComponent.prototype.ngOnInit = function () {
        this.getProductos();
    };
    ProductosComponent.prototype.onSelect = function (producto) {
        this.selectedProducto = producto;
    };
    ProductosComponent.prototype.gotoDetail = function (producto) {
        this.router.navigate(['/productos/detail', producto.id]);
    };
    ProductosComponent.prototype.add = function (nombre, descripcion) {
        var _this = this;
        nombre = nombre.trim();
        descripcion = descripcion.trim();
        if (!nombre) {
            return;
        }
        this.productoService.create(nombre, descripcion)
            .then(function (producto) {
            _this.productos.push(producto);
            _this.selectedProducto = null;
        });
    };
    ProductosComponent.prototype.delete = function (producto) {
        var _this = this;
        this.productoService
            .delete(producto.id)
            .then(function () {
            _this.productos = _this.productos.filter(function (h) { return h !== producto; });
            if (_this.selectedProducto === producto) {
                _this.selectedProducto = null;
            }
        });
    };
    return ProductosComponent;
}());
ProductosComponent = __decorate([
    core_1.Component({
        selector: 'my-productos',
        templateUrl: './productos.component.html',
        styleUrls: ['./productos.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        producto_service_1.ProductoService])
], ProductosComponent);
exports.ProductosComponent = ProductosComponent;
//# sourceMappingURL=productos.component.js.map