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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var app_config_constants_1 = require("../app-config.constants");
var EstablecimientoService = (function () {
    function EstablecimientoService(http, config) {
        this.http = http;
        this.config = config;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.establecimientosUrl = this.config.API_ENDPOINT + '/establecimientos';
    }
    EstablecimientoService.prototype.getEstablecimientos = function () {
        return this.http.get(this.establecimientosUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    EstablecimientoService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    EstablecimientoService.prototype.getEstablecimiento = function (id) {
        var url = this.establecimientosUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    EstablecimientoService.prototype.update = function (establecimiento) {
        var url = this.establecimientosUrl + "/" + establecimiento.id;
        return this.http
            .put(url, JSON.stringify(establecimiento), { headers: this.headers })
            .toPromise()
            .then(function () { return establecimiento; })
            .catch(this.handleError);
    };
    EstablecimientoService.prototype.create = function (nombre, descripcion) {
        return this.http
            .post(this.establecimientosUrl, JSON.stringify({ nombre: nombre, descripcion: descripcion }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    EstablecimientoService.prototype.delete = function (id) {
        var url = this.establecimientosUrl + "/" + id;
        return this.http
            .delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    return EstablecimientoService;
}());
EstablecimientoService = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Inject(app_config_constants_1.APP_CONFIG)),
    __metadata("design:paramtypes", [http_1.Http, Object])
], EstablecimientoService);
exports.EstablecimientoService = EstablecimientoService;
//# sourceMappingURL=establecimiento.service.js.map