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
var establecimiento_service_1 = require("./establecimiento.service");
var EstablecimientosComponent = (function () {
    function EstablecimientosComponent(router, establecimientoService) {
        this.router = router;
        this.establecimientoService = establecimientoService;
    }
    EstablecimientosComponent.prototype.getEstablecimientos = function () {
        var _this = this;
        this.establecimientoService.getEstablecimientos().then(function (establecimientos) { return _this.establecimientos = establecimientos; });
    };
    EstablecimientosComponent.prototype.ngOnInit = function () {
        this.getEstablecimientos();
    };
    EstablecimientosComponent.prototype.onSelect = function (establecimiento) {
        this.selectedEstablecimiento = establecimiento;
    };
    EstablecimientosComponent.prototype.gotoDetail = function (establecimiento) {
        this.router.navigate(['/establecimientos/detail', establecimiento.id]);
    };
    EstablecimientosComponent.prototype.add = function (nombre, descripcion) {
        var _this = this;
        nombre = nombre.trim();
        descripcion = descripcion.trim();
        if (!nombre) {
            return;
        }
        this.establecimientoService.create(nombre, descripcion)
            .then(function (establecimiento) {
            _this.establecimientos.push(establecimiento);
            _this.selectedEstablecimiento = null;
        });
    };
    EstablecimientosComponent.prototype.delete = function (establecimiento) {
        var _this = this;
        this.establecimientoService
            .delete(establecimiento.id)
            .then(function () {
            _this.establecimientos = _this.establecimientos.filter(function (h) { return h !== establecimiento; });
            if (_this.selectedEstablecimiento === establecimiento) {
                _this.selectedEstablecimiento = null;
            }
        });
    };
    return EstablecimientosComponent;
}());
EstablecimientosComponent = __decorate([
    core_1.Component({
        selector: 'my-establecimientos',
        templateUrl: './establecimientos.component.html',
        styleUrls: ['./establecimientos.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        establecimiento_service_1.EstablecimientoService])
], EstablecimientosComponent);
exports.EstablecimientosComponent = EstablecimientosComponent;
//# sourceMappingURL=establecimientos.component.js.map