(()=>{"use strict";var e={941:(e,o)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.Menu=void 0,o.Menu=class{constructor(){this.active=!0,this.consoleNumber=-1,this.consoleString="error"}close(){this.active=!1}isActive(){return this.active}printMenu(){console.log("\n  ###################################################\n  # Opciones:                                       #\n  #  1) Agregar Mentor                              #\n  #  2) Agregar Estudiante                          #\n  #  3) Agregar Conferencia                         #\n  #  4) Ver lista de Conferencias                   #\n  #  5) Ver lista de Conferencias por profesores    #\n  #  6) Registrarse en una conferencia              #\n  #  7) Esta opción es un ejemplo, ¿quieres probar? #\n  #  0) Salir.                                      #\n  ###################################################\n    ")}ask(){return new Promise(((e,o)=>{process.stdin.once("data",(o=>{let t=o.toString().trim();e(t)}))}))}async getInt(e){console.log(e);const o=await this.ask();return parseInt(`${o}`)}async getString(e){return console.log(e),`${await this.ask()}`}}},130:(e,o)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.Persona=void 0,o.Persona=class{constructor(e,o){this.nombre=e,this.correo=o,this.nombre=e,this.correo=o}}},120:(e,o,t)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.registraseEvento=o.proyectarEventosMentor=o.getEventos=o.comprobarCorreo=o.crearEstudiante=o.crearMentor=void 0;const r=t(407),n=t(301),s=t(686),a=t(143),i=t(301);function l(e,o,t){!function(e){let o={nombreEvento:e.getNombre(),correoCreadorEvento:e.getCreador(),capacidad:e.capacidad};i.listaEvento.push(o),console.log("Evento registrado con exito"),console.log("============================")}(new a.Evento(e,o,t))}o.crearMentor=function(e,o){!function(e){let o={Nombre:e.getNombre(),Correo:e.getCorreo()};if(0==n.listaMentores.length)n.listaMentores.push(o),console.log("Registrado con exito"),console.log("============================");else for(let e of n.listaMentores){if(e.Correo==o.Correo){console.log(e.Correo),console.log("El correo ya se encuentra vinculado a un mentor"),console.log("porfavor intentelo de nuevo"),console.log("============");break}n.listaMentores.push(o),console.log("Registrado con exito"),console.log("============================");break}}(new r.Mentor(e,o))},o.crearEstudiante=function(e,o){!function(e){let o={Nombre:e.getNombre(),Correo:e.getCorreo()};if(0==n.listaEstudiantes.length)n.listaEstudiantes.push(o),console.log("Registrado con exito"),console.log("============================");else for(let e of n.listaEstudiantes){if(e.Correo==o.Correo){console.log("El correo ya se encuentra vinculado a un estudiante"),console.log("porfavor intentelo de nuevo"),console.log("============");break}n.listaEstudiantes.push(o),console.log("Registrado con exito"),console.log("============================");break}}(new s.Estudiante(e,o))},o.comprobarCorreo=function(e,o,t){if(0==n.listaMentores.length)console.log("No puedes crear un evento si no estas registrado como mentor"),console.log("============================");else for(let r of n.listaMentores)if(r.Correo==e){let e=n.listaMentores.indexOf(r);l(o,t,n.listaMentores[e].Correo)}else console.log("El correo no esta registrado a ningun mentor"),console.log("============================")},o.getEventos=function(){console.table(i.listaEvento)},o.proyectarEventosMentor=function(e){var o=i.listaEvento.map((function(o){if(o.correoCreadorEvento==e)return o}));console.table(o)},o.registraseEvento=function(e,o){for(let t of i.listaEvento)if(t.nombreEvento==e){if(t.capacidad>0){t.capacidad-=1;let r={nombreEvento:e,nombreEstudiante:o};i.listaRegistradosEvento.push(r),console.log("registrado de manera exitosa")}}else console.log("El correo no esta registrado a ningun mentor"),console.log("============================")}},301:(e,o)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.listaRegistradosEvento=o.listaEvento=o.listaEstudiantes=o.listaMentores=void 0,o.listaMentores=[],o.listaEstudiantes=[],o.listaEvento=[],o.listaRegistradosEvento=[]},686:(e,o,t)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.Estudiante=void 0;const r=t(130);class n extends r.Persona{constructor(e,o){super(e,o)}getNombre(){return this.nombre}getCorreo(){return this.correo}permisos(){return!1}}o.Estudiante=n},143:(e,o)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.Evento=void 0,o.Evento=class{constructor(e,o,t){this.nombreEvento=e,this.capacidad=o,this.creador=t}getCreador(){return this.creador}getNombre(){return this.nombreEvento}}},407:(e,o,t)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.Mentor=void 0;const r=t(130);class n extends r.Persona{constructor(e,o){super(e,o)}getNombre(){return this.nombre}getCorreo(){return this.correo}permisos(){return!0}}o.Mentor=n}},o={};function t(r){var n=o[r];if(void 0!==n)return n.exports;var s=o[r]={exports:{}};return e[r](s,s.exports,t),s.exports}(()=>{const e=t(941),o=t(120),r=(e,o)=>{console.log(`\n  \n  Haz ingresado el texto: ${e}  y el número ${o}\n  \n  `)};(async()=>{const t=new e.Menu;for(;t.isActive();){t.printMenu();let e=await t.getInt("seleccione un número de la lista:");switch(e){case 0:console.log("0: ",e),t.close(),process.exit();break;case 1:let n=await t.getString("ingrese el nombre"),s=await t.getString("Ingrese el correo");(0,o.crearMentor)(n,s);break;case 2:let a=await t.getString("ingrese el nombre"),i=await t.getString("Ingrese el correo");(0,o.crearEstudiante)(a,i);break;case 3:let l=await t.getString("ingrese el nombre del evento"),c=await t.getString("Ingrese el correo del mentor a crear el evento");const g=20;(0,o.comprobarCorreo)(c,l,g);break;case 4:(0,o.getEventos)();break;case 5:let u=await t.getString("Ingrese el correo del mentor a crear el evento");(0,o.proyectarEventosMentor)(u);break;case 6:let d=await t.getString("ingrese el nombre del evento"),v=await t.getString("ingrese su correo de estudiante");(0,o.registraseEvento)(d,v);break;case 7:const p=await t.getString("ingresa un texto cualquiera, luego preciona enter"),b=await t.getInt("ingresa un número, luego preciona enter");r(p,b);break;default:console.log("Debe elegir una opción valida")}}console.log("Adios")})()})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU14RCxFQUFZLElBQ2xCLEVBQUkrQyxFQUFhekQsaUJBQWlCVyxFQUFxQkYsRUFBY0MsR0FDckUsTUFDSixLQUFLLEdBQ0QsRUFBSStDLEVBQWExRCxjQUNqQixNQUNKLEtBQUssRUFDRCxJQUFJcUUsUUFBOEJQLEVBQUtLLFVBQVUsbURBQ2pELEVBQUlULEVBQWEzRCx3QkFBd0JzRSxHQUN6QyxNQUNKLEtBQUssRUFDRCxJQUFJQyxRQUErQlIsRUFBS0ssVUFBVSxnQ0FDOUNJLFFBQTZCVCxFQUFLSyxVQUFVLG9DQUNoRCxFQUFJVCxFQUFhNUQsa0JBQWtCd0UsRUFBd0JDLEdBQzNELE1BQ0osS0FBSyxFQUNELE1BQU1YLFFBQWNFLEVBQUtLLFVBQVUscURBQzdCTixRQUFlQyxFQUFLRSxPQUFPLDJDQUNqQ0wsRUFBUUMsRUFBT0MsR0FDZixNQUNKLFFBQ0luRixRQUFRQyxJQUFJLGtDQUl4QkQsUUFBUUMsSUFBSSxVQWpEaEIsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3RzYy1wb28vLi9zcmMvTWVudS50cyIsIndlYnBhY2s6Ly90c2MtcG9vLy4vc3JjL1BlcnNvbmEudHMiLCJ3ZWJwYWNrOi8vdHNjLXBvby8uL3NyYy9jb250cm9sbGVyLnRzIiwid2VicGFjazovL3RzYy1wb28vLi9zcmMvZGF0YS50cyIsIndlYnBhY2s6Ly90c2MtcG9vLy4vc3JjL2VzdHVkaWFudGUudHMiLCJ3ZWJwYWNrOi8vdHNjLXBvby8uL3NyYy9ldmVudG8udHMiLCJ3ZWJwYWNrOi8vdHNjLXBvby8uL3NyYy9tZW50b3IudHMiLCJ3ZWJwYWNrOi8vdHNjLXBvby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90c2MtcG9vLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5NZW51ID0gdm9pZCAwO1xuY2xhc3MgTWVudSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jb25zb2xlTnVtYmVyID0gLTE7XG4gICAgICAgIHRoaXMuY29uc29sZVN0cmluZyA9IFwiZXJyb3JcIjtcbiAgICB9XG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICAgIGlzQWN0aXZlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmU7XG4gICAgfVxuICAgIHByaW50TWVudSgpIHtcbiAgICAgICAgY29uc3QgbWVudSA9IGBcbiAgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4gICMgT3BjaW9uZXM6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI1xuICAjICAxKSBBZ3JlZ2FyIE1lbnRvciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICNcbiAgIyAgMikgQWdyZWdhciBFc3R1ZGlhbnRlICAgICAgICAgICAgICAgICAgICAgICAgICAjXG4gICMgIDMpIEFncmVnYXIgQ29uZmVyZW5jaWEgICAgICAgICAgICAgICAgICAgICAgICAgI1xuICAjICA0KSBWZXIgbGlzdGEgZGUgQ29uZmVyZW5jaWFzICAgICAgICAgICAgICAgICAgICNcbiAgIyAgNSkgVmVyIGxpc3RhIGRlIENvbmZlcmVuY2lhcyBwb3IgcHJvZmVzb3JlcyAgICAjXG4gICMgIDYpIFJlZ2lzdHJhcnNlIGVuIHVuYSBjb25mZXJlbmNpYSAgICAgICAgICAgICAgI1xuICAjICA3KSBFc3RhIG9wY2nDs24gZXMgdW4gZWplbXBsbywgwr9xdWllcmVzIHByb2Jhcj8gI1xuICAjICAwKSBTYWxpci4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICNcbiAgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4gICAgYDtcbiAgICAgICAgY29uc29sZS5sb2cobWVudSk7XG4gICAgfVxuICAgIGFzaygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHByb2Nlc3Muc3RkaW4ub25jZSgnZGF0YScsIChjaHVuaykgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBuYW1lID0gY2h1bmsudG9TdHJpbmcoKS50cmltKCk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShuYW1lKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYXN5bmMgZ2V0SW50KHF1ZXN0aW9uKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHF1ZXN0aW9uKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuYXNrKCk7XG4gICAgICAgIHJldHVybiBwYXJzZUludChgJHtkYXRhfWApO1xuICAgIH1cbiAgICBhc3luYyBnZXRTdHJpbmcocXVlc3Rpb24pIHtcbiAgICAgICAgY29uc29sZS5sb2cocXVlc3Rpb24pO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5hc2soKTtcbiAgICAgICAgcmV0dXJuIGAke2RhdGF9YDtcbiAgICB9XG59XG5leHBvcnRzLk1lbnUgPSBNZW51O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlBlcnNvbmEgPSB2b2lkIDA7XG5jbGFzcyBQZXJzb25hIHtcbiAgICBjb25zdHJ1Y3Rvcihub21icmUsIGNvcnJlbykge1xuICAgICAgICB0aGlzLm5vbWJyZSA9IG5vbWJyZTtcbiAgICAgICAgdGhpcy5jb3JyZW8gPSBjb3JyZW87XG4gICAgICAgIHRoaXMubm9tYnJlID0gbm9tYnJlO1xuICAgICAgICB0aGlzLmNvcnJlbyA9IGNvcnJlbztcbiAgICB9XG59XG5leHBvcnRzLlBlcnNvbmEgPSBQZXJzb25hO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnJlZ2lzdHJhc2VFdmVudG8gPSBleHBvcnRzLnByb3llY3RhckV2ZW50b3NNZW50b3IgPSBleHBvcnRzLmdldEV2ZW50b3MgPSBleHBvcnRzLmNvbXByb2JhckNvcnJlbyA9IGV4cG9ydHMuY3JlYXJFc3R1ZGlhbnRlID0gZXhwb3J0cy5jcmVhck1lbnRvciA9IHZvaWQgMDtcbmNvbnN0IG1lbnRvcl8xID0gcmVxdWlyZShcIi4vbWVudG9yXCIpO1xuY29uc3QgZGF0YV8xID0gcmVxdWlyZShcIi4vZGF0YVwiKTtcbmNvbnN0IGVzdHVkaWFudGVfMSA9IHJlcXVpcmUoXCIuL2VzdHVkaWFudGVcIik7XG5jb25zdCBldmVudG9fMSA9IHJlcXVpcmUoXCIuL2V2ZW50b1wiKTtcbmNvbnN0IGRhdGFfMiA9IHJlcXVpcmUoXCIuL2RhdGFcIik7XG5mdW5jdGlvbiBjcmVhck1lbnRvcihub21icmUsIGNvcnJlbykge1xuICAgIGxldCBtZW50b3IgPSBuZXcgbWVudG9yXzEuTWVudG9yKG5vbWJyZSwgY29ycmVvKTtcbiAgICBsaXN0YXJNZW50b3IobWVudG9yKTtcbn1cbmV4cG9ydHMuY3JlYXJNZW50b3IgPSBjcmVhck1lbnRvcjtcbmZ1bmN0aW9uIGxpc3Rhck1lbnRvcihtZW50b3IpIHtcbiAgICBsZXQgb2JqdG9NZW50b3IgPSB7XG4gICAgICAgIE5vbWJyZTogbWVudG9yLmdldE5vbWJyZSgpLFxuICAgICAgICBDb3JyZW86IG1lbnRvci5nZXRDb3JyZW8oKSxcbiAgICB9O1xuICAgIGlmIChkYXRhXzEubGlzdGFNZW50b3Jlcy5sZW5ndGggPT0gMCkge1xuICAgICAgICBkYXRhXzEubGlzdGFNZW50b3Jlcy5wdXNoKG9ianRvTWVudG9yKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJSZWdpc3RyYWRvIGNvbiBleGl0b1wiKTtcbiAgICAgICAgY29uc29sZS5sb2coXCI9PT09PT09PT09PT09PT09PT09PT09PT09PT09XCIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgYSBvZiBkYXRhXzEubGlzdGFNZW50b3Jlcykge1xuICAgICAgICAgICAgaWYgKGEuQ29ycmVvID09IG9ianRvTWVudG9yLkNvcnJlbykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGEuQ29ycmVvKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVsIGNvcnJlbyB5YSBzZSBlbmN1ZW50cmEgdmluY3VsYWRvIGEgdW4gbWVudG9yXCIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicG9yZmF2b3IgaW50ZW50ZWxvIGRlIG51ZXZvXCIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiPT09PT09PT09PT09XCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZGF0YV8xLmxpc3RhTWVudG9yZXMucHVzaChvYmp0b01lbnRvcik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZWdpc3RyYWRvIGNvbiBleGl0b1wiKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIj09PT09PT09PT09PT09PT09PT09PT09PT09PT1cIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBjcmVhckVzdHVkaWFudGUobm9tYnJlLCBjb3JyZW8pIHtcbiAgICBsZXQgZXN0dWRpYW50ZSA9IG5ldyBlc3R1ZGlhbnRlXzEuRXN0dWRpYW50ZShub21icmUsIGNvcnJlbyk7XG4gICAgbGlzdGFyRXN0dWRpYW50ZShlc3R1ZGlhbnRlKTtcbn1cbmV4cG9ydHMuY3JlYXJFc3R1ZGlhbnRlID0gY3JlYXJFc3R1ZGlhbnRlO1xuZnVuY3Rpb24gbGlzdGFyRXN0dWRpYW50ZShlc3R1ZGlhbnRlKSB7XG4gICAgbGV0IG9iakVzdHVkaWFudGUgPSB7XG4gICAgICAgIE5vbWJyZTogZXN0dWRpYW50ZS5nZXROb21icmUoKSxcbiAgICAgICAgQ29ycmVvOiBlc3R1ZGlhbnRlLmdldENvcnJlbygpLFxuICAgIH07XG4gICAgaWYgKGRhdGFfMS5saXN0YUVzdHVkaWFudGVzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIGRhdGFfMS5saXN0YUVzdHVkaWFudGVzLnB1c2gob2JqRXN0dWRpYW50ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVnaXN0cmFkbyBjb24gZXhpdG9cIik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiPT09PT09PT09PT09PT09PT09PT09PT09PT09PVwiKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGEgb2YgZGF0YV8xLmxpc3RhRXN0dWRpYW50ZXMpIHtcbiAgICAgICAgICAgIGlmIChhLkNvcnJlbyA9PSBvYmpFc3R1ZGlhbnRlLkNvcnJlbykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRWwgY29ycmVvIHlhIHNlIGVuY3VlbnRyYSB2aW5jdWxhZG8gYSB1biBlc3R1ZGlhbnRlXCIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicG9yZmF2b3IgaW50ZW50ZWxvIGRlIG51ZXZvXCIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiPT09PT09PT09PT09XCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZGF0YV8xLmxpc3RhRXN0dWRpYW50ZXMucHVzaChvYmpFc3R1ZGlhbnRlKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlZ2lzdHJhZG8gY29uIGV4aXRvXCIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiPT09PT09PT09PT09PT09PT09PT09PT09PT09PVwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGNvbXByb2JhckNvcnJlbyhjb3JyZW9NZW50b3IsIG5vbWJyZUV2ZW50bywgY2FwYWNpZGFkKSB7XG4gICAgaWYgKGRhdGFfMS5saXN0YU1lbnRvcmVzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTm8gcHVlZGVzIGNyZWFyIHVuIGV2ZW50byBzaSBubyBlc3RhcyByZWdpc3RyYWRvIGNvbW8gbWVudG9yXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIj09PT09PT09PT09PT09PT09PT09PT09PT09PT1cIik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBhIG9mIGRhdGFfMS5saXN0YU1lbnRvcmVzKSB7XG4gICAgICAgICAgICBpZiAoYS5Db3JyZW8gPT0gY29ycmVvTWVudG9yKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gZGF0YV8xLmxpc3RhTWVudG9yZXMuaW5kZXhPZihhKTtcbiAgICAgICAgICAgICAgICBjcmVhckV2ZW50byhub21icmVFdmVudG8sIGNhcGFjaWRhZCwgZGF0YV8xLmxpc3RhTWVudG9yZXNbaW5kZXhdLkNvcnJlbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVsIGNvcnJlbyBubyBlc3RhIHJlZ2lzdHJhZG8gYSBuaW5ndW4gbWVudG9yXCIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiPT09PT09PT09PT09PT09PT09PT09PT09PT09PVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuY29tcHJvYmFyQ29ycmVvID0gY29tcHJvYmFyQ29ycmVvO1xuZnVuY3Rpb24gY3JlYXJFdmVudG8obm9tYnJlRXZlbnRvLCBjYXBhY2lkYWQsIGNvcnJlb0NyZWFkb3JFdmVudG8pIHtcbiAgICBsZXQgZXZlbnRvID0gbmV3IGV2ZW50b18xLkV2ZW50byhub21icmVFdmVudG8sIGNhcGFjaWRhZCwgY29ycmVvQ3JlYWRvckV2ZW50byk7XG4gICAgbGlzdGFyRXZlbnRvKGV2ZW50byk7XG59XG5mdW5jdGlvbiBsaXN0YXJFdmVudG8oZXZlbnRvKSB7XG4gICAgbGV0IG9iakV2ZW50byA9IHtcbiAgICAgICAgbm9tYnJlRXZlbnRvOiBldmVudG8uZ2V0Tm9tYnJlKCksXG4gICAgICAgIGNvcnJlb0NyZWFkb3JFdmVudG86IGV2ZW50by5nZXRDcmVhZG9yKCksXG4gICAgICAgIGNhcGFjaWRhZDogZXZlbnRvLmNhcGFjaWRhZCxcbiAgICB9O1xuICAgIGRhdGFfMi5saXN0YUV2ZW50by5wdXNoKG9iakV2ZW50byk7XG4gICAgY29uc29sZS5sb2coXCJFdmVudG8gcmVnaXN0cmFkbyBjb24gZXhpdG9cIik7XG4gICAgY29uc29sZS5sb2coXCI9PT09PT09PT09PT09PT09PT09PT09PT09PT09XCIpO1xufVxuZnVuY3Rpb24gZ2V0RXZlbnRvcygpIHtcbiAgICBjb25zb2xlLnRhYmxlKGRhdGFfMi5saXN0YUV2ZW50byk7XG59XG5leHBvcnRzLmdldEV2ZW50b3MgPSBnZXRFdmVudG9zO1xuZnVuY3Rpb24gcHJveWVjdGFyRXZlbnRvc01lbnRvcihjb3JyZW8pIHtcbiAgICB2YXIgcmVmb3JtYXR0ZWRBcnJheSA9IGRhdGFfMi5saXN0YUV2ZW50by5tYXAoZnVuY3Rpb24gKG9iaikge1xuICAgICAgICBpZiAob2JqLmNvcnJlb0NyZWFkb3JFdmVudG8gPT0gY29ycmVvKSB7XG4gICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc29sZS50YWJsZShyZWZvcm1hdHRlZEFycmF5KTtcbn1cbmV4cG9ydHMucHJveWVjdGFyRXZlbnRvc01lbnRvciA9IHByb3llY3RhckV2ZW50b3NNZW50b3I7XG5mdW5jdGlvbiByZWdpc3RyYXNlRXZlbnRvKG5vbWJyZSwgY29ycmVvKSB7XG4gICAgZm9yIChsZXQgYSBvZiBkYXRhXzIubGlzdGFFdmVudG8pIHtcbiAgICAgICAgaWYgKGEubm9tYnJlRXZlbnRvID09IG5vbWJyZSkge1xuICAgICAgICAgICAgaWYgKGEuY2FwYWNpZGFkID4gMCkge1xuICAgICAgICAgICAgICAgIGEuY2FwYWNpZGFkIC09IDE7XG4gICAgICAgICAgICAgICAgbGV0IG9ialJlZ2lzdHJvID0ge1xuICAgICAgICAgICAgICAgICAgICBub21icmVFdmVudG86IG5vbWJyZSxcbiAgICAgICAgICAgICAgICAgICAgbm9tYnJlRXN0dWRpYW50ZTogY29ycmVvXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBkYXRhXzIubGlzdGFSZWdpc3RyYWRvc0V2ZW50by5wdXNoKG9ialJlZ2lzdHJvKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlZ2lzdHJhZG8gZGUgbWFuZXJhIGV4aXRvc2FcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVsIGNvcnJlbyBubyBlc3RhIHJlZ2lzdHJhZG8gYSBuaW5ndW4gbWVudG9yXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCI9PT09PT09PT09PT09PT09PT09PT09PT09PT09XCIpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5yZWdpc3RyYXNlRXZlbnRvID0gcmVnaXN0cmFzZUV2ZW50bztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5saXN0YVJlZ2lzdHJhZG9zRXZlbnRvID0gZXhwb3J0cy5saXN0YUV2ZW50byA9IGV4cG9ydHMubGlzdGFFc3R1ZGlhbnRlcyA9IGV4cG9ydHMubGlzdGFNZW50b3JlcyA9IHZvaWQgMDtcbmV4cG9ydHMubGlzdGFNZW50b3JlcyA9IFtdO1xuZXhwb3J0cy5saXN0YUVzdHVkaWFudGVzID0gW107XG5leHBvcnRzLmxpc3RhRXZlbnRvID0gW107XG5leHBvcnRzLmxpc3RhUmVnaXN0cmFkb3NFdmVudG8gPSBbXTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Fc3R1ZGlhbnRlID0gdm9pZCAwO1xuY29uc3QgUGVyc29uYV8xID0gcmVxdWlyZShcIi4vUGVyc29uYVwiKTtcbmNsYXNzIEVzdHVkaWFudGUgZXh0ZW5kcyBQZXJzb25hXzEuUGVyc29uYSB7XG4gICAgY29uc3RydWN0b3Iobm9tYnJlLCBjb3JyZW8pIHtcbiAgICAgICAgc3VwZXIobm9tYnJlLCBjb3JyZW8pO1xuICAgIH1cbiAgICBnZXROb21icmUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vbWJyZTtcbiAgICB9XG4gICAgZ2V0Q29ycmVvKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb3JyZW87XG4gICAgfVxuICAgIHBlcm1pc29zKCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZXhwb3J0cy5Fc3R1ZGlhbnRlID0gRXN0dWRpYW50ZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5FdmVudG8gPSB2b2lkIDA7XG5jbGFzcyBFdmVudG8ge1xuICAgIGNvbnN0cnVjdG9yKG5vbWJyZUV2ZW50bywgY2FwYWNpZGFkLCBjcmVhZG9yKSB7XG4gICAgICAgIHRoaXMubm9tYnJlRXZlbnRvID0gbm9tYnJlRXZlbnRvO1xuICAgICAgICB0aGlzLmNhcGFjaWRhZCA9IGNhcGFjaWRhZDtcbiAgICAgICAgdGhpcy5jcmVhZG9yID0gY3JlYWRvcjtcbiAgICB9XG4gICAgZ2V0Q3JlYWRvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYWRvcjtcbiAgICB9XG4gICAgZ2V0Tm9tYnJlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub21icmVFdmVudG87XG4gICAgfVxufVxuZXhwb3J0cy5FdmVudG8gPSBFdmVudG87XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuTWVudG9yID0gdm9pZCAwO1xuY29uc3QgUGVyc29uYV8xID0gcmVxdWlyZShcIi4vUGVyc29uYVwiKTtcbmNsYXNzIE1lbnRvciBleHRlbmRzIFBlcnNvbmFfMS5QZXJzb25hIHtcbiAgICBjb25zdHJ1Y3Rvcihub21icmUsIGNvcnJlbykge1xuICAgICAgICBzdXBlcihub21icmUsIGNvcnJlbyk7XG4gICAgfVxuICAgIGdldE5vbWJyZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9tYnJlO1xuICAgIH1cbiAgICBnZXRDb3JyZW8oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvcnJlbztcbiAgICB9XG4gICAgcGVybWlzb3MoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cbmV4cG9ydHMuTWVudG9yID0gTWVudG9yO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgTWVudV8xID0gcmVxdWlyZShcIi4vTWVudVwiKTtcbmNvbnN0IGNvbnRyb2xsZXJfMSA9IHJlcXVpcmUoXCIuL2NvbnRyb2xsZXJcIik7XG5jb25zdCBlamVtcGxvID0gKHRleHRvLCBudW1lcm8pID0+IHtcbiAgICBjb25zb2xlLmxvZyhgXG4gIFxuICBIYXogaW5ncmVzYWRvIGVsIHRleHRvOiAke3RleHRvfSAgeSBlbCBuw7ptZXJvICR7bnVtZXJvfVxuICBcbiAgYCk7XG59O1xuKGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBtZW51ID0gbmV3IE1lbnVfMS5NZW51KCk7XG4gICAgd2hpbGUgKG1lbnUuaXNBY3RpdmUoKSkge1xuICAgICAgICBtZW51LnByaW50TWVudSgpO1xuICAgICAgICBsZXQga2V5ID0gYXdhaXQgbWVudS5nZXRJbnQoJ3NlbGVjY2lvbmUgdW4gbsO6bWVybyBkZSBsYSBsaXN0YTonKTtcbiAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnMDogJywga2V5KTtcbiAgICAgICAgICAgICAgICBtZW51LmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgcHJvY2Vzcy5leGl0KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgbGV0IG5vbWJyZU1lbnRvciA9IGF3YWl0IG1lbnUuZ2V0U3RyaW5nKFwiaW5ncmVzZSBlbCBub21icmVcIik7XG4gICAgICAgICAgICAgICAgbGV0IGNvcnJlb01lbnRvciA9IGF3YWl0IG1lbnUuZ2V0U3RyaW5nKCdJbmdyZXNlIGVsIGNvcnJlbycpO1xuICAgICAgICAgICAgICAgICgwLCBjb250cm9sbGVyXzEuY3JlYXJNZW50b3IpKG5vbWJyZU1lbnRvciwgY29ycmVvTWVudG9yKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBsZXQgbm9tYnJlRXN0dWRpYW50ZSA9IGF3YWl0IG1lbnUuZ2V0U3RyaW5nKFwiaW5ncmVzZSBlbCBub21icmVcIik7XG4gICAgICAgICAgICAgICAgbGV0IGNvcnJlb0VzdHVkaWFudGUgPSBhd2FpdCBtZW51LmdldFN0cmluZygnSW5ncmVzZSBlbCBjb3JyZW8nKTtcbiAgICAgICAgICAgICAgICAoMCwgY29udHJvbGxlcl8xLmNyZWFyRXN0dWRpYW50ZSkobm9tYnJlRXN0dWRpYW50ZSwgY29ycmVvRXN0dWRpYW50ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgbGV0IG5vbWJyZUV2ZW50byA9IGF3YWl0IG1lbnUuZ2V0U3RyaW5nKFwiaW5ncmVzZSBlbCBub21icmUgZGVsIGV2ZW50b1wiKTtcbiAgICAgICAgICAgICAgICBsZXQgY29ycmVvQ3JlYWRvckV2ZW50byA9IGF3YWl0IG1lbnUuZ2V0U3RyaW5nKFwiSW5ncmVzZSBlbCBjb3JyZW8gZGVsIG1lbnRvciBhIGNyZWFyIGVsIGV2ZW50b1wiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjYXBhY2lkYWQgPSAyMDtcbiAgICAgICAgICAgICAgICAoMCwgY29udHJvbGxlcl8xLmNvbXByb2JhckNvcnJlbykoY29ycmVvQ3JlYWRvckV2ZW50bywgbm9tYnJlRXZlbnRvLCBjYXBhY2lkYWQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICgwLCBjb250cm9sbGVyXzEuZ2V0RXZlbnRvcykoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICBsZXQgY29ycmVvQ29uc3VsdGFyRXZlbnRvID0gYXdhaXQgbWVudS5nZXRTdHJpbmcoXCJJbmdyZXNlIGVsIGNvcnJlbyBkZWwgbWVudG9yIGEgY3JlYXIgZWwgZXZlbnRvXCIpO1xuICAgICAgICAgICAgICAgICgwLCBjb250cm9sbGVyXzEucHJveWVjdGFyRXZlbnRvc01lbnRvcikoY29ycmVvQ29uc3VsdGFyRXZlbnRvKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICBsZXQgbm9tYnJlRXZlbnRvUmVnaXN0cmFkbyA9IGF3YWl0IG1lbnUuZ2V0U3RyaW5nKFwiaW5ncmVzZSBlbCBub21icmUgZGVsIGV2ZW50b1wiKTtcbiAgICAgICAgICAgICAgICBsZXQgY29ycmVvRXZlbnRvUmVnaXN0cm8gPSBhd2FpdCBtZW51LmdldFN0cmluZyhcImluZ3Jlc2Ugc3UgY29ycmVvIGRlIGVzdHVkaWFudGVcIik7XG4gICAgICAgICAgICAgICAgKDAsIGNvbnRyb2xsZXJfMS5yZWdpc3RyYXNlRXZlbnRvKShub21icmVFdmVudG9SZWdpc3RyYWRvLCBjb3JyZW9FdmVudG9SZWdpc3Rybyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dG8gPSBhd2FpdCBtZW51LmdldFN0cmluZygnaW5ncmVzYSB1biB0ZXh0byBjdWFscXVpZXJhLCBsdWVnbyBwcmVjaW9uYSBlbnRlcicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG51bWVybyA9IGF3YWl0IG1lbnUuZ2V0SW50KCdpbmdyZXNhIHVuIG7Dum1lcm8sIGx1ZWdvIHByZWNpb25hIGVudGVyJyk7XG4gICAgICAgICAgICAgICAgZWplbXBsbyh0ZXh0bywgbnVtZXJvKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0RlYmUgZWxlZ2lyIHVuYSBvcGNpw7NuIHZhbGlkYScpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCdBZGlvcycpO1xufSkoKTtcbiJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIk1lbnUiLCJjb25zdHJ1Y3RvciIsInRoaXMiLCJhY3RpdmUiLCJjb25zb2xlTnVtYmVyIiwiY29uc29sZVN0cmluZyIsImNsb3NlIiwiaXNBY3RpdmUiLCJwcmludE1lbnUiLCJjb25zb2xlIiwibG9nIiwiYXNrIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJwcm9jZXNzIiwic3RkaW4iLCJvbmNlIiwiY2h1bmsiLCJuYW1lIiwidG9TdHJpbmciLCJ0cmltIiwiYXN5bmMiLCJxdWVzdGlvbiIsImRhdGEiLCJwYXJzZUludCIsIlBlcnNvbmEiLCJub21icmUiLCJjb3JyZW8iLCJyZWdpc3RyYXNlRXZlbnRvIiwicHJveWVjdGFyRXZlbnRvc01lbnRvciIsImdldEV2ZW50b3MiLCJjb21wcm9iYXJDb3JyZW8iLCJjcmVhckVzdHVkaWFudGUiLCJjcmVhck1lbnRvciIsIm1lbnRvcl8xIiwiZGF0YV8xIiwiZXN0dWRpYW50ZV8xIiwiZXZlbnRvXzEiLCJkYXRhXzIiLCJjcmVhckV2ZW50byIsIm5vbWJyZUV2ZW50byIsImNhcGFjaWRhZCIsImNvcnJlb0NyZWFkb3JFdmVudG8iLCJldmVudG8iLCJvYmpFdmVudG8iLCJnZXROb21icmUiLCJnZXRDcmVhZG9yIiwibGlzdGFFdmVudG8iLCJwdXNoIiwibGlzdGFyRXZlbnRvIiwiRXZlbnRvIiwibWVudG9yIiwib2JqdG9NZW50b3IiLCJOb21icmUiLCJDb3JyZW8iLCJnZXRDb3JyZW8iLCJsaXN0YU1lbnRvcmVzIiwibGVuZ3RoIiwiYSIsImxpc3Rhck1lbnRvciIsIk1lbnRvciIsImVzdHVkaWFudGUiLCJvYmpFc3R1ZGlhbnRlIiwibGlzdGFFc3R1ZGlhbnRlcyIsImxpc3RhckVzdHVkaWFudGUiLCJFc3R1ZGlhbnRlIiwiY29ycmVvTWVudG9yIiwiaW5kZXgiLCJpbmRleE9mIiwidGFibGUiLCJyZWZvcm1hdHRlZEFycmF5IiwibWFwIiwib2JqIiwib2JqUmVnaXN0cm8iLCJub21icmVFc3R1ZGlhbnRlIiwibGlzdGFSZWdpc3RyYWRvc0V2ZW50byIsIlBlcnNvbmFfMSIsInN1cGVyIiwicGVybWlzb3MiLCJjcmVhZG9yIiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwidW5kZWZpbmVkIiwibW9kdWxlIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsIk1lbnVfMSIsImNvbnRyb2xsZXJfMSIsImVqZW1wbG8iLCJ0ZXh0byIsIm51bWVybyIsIm1lbnUiLCJrZXkiLCJnZXRJbnQiLCJleGl0Iiwibm9tYnJlTWVudG9yIiwiZ2V0U3RyaW5nIiwiY29ycmVvRXN0dWRpYW50ZSIsImNvcnJlb0NvbnN1bHRhckV2ZW50byIsIm5vbWJyZUV2ZW50b1JlZ2lzdHJhZG8iLCJjb3JyZW9FdmVudG9SZWdpc3RybyJdLCJzb3VyY2VSb290IjoiIn0=