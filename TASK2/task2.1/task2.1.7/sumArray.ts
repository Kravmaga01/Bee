/* Ejercicio uno
let arr: number[] = [1, 2, 3, 4];

function simpleArraySum(ar: number[]): number {
  let total: number = 0;
  ar.forEach((suma) => {
    total += suma;
  });
  return total;
}

console.log(simpleArraySum(arr));*/


// ejercicios dos.
/*
function countApplesAndOranges(s: number, t: number, a: number, b: number, apples: number[], oranges: number[]): void {
    let manzContador: number = 0, naranjaContador:number = 0;
    for (let i:number = 0; i< apples.length; i++){
        if (a+apples[i] >= s && a+apples[i] <= t){
            manzContador ++
        }
    }
    for (let i:number = 0; i< oranges.length; i++){
        if (b+oranges[i] >= s && b+oranges[i] <= t){
            naranjaContador ++
        }
    }

    console.log(manzContador);
    console.log(naranjaContador);
}
*/

/*ejercico 3
function staircase(n: number): void {
    // Write your code here
    for(let i:number = 0; i<n;i++){
        let  carar:string = "";
        for(let j:number = 0; j<n-i-1;j++){
            carar += " ";
        }
        for(let g:number = 0; g<i+1;g++){
            carar += "#";
        }
        console.log(carar);
    }
    

}*/

/* punto cuarto
function alternatingCharacters(s: string): number {
    // Write your code here
    let c:number = 0;
    for (let i:number = 0; i<s.length;i++){
        if (s[i]===s[i -1]){
            c++;
        }
    } 
    return c;
}
*/