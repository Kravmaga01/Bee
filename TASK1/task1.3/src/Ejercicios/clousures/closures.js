/*

1
const alNum = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
function parImpar(a){
   
   let b="Odd"
   if (a % 2 ==0 ){
     return e;
   }else{
    return b;
   }
}
parImpar(number);
2
const operacion = (function () {
  let numero = [22, 25, 37]; // valores de entrada prederterminados
  function contador() {
    for (let i = 0; i < numero.length; i++) {// ciclo para cada valor ya prederterminado
      let number1 = numero[i] % 10;
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
*/
3
function digital_root(n) {
  n+= "";
  let y = 0;
  n.split(" ").forEach((n) => (y += parseInt(n)));
  return y;
}

  