/*
//EJERCICIO1
const alNum = (min:number, max:number) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
function parImpar(a:number){
   if (a % 2 ==0 ){
     console.log("Even");
   }else{
     console.log("Odd")
   }
}
parImpar(alNum(1,9));

//EJERCICIO2

const operacion = (function () {
  let numero = [22, 25, 37]; // valores de entrada prederterminados
  function contador() {
    for (let i = 0; i < numero.length; i++) {// ciclo para cada valor ya prederterminado
      let number1: number = numero[i] % 10;
      if (number1 > 5) {
        number1 = 10 - number1;
        numero[i] += number1;
        console.log(numero[i]);
      } else if (number1 > 4) {
        numero[i] += number1;
        console.log(numero[i]);
      } else {
        numero[i] -= number1;
        console.log(numero[i]);
      }
    }
  }
  return {
    contador,
  };
})();
operacion.contador(); // llamado a la función*
//EJERCICIO3
const runningPace = (function (){
  let ritmo:number;
   function calcular(distancia:number,minutos:number){
      ritmo = distancia/minutos;
      console.log(ritmo);
   }
   return {
     calcular
   }
})();
runningPace.calcular(1000,3600);
let r:number =8;
let s:number = 45;
*/

const myPromise =  new Promise((res, rej) => {
  setTimeout(() => {
    res('Success')
  }, 850)
})

async function getResult() {
  const result = await myPromise
  
  console.log('Result:', result) // log: 'Result: Success'
}

getResult()


