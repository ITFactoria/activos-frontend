export interface RespuestaActivos {
  rol: number;
  actTec: ActTec[];
  actPro: ActPro[];
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