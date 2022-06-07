abstract class Characte {
    public nombre: string;
    constructor(nombre:string){
        this.nombre = nombre;
    }
    abstract introduce():string;
    
}

class Protagonista extends Characte {
    constructor(nombre:string){
        super( nombre);
        this.nombre = nombre;
    }
    introduce(): string {
        return `mi nombre es: ${this.nombre}`
    }
}
class Antagonista extends Characte {
    constructor(nombre:string){
        super( nombre);
        this.nombre = nombre;
    }
    introduce(): string {
        return `mi nombre es: ${this.nombre}`
    }
}

let objProtagonista = new Protagonista("edward");
console.log(objProtagonista.introduce());
let objAntagonista = new Antagonista("killer");
console.log(objAntagonista.introduce());
