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

export interface detalleActivo {
  idact: number,
  codact: number,
  idimgp: string,
  idimgd: string,
  fecgar: string,
  nombreactivo: string,
  latitud: string,
  longitud: string,
  direccion: string,
  tipoCaracteristicas: tipoCaracteristica[]
}

//Componente del activo
export interface tipoCaracteristica {
  idtipoc: number;
  indice: number;
  codtipc: number;
  nomtipc: string;
  idimgtc: string;
  caracteristicas: caracteristica[]
}

//Caracteristica de un Componente del activo
export interface caracteristica {
  idcar: number
  nombre: string
  valor: string
  alertas: alerta[]
}


//Alerta sobre un Componente del activo
export interface alerta {
  idalerta: number
  aviso: string
  finicio: string
  ffin: string
  nrodias: number
}


//Nuevas interfaces
export interface IActivo {
  val: number;
  datact: IDatact;
  tipcar: ITipcar[];
}

//Datos del Activo
export interface IDatact {
  idactivo: string;
  codact: string;
  nomact: string;
  idimgp: string;
  idimgd: string;
  fecgar: string;
  latact: string;
  lonact: string;
}

//Tipo Caracteristica: Componente o Parte del Activo
export interface ITipcar {
  idtipoc: number;
  indice: string;
  codtipc: string;
  nomtipc: string;
  idimgtc: string;
  carTcar: ICarTcar[];
  aleTcar: number;
}

//Caracteristica: Caraceristica del Tipo Caracterisitica
export interface ICarTcar {
  idcar: number;
  nombre: string;
  valor: string;
}