/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '@angular/router';
import * as import2 from '@angular/common';
import * as import3 from '../../../../src/app/categorias/admin-categorias.component';
import * as import4 from '../../../../src/app/categorias/categoria.service';
const styles_AdminCategoriasComponent:any[] = ([] as any[]);
export const RenderType_AdminCategoriasComponent:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 2,
  styles: styles_AdminCategoriasComponent,
  data: {}
}
);
function View_AdminCategoriasComponent_1(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),19,'tr',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'td',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '',
      ''
    ]
    )),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'td',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '',
      ''
    ]
    )),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'td',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '',
      ''
    ]
    )),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),7,'td',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n              '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'button',[
      [
        'class',
        'btn btn-default btn-sm'
      ]
      ,
      [
        'title',
        'Editar'
      ]

    ]
      ,(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:any = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.gotoDetail(v.context.$implicit)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
      (l()(),import0.ɵeld(0,(null as any),(null as any),0,'i',[[
        'class',
        'glyphicon glyphicon-pencil'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n              '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'button',[
      [
        'class',
        'btn btn-danger btn-sm'
      ]
      ,
      [
        'title',
        'Borrar'
      ]

    ]
      ,(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:any = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.delete(v.context.$implicit)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
      (l()(),import0.ɵeld(0,(null as any),(null as any),0,'i',[[
        'class',
        'glyphicon glyphicon-trash'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵted((null as any),['\n          ']))
  ]
  ,(null as any),(ck,v) => {
    const currVal_0:any = v.context.$implicit._id;
    ck(v,3,0,currVal_0);
    const currVal_1:any = v.context.$implicit.nombre;
    ck(v,6,0,currVal_1);
    const currVal_2:any = v.context.$implicit.descripcion;
    ck(v,9,0,currVal_2);
  });
}
export function View_AdminCategoriasComponent_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'h3',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Administracion'])),
    (l()(),import0.ɵted((null as any),['\n'])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),0,'br',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n\n'])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),31,'ul',[[
        'class',
        'nav nav-tabs'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n  '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),8,'li',[
      [
        'class',
        'active'
      ]
      ,
      [
        'role',
        'presentation'
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),5,'a',[
      [
        'routerLink',
        '/admin/categorias'
      ]
      ,
      [
        'routerLinkActive',
        'active'
      ]

    ]
    ,[
      [
        1,
        'target',
        0
      ]
      ,
      [
        8,
        'href',
        4
      ]

    ]
      ,[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      if (('click' === en)) {
        const pd_0:any = ((<any>import0.ɵnov(v,10).onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
      import0.ɵdid(335872,[[
        2,
        4
      ]
    ],0,import1.RouterLinkWithHref,[
      import1.Router,
      import1.ActivatedRoute,
      import2.LocationStrategy
    ]
      ,{routerLink: [
        0,
        'routerLink'
      ]
    },(null as any)),
    import0.ɵdid(860160,(null as any),2,import1.RouterLinkActive,[
      import1.Router,
      import0.ElementRef,
      import0.Renderer,
      import0.ChangeDetectorRef
    ]
      ,{routerLinkActive: [
        0,
        'routerLinkActive'
      ]
    },(null as any)),
    import0.ɵqud(301989888,1,{links: 1}),
    import0.ɵqud(301989888,2,{linksWithHrefs: 1}),
    (l()(),import0.ɵted((null as any),['Categorias'])),
    (l()(),import0.ɵted((null as any),['\n  '])),
    (l()(),import0.ɵted((null as any),['\n  '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),8,'li',[[
        'role',
        'presentation'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),5,'a',[
      [
        'routerLink',
        '/admin/productos'
      ]
      ,
      [
        'routerLinkActive',
        'active'
      ]

    ]
    ,[
      [
        1,
        'target',
        0
      ]
      ,
      [
        8,
        'href',
        4
      ]

    ]
      ,[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      if (('click' === en)) {
        const pd_0:any = ((<any>import0.ɵnov(v,20).onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
      import0.ɵdid(335872,[[
        4,
        4
      ]
    ],0,import1.RouterLinkWithHref,[
      import1.Router,
      import1.ActivatedRoute,
      import2.LocationStrategy
    ]
      ,{routerLink: [
        0,
        'routerLink'
      ]
    },(null as any)),
    import0.ɵdid(860160,(null as any),2,import1.RouterLinkActive,[
      import1.Router,
      import0.ElementRef,
      import0.Renderer,
      import0.ChangeDetectorRef
    ]
      ,{routerLinkActive: [
        0,
        'routerLinkActive'
      ]
    },(null as any)),
    import0.ɵqud(301989888,3,{links: 1}),
    import0.ɵqud(301989888,4,{linksWithHrefs: 1}),
    (l()(),import0.ɵted((null as any),['Productos'])),
    (l()(),import0.ɵted((null as any),['\n  '])),
    (l()(),import0.ɵted((null as any),['\n  '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),8,'li',[[
        'role',
        'presentation'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),5,'a',[
      [
        'routerLink',
        '/admin/establecimientos'
      ]
      ,
      [
        'routerLinkActive',
        'active'
      ]

    ]
    ,[
      [
        1,
        'target',
        0
      ]
      ,
      [
        8,
        'href',
        4
      ]

    ]
      ,[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      if (('click' === en)) {
        const pd_0:any = ((<any>import0.ɵnov(v,30).onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
      import0.ɵdid(335872,[[
        6,
        4
      ]
    ],0,import1.RouterLinkWithHref,[
      import1.Router,
      import1.ActivatedRoute,
      import2.LocationStrategy
    ]
      ,{routerLink: [
        0,
        'routerLink'
      ]
    },(null as any)),
    import0.ɵdid(860160,(null as any),2,import1.RouterLinkActive,[
      import1.Router,
      import0.ElementRef,
      import0.Renderer,
      import0.ChangeDetectorRef
    ]
      ,{routerLinkActive: [
        0,
        'routerLinkActive'
      ]
    },(null as any)),
    import0.ɵqud(301989888,5,{links: 1}),
    import0.ɵqud(301989888,6,{linksWithHrefs: 1}),
    (l()(),import0.ɵted((null as any),['Establecimientos'])),
    (l()(),import0.ɵted((null as any),['\n  '])),
    (l()(),import0.ɵted((null as any),['\n'])),
    (l()(),import0.ɵted((null as any),['\n'])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),0,'br',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n\n'])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),71,'div',[[
        'class',
        'row'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n  '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),37,'div',[[
        'class',
        'col-md-7'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n    '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),34,'div',[[
        'class',
        'panel panel-default'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n      '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'div',[[
        'class',
        'panel-heading'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Lista de Categorias'])),
    (l()(),import0.ɵted((null as any),['\n      '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'div',[[
        'class',
        'panel-body'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n\n      '])),
    (l()(),import0.ɵted((null as any),['\n      '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),25,'table',[[
        'class',
        'table'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),16,'thead',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),13,'tr',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n          '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'th',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['id'])),
    (l()(),import0.ɵted((null as any),['\n          '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'th',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['nombre'])),
    (l()(),import0.ɵted((null as any),['\n          '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'th',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['descripcion'])),
    (l()(),import0.ɵted((null as any),['\n          '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'th',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['opciones'])),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),4,'tbody',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n          '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_AdminCategoriasComponent_1)),
    import0.ɵdid(401408,(null as any),0,import2.NgForOf,[
      import0.ViewContainerRef,
      import0.TemplateRef,
      import0.IterableDiffers
    ]
      ,{ngForOf: [
        0,
        'ngForOf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵted((null as any),['\n      '])),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵted((null as any),['\n  '])),
    (l()(),import0.ɵted((null as any),['\n  '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),29,'div',[[
        'class',
        'col-md-5'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n    '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),26,'div',[[
        'class',
        'panel panel-default'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n      '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'div',[[
        'class',
        'panel-heading'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Agregar categoria'])),
    (l()(),import0.ɵted((null as any),['\n      '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),20,'div',[[
        'class',
        'panel-body'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n\n        '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),6,'div',[[
        'class',
        'form-group'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n          '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'label',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Nombre:'])),
    (l()(),import0.ɵted((null as any),['\n          '])),
      (l()(),import0.ɵeld(0,[[
        'categoriaNombre',
        1
      ]
      ],(null as any),0,'input',[[
        'class',
        'form-control'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵted((null as any),['\n        '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),6,'div',[[
        'class',
        'form-group'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n          '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'label',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Descripcion:'])),
    (l()(),import0.ɵted((null as any),['\n          '])),
      (l()(),import0.ɵeld(0,[[
        'categoriaDescripcion',
        1
      ]
      ],(null as any),0,'textarea',[[
        'class',
        'form-control'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵted((null as any),['\n\n        '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'button',[[
        'class',
        'btn btn-success'
      ]
      ],(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:import3.AdminCategoriasComponent = v.component;
      if (('click' === en)) {
        co.add(import0.ɵnov(v,95).value,import0.ɵnov(v,103).value);
        import0.ɵnov(v,95).value = '';
        const pd_0:any = ((<any>(import0.ɵnov(v,103).value = '')) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n          Guardar\n        '])),
    (l()(),import0.ɵted((null as any),['\n\n      '])),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵted((null as any),['\n  '])),
    (l()(),import0.ɵted((null as any),['\n'])),
    (l()(),import0.ɵted((null as any),['\n']))
  ]
  ,(ck,v) => {
    var co:import3.AdminCategoriasComponent = v.component;
    const currVal_2:any = '/admin/categorias';
    ck(v,10,0,currVal_2);
    const currVal_3:any = 'active';
    ck(v,11,0,currVal_3);
    const currVal_6:any = '/admin/productos';
    ck(v,20,0,currVal_6);
    const currVal_7:any = 'active';
    ck(v,21,0,currVal_7);
    const currVal_10:any = '/admin/establecimientos';
    ck(v,30,0,currVal_10);
    const currVal_11:any = 'active';
    ck(v,31,0,currVal_11);
    const currVal_12:any = co.categorias;
    ck(v,75,0,currVal_12);
  },(ck,v) => {
    const currVal_0:any = import0.ɵnov(v,10).target;
    const currVal_1:any = import0.ɵnov(v,10).href;
    ck(v,9,0,currVal_0,currVal_1);
    const currVal_4:any = import0.ɵnov(v,20).target;
    const currVal_5:any = import0.ɵnov(v,20).href;
    ck(v,19,0,currVal_4,currVal_5);
    const currVal_8:any = import0.ɵnov(v,30).target;
    const currVal_9:any = import0.ɵnov(v,30).href;
    ck(v,29,0,currVal_8,currVal_9);
  });
}
function View_AdminCategoriasComponent_Host_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'my-categorias',([] as any[]),(null as any),(null as any),(null as any),View_AdminCategoriasComponent_0,RenderType_AdminCategoriasComponent)),
    import0.ɵdid(57344,(null as any),0,import3.AdminCategoriasComponent,[
      import1.Router,
      import4.CategoriaService
    ]
    ,(null as any),(null as any))
  ]
  ,(ck,v) => {
    ck(v,1,0);
  },(null as any));
}
export const AdminCategoriasComponentNgFactory:import0.ComponentFactory<import3.AdminCategoriasComponent> = import0.ɵccf('my-categorias',import3.AdminCategoriasComponent,View_AdminCategoriasComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL2hvbWUvYmFzdGlhbi9wcm95ZWN0b3MvbXRpL2FwbGljYWNpb25lcy13ZWIvcXVlbmEtbXRpL2NsaWVudC9zcmMvYXBwL2NhdGVnb3JpYXMvYWRtaW4tY2F0ZWdvcmlhcy5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vaG9tZS9iYXN0aWFuL3Byb3llY3Rvcy9tdGkvYXBsaWNhY2lvbmVzLXdlYi9xdWVuYS1tdGkvY2xpZW50L3NyYy9hcHAvY2F0ZWdvcmlhcy9hZG1pbi1jYXRlZ29yaWFzLmNvbXBvbmVudC50cyIsIm5nOi8vL2hvbWUvYmFzdGlhbi9wcm95ZWN0b3MvbXRpL2FwbGljYWNpb25lcy13ZWIvcXVlbmEtbXRpL2NsaWVudC9zcmMvYXBwL2NhdGVnb3JpYXMvYWRtaW4tY2F0ZWdvcmlhcy5jb21wb25lbnQuaHRtbCIsIm5nOi8vL2hvbWUvYmFzdGlhbi9wcm95ZWN0b3MvbXRpL2FwbGljYWNpb25lcy13ZWIvcXVlbmEtbXRpL2NsaWVudC9zcmMvYXBwL2NhdGVnb3JpYXMvYWRtaW4tY2F0ZWdvcmlhcy5jb21wb25lbnQudHMuQWRtaW5DYXRlZ29yaWFzQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiPGgzPkFkbWluaXN0cmFjaW9uPC9oMz5cbjxicj5cblxuPHVsIGNsYXNzPVwibmF2IG5hdi10YWJzXCI+XG4gIDxsaSByb2xlPVwicHJlc2VudGF0aW9uXCIgY2xhc3M9XCJhY3RpdmVcIj5cbiAgICA8YSByb3V0ZXJMaW5rPVwiL2FkbWluL2NhdGVnb3JpYXNcIiByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCI+Q2F0ZWdvcmlhczwvYT5cbiAgPC9saT5cbiAgPGxpIHJvbGU9XCJwcmVzZW50YXRpb25cIj5cbiAgICA8YSByb3V0ZXJMaW5rPVwiL2FkbWluL3Byb2R1Y3Rvc1wiIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIj5Qcm9kdWN0b3M8L2E+XG4gIDwvbGk+XG4gIDxsaSByb2xlPVwicHJlc2VudGF0aW9uXCI+XG4gICAgPGEgcm91dGVyTGluaz1cIi9hZG1pbi9lc3RhYmxlY2ltaWVudG9zXCIgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZVwiPkVzdGFibGVjaW1pZW50b3M8L2E+XG4gIDwvbGk+XG48L3VsPlxuPGJyPlxuXG48ZGl2IGNsYXNzPVwicm93XCI+XG4gIDxkaXYgY2xhc3M9XCJjb2wtbWQtN1wiPlxuICAgIDxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZ1wiPkxpc3RhIGRlIENhdGVnb3JpYXM8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XG5cbiAgICAgIDwvZGl2PlxuICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGVcIj5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRoPmlkPC90aD5cbiAgICAgICAgICA8dGg+bm9tYnJlPC90aD5cbiAgICAgICAgICA8dGg+ZGVzY3JpcGNpb248L3RoPlxuICAgICAgICAgIDx0aD5vcGNpb25lczwvdGg+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICA8dHIgKm5nRm9yPVwibGV0IGNhdGVnb3JpYSBvZiBjYXRlZ29yaWFzXCI+XG4gICAgICAgICAgICA8dGQ+e3tjYXRlZ29yaWEuX2lkfX08L3RkPlxuICAgICAgICAgICAgPHRkPnt7Y2F0ZWdvcmlhLm5vbWJyZX19PC90ZD5cbiAgICAgICAgICAgIDx0ZD57e2NhdGVnb3JpYS5kZXNjcmlwY2lvbn19PC90ZD5cbiAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc21cIiB0aXRsZT1cIkVkaXRhclwiIChjbGljayk9XCJnb3RvRGV0YWlsKGNhdGVnb3JpYSk7XCI+PGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXBlbmNpbFwiPjwvaT48L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyIGJ0bi1zbVwiIHRpdGxlPVwiQm9ycmFyXCIgKGNsaWNrKT1cImRlbGV0ZShjYXRlZ29yaWEpO1wiPjxpIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi10cmFzaFwiPjwvaT48L2J1dHRvbj5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiY29sLW1kLTVcIj5cbiAgICA8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxuICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmdcIj5BZ3JlZ2FyIGNhdGVnb3JpYTwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbD5Ob21icmU6PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiAjY2F0ZWdvcmlhTm9tYnJlIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbD5EZXNjcmlwY2lvbjo8L2xhYmVsPlxuICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cImZvcm0tY29udHJvbFwiICNjYXRlZ29yaWFEZXNjcmlwY2lvbj48L3RleHRhcmVhPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCIgKGNsaWNrKT1cImFkZChjYXRlZ29yaWFOb21icmUudmFsdWUsIGNhdGVnb3JpYURlc2NyaXBjaW9uLnZhbHVlKTsgY2F0ZWdvcmlhTm9tYnJlLnZhbHVlPScnOyBjYXRlZ29yaWFEZXNjcmlwY2lvbi52YWx1ZT0nJ1wiPlxuICAgICAgICAgIEd1YXJkYXJcbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuIiwiPG15LWNhdGVnb3JpYXM+PC9teS1jYXRlZ29yaWFzPiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNpQ1U7SUFBeUM7SUFDdkM7SUFBSTtNQUFBO01BQUE7SUFBQTtJQUFBO0lBQXNCO0lBQzFCO0lBQUk7TUFBQTtNQUFBO0lBQUE7SUFBQTtJQUF5QjtJQUM3QjtJQUFJO01BQUE7TUFBQTtJQUFBO0lBQUE7SUFBOEI7SUFDbEM7SUFBSTtJQUNGO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7TUFBQTtNQUFzRDtRQUFBO1FBQUE7TUFBQTtNQUF0RDtJQUFBO01BQXVGO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBbUQ7SUFDMUk7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7TUFBQTtNQUFBO01BQXFEO1FBQUE7UUFBQTtNQUFBO01BQXJEO0lBQUE7TUFBa0Y7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUFrRDtJQUNqSTs7O0lBTkQ7SUFBQTtJQUNBO0lBQUE7SUFDQTtJQUFBOzs7OztJQXBDaEI7SUFBSTtJQUFtQjtJQUN2QjtJQUFJO01BRUo7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUF5QjtJQUN2QjtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7SUFBdUM7SUFDckM7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7TUFBQTtJQUFBO2tCQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Ozs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQUE7Ozs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO2dCQUFBO2dCQUFBO0lBQTREO0lBQWM7SUFDdkU7TUFDTDtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQXdCO0lBQ3RCO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO01BQUE7SUFBQTtrQkFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBOzs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO2dCQUFBOzs7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBQTtnQkFBQTtJQUEyRDtJQUFhO0lBQ3JFO01BQ0w7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUF3QjtJQUN0QjtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO0lBQUE7a0JBQUE7UUFBQTtRQUFBO01BQUE7SUFBQTs7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBQTs7Ozs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQUE7Z0JBQUE7SUFBa0U7SUFBb0I7SUFDbkY7SUFDRjtJQUNMO0lBQUk7TUFFSjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQWlCO01BQ2Y7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUFzQjtNQUNwQjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQWlDO01BQy9CO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBMkI7SUFBeUI7TUFDcEQ7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUF3QjtJQUVsQjtNQUNOO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBcUI7SUFDbkI7SUFBTztJQUNQO0lBQUk7SUFDRjtJQUFJO0lBQU87SUFDWDtJQUFJO0lBQVc7SUFDZjtJQUFJO0lBQWdCO0lBQ3BCO0lBQUk7SUFBYTtJQUNkO0lBQ0c7SUFDUjtJQUFPO0lBQ0w7Z0JBQUE7Ozs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFRSztJQUNDO0lBQ0Y7SUFDSjtJQUNGO01BQ047UUFBQTtRQUFBO01BQUE7SUFBQTtJQUFzQjtNQUNwQjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQWlDO01BQy9CO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBMkI7SUFBdUI7TUFDbEQ7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUF3QjtNQUV0QjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQXdCO0lBQ3RCO0lBQU87SUFBZTtNQUN0QjtRQUFBO1FBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBK0M7SUFDM0M7TUFDTjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQXdCO0lBQ3RCO0lBQU87SUFBb0I7TUFDM0I7UUFBQTtRQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQWdFO0lBQzVEO01BRU47UUFBQTtRQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7TUFBQTtNQUFnQztRQUFBO29CQUFBO1FBQUE7UUFBQTtNQUFBO01BQWhDO0lBQUE7SUFBMEo7SUFFako7SUFFTDtJQUNGO0lBQ0Y7SUFDRjs7OztJQTlEQztJQUFILFVBQUcsU0FBSDtJQUFrQztJQUFsQyxVQUFrQyxTQUFsQztJQUdHO0lBQUgsVUFBRyxTQUFIO0lBQWlDO0lBQWpDLFVBQWlDLFNBQWpDO0lBR0c7SUFBSCxVQUFHLFVBQUg7SUFBd0M7SUFBeEMsVUFBd0MsVUFBeEM7SUFzQlU7SUFBSixVQUFJLFVBQUo7O0lBNUJOO0lBQUE7SUFBQSxTQUFBLG1CQUFBO0lBR0E7SUFBQTtJQUFBLFVBQUEsbUJBQUE7SUFHQTtJQUFBO0lBQUEsVUFBQSxtQkFBQTs7Ozs7SUNYSjtnQkFBQTs7O0lBQUE7S0FBQTs7O0lBQUE7OzsifQ==
