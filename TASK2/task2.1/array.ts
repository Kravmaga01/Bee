class Alumno {
    public nombre: string;
    public edad: number;
    public correo: string;
    public promedio: number;
  
    constructor(nombre: string, edad: number, correo: string, promedio: number) {
      this.nombre = nombre;
      this.edad = edad;
      this.correo = correo;
      this.promedio = promedio;
    }
  }
  
  
  const alumnos: Array<Alumno> = [
    { nombre: "Jose Perez", edad: 22, correo: "jose@perez.com", promedio: 6 },
    { nombre: "Juan Perez", edad: 19, correo: "juan@perez.com", promedio: 7 },
    { nombre: "Maria Yepez", edad: 21, correo: "maria@yepez.com", promedio: 9 },
    { nombre: "Jose Uribe", edad: 23, correo: "jose@gmail.com", promedio: 5 },
    { nombre: "Juana Medina", edad: 18, correo: "juana@gmail.com", promedio: 7 },
    { nombre: "Maria Contreras", edad: 20, correo: "mariaC@gmail.com", promedio: 10 },
    { nombre: "Alan Brito", edad: 22, correo: "alan@brito.com", promedio: 5 },
    { nombre: "Angelica Galindo", edad: 19, correo: "angelica@galindo.com", promedio: 7 },
    { nombre: "Sara Castro", edad: 21, correo: "scastro@gmail.com", promedio: 6 },
    { nombre: "Carlos Marin", edad: 23, correo: "carlos@gmail.com", promedio: 8 },
    { nombre: "Karla Medina", edad: 18, correo: "Karla@gmail.com", promedio: 3 },
    { nombre: "Daniela Medina", edad: 20, correo: "danielamedinaC@gmail.com", promedio: 7 }]
    
   /*let estudiatesP = alumnos.filter(cumplen => cumplen.promedio > 6);
   console.log(estudiatesP);*/
   /*let estuPromMenorMayores  = alumnos.filter(cumplen => cumplen.promedio < 6 && cumplen.edad > 19);

   console.table(estuPromMenorMayores);

   const orden = alumnos.sort((a, b) => {
    return a.promedio - b.promedio;
});
   console.table(orden); */
 
   const aumentoD2puntos = alumnos.filter(cumplen => cumplen.promedio >= 4 ? cumplen.promedio += 2 :0 )
   

   const datos = (function value() {
          const promedioMayor6 = () => {
            let estudiatesP = alumnos.filter(cumplen => cumplen.promedio > 6);
             return estudiatesP;
          }
          const estudianteMayoresMenorpromedio = () =>{
            let estuPromMenorMayores  = alumnos.filter(cumplen => cumplen.promedio < 6 && cumplen.edad > 19);
            return estuPromMenorMayores;
          }

          const ordenAcendentePromedio =() =>{
            let orden = alumnos.sort((a, b) => {
            return a.promedio - b.promedio});
            return orden;
          }
          const aumentar2 = () =>{
            const aumentoD2puntos = alumnos.filter(cumplen => cumplen.promedio >= 4 ? cumplen.promedio += 2 :0 )
            return aumentoD2puntos;
          }
          const promedioGerneral = () => {
            let promedio = 0;
            const promedioGenerar = alumnos.filter(cumplen => cumplen.promedio > 0 ? promedio +=cumplen.promedio:0);
            promedio = promedio / alumnos.length;
            return promedio
          }

          return { 
            promedioMayor6,
            estudianteMayoresMenorpromedio,
            ordenAcendentePromedio,
            aumentar2,
            promedioGerneral
          } 
   })();

console.log("alumnos con el promedio superior a 6");
console.table(datos.promedioMayor6());
console.log("Estudiantes mayores a 19 con el promedio menor a 6");
console.table(datos.estudianteMayoresMenorpromedio());
console.log("no existe ningun estudiante que cumpla por eso devuelve un lista vacia");
console.log("");
console.log("Alumnos ordenados de promedio acendente ");
console.table(datos.ordenAcendentePromedio());
console.log("Unmentar el promedio de los estudiantes  en 2 que  tengan el promedio mayor o igual a cuatro");
console.table(datos.aumentar2());
console.log("promedio genral (tener en cuenta que se aplico un aumento de dos a todos)");
console.log(datos.promedioGerneral());

