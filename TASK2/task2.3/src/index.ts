
import { Menu } from './Menu'
import { crearMentor, crearEstudiante, comprobarCorreo, getEventos, proyectarEventosMentor, registraseEvento } from './controller';


/**
 * puedes borrar este ejemplo para tu entrega final
 */
const ejemplo = (texto:string, numero:number):void => {
  console.log(`
  
  Haz ingresado el texto: ${texto}  y el número ${numero}
  
  `);
  
}

(async () => {
  const menu = new Menu()
    while (menu.isActive()) {

      menu.printMenu()
      let key = await menu.getInt('seleccione un número de la lista:')
    
      switch (key) {
        case 0:
          console.log('0: ',key);
          menu.close()
          process.exit()

          break;
        
        case 1:
          let nombreMentor = await menu.getString("ingrese el nombre");
          let correoMentor = await menu.getString('Ingrese el correo');
          crearMentor(nombreMentor,correoMentor);
          
          break;
        
        case 2:
          let nombreEstudiante = await menu.getString("ingrese el nombre");
          let correoEstudiante = await menu.getString('Ingrese el correo');
          crearEstudiante(nombreEstudiante,correoEstudiante);
          break;
        
        case 3:
          let nombreEvento = await menu.getString("ingrese el nombre del evento");
          let correoCreadorEvento= await menu.getString("Ingrese el correo del mentor a crear el evento")
          const capacidad=20; 
          comprobarCorreo(correoCreadorEvento,nombreEvento,capacidad);
          
          break;
      
        case 4:
          getEventos();
          break;
      
        case 5:
          let correoConsultarEvento= await menu.getString("Ingrese el correo del mentor a crear el evento")
          proyectarEventosMentor(correoConsultarEvento);
          break;
      
        case 6:
          let nombreEventoRegistrado = await menu.getString("ingrese el nombre del evento");
          let correoEventoRegistro = await menu.getString("ingrese su correo de estudiante");

          registraseEvento(nombreEventoRegistrado,correoEventoRegistro);
          break;

        case 7:
          /**Buenes borrar este caso para tu entrega final */
          
          const texto = await menu.getString('ingresa un texto cualquiera, luego preciona enter')
          const numero = await  menu.getInt('ingresa un número, luego preciona enter')
          ejemplo(texto,numero)
          break;
      
        default:
          console.log('Debe elegir una opción valida');
          //menu.close()
          break;
      }
    }
    
  console.log('Adios');
    
  })()


