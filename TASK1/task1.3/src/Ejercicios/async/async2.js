// sejercicio 1

/*const myPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve('success')
    }, 500)
  })
  
  myPromise
    .then((result) => {
      return 'This is a ' + result
    })
    .then((result) => {
      console.log(result)
    })
*/

const myPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve('success')
    }, 500)
})

async function getDatos(){
    const result = await myPromise;
    return ("This is a " + result);
}

getDatos().then((result) => {
    console.log(result)
})


// ejercicio 2

/*const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() >= 0.5) {
        resolve(1)
      } else {
        reject('An error has occurred')
      }
    }, 500)
  })
  
  myPromise
    .then((result) => {
      return result + 1
    })
    .then((result) => {
     console.log(result)
    })
    .catch((err) => {
      console.log(err)
    })*/

    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          if ( 0 > 1) {
            resolve(1)
          } else {
            reject(new Error('An error has occurred'))
          }
        }, 500)
      })

    async function getDatos(){
        const result = await myPromise;
        return ( result + 1);
    }
    
    getDatos().then((result) => {
        try{
            console.log(result)
        }catch(err){
            console.error(err);
        }
        
    })

  