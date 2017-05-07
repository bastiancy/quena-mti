/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as import0 from '@angular/core';
import * as import1 from '@angular/router';
import * as import2 from '@angular/common';
import * as import3 from '../../../../src/app/productos/admin-productos.component';
import * as import4 from '../../../../src/app/productos/producto.service';
import * as import5 from '../../../../src/app/app-config.constants';
var styles_AdminProductosComponent = [];
export var RenderType_AdminProductosComponent = import0.ɵcrt({
    encapsulation: 2,
    styles: styles_AdminProductosComponent,
    data: {}
});
function View_AdminProductosComponent_1(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 19, 'tr', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'td', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ])),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'td', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ])),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'td', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ])),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵeld(0, null, null, 7, 'td', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n              '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'button', [
            [
                'class',
                'btn btn-default btn-sm'
            ],
            [
                'title',
                'Editar'
            ]
        ], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = (co.gotoDetail(v.context.$implicit) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import0.ɵeld(0, null, null, 0, 'i', [[
                'class',
                'glyphicon glyphicon-pencil'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n              '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'button', [
            [
                'class',
                'btn btn-danger btn-sm'
            ],
            [
                'title',
                'Borrar'
            ]
        ], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = (co.delete(v.context.$implicit) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import0.ɵeld(0, null, null, 0, 'i', [[
                'class',
                'glyphicon glyphicon-trash'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵted(null, ['\n          ']))
    ], null, function (ck, v) {
        var currVal_0 = v.context.$implicit._id;
        ck(v, 3, 0, currVal_0);
        var currVal_1 = v.context.$implicit.nombre;
        ck(v, 6, 0, currVal_1);
        var currVal_2 = v.context.$implicit.categoria.nombre;
        ck(v, 9, 0, currVal_2);
    });
}
export function View_AdminProductosComponent_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'h3', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Administracion'])),
        (l()(), import0.ɵted(null, ['\n'])),
        (l()(), import0.ɵeld(0, null, null, 0, 'br', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n\n'])),
        (l()(), import0.ɵeld(0, null, null, 31, 'ul', [[
                'class',
                'nav nav-tabs'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n  '])),
        (l()(), import0.ɵeld(0, null, null, 8, 'li', [[
                'role',
                'presentation'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵeld(0, null, null, 5, 'a', [
            [
                'routerLink',
                '/admin/categorias'
            ],
            [
                'routerLinkActive',
                'active'
            ]
        ], [
            [
                1,
                'target',
                0
            ],
            [
                8,
                'href',
                4
            ]
        ], [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (import0.ɵnov(v, 10).onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        import0.ɵdid(335872, [[
                2,
                4
            ]
        ], 0, import1.RouterLinkWithHref, [
            import1.Router,
            import1.ActivatedRoute,
            import2.LocationStrategy
        ], { routerLink: [
                0,
                'routerLink'
            ]
        }, null),
        import0.ɵdid(860160, null, 2, import1.RouterLinkActive, [
            import1.Router,
            import0.ElementRef,
            import0.Renderer,
            import0.ChangeDetectorRef
        ], { routerLinkActive: [
                0,
                'routerLinkActive'
            ]
        }, null),
        import0.ɵqud(301989888, 1, { links: 1 }),
        import0.ɵqud(301989888, 2, { linksWithHrefs: 1 }),
        (l()(), import0.ɵted(null, ['Categorias'])),
        (l()(), import0.ɵted(null, ['\n  '])),
        (l()(), import0.ɵted(null, ['\n  '])),
        (l()(), import0.ɵeld(0, null, null, 8, 'li', [
            [
                'class',
                'active'
            ],
            [
                'role',
                'presentation'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵeld(0, null, null, 5, 'a', [
            [
                'routerLink',
                '/admin/productos'
            ],
            [
                'routerLinkActive',
                'active'
            ]
        ], [
            [
                1,
                'target',
                0
            ],
            [
                8,
                'href',
                4
            ]
        ], [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (import0.ɵnov(v, 20).onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        import0.ɵdid(335872, [[
                4,
                4
            ]
        ], 0, import1.RouterLinkWithHref, [
            import1.Router,
            import1.ActivatedRoute,
            import2.LocationStrategy
        ], { routerLink: [
                0,
                'routerLink'
            ]
        }, null),
        import0.ɵdid(860160, null, 2, import1.RouterLinkActive, [
            import1.Router,
            import0.ElementRef,
            import0.Renderer,
            import0.ChangeDetectorRef
        ], { routerLinkActive: [
                0,
                'routerLinkActive'
            ]
        }, null),
        import0.ɵqud(301989888, 3, { links: 1 }),
        import0.ɵqud(301989888, 4, { linksWithHrefs: 1 }),
        (l()(), import0.ɵted(null, ['Productos'])),
        (l()(), import0.ɵted(null, ['\n  '])),
        (l()(), import0.ɵted(null, ['\n  '])),
        (l()(), import0.ɵeld(0, null, null, 8, 'li', [[
                'role',
                'presentation'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵeld(0, null, null, 5, 'a', [
            [
                'routerLink',
                '/admin/establecimientos'
            ],
            [
                'routerLinkActive',
                'active'
            ]
        ], [
            [
                1,
                'target',
                0
            ],
            [
                8,
                'href',
                4
            ]
        ], [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (import0.ɵnov(v, 30).onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        import0.ɵdid(335872, [[
                6,
                4
            ]
        ], 0, import1.RouterLinkWithHref, [
            import1.Router,
            import1.ActivatedRoute,
            import2.LocationStrategy
        ], { routerLink: [
                0,
                'routerLink'
            ]
        }, null),
        import0.ɵdid(860160, null, 2, import1.RouterLinkActive, [
            import1.Router,
            import0.ElementRef,
            import0.Renderer,
            import0.ChangeDetectorRef
        ], { routerLinkActive: [
                0,
                'routerLinkActive'
            ]
        }, null),
        import0.ɵqud(301989888, 5, { links: 1 }),
        import0.ɵqud(301989888, 6, { linksWithHrefs: 1 }),
        (l()(), import0.ɵted(null, ['Establecimientos'])),
        (l()(), import0.ɵted(null, ['\n  '])),
        (l()(), import0.ɵted(null, ['\n'])),
        (l()(), import0.ɵted(null, ['\n'])),
        (l()(), import0.ɵeld(0, null, null, 0, 'br', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n\n'])),
        (l()(), import0.ɵeld(0, null, null, 71, 'div', [[
                'class',
                'row'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n  '])),
        (l()(), import0.ɵeld(0, null, null, 37, 'div', [[
                'class',
                'col-md-7'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵeld(0, null, null, 34, 'div', [[
                'class',
                'panel panel-default'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n      '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [[
                'class',
                'panel-heading'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Lista de Productos'])),
        (l()(), import0.ɵted(null, ['\n      '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [[
                'class',
                'panel-body'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n\n      '])),
        (l()(), import0.ɵted(null, ['\n      '])),
        (l()(), import0.ɵeld(0, null, null, 25, 'table', [[
                'class',
                'table'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵeld(0, null, null, 16, 'thead', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵeld(0, null, null, 13, 'tr', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n          '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'th', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['id'])),
        (l()(), import0.ɵted(null, ['\n          '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'th', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['nombre'])),
        (l()(), import0.ɵted(null, ['\n          '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'th', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['categoria'])),
        (l()(), import0.ɵted(null, ['\n          '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'th', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['opciones'])),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵeld(0, null, null, 4, 'tbody', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n          '])),
        (l()(), import0.ɵand(8388608, null, null, 1, null, View_AdminProductosComponent_1)),
        import0.ɵdid(401408, null, 0, import2.NgForOf, [
            import0.ViewContainerRef,
            import0.TemplateRef,
            import0.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵted(null, ['\n      '])),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵted(null, ['\n  '])),
        (l()(), import0.ɵted(null, ['\n  '])),
        (l()(), import0.ɵeld(0, null, null, 29, 'div', [[
                'class',
                'col-md-5'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵeld(0, null, null, 26, 'div', [[
                'class',
                'panel panel-default'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n      '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [[
                'class',
                'panel-heading'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Agregar producto'])),
        (l()(), import0.ɵted(null, ['\n      '])),
        (l()(), import0.ɵeld(0, null, null, 20, 'div', [[
                'class',
                'panel-body'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n\n        '])),
        (l()(), import0.ɵeld(0, null, null, 6, 'div', [[
                'class',
                'form-group'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n          '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'label', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Nombre:'])),
        (l()(), import0.ɵted(null, ['\n          '])),
        (l()(), import0.ɵeld(0, [[
                'productoNombre',
                1
            ]
        ], null, 0, 'input', [[
                'class',
                'form-control'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵeld(0, null, null, 6, 'div', [[
                'class',
                'form-group'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n          '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'label', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Descripcion:'])),
        (l()(), import0.ɵted(null, ['\n          '])),
        (l()(), import0.ɵeld(0, [[
                'productoDescripcion',
                1
            ]
        ], null, 0, 'textarea', [[
                'class',
                'form-control'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵted(null, ['\n\n        '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'button', [[
                'class',
                'btn btn-success'
            ]
        ], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                co.add(import0.ɵnov(v, 95).value, import0.ɵnov(v, 103).value);
                import0.ɵnov(v, 95).value = '';
                var pd_0 = ((import0.ɵnov(v, 103).value = '') !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import0.ɵted(null, ['\n          Guardar\n        '])),
        (l()(), import0.ɵted(null, ['\n\n      '])),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵted(null, ['\n  '])),
        (l()(), import0.ɵted(null, ['\n'])),
        (l()(), import0.ɵted(null, ['\n']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_2 = '/admin/categorias';
        ck(v, 10, 0, currVal_2);
        var currVal_3 = 'active';
        ck(v, 11, 0, currVal_3);
        var currVal_6 = '/admin/productos';
        ck(v, 20, 0, currVal_6);
        var currVal_7 = 'active';
        ck(v, 21, 0, currVal_7);
        var currVal_10 = '/admin/establecimientos';
        ck(v, 30, 0, currVal_10);
        var currVal_11 = 'active';
        ck(v, 31, 0, currVal_11);
        var currVal_12 = co.productos;
        ck(v, 75, 0, currVal_12);
    }, function (ck, v) {
        var currVal_0 = import0.ɵnov(v, 10).target;
        var currVal_1 = import0.ɵnov(v, 10).href;
        ck(v, 9, 0, currVal_0, currVal_1);
        var currVal_4 = import0.ɵnov(v, 20).target;
        var currVal_5 = import0.ɵnov(v, 20).href;
        ck(v, 19, 0, currVal_4, currVal_5);
        var currVal_8 = import0.ɵnov(v, 30).target;
        var currVal_9 = import0.ɵnov(v, 30).href;
        ck(v, 29, 0, currVal_8, currVal_9);
    });
}
function View_AdminProductosComponent_Host_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'my-productos', [], null, null, null, View_AdminProductosComponent_0, RenderType_AdminProductosComponent)),
        import0.ɵdid(57344, null, 0, import3.AdminProductosComponent, [
            import1.Router,
            import4.ProductoService,
            import5.APP_CONFIG
        ], null, null)
    ], function (ck, v) {
        ck(v, 1, 0);
    }, null);
}
export var AdminProductosComponentNgFactory = import0.ɵccf('my-productos', import3.AdminProductosComponent, View_AdminProductosComponent_Host_0, {}, {}, []);
//# sourceMappingURL=admin-productos.component.ngfactory.js.map