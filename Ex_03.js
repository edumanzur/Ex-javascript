let numeros = [1, 2, 3, 4, 5, 6, 7, 2, 2, 2];
let n = 2;
let contador = 0;
for(let i = 0; i < numeros.length; i++) {
    if(numeros[i] == n) {
        contador++;
    }
}
console.log(contador);