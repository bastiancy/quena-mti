/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as import0 from '@angular/core';
import * as import1 from '@angular/common';
import * as import2 from '../categorias/categorias-widget.component.ngfactory';
import * as import3 from '../../../../src/app/categorias/categorias-widget.component';
import * as import4 from '@angular/router';
import * as import5 from '../../../../src/app/categorias/categoria.service';
import * as import6 from '../../../../src/app/productos/producto-detail.component';
import * as import7 from '../../../../src/app/productos/producto.service';
var styles_ProductoDetailComponent = [];
export var RenderType_ProductoDetailComponent = import0.ɵcrt({
    encapsulation: 2,
    styles: styles_ProductoDetailComponent,
    data: {}
});
function View_ProductoDetailComponent_2(l) {
    return import0.ɵvid(0, [(l()(), import0.ɵeld(0, null, null, 0, 'img', [
            [
                'alt',
                ''
            ],
            [
                'class',
                'img-responsive'
            ]
        ], [[
                8,
                'src',
                4
            ]
        ], null, null, null, null))], null, function (ck, v) {
        var co = v.component;
        var currVal_0 = import0.ɵinlineInterpolate(1, '', co.producto.imagenes[0].url, '');
        ck(v, 0, 0, currVal_0);
    });
}
function View_ProductoDetailComponent_3(l) {
    return import0.ɵvid(0, [(l()(), import0.ɵeld(0, null, null, 0, 'img', [
            [
                'alt',
                ''
            ],
            [
                'class',
                'img-responsive'
            ],
            [
                'src',
                'http://placehold.it/320x150'
            ]
        ], null, null, null, null, null))], null, null);
}
function View_ProductoDetailComponent_4(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 3, 'div', [
            [
                'class',
                'img-thumbnail'
            ],
            [
                'style',
                'width: 150px; height: 100px; margin-top: 10px; margin-right: 10px; display: inline-block; overflow: hidden;'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵeld(0, null, null, 0, 'img', [
            [
                'alt',
                ''
            ],
            [
                'class',
                'img-responsive'
            ]
        ], [[
                8,
                'src',
                4
            ]
        ], null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n              ']))
    ], null, function (ck, v) {
        var currVal_0 = import0.ɵinlineInterpolate(1, '', v.context.$implicit.url, '');
        ck(v, 2, 0, currVal_0);
    });
}
function View_ProductoDetailComponent_5(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'b', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            'Categoria: ',
            ''
        ]))
    ], null, function (ck, v) {
        var co = v.component;
        var currVal_0 = co.producto.categoria.nombre;
        ck(v, 1, 0, currVal_0);
    });
}
function View_ProductoDetailComponent_6(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 5, 'p', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'b', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ])),
        (l()(), import0.ɵeld(0, null, null, 0, 'br', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '\n                ',
            '\n              '
        ]))
    ], null, function (ck, v) {
        var currVal_0 = v.context.$implicit.nombre;
        ck(v, 3, 0, currVal_0);
        var currVal_1 = v.context.$implicit.valor;
        ck(v, 5, 0, currVal_1);
    });
}
function View_ProductoDetailComponent_1(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 156, 'div', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n\n  '])),
        (l()(), import0.ɵeld(0, null, null, 153, 'div', [[
                'class',
                'row'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵeld(0, null, null, 139, 'div', [
            [
                'class',
                'col-md-9'
            ],
            [
                'style',
                'border-right: 1px solid #e3e3e3;'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n      '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'h3', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ])),
        (l()(), import0.ɵted(null, ['\n      '])),
        (l()(), import0.ɵeld(0, null, null, 0, 'hr', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n      '])),
        (l()(), import0.ɵeld(0, null, null, 58, 'div', [[
                'class',
                'row'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵeld(0, null, null, 25, 'div', [[
                'class',
                'col-md-7'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n          '])),
        (l()(), import0.ɵeld(0, null, null, 13, 'div', [[
                'class',
                'row'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵeld(0, null, null, 10, 'div', [[
                'class',
                'col-md-12'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n              '])),
        (l()(), import0.ɵeld(0, null, null, 7, 'div', [
            [
                'class',
                'img-thumbnail'
            ],
            [
                'style',
                'display: block; overflow: hidden;'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵand(8388608, null, null, 1, null, View_ProductoDetailComponent_2)),
        import0.ɵdid(8192, null, 0, import1.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵand(8388608, null, null, 1, null, View_ProductoDetailComponent_3)),
        import0.ɵdid(8192, null, 0, import1.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n              '])),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵted(null, ['\n          '])),
        (l()(), import0.ɵted(null, ['\n          '])),
        (l()(), import0.ɵeld(0, null, null, 7, 'div', [[
                'class',
                'row'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵeld(0, null, null, 4, 'div', [[
                'class',
                'col-md-12'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n              '])),
        (l()(), import0.ɵand(8388608, null, null, 1, null, View_ProductoDetailComponent_4)),
        import0.ɵdid(401408, null, 0, import1.NgForOf, [
            import0.ViewContainerRef,
            import0.TemplateRef,
            import0.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵted(null, ['\n          '])),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵeld(0, null, null, 28, 'div', [[
                'class',
                'col-md-5'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n          '])),
        (l()(), import0.ɵeld(0, null, null, 0, 'br', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n          '])),
        (l()(), import0.ɵeld(0, null, null, 20, 'p', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'b', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            'Codigo: ',
            ''
        ])),
        (l()(), import0.ɵeld(0, null, null, 0, 'br', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'b', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            'Modelo: ',
            ''
        ])),
        (l()(), import0.ɵeld(0, null, null, 0, 'br', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'b', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            'Marca: ',
            ''
        ])),
        (l()(), import0.ɵeld(0, null, null, 0, 'br', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'b', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            'Origen: ',
            ''
        ])),
        (l()(), import0.ɵeld(0, null, null, 0, 'br', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵand(8388608, null, null, 1, null, View_ProductoDetailComponent_5)),
        import0.ɵdid(8192, null, 0, import1.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n          '])),
        (l()(), import0.ɵted(null, ['\n          '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'p', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ])),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵted(null, ['\n      '])),
        (l()(), import0.ɵted(null, ['\n      '])),
        (l()(), import0.ɵeld(0, null, null, 0, 'br', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n      '])),
        (l()(), import0.ɵeld(0, null, null, 69, 'div', [[
                'class',
                'row'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵeld(0, null, null, 13, 'div', [[
                'class',
                'col-md-7'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n          '])),
        (l()(), import0.ɵeld(0, null, null, 10, 'div', [[
                'class',
                'panel panel-default'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [[
                'class',
                'panel-heading'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Caracteristicas'])),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵeld(0, null, null, 4, 'div', [[
                'class',
                'panel-body'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n              '])),
        (l()(), import0.ɵand(8388608, null, null, 1, null, View_ProductoDetailComponent_6)),
        import0.ɵdid(401408, null, 0, import1.NgForOf, [
            import0.ViewContainerRef,
            import0.TemplateRef,
            import0.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵted(null, ['\n          '])),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵeld(0, null, null, 51, 'div', [[
                'class',
                'col-md-5'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n          '])),
        (l()(), import0.ɵeld(0, null, null, 48, 'div', [[
                'class',
                'panel panel-default'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [[
                'class',
                'panel-heading'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Stock en tiendas'])),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵeld(0, null, null, 39, 'table', [[
                'class',
                'table'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n              '])),
        (l()(), import0.ɵeld(0, null, null, 15, 'thead', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n              '])),
        (l()(), import0.ɵeld(0, null, null, 12, 'tr', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'th', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Establecimiento'])),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'th', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Stock'])),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'th', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Precio'])),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵeld(0, null, null, 0, 'th', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n              '])),
        (l()(), import0.ɵted(null, ['\n              '])),
        (l()(), import0.ɵted(null, ['\n              '])),
        (l()(), import0.ɵeld(0, null, null, 19, 'tbody', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n              '])),
        (l()(), import0.ɵeld(0, null, null, 16, 'tr', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'td', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Santaigo'])),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'td', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['2'])),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'td', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['CLP$ 15000'])),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵeld(0, null, null, 4, 'td', [], null, null, null, null, null)),
        (l()(), import0.ɵeld(0, null, null, 3, 'button', [
            [
                'class',
                'btn btn-default btn-xs'
            ],
            [
                'title',
                'Agregar al carro'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n                  '])),
        (l()(), import0.ɵeld(0, null, null, 0, 'i', [[
                'class',
                'glyphicon glyphicon-shopping-cart'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵted(null, ['\n              '])),
        (l()(), import0.ɵted(null, ['\n              '])),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [[
                'class',
                'panel-body text-muted'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Puede agregar al carro este item según la tienda donde retira, los precios pueden variar.'])),
        (l()(), import0.ɵted(null, ['\n          '])),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵted(null, ['\n      '])),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵted(null, ['\n\n    '])),
        (l()(), import0.ɵeld(0, null, null, 9, 'div', [[
                'class',
                'col-md-3'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n      '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'p', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Quena store es un catalogo virtual de instrumentos musicales autoctonos, con tiendas en todo el mundo.'])),
        (l()(), import0.ɵted(null, ['\n      '])),
        (l()(), import0.ɵeld(0, null, null, 0, 'br', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n\n      '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'categorias-widget', [], null, null, null, import2.View_CategoriasWidgetComponent_0, import2.RenderType_CategoriasWidgetComponent)),
        import0.ɵdid(57344, null, 0, import3.CategoriasWidgetComponent, [
            import4.Router,
            import5.CategoriaService
        ], null, null),
        (l()(), import0.ɵted(null, ['\n\n    '])),
        (l()(), import0.ɵted(null, ['\n  '])),
        (l()(), import0.ɵted(null, ['\n']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_1 = (co.producto.imagenes.length > 0);
        ck(v, 22, 0, currVal_1);
        var currVal_2 = (co.producto.imagenes.length <= 0);
        ck(v, 25, 0, currVal_2);
        var currVal_3 = co.producto.imagenes;
        ck(v, 35, 0, currVal_3);
        var currVal_8 = co.producto.categoria;
        ck(v, 63, 0, currVal_8);
        var currVal_10 = co.producto.caracteristicas;
        ck(v, 85, 0, currVal_10);
        ck(v, 153, 0);
    }, function (ck, v) {
        var co = v.component;
        var currVal_0 = co.producto.nombre;
        ck(v, 7, 0, currVal_0);
        var currVal_4 = co.producto._id;
        ck(v, 47, 0, currVal_4);
        var currVal_5 = co.producto.modelo;
        ck(v, 51, 0, currVal_5);
        var currVal_6 = co.producto.marca;
        ck(v, 55, 0, currVal_6);
        var currVal_7 = co.producto.origen;
        ck(v, 59, 0, currVal_7);
        var currVal_9 = co.producto.descripcion;
        ck(v, 67, 0, currVal_9);
    });
}
export function View_ProductoDetailComponent_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵand(8388608, null, null, 1, null, View_ProductoDetailComponent_1)),
        import0.ɵdid(8192, null, 0, import1.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n\n\n\n']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_0 = co.producto;
        ck(v, 1, 0, currVal_0);
    }, null);
}
function View_ProductoDetailComponent_Host_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'producto-detail', [], null, null, null, View_ProductoDetailComponent_0, RenderType_ProductoDetailComponent)),
        import0.ɵdid(57344, null, 0, import6.ProductoDetailComponent, [
            import7.ProductoService,
            import4.ActivatedRoute,
            import1.Location
        ], null, null)
    ], function (ck, v) {
        ck(v, 1, 0);
    }, null);
}
export var ProductoDetailComponentNgFactory = import0.ɵccf('producto-detail', import6.ProductoDetailComponent, View_ProductoDetailComponent_Host_0, {}, {}, []);
//# sourceMappingURL=producto-detail.component.ngfactory.js.map