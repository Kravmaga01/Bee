class LISTA{
    constructor(nombre, estado){
        this.nombre = nombre;
        this.estado = estado;
    }
    getEstado(){
        var estado = "El estado de la tarea:  "+ this.nombre + " es  " + this.estado;
        return estado;
    }
} 

