import {Categoria} from "../categorias/categoria";

export class Producto {
    id: string;
    codigo: {tipo: string, valor: string};
    nombre: string;
    marca: string;
    modelo: string;
    descripcion: string;
    origen: string;
    categorias: Categoria[];
    caractetisticas: [{nombre: string, valor: string}];
    imagenes: [{url: string}];
}
