export abstract class  Persona {
    constructor(public nombre:string, public correo:string) {
     this.nombre = nombre;
     this.correo = correo;
    }

    abstract getNombre():void
    abstract getCorreo():void
    abstract permisos():void
}

