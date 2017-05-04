import {Producto} from "../productos/producto";
import {Establecimiento} from "../establecimientos/establecimiento";

export class Inventario {
    id: string;
    producto: Producto;
    establecimiento: Establecimiento;
    precio: [{moneda: string, valor: string}];
}
