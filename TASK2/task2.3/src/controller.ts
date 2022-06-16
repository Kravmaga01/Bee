import { Mentor } from "./mentor";
import { Menu } from "./Menu";
import {
  listaMentores,
  orden,
  listaEstudiantes,
  ordenEvento,
  ordenRegistro,
} from "./data";
import { Estudiante } from "./estudiante";
import { Evento } from "./evento";
import { listaEvento, listaRegistradosEvento } from './data';
// En este archivo Encontraras las funciones constructoras.

// ========================================================

// crear mentor
export function crearMentor(nombre: string, correo: string) {
  let mentor = new Mentor(nombre, correo);
  listarMentor(mentor);
} // agregar mentor a  una lista de tipo orden
function listarMentor(mentor: Mentor) {
  let objtoMentor: orden = {
    Nombre: mentor.getNombre(),
    Correo: mentor.getCorreo(),
  };
  //comprobación de lista vacia
  if (listaMentores.length == 0) {
    listaMentores.push(objtoMentor);
    console.log("Registrado con exito");
    console.log("============================");
  } else {
    // comprobación (valor Correo debe ser unico en las lista) denegada
    for (let a of listaMentores) {
      if (a.Correo == objtoMentor.Correo) {
        console.log(a.Correo);
        console.log("El correo ya se encuentra vinculado a un mentor");
        console.log("porfavor intentelo de nuevo");
        console.log("============");
        break;
      } else {
        // comprobación (valor Correo debe ser unico en las lista) aprobado
        listaMentores.push(objtoMentor);
        console.log("Registrado con exito");
        console.log("============================");
        break;
      }
    }
  }
}

// crear estudiante
export function crearEstudiante(nombre: string, correo: string) {
  let estudiante = new Estudiante(nombre, correo);
  listarEstudiante(estudiante);
}
// agregar estudiante a  una lista de tipo orden
function listarEstudiante(estudiante: Estudiante) {
  let objEstudiante: orden = {
    Nombre: estudiante.getNombre(),
    Correo: estudiante.getCorreo(),
  };
  //comprobación de lista vacia
  if (listaEstudiantes.length == 0) {
    listaEstudiantes.push(objEstudiante);
    console.log("Registrado con exito");
    console.log("============================");
  } else {
    // comprobación (valor Correo debe ser unico en las lista) denegada
    for (let a of listaEstudiantes) {
      if (a.Correo == objEstudiante.Correo) {
        console.log("El correo ya se encuentra vinculado a un estudiante");
        console.log("porfavor intentelo de nuevo");
        console.log("============");
        break;
      } else {
        // comprobación (valor Correo debe ser unico en las lista) aprobado
        listaEstudiantes.push(objEstudiante);
        console.log("Registrado con exito");
        console.log("============================");
        break;
      }
    }
  }
}
//Comprobar si el correo esta vinculado a un mentor
export function comprobarCorreo(
  correoMentor: string,
  nombreEvento: string,
  capacidad: number
) {
  if (listaMentores.length == 0) {
    console.log("No puedes crear un evento si no estas registrado como mentor");
    console.log("============================");
  } else {
    // comprobación (valor Correo existe en la lista) aprobada
    for (let a of listaMentores) {
      if (a.Correo == correoMentor) {
        let index = listaMentores.indexOf(a);
        crearEvento(nombreEvento, capacidad, listaMentores[index].Correo); // crear Evento
      } else {
        // comprobación (valor Correo debe ser unico en las lista) denegado
        console.log("El correo no esta registrado a ningun mentor");
        console.log("============================");
        
      }
    }
  }
}
// creación de evento
function crearEvento(
  nombreEvento: string,
  capacidad: number,
  correoCreadorEvento: string
) {
  let evento = new Evento(nombreEvento, capacidad, correoCreadorEvento);
  //listarEvento(eventos);
  listarEvento(evento);
}
function listarEvento(evento: Evento) {// orden de datos
  let objEvento: ordenEvento = {
    nombreEvento: evento.getNombre(),
    correoCreadorEvento: evento.getCreador(),
    capacidad: evento.capacidad,
  };

  listaEvento.push(objEvento);// guardando en las lista
  console.log("Evento registrado con exito");
  console.log("============================");
}
// mostras las listas de eventos
export function getEventos(){
  console.table(listaEvento);
}

// eventos por mentores
export function proyectarEventosMentor(correo:string){
  var reformattedArray = listaEvento.map(function(obj){
    //return let index = indexof(obj.correoCreadorEvento == correo);
    if(obj.correoCreadorEvento == correo){
      return obj;
    }
 });
 console.table(reformattedArray);
}

export function registraseEvento(nombre:string,correo:string){
  
    // comprobación (valor Correo existe en la lista) aprobada
    for (let a of listaEvento) {
      if (a.nombreEvento == nombre) {
        if(a.capacidad > 0){
          a.capacidad -=1;
           let objRegistro:ordenRegistro ={
             nombreEvento: nombre,
             nombreEstudiante: correo
           }
           listaRegistradosEvento.push(objRegistro);
           console.log("registrado de manera exitosa")
        } // crear Evento
      } else {
        // comprobación (valor Correo debe ser unico en las lista) denegado
        console.log("El correo no esta registrado a ningun mentor");
        console.log("============================");
        
      }
    }
  }