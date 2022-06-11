class Voleto {
    public origen;
    public destino;
    public precio;
    public asientos;
    constructor(objOrigen:string,objDestino:string,objPrecio:number,objAsiento:number){
        this.origen = objOrigen;
        this.destino = objDestino;
        this.precio = objPrecio;
        this.asientos = objAsiento;
    }
  }
  
  class PrimeraClase extends Voleto{
    public cantidaMaletas;
    public alimentos;
    constructor(objAlimentos:string[],objCantidaMaletas:number,objOrigen:string,objDestino:string,objPrecio:number,objAsientos:number){
      super(objOrigen,objDestino,objPrecio,objAsientos);
      this.cantidaMaletas = objCantidaMaletas;
      this.alimentos = objAlimentos;
    }
    getMaletas(){
      return true;
    }
    getAlimentos(){
      return true;
    }
  }
  class EconimicClase extends Voleto{
    public cantidaMaletas;
    constructor(objCantidaMaletas:number,objOrigen:string,objDestino:string,objPrecio:number,objAsientos:number){
      super(objOrigen,objDestino,objPrecio,objAsientos);
      this.cantidaMaletas = objCantidaMaletas;
      
    }
    getMaletas(){
      return true;
    }
    getAlimentos(){
      return false;
    }
  
  
  }
  class PointTicket extends Voleto{
    
    constructor(objOrigen:string,objDestino:string,objPrecio:number,objAsientos:number){
      super(objOrigen,objDestino,objPrecio,objAsientos);
    }
    getMaletas(){
      return false;
    }
    getAlimentos(){
      return false;
    }
  }
  
  
  function voleType(obj:PointTicket|EconimicClase|PrimeraClase):string{
    if(obj.getMaletas()){
      if(obj.getAlimentos()){
        return "soy clase primera clase"
      }else{
        return "soy clase economica"
      }
    }else{
      return "soy boleto de puntos "
    }
  }
  let objPrimeraClase = new PrimeraClase(["papitas","agua"],2,"colombia","Perü",122,2);
  let objEconomica = new EconimicClase(2,"colombia","Perü",122,2);
  let objPuntos = new PointTicket("colombia","Perü",122,2);
  console.log(voleType(objPrimeraClase));
  console.log(voleType(objEconomica));
  console.log(voleType(objPuntos));