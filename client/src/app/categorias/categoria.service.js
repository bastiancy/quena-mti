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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var CategoriaService = (function () {
    function CategoriaService(http) {
        this.http = http;
        this.categoriasUrl = 'http://localhost:8080/categorias'; // URL to web api
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    CategoriaService.prototype.getCategorias = function () {
        return this.http.get(this.categoriasUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CategoriaService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    CategoriaService.prototype.getCategoria = function (id) {
        var url = this.categoriasUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CategoriaService.prototype.update = function (categoria) {
        var url = this.categoriasUrl + "/" + categoria.id;
        return this.http
            .put(url, JSON.stringify(categoria), { headers: this.headers })
            .toPromise()
            .then(function () { return categoria; })
            .catch(this.handleError);
    };
    CategoriaService.prototype.create = function (nombre, descripcion) {
        return this.http
            .post(this.categoriasUrl, JSON.stringify({ nombre: nombre, descripcion: descripcion }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    CategoriaService.prototype.delete = function (id) {
        var url = this.categoriasUrl + "/" + id;
        return this.http
            .delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    return CategoriaService;
}());
CategoriaService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CategoriaService);
exports.CategoriaService = CategoriaService;
//# sourceMappingURL=categoria.service.js.map