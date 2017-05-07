export class Establecimiento {
    _id: string;
    nombre: string;
    direccion: {
      pais: string,
      region: string,
      ciudad: string,
      descripcion: string,
      zipcode: string,
      geo_lat: number,
      geo_lon: number
    };
}
