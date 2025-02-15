/*Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.*/

let contador = 1;
let numeroMaximo = 10;

console.log('Contador del 1 al 10');
while (contador <= numeroMaximo) {
    console.log(contador);
    contador++;
}

/*Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.*/

contador = 10;
let numeroMinimo = 0;

console.log('Contador del 10 al 0');
while (contador >= numeroMinimo) {
    console.log(contador);
    contador--;
}

/*Crea un programa de cuenta regresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' 
en la consola del navegador.*/

numeroMaximo = parseInt(prompt('Por favor, ingrese un número para la cuenta regresiva:'));
console.log('Cuenta Regresiva');
while (numeroMaximo >= 0) {
    console.log(numeroMaximo);
    numeroMaximo--;
}

/*Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' 
en la consola del navegador.*/

numeroMaximo = parseInt(prompt('Por favor, ingresa un número para la cuenta progresiva:'));
console.log('Cuenta Progresiva');
contador = 0;
while (contador <= numeroMaximo) {    
    console.log(contador);
    contador++;
}