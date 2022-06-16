import { Mentor } from './mentor';
// Este tipo me ayudara a darle orden a los ingresos en las listas de mentoras y estudiantes
export type orden ={ 
Nombre:string,
Correo:string
}
// esta lista ayudara a guardar los archivos.
export const listaMentores:orden[] = [];
export const listaEstudiantes:orden[]=[];


// Este tipo me ayudara a darle orden a los ingresos en las listas de Eventos creados. 
export type ordenEvento ={
    nombreEvento:string,
    correoCreadorEvento:string,
    capacidad:number
}
// lista eventos creados
export const listaEvento:ordenEvento[] = [];

// orden para asignatura evento
export type ordenRegistro ={
    nombreEvento:string,
    nombreEstudiante :string,
    
}

export const listaRegistradosEvento:ordenRegistro[] = [];