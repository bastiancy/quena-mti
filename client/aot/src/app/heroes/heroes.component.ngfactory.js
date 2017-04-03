/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
"use strict";
var import0 = require("./heroes.component.css.shim.ngstyle");
var import1 = require("@angular/core");
var import2 = require("@angular/common");
var import3 = require("../../../../src/app/heroes/heroes.component");
var import4 = require("@angular/router");
var import5 = require("../../../../src/app/heroes/hero.service");
var styles_HeroesComponent = [import0.styles];
exports.RenderType_HeroesComponent = import1.ɵcrt({
    encapsulation: 0,
    styles: styles_HeroesComponent,
    data: {}
});
function View_HeroesComponent_1(l) {
    return import1.ɵvid(0, [
        (l()(), import1.ɵeld(0, null, null, 10, 'li', [], [[
                2,
                'selected',
                null
            ]
        ], [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = (co.onSelect(v.context.$implicit) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import1.ɵted(null, ['\n        '])),
        (l()(), import1.ɵeld(0, null, null, 1, 'span', [[
                'class',
                'badge'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, [
            '',
            ''
        ])),
        (l()(), import1.ɵted(null, ['\n        '])),
        (l()(), import1.ɵeld(0, null, null, 1, 'span', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, [
            '',
            ''
        ])),
        (l()(), import1.ɵted(null, ['\n        '])),
        (l()(), import1.ɵeld(0, null, null, 1, 'button', [[
                'class',
                'delete'
            ]
        ], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                co.delete(v.context.$implicit);
                var pd_0 = ($event.stopPropagation() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import1.ɵted(null, ['x'])),
        (l()(), import1.ɵted(null, ['\n    ']))
    ], null, function (ck, v) {
        var co = v.component;
        var currVal_0 = (v.context.$implicit === co.selectedHero);
        ck(v, 0, 0, currVal_0);
        var currVal_1 = v.context.$implicit.id;
        ck(v, 3, 0, currVal_1);
        var currVal_2 = v.context.$implicit.name;
        ck(v, 6, 0, currVal_2);
    });
}
function View_HeroesComponent_2(l) {
    return import1.ɵvid(0, [
        (l()(), import1.ɵeld(0, null, null, 8, 'div', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n    '])),
        (l()(), import1.ɵeld(0, null, null, 2, 'h2', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, [
            '\n        ',
            ' is my hero\n    '
        ])),
        import1.ɵppd(1),
        (l()(), import1.ɵted(null, ['\n    '])),
        (l()(), import1.ɵeld(0, null, null, 1, 'button', [], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = (co.gotoDetail() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import1.ɵted(null, ['View Details'])),
        (l()(), import1.ɵted(null, ['\n']))
    ], null, function (ck, v) {
        var co = v.component;
        var currVal_0 = import1.ɵunv(v, 3, 0, ck(v, 4, 0, import1.ɵnov(v.parent, 0), co.selectedHero.name));
        ck(v, 3, 0, currVal_0);
    });
}
function View_HeroesComponent_0(l) {
    return import1.ɵvid(0, [
        import1.ɵpid(0, import2.UpperCasePipe, []),
        (l()(), import1.ɵeld(0, null, null, 1, 'h2', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['My Heroes'])),
        (l()(), import1.ɵted(null, ['\n'])),
        (l()(), import1.ɵeld(0, null, null, 9, 'div', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n    '])),
        (l()(), import1.ɵeld(0, null, null, 1, 'label', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['Hero name:'])),
        (l()(), import1.ɵted(null, [' '])),
        (l()(), import1.ɵeld(0, [[
                'heroName',
                1
            ]
        ], null, 0, 'input', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n    '])),
        (l()(), import1.ɵeld(0, null, null, 1, 'button', [], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                co.add(import1.ɵnov(v, 9).value);
                var pd_0 = ((import1.ɵnov(v, 9).value = '') !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import1.ɵted(null, ['\n        Add\n    '])),
        (l()(), import1.ɵted(null, ['\n'])),
        (l()(), import1.ɵted(null, ['\n'])),
        (l()(), import1.ɵeld(0, null, null, 4, 'ul', [[
                'class',
                'heroes'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n    '])),
        (l()(), import1.ɵand(8388608, null, null, 1, null, View_HeroesComponent_1)),
        import1.ɵdid(401408, null, 0, import2.NgForOf, [
            import1.ViewContainerRef,
            import1.TemplateRef,
            import1.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        (l()(), import1.ɵted(null, ['\n'])),
        (l()(), import1.ɵted(null, ['\n'])),
        (l()(), import1.ɵand(8388608, null, null, 1, null, View_HeroesComponent_2)),
        import1.ɵdid(8192, null, 0, import2.NgIf, [
            import1.ViewContainerRef,
            import1.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null)
    ], function (ck, v) {
        var co = v.component;
        var currVal_0 = co.heroes;
        ck(v, 18, 0, currVal_0);
        var currVal_1 = co.selectedHero;
        ck(v, 22, 0, currVal_1);
    }, null);
}
exports.View_HeroesComponent_0 = View_HeroesComponent_0;
function View_HeroesComponent_Host_0(l) {
    return import1.ɵvid(0, [
        (l()(), import1.ɵeld(0, null, null, 1, 'my-heroes', [], null, null, null, View_HeroesComponent_0, exports.RenderType_HeroesComponent)),
        import1.ɵdid(57344, null, 0, import3.HeroesComponent, [
            import4.Router,
            import5.HeroService
        ], null, null)
    ], function (ck, v) {
        ck(v, 1, 0);
    }, null);
}
exports.HeroesComponentNgFactory = import1.ɵccf('my-heroes', import3.HeroesComponent, View_HeroesComponent_Host_0, {}, {}, []);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL2hvbWUvYmFzdGlhbi9wcm95ZWN0b3MvbXRpL2FwbGljYWNpb25lcy13ZWIvcXVlbmEtc3dhZ2dlci9jbGllbnQvc3JjL2FwcC9oZXJvZXMvaGVyb2VzLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9ob21lL2Jhc3RpYW4vcHJveWVjdG9zL210aS9hcGxpY2FjaW9uZXMtd2ViL3F1ZW5hLXN3YWdnZXIvY2xpZW50L3NyYy9hcHAvaGVyb2VzL2hlcm9lcy5jb21wb25lbnQudHMiLCJuZzovLy9ob21lL2Jhc3RpYW4vcHJveWVjdG9zL210aS9hcGxpY2FjaW9uZXMtd2ViL3F1ZW5hLXN3YWdnZXIvY2xpZW50L3NyYy9hcHAvaGVyb2VzL2hlcm9lcy5jb21wb25lbnQuaHRtbCIsIm5nOi8vL2hvbWUvYmFzdGlhbi9wcm95ZWN0b3MvbXRpL2FwbGljYWNpb25lcy13ZWIvcXVlbmEtc3dhZ2dlci9jbGllbnQvc3JjL2FwcC9oZXJvZXMvaGVyb2VzLmNvbXBvbmVudC50cy5IZXJvZXNDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCI8aDI+TXkgSGVyb2VzPC9oMj5cbjxkaXY+XG4gICAgPGxhYmVsPkhlcm8gbmFtZTo8L2xhYmVsPiA8aW5wdXQgI2hlcm9OYW1lIC8+XG4gICAgPGJ1dHRvbiAoY2xpY2spPVwiYWRkKGhlcm9OYW1lLnZhbHVlKTsgaGVyb05hbWUudmFsdWU9JydcIj5cbiAgICAgICAgQWRkXG4gICAgPC9idXR0b24+XG48L2Rpdj5cbjx1bCBjbGFzcz1cImhlcm9lc1wiPlxuICAgIDxsaSAqbmdGb3I9XCJsZXQgaGVybyBvZiBoZXJvZXNcIiAoY2xpY2spPVwib25TZWxlY3QoaGVybylcIlxuICAgICAgICBbY2xhc3Muc2VsZWN0ZWRdPVwiaGVybyA9PT0gc2VsZWN0ZWRIZXJvXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2VcIj57e2hlcm8uaWR9fTwvc3Bhbj5cbiAgICAgICAgPHNwYW4+e3toZXJvLm5hbWV9fTwvc3Bhbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRlbGV0ZVwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImRlbGV0ZShoZXJvKTsgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCI+eDwvYnV0dG9uPlxuICAgIDwvbGk+XG48L3VsPlxuPGRpdiAqbmdJZj1cInNlbGVjdGVkSGVyb1wiPlxuICAgIDxoMj5cbiAgICAgICAge3tzZWxlY3RlZEhlcm8ubmFtZSB8IHVwcGVyY2FzZX19IGlzIG15IGhlcm9cbiAgICA8L2gyPlxuICAgIDxidXR0b24gKGNsaWNrKT1cImdvdG9EZXRhaWwoKVwiPlZpZXcgRGV0YWlsczwvYnV0dG9uPlxuPC9kaXY+IiwiPG15LWhlcm9lcz48L215LWhlcm9lcz4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQ1FJO1FBQUE7UUFBQTtRQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7TUFBQTtNQUFnQztRQUFBO1FBQUE7TUFBQTtNQUFoQztJQUFBO0lBQzZDO01BQ3pDO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBb0I7TUFBQTtNQUFBO0lBQUE7SUFBQTtJQUFrQjtJQUN0QztJQUFNO01BQUE7TUFBQTtJQUFBO0lBQUE7SUFBb0I7TUFDMUI7UUFBQTtRQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7TUFBQTtNQUNRO1FBQUE7UUFBQTtRQUFBO01BQUE7TUFEUjtJQUFBO0lBQ3lEO0lBQVU7Ozs7SUFKbkU7SUFESixTQUNJLFNBREo7SUFFd0I7SUFBQTtJQUNkO0lBQUE7Ozs7O0lBS2Q7SUFBMEI7SUFDdEI7SUFBSTtNQUFBO01BQUE7SUFBQTtJQUFBO2dCQUFBO0lBRUM7TUFDTDtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7TUFBQTtNQUFRO1FBQUE7UUFBQTtNQUFBO01BQVI7SUFBQTtJQUErQjtJQUFxQjs7OztJQUhoRDtJQUFBOzs7Ozs7SUFqQlI7SUFBSTtJQUFjO0lBQ2xCO0lBQUs7SUFDRDtJQUFPO0lBQWtCO01BQUM7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUFtQjtNQUM3QztRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7TUFBQTtNQUFRO1FBQUE7UUFBQTtRQUFBO01BQUE7TUFBUjtJQUFBO0lBQXlEO0lBRWhEO0lBQ1A7TUFDTjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQW1CO0lBQ2Y7Z0JBQUE7Ozs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFNSztJQUNKO0lBQ0w7Z0JBQUE7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTs7OztJQVJRO0lBQUosVUFBSSxTQUFKO0lBUUM7SUFBTCxVQUFLLFNBQUw7Ozs7O0lDaEJBO2dCQUFBOzs7SUFBQTtLQUFBOzs7SUFBQTs7OyJ9
//# sourceMappingURL=heroes.component.ngfactory.js.map