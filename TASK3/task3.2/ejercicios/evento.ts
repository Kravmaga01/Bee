class Evento {
  public nombre;
  public locacion;
  constructor(objnombre: string, objlocacion: string) {
    this.nombre = objnombre;
    this.locacion = objlocacion;
  }
}

class Concierto extends Evento {
  constructor(nombre: string, objlocacion: string) {
    super(nombre, objlocacion);
  }
}

class Teatro extends Evento {
  constructor(nombre: string, objlocacion: string) {
    super(nombre, objlocacion);
  }
}

class EventoDeportivo extends Evento {
  constructor(nombre: string, objlocacion: string) {
    super(nombre, objlocacion);
  }
}

function getlocion(obj: Teatro | Concierto | EventoDeportivo): string {
  return obj.locacion;
}
let objConcierto = new Concierto("conciero", "teatro");
let objTeatro = new Concierto("conciero", "Foro");
let objEventoDeportivo = new Concierto("conciero", "Coliseo");
console.log(getlocion(objConcierto));
console.log(getlocion(objTeatro));
console.log(getlocion(objEventoDeportivo));
