/*Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". 
De lo contrario, muestra "¡Buena semana!".*/

let diaDeLaSemana = prompt('Qué día de la semana es?');
if (diaDeLaSemana == 'Sábado' || diaDeLaSemana == 'Domingo') {
    alert('¡Buen fin de semana!');
} else {
    alert('¡Buena semana!');
}

/*Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.*/

let numeroIngresadoUsuario = prompt('Me indicas un número positivo o negativo por favor:');
if (numeroIngresadoUsuario > 0) {
    alert(`El número ${numeroIngresadoUsuario} es positivo`);
} else if (numeroIngresadoUsuario < 0) {
    alert(`El número ${numeroIngresadoUsuario} es negativo`);   
    
}

/*Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". 
En caso contrario, muestra "Intentalo nuevamente para ganar.".*/

let maximaPuntuacion = 100;
let puntuacion = 120;
if (puntuacion >= maximaPuntuacion) {
    console.log('¡Felicidades, has ganado!');
} else {
    console.log('Intentalo nuevamente para ganar.');
}

/*Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.*/

let saldoCuenta = 520;
alert(`Estimado Usuario, el saldo de  su cuenta es ${saldoCuenta}.`);

/*Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.*/

let nombre = prompt('Por favor ingrese su nombre:');
alert(`Bienvenido, ${nombre}!`);