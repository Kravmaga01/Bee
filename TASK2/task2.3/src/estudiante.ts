import {Persona} from './Persona';
export class Estudiante extends Persona{
    constructor(nombre:string,correo:string){
        super(nombre,correo);
    }
    getNombre(): string {
        return this.nombre;
    }
    getCorreo(): string {
        return this.correo;
    }
    permisos(): boolean {
        return false;
    }
}