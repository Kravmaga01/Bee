// Ejercicio 1


const myPromise = Promise.resolve(1)
myPromise.then((value) => {
  console.log(value) // log: 1
})


//ejercicio 2


const myPromise = new Promise((resolve) => {
  resolve(1)  
})

myPromise.then((value) => {
 console.log(value + 1)  // log: 2
})



//ejercicio 3

const myPromise = new Promise((resolve) => {
  resolve(1)  
})

myPromise
  .then((value) => {
    return value + 2
  })
  .then((value) => {
   console.log(value + 1 ) // log: 4
  })



//ejercicio 4


const myPromise = new Promise((resolve, reject) => {
  reject('Error: Operation Failed')  
})

myPromise
  .catch((err) => {
   console.log(err) // log: 'Error: Operation Failed'
  })




//ejercicio 5

const callback1 = (value) => console.log('Esto es un texto:', value)
const callback2 = (value) => console.log('Esto es un numero:', value)

const myPromise = new Promise((resolve) => {
  setTimeout(() => { 
    resolve(2)
  }, 1000) 
})

myPromise.then((value) => console.log(callback2(value) ))// log: Esto es un numero: 2 2

//fin
