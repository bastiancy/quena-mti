System.register(['angular2/core', 'angular2/common'], function(exports_1, context_1) {
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
    var core_1, common_1;
    var FormFieldComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            FormFieldComponent = (function () {
                function FormFieldComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], FormFieldComponent.prototype, "label", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', common_1.Control)
                ], FormFieldComponent.prototype, "state", void 0);
                FormFieldComponent = __decorate([
                    core_1.Component({
                        selector: 'field',
                        template: "\n    <div class=\"form-group form-group-sm\">\n      <label for=\"for\"\n         class=\"col-sm-3 col-md-3 control-label\"\n         style=\"padding-right: 5px;\">{{label}}</label>\n\n      <div #content class=\"col-sm-8 col-md-8\"\n           style=\"padding-left: 5px\">\n        <ng-content ></ng-content>\n      </div>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], FormFieldComponent);
                return FormFieldComponent;
            }());
            exports_1("FormFieldComponent", FormFieldComponent);
        }
    }
});
//# sourceMappingURL=form.field.js.map