/*Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.*/

console.log('Bienvenido!');

/*Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el 
mensaje "¡Hola, [tu nombre]!" en la consola del navegador.*/

let nombre = "Julio César Ortiz Pabón";
console.log(`¡Hola, ${nombre}`);

/*Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".*/

nombre = "Julio César Ortiz Pabón";
alert(`¡Hola, ${nombre}`);

/*Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. 
Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.*/

let lenguaPreferido = prompt('¿Cuál es el lenguaje de programación que más te gusta?');
console.log(lenguaPreferido);

/*Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. 
Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". 
Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.*/

let valor1 = 5;
let valor2 = 10;
let resultado = valor1 + valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a [${resultado}]`);

/*Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. 
Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". 
Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.*/

valor1 = 10;
valor2 = 4;
resultado = valor1 - valor2;
console.log(`La diferencia entre ${valor1} y ${valor2} es igual a [${resultado}]`);

/*Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar 
si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.*/

let edad = parseInt(prompt('Por favor, ingresa tu edad:'));
if (edad >= 18) {
    console.log('Tú eres mayor de edad.');
} else {
    console.log('Tú eres menor de edad.');
}


/*Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero 
utilizando un if-else y muestra el mensaje correspondiente.*/

let numero = parseInt(prompt('Por favor, ingresa un número:'));
if (numero > 0) {
    console.log(`El número ${numero} es positivo.`);
} else if (numero < 0) {
    console.log(`El número ${numero} es negativo.`);
} else {
    console.log(`El número es ${numero}`);
}

/*Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.*/

let contador = 1;
let numeroMaximo = 10;
while (contador <= numeroMaximo) {
    console.log(contador);
    contador++;
}

/*Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la 
nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.*/

let nota = 9;
if (nota >= 7) {
    console.log('Aprobado.');
} else {
    console.log('Reprobado');
}

/*Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.*/

let numeroAleatorio = Math.random();
console.log(numeroAleatorio);

/*Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.*/

let numeroEntero = Math.floor(Math.random()*10)+1;
console.log(numeroEntero);
console.log(typeof numeroEntero);

/*Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.*/

numeroEntero = parseInt(Math.random()*1000)+1;
console.log(` ${numeroEntero} , ${typeof numeroEntero}`);