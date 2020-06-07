export interface RespuestaActivos {
  rol: number;
  datCon: DatCon;
  actTec: ActTec[];
  actPro: ActPro[];
}

export interface DatCon {
  idcontacto: number;
  nombrecontacto: string;
}


export interface ActPro {
  idact: number;
  clave: number;
  nombreactivo: string;
  latitud: string;
  longitud: string;
  direccion?: any;
}

export interface ActTec {
  idact: number;
  clave: number;
  nombreactivo: string;
  latitud: string;
  longitud: string;
  direccion: string;
}

export interface Activo {
  idact: number;
  clave: number;
  nombreactivo: string;
  latitud: string;
  longitud: string;
  direccion: string;
}