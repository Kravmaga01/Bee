abstract class Characte {
    public nombre: string;
    constructor(nombre:string){
        this.nombre = nombre;
    }
    abstract introduce():string;
    doSomething<T>(some: T): string {
      return    `En este momento estoy realizando algo con el :${some}`
    }
    
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
    sayWhatlike<T>(some:T):string{
        return  `me gusta mucho el ${some}`
    }
}

let objProtagonista = new Protagonista("edward");
console.log(objProtagonista.introduce());
let objAntagonista = new Antagonista("killer");
console.log(objAntagonista.introduce());
console.log(objAntagonista.doSomething(4));
console.log(objProtagonista.doSomething("Arroz"));
console.log(objAntagonista.sayWhatlike("Ser  antagonista"));
console.log(objAntagonista.sayWhatlike(4));
