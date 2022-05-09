class TAREAS {
    constructor(nombre, fechaIn,descrition,estatus){
        this.nombre = nombre; 
        this.fechaIn = fechaIn;
        this.descrition= descrition;
        this.estatus = estatus;
    }
    
    getName(){
        return this.nombre;
    }
    getData(){
        return this.fechaIn;
    }
    getDes(){
        return this.descrition;
    }
    getEstatus(){
        return this.estatus;
    }
}



