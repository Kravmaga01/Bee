import {Persona} from './Persona';
import { Evento } from './evento';
export class Mentor extends Persona{
    constructor(nombre:string,correo:string){
        super(nombre,correo);
    }
    getNombre(): string {
        return this.nombre;
    }
    getCorreo(): string {
        return this.correo
    }
    permisos(): boolean {
        return true;
    }
}