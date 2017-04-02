System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var Company, CompanyService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            Company = (function () {
                function Company(id, name) {
                    this.id = id;
                    this.name = name;
                }
                return Company;
            }());
            exports_1("Company", Company);
            CompanyService = (function () {
                function CompanyService(http) {
                    this.http = http;
                }
                CompanyService.prototype.createAuthorizationHeader = function (headers) {
                    headers.append('Authorization', 'Basic ' +
                        btoa('a20e6aca-ee83-44bc-8033-b41f3078c2b6:c199f9c8-0548-4be7-9655-7ef7d7bf9d20'));
                };
                CompanyService.prototype.getCompanies = function () {
                    var headers = new http_1.Headers();
                    this.createAuthorizationHeader(headers);
                    return this.http.get('https://angular2.apispark.net/v1/companies/', {
                        headers: headers
                    }).map(function (res) { return res.json(); });
                };
                CompanyService.prototype.getCompany = function (companyId) {
                    var headers = new http_1.Headers();
                    this.createAuthorizationHeader(headers);
                    return this.http.get("https://angular2.apispark.net/v1/companies/" + companyId, {
                        headers: headers
                    }).map(function (res) { return res.json(); });
                };
                CompanyService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], CompanyService);
                return CompanyService;
            }());
            exports_1("CompanyService", CompanyService);
        }
    }
});
//# sourceMappingURL=companies.service.js.map