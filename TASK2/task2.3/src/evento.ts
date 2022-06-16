import { Mentor } from './mentor';
import { Persona } from './Persona';
export class Evento {
 private nombreEvento:string;
 public capacidad:number;
 private creador:string
 
  constructor(nombreEvento: string, capacidad: number,creador:string) {
      this.nombreEvento= nombreEvento;
      this.capacidad = capacidad;
      this.creador =creador;
  }

  getCreador(){
    return this.creador
  }
  getNombre(){
    return this.nombreEvento
  }

}

