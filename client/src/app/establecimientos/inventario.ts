import {Producto} from "../productos/producto";
import {Establecimiento} from "./establecimiento";

export class Inventario {
    id: string;
    producto: Producto;
    establecimiento: Establecimiento;
    precio: {moneda: string, valor: string};
}
