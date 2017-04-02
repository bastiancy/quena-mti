System.register(['angular2/core', 'angular2/router', './form.field', '../services/companies.service'], function(exports_1, context_1) {
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
    var core_1, router_1, form_field_1, companies_service_1;
    var DetailsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (form_field_1_1) {
                form_field_1 = form_field_1_1;
            },
            function (companies_service_1_1) {
                companies_service_1 = companies_service_1_1;
            }],
        execute: function() {
            DetailsComponent = (function () {
                function DetailsComponent(service, routeParams) {
                    var _this = this;
                    this.service = service;
                    this.routeParams = routeParams;
                    var companyId = this.routeParams.get('id');
                    service.getCompany(companyId).subscribe(function (company) { return _this.company = company; });
                }
                DetailsComponent = __decorate([
                    core_1.Component({
                        selector: 'company-details',
                        directives: [form_field_1.FormFieldComponent],
                        templateUrl: '/app/templates/company.details.html'
                    }), 
                    __metadata('design:paramtypes', [companies_service_1.CompanyService, router_1.RouteParams])
                ], DetailsComponent);
                return DetailsComponent;
            }());
            exports_1("DetailsComponent", DetailsComponent);
        }
    }
});
//# sourceMappingURL=company.details.js.map