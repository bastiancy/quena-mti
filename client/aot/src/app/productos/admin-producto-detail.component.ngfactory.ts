/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '@angular/forms';
import * as import2 from '@angular/common';
import * as import3 from '@angular/router';
import * as import4 from '../../../../src/app/productos/admin-producto-detail.component';
import * as import5 from '../../../../src/app/productos/producto.service';
import * as import6 from '../../../../src/app/categorias/categoria.service';
const styles_AdminProductoDetailComponent:any[] = ([] as any[]);
export const RenderType_AdminProductoDetailComponent:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 2,
  styles: styles_AdminProductoDetailComponent,
  data: {}
}
);
function View_AdminProductoDetailComponent_2(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),3,'option',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    import0.ɵdid(73728,(null as any),0,import1.NgSelectOption,[
      import0.ElementRef,
      import0.Renderer,
      [
        2,
        import1.SelectControlValueAccessor
      ]

    ]
      ,{ngValue: [
        0,
        'ngValue'
      ]
    },(null as any)),
    import0.ɵdid(73728,(null as any),0,import1.ɵq,[
      import0.ElementRef,
      import0.Renderer,
      [
        8,
        (null as any)
      ]

    ]
      ,{ngValue: [
        0,
        'ngValue'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),[
      '(',
      ') ',
      ''
    ]
    ))
  ]
  ,(ck,v) => {
    const currVal_0:any = v.context.$implicit;
    ck(v,1,0,currVal_0);
    const currVal_1:any = v.context.$implicit;
    ck(v,2,0,currVal_1);
  },(ck,v) => {
    const currVal_2:any = v.context.$implicit._id;
    const currVal_3:any = v.context.$implicit.nombre;
    ck(v,3,0,currVal_2,currVal_3);
  });
}
function View_AdminProductoDetailComponent_1(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),68,'div',[[
        'class',
        'row'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n  '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),65,'div',[[
        'class',
        'col-md-5'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n    '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),62,'div',[[
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
    (l()(),import0.ɵted((null as any),['Editar producto'])),
    (l()(),import0.ɵted((null as any),['\n      '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),56,'div',[[
        'class',
        'panel-body'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n\n        '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),4,'div',[[
        'class',
        'form-group'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n          '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'label',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['id: '])),
    (l()(),import0.ɵted((null as any),[
      '',
      '\n        '
    ]
    )),
    (l()(),import0.ɵted((null as any),['\n        '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),11,'div',[[
        'class',
        'form-group'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n          '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'label',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Nombre:'])),
    (l()(),import0.ɵted((null as any),['\n          '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),5,'input',[
      [
        'class',
        'form-control'
      ]
      ,
      [
        'placeholder',
        'nombre'
      ]

    ]
    ,[
      [
        2,
        'ng-untouched',
        (null as any)
      ]
      ,
      [
        2,
        'ng-touched',
        (null as any)
      ]
      ,
      [
        2,
        'ng-pristine',
        (null as any)
      ]
      ,
      [
        2,
        'ng-dirty',
        (null as any)
      ]
      ,
      [
        2,
        'ng-valid',
        (null as any)
      ]
      ,
      [
        2,
        'ng-invalid',
        (null as any)
      ]
      ,
      [
        2,
        'ng-pending',
        (null as any)
      ]

    ]
    ,[
      [
        (null as any),
        'ngModelChange'
      ]
      ,
      [
        (null as any),
        'input'
      ]
      ,
      [
        (null as any),
        'blur'
      ]
      ,
      [
        (null as any),
        'compositionstart'
      ]
      ,
      [
        (null as any),
        'compositionend'
      ]

    ]
    ,(v,en,$event) => {
      var ad:boolean = true;
      var co:any = v.component;
      if (('input' === en)) {
        const pd_0:any = ((<any>import0.ɵnov(v,23)._handleInput($event.target.value)) !== false);
        ad = (pd_0 && ad);
      }
      if (('blur' === en)) {
        const pd_1:any = ((<any>import0.ɵnov(v,23).onTouched()) !== false);
        ad = (pd_1 && ad);
      }
      if (('compositionstart' === en)) {
        const pd_2:any = ((<any>import0.ɵnov(v,23)._compositionStart()) !== false);
        ad = (pd_2 && ad);
      }
      if (('compositionend' === en)) {
        const pd_3:any = ((<any>import0.ɵnov(v,23)._compositionEnd($event.target.value)) !== false);
        ad = (pd_3 && ad);
      }
      if (('ngModelChange' === en)) {
        const pd_4:any = ((<any>(co.producto.nombre = $event)) !== false);
        ad = (pd_4 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import0.ɵdid(8192,(null as any),0,import1.DefaultValueAccessor,[
      import0.Renderer,
      import0.ElementRef,
      [
        2,
        import1.COMPOSITION_BUFFER_MODE
      ]

    ]
    ,(null as any),(null as any)),
    import0.ɵprd(512,(null as any),import1.NG_VALUE_ACCESSOR,(p0_0:any) => {
      return [p0_0];
    },[import1.DefaultValueAccessor]),
    import0.ɵdid(335872,(null as any),0,import1.NgModel,[
      [
        8,
        (null as any)
      ]
      ,
      [
        8,
        (null as any)
      ]
      ,
      [
        8,
        (null as any)
      ]
      ,
      [
        2,
        import1.NG_VALUE_ACCESSOR
      ]

    ]
      ,{model: [
        0,
        'model'
      ]
    },{update: 'ngModelChange'}),
    import0.ɵprd(1024,(null as any),import1.NgControl,(null as any),[import1.NgModel]),
    import0.ɵdid(8192,(null as any),0,import1.NgControlStatus,[import1.NgControl],(null as any),(null as any)),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵted((null as any),['\n        '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),11,'div',[[
        'class',
        'form-group'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n          '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'label',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Descripcion:'])),
    (l()(),import0.ɵted((null as any),['\n          '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),5,'textarea',[
      [
        'class',
        'form-control'
      ]
      ,
      [
        'placeholder',
        'descripcion'
      ]

    ]
    ,[
      [
        2,
        'ng-untouched',
        (null as any)
      ]
      ,
      [
        2,
        'ng-touched',
        (null as any)
      ]
      ,
      [
        2,
        'ng-pristine',
        (null as any)
      ]
      ,
      [
        2,
        'ng-dirty',
        (null as any)
      ]
      ,
      [
        2,
        'ng-valid',
        (null as any)
      ]
      ,
      [
        2,
        'ng-invalid',
        (null as any)
      ]
      ,
      [
        2,
        'ng-pending',
        (null as any)
      ]

    ]
    ,[
      [
        (null as any),
        'ngModelChange'
      ]
      ,
      [
        (null as any),
        'input'
      ]
      ,
      [
        (null as any),
        'blur'
      ]
      ,
      [
        (null as any),
        'compositionstart'
      ]
      ,
      [
        (null as any),
        'compositionend'
      ]

    ]
    ,(v,en,$event) => {
      var ad:boolean = true;
      var co:any = v.component;
      if (('input' === en)) {
        const pd_0:any = ((<any>import0.ɵnov(v,36)._handleInput($event.target.value)) !== false);
        ad = (pd_0 && ad);
      }
      if (('blur' === en)) {
        const pd_1:any = ((<any>import0.ɵnov(v,36).onTouched()) !== false);
        ad = (pd_1 && ad);
      }
      if (('compositionstart' === en)) {
        const pd_2:any = ((<any>import0.ɵnov(v,36)._compositionStart()) !== false);
        ad = (pd_2 && ad);
      }
      if (('compositionend' === en)) {
        const pd_3:any = ((<any>import0.ɵnov(v,36)._compositionEnd($event.target.value)) !== false);
        ad = (pd_3 && ad);
      }
      if (('ngModelChange' === en)) {
        const pd_4:any = ((<any>(co.producto.descripcion = $event)) !== false);
        ad = (pd_4 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import0.ɵdid(8192,(null as any),0,import1.DefaultValueAccessor,[
      import0.Renderer,
      import0.ElementRef,
      [
        2,
        import1.COMPOSITION_BUFFER_MODE
      ]

    ]
    ,(null as any),(null as any)),
    import0.ɵprd(512,(null as any),import1.NG_VALUE_ACCESSOR,(p0_0:any) => {
      return [p0_0];
    },[import1.DefaultValueAccessor]),
    import0.ɵdid(335872,(null as any),0,import1.NgModel,[
      [
        8,
        (null as any)
      ]
      ,
      [
        8,
        (null as any)
      ]
      ,
      [
        8,
        (null as any)
      ]
      ,
      [
        2,
        import1.NG_VALUE_ACCESSOR
      ]

    ]
      ,{model: [
        0,
        'model'
      ]
    },{update: 'ngModelChange'}),
    import0.ɵprd(1024,(null as any),import1.NgControl,(null as any),[import1.NgModel]),
    import0.ɵdid(8192,(null as any),0,import1.NgControlStatus,[import1.NgControl],(null as any),(null as any)),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵted((null as any),['\n        '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),15,'div',[[
        'class',
        'form-group'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n          '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'label',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Categoria:'])),
    (l()(),import0.ɵted((null as any),['\n          '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),9,'select',[[
        'class',
        'form-control'
      ]
    ],[
      [
        2,
        'ng-untouched',
        (null as any)
      ]
      ,
      [
        2,
        'ng-touched',
        (null as any)
      ]
      ,
      [
        2,
        'ng-pristine',
        (null as any)
      ]
      ,
      [
        2,
        'ng-dirty',
        (null as any)
      ]
      ,
      [
        2,
        'ng-valid',
        (null as any)
      ]
      ,
      [
        2,
        'ng-invalid',
        (null as any)
      ]
      ,
      [
        2,
        'ng-pending',
        (null as any)
      ]

    ]
    ,[
      [
        (null as any),
        'ngModelChange'
      ]
      ,
      [
        (null as any),
        'change'
      ]
      ,
      [
        (null as any),
        'blur'
      ]

    ]
    ,(v,en,$event) => {
      var ad:boolean = true;
      var co:any = v.component;
      if (('change' === en)) {
        const pd_0:any = ((<any>import0.ɵnov(v,49).onChange($event.target.value)) !== false);
        ad = (pd_0 && ad);
      }
      if (('blur' === en)) {
        const pd_1:any = ((<any>import0.ɵnov(v,49).onTouched()) !== false);
        ad = (pd_1 && ad);
      }
      if (('ngModelChange' === en)) {
        const pd_2:any = ((<any>(co.producto.categoria = $event)) !== false);
        ad = (pd_2 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import0.ɵdid(8192,(null as any),0,import1.SelectControlValueAccessor,[
      import0.Renderer,
      import0.ElementRef
    ]
    ,(null as any),(null as any)),
    import0.ɵprd(512,(null as any),import1.NG_VALUE_ACCESSOR,(p0_0:any) => {
      return [p0_0];
    },[import1.SelectControlValueAccessor]),
    import0.ɵdid(335872,(null as any),0,import1.NgModel,[
      [
        8,
        (null as any)
      ]
      ,
      [
        8,
        (null as any)
      ]
      ,
      [
        8,
        (null as any)
      ]
      ,
      [
        2,
        import1.NG_VALUE_ACCESSOR
      ]

    ]
      ,{model: [
        0,
        'model'
      ]
    },{update: 'ngModelChange'}),
    import0.ɵprd(1024,(null as any),import1.NgControl,(null as any),[import1.NgModel]),
    import0.ɵdid(8192,(null as any),0,import1.NgControlStatus,[import1.NgControl],(null as any),(null as any)),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_AdminProductoDetailComponent_2)),
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
    (l()(),import0.ɵted((null as any),['\n          '])),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵted((null as any),['\n\n        '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'button',[[
        'class',
        'btn btn-default'
      ]
      ],(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:any = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.goBack()) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Volver'])),
    (l()(),import0.ɵted((null as any),['\n        '])),
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
      var co:any = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.save()) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Guardar cambios'])),
    (l()(),import0.ɵted((null as any),['\n\n      '])),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵted((null as any),['\n  '])),
    (l()(),import0.ɵted((null as any),['\n']))
  ]
  ,(ck,v) => {
    var co:any = v.component;
    const currVal_8:any = co.producto.nombre;
    ck(v,25,0,currVal_8);
    const currVal_16:any = co.producto.descripcion;
    ck(v,38,0,currVal_16);
    const currVal_24:any = co.producto.categoria;
    ck(v,51,0,currVal_24);
    const currVal_25:any = co.categorias;
    ck(v,56,0,currVal_25);
  },(ck,v) => {
    var co:any = v.component;
    const currVal_0:any = co.producto._id;
    ck(v,15,0,currVal_0);
    const currVal_1:any = import0.ɵnov(v,27).ngClassUntouched;
    const currVal_2:any = import0.ɵnov(v,27).ngClassTouched;
    const currVal_3:any = import0.ɵnov(v,27).ngClassPristine;
    const currVal_4:any = import0.ɵnov(v,27).ngClassDirty;
    const currVal_5:any = import0.ɵnov(v,27).ngClassValid;
    const currVal_6:any = import0.ɵnov(v,27).ngClassInvalid;
    const currVal_7:any = import0.ɵnov(v,27).ngClassPending;
    ck(v,22,0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6,currVal_7);
    const currVal_9:any = import0.ɵnov(v,40).ngClassUntouched;
    const currVal_10:any = import0.ɵnov(v,40).ngClassTouched;
    const currVal_11:any = import0.ɵnov(v,40).ngClassPristine;
    const currVal_12:any = import0.ɵnov(v,40).ngClassDirty;
    const currVal_13:any = import0.ɵnov(v,40).ngClassValid;
    const currVal_14:any = import0.ɵnov(v,40).ngClassInvalid;
    const currVal_15:any = import0.ɵnov(v,40).ngClassPending;
    ck(v,35,0,currVal_9,currVal_10,currVal_11,currVal_12,currVal_13,currVal_14,currVal_15);
    const currVal_17:any = import0.ɵnov(v,53).ngClassUntouched;
    const currVal_18:any = import0.ɵnov(v,53).ngClassTouched;
    const currVal_19:any = import0.ɵnov(v,53).ngClassPristine;
    const currVal_20:any = import0.ɵnov(v,53).ngClassDirty;
    const currVal_21:any = import0.ɵnov(v,53).ngClassValid;
    const currVal_22:any = import0.ɵnov(v,53).ngClassInvalid;
    const currVal_23:any = import0.ɵnov(v,53).ngClassPending;
    ck(v,48,0,currVal_17,currVal_18,currVal_19,currVal_20,currVal_21,currVal_22,currVal_23);
  });
}
export function View_AdminProductoDetailComponent_0(l:any):import0.ɵViewDefinition {
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
      (l()(),import0.ɵeld(0,(null as any),(null as any),8,'li',[[
        'role',
        'presentation'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
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
    ],0,import3.RouterLinkWithHref,[
      import3.Router,
      import3.ActivatedRoute,
      import2.LocationStrategy
    ]
      ,{routerLink: [
        0,
        'routerLink'
      ]
    },(null as any)),
    import0.ɵdid(860160,(null as any),2,import3.RouterLinkActive,[
      import3.Router,
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
    ],0,import3.RouterLinkWithHref,[
      import3.Router,
      import3.ActivatedRoute,
      import2.LocationStrategy
    ]
      ,{routerLink: [
        0,
        'routerLink'
      ]
    },(null as any)),
    import0.ɵdid(860160,(null as any),2,import3.RouterLinkActive,[
      import3.Router,
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
    ],0,import3.RouterLinkWithHref,[
      import3.Router,
      import3.ActivatedRoute,
      import2.LocationStrategy
    ]
      ,{routerLink: [
        0,
        'routerLink'
      ]
    },(null as any)),
    import0.ɵdid(860160,(null as any),2,import3.RouterLinkActive,[
      import3.Router,
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
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_AdminProductoDetailComponent_1)),
    import0.ɵdid(8192,(null as any),0,import2.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n']))
  ]
  ,(ck,v) => {
    var co:import4.AdminProductoDetailComponent = v.component;
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
    const currVal_12:any = co.producto;
    ck(v,41,0,currVal_12);
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
function View_AdminProductoDetailComponent_Host_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'producto-detail',([] as any[]),(null as any),(null as any),(null as any),View_AdminProductoDetailComponent_0,RenderType_AdminProductoDetailComponent)),
    import0.ɵdid(57344,(null as any),0,import4.AdminProductoDetailComponent,[
      import5.ProductoService,
      import6.CategoriaService,
      import3.ActivatedRoute,
      import2.Location
    ]
    ,(null as any),(null as any))
  ]
  ,(ck,v) => {
    ck(v,1,0);
  },(null as any));
}
export const AdminProductoDetailComponentNgFactory:import0.ComponentFactory<import4.AdminProductoDetailComponent> = import0.ɵccf('producto-detail',import4.AdminProductoDetailComponent,View_AdminProductoDetailComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL2hvbWUvYmFzdGlhbi9wcm95ZWN0b3MvbXRpL2FwbGljYWNpb25lcy13ZWIvcXVlbmEtbXRpL2NsaWVudC9zcmMvYXBwL3Byb2R1Y3Rvcy9hZG1pbi1wcm9kdWN0by1kZXRhaWwuY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL2hvbWUvYmFzdGlhbi9wcm95ZWN0b3MvbXRpL2FwbGljYWNpb25lcy13ZWIvcXVlbmEtbXRpL2NsaWVudC9zcmMvYXBwL3Byb2R1Y3Rvcy9hZG1pbi1wcm9kdWN0by1kZXRhaWwuY29tcG9uZW50LnRzIiwibmc6Ly8vaG9tZS9iYXN0aWFuL3Byb3llY3Rvcy9tdGkvYXBsaWNhY2lvbmVzLXdlYi9xdWVuYS1tdGkvY2xpZW50L3NyYy9hcHAvcHJvZHVjdG9zL2FkbWluLXByb2R1Y3RvLWRldGFpbC5jb21wb25lbnQuaHRtbCIsIm5nOi8vL2hvbWUvYmFzdGlhbi9wcm95ZWN0b3MvbXRpL2FwbGljYWNpb25lcy13ZWIvcXVlbmEtbXRpL2NsaWVudC9zcmMvYXBwL3Byb2R1Y3Rvcy9hZG1pbi1wcm9kdWN0by1kZXRhaWwuY29tcG9uZW50LnRzLkFkbWluUHJvZHVjdG9EZXRhaWxDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCI8aDM+QWRtaW5pc3RyYWNpb248L2gzPlxuPGJyPlxuXG48dWwgY2xhc3M9XCJuYXYgbmF2LXRhYnNcIj5cbiAgPGxpIHJvbGU9XCJwcmVzZW50YXRpb25cIj5cbiAgICA8YSByb3V0ZXJMaW5rPVwiL2FkbWluL2NhdGVnb3JpYXNcIiByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCI+Q2F0ZWdvcmlhczwvYT5cbiAgPC9saT5cbiAgPGxpIHJvbGU9XCJwcmVzZW50YXRpb25cIiBjbGFzcz1cImFjdGl2ZVwiPlxuICAgIDxhIHJvdXRlckxpbms9XCIvYWRtaW4vcHJvZHVjdG9zXCIgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZVwiPlByb2R1Y3RvczwvYT5cbiAgPC9saT5cbiAgPGxpIHJvbGU9XCJwcmVzZW50YXRpb25cIj5cbiAgICA8YSByb3V0ZXJMaW5rPVwiL2FkbWluL2VzdGFibGVjaW1pZW50b3NcIiByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCI+RXN0YWJsZWNpbWllbnRvczwvYT5cbiAgPC9saT5cbjwvdWw+XG48YnI+XG5cbjxkaXYgY2xhc3M9XCJyb3dcIiAqbmdJZj1cInByb2R1Y3RvXCI+XG4gIDxkaXYgY2xhc3M9XCJjb2wtbWQtNVwiPlxuICAgIDxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZ1wiPkVkaXRhciBwcm9kdWN0bzwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbD5pZDogPC9sYWJlbD57e3Byb2R1Y3RvLl9pZH19XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbD5Ob21icmU6PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBbKG5nTW9kZWwpXT1cInByb2R1Y3RvLm5vbWJyZVwiIHBsYWNlaG9sZGVyPVwibm9tYnJlXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsPkRlc2NyaXBjaW9uOjwvbGFiZWw+XG4gICAgICAgICAgPHRleHRhcmVhIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgWyhuZ01vZGVsKV09XCJwcm9kdWN0by5kZXNjcmlwY2lvblwiIHBsYWNlaG9sZGVyPVwiZGVzY3JpcGNpb25cIj48L3RleHRhcmVhPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWw+Q2F0ZWdvcmlhOjwvbGFiZWw+XG4gICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbFwiIFsobmdNb2RlbCldPVwicHJvZHVjdG8uY2F0ZWdvcmlhXCI+XG4gICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBwIG9mIGNhdGVnb3JpYXNcIiBbbmdWYWx1ZV09XCJwXCI+KHt7cC5faWR9fSkge3twLm5vbWJyZX19PC9vcHRpb24+XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiAoY2xpY2spPVwiZ29CYWNrKClcIj5Wb2x2ZXI8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiIChjbGljayk9XCJzYXZlKClcIj5HdWFyZGFyIGNhbWJpb3M8L2J1dHRvbj5cblxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG4iLCI8cHJvZHVjdG8tZGV0YWlsPjwvcHJvZHVjdG8tZGV0YWlsPiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ29DWTtnQkFBQTs7O01BQUE7UUFBQTs7TUFBQTs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQUE7OztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUFtRDtNQUFBO01BQUE7TUFBQTtJQUFBO0lBQUE7OztJQUFkO0lBQXJDLFNBQXFDLFNBQXJDO0lBQXFDO0lBQXJDLFNBQXFDLFNBQXJDOztJQUFtRDtJQUFBO0lBQUE7Ozs7O01BcEIvRDtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQWtDO01BQ2hDO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBc0I7TUFDcEI7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUFpQztNQUMvQjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQTJCO0lBQXFCO01BQ2hEO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBd0I7TUFFdEI7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUF3QjtJQUN0QjtJQUFPO0lBQVk7TUFBQTtNQUFBO0lBQUE7SUFBQTtJQUNmO01BQ047UUFBQTtRQUFBO01BQUE7SUFBQTtJQUF3QjtJQUN0QjtJQUFPO0lBQWU7SUFDdEI7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtNQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUE0QjtRQUFBO1FBQUE7TUFBQTtNQUE1QjtJQUFBO2dCQUFBOzs7TUFBQTtRQUFBOztNQUFBOztJQUFBO0tBQUE7Z0JBQUE7TUFBQTtJQUFBO2dCQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTs7TUFBQTs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQUE7Z0JBQUE7SUFBaUY7SUFDN0U7TUFDTjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQXdCO0lBQ3RCO0lBQU87SUFBb0I7SUFDM0I7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtNQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUErQjtRQUFBO1FBQUE7TUFBQTtNQUEvQjtJQUFBO2dCQUFBOzs7TUFBQTtRQUFBOztNQUFBOztJQUFBO0tBQUE7Z0JBQUE7TUFBQTtJQUFBO2dCQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTs7TUFBQTs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQUE7Z0JBQUE7SUFBdUc7SUFDbkc7TUFDTjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQXdCO0lBQ3RCO0lBQU87SUFBa0I7TUFDekI7UUFBQTtRQUFBO01BQUE7SUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7TUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUE2QjtRQUFBO1FBQUE7TUFBQTtNQUE3QjtJQUFBO2dCQUFBOzs7SUFBQTtLQUFBO2dCQUFBO01BQUE7SUFBQTtnQkFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7O01BQUE7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO2dCQUFBO2dCQUFBO0lBQThEO0lBQzVEO2dCQUFBOzs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQW9GO0lBQzdFO0lBQ0w7TUFFTjtRQUFBO1FBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7TUFBQTtNQUFBO01BQWdDO1FBQUE7UUFBQTtNQUFBO01BQWhDO0lBQUE7SUFBbUQ7SUFBZTtNQUNsRTtRQUFBO1FBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7TUFBQTtNQUFBO01BQWdDO1FBQUE7UUFBQTtNQUFBO01BQWhDO0lBQUE7SUFBaUQ7SUFBd0I7SUFFckU7SUFDRjtJQUNGOzs7O0lBbEI4QjtJQUE1QixVQUE0QixTQUE1QjtJQUkrQjtJQUEvQixVQUErQixVQUEvQjtJQUk2QjtJQUE3QixVQUE2QixVQUE3QjtJQUNVO0lBQVIsVUFBUSxVQUFSOzs7SUFiaUI7SUFBQTtJQUluQjtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBLFVBQUEscUVBQUE7SUFJQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBLFVBQUEsMkVBQUE7SUFJQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBLFVBQUEsNEVBQUE7Ozs7O0lBbkNWO0lBQUk7SUFBbUI7SUFDdkI7SUFBSTtNQUVKO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBeUI7TUFDdkI7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUF3QjtJQUN0QjtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO0lBQUE7a0JBQUE7UUFBQTtRQUFBO01BQUE7SUFBQTs7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBQTs7Ozs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQUE7Z0JBQUE7SUFBNEQ7SUFBYztJQUN2RTtJQUNMO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtJQUF1QztJQUNyQztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO0lBQUE7a0JBQUE7UUFBQTtRQUFBO01BQUE7SUFBQTs7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBQTs7Ozs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQUE7Z0JBQUE7SUFBMkQ7SUFBYTtJQUNyRTtNQUNMO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBd0I7SUFDdEI7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7TUFBQTtJQUFBO2tCQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Ozs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQUE7Ozs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO2dCQUFBO2dCQUFBO0lBQWtFO0lBQW9CO0lBQ25GO0lBQ0Y7SUFDTDtJQUFJO0lBRUo7Z0JBQUE7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQThCTTs7OztJQXpDQztJQUFILFVBQUcsU0FBSDtJQUFrQztJQUFsQyxVQUFrQyxTQUFsQztJQUdHO0lBQUgsVUFBRyxTQUFIO0lBQWlDO0lBQWpDLFVBQWlDLFNBQWpDO0lBR0c7SUFBSCxVQUFHLFVBQUg7SUFBd0M7SUFBeEMsVUFBd0MsVUFBeEM7SUFLYTtJQUFqQixVQUFpQixVQUFqQjs7SUFYSTtJQUFBO0lBQUEsU0FBQSxtQkFBQTtJQUdBO0lBQUE7SUFBQSxVQUFBLG1CQUFBO0lBR0E7SUFBQTtJQUFBLFVBQUEsbUJBQUE7Ozs7O0lDWEo7Z0JBQUE7Ozs7O0lBQUE7S0FBQTs7O0lBQUE7OzsifQ==
