/*Ejercicio 1 de variable
//convirtiendo la edad en segundos
let age=  prompt("¿cual es tu edad?")
const ageInSeconds = age * 365 * 24 * 60 * 60;
console.log(ageInSeconds);
//para mostrar la edad en el html 
//document.write sirve para imprimir nuestro dato en el html
document.write("tu edad es "+ age + " y en segundos es " + ageInSeconds)
*/
/*Ejercicio 2 de variable
let temperatura = parseInt(prompt("¿cuantos grados Cº hay?"));
//convertimos los celsius a farenheit
let convertirFarenheit =  (temperatura * 1.8) + 32;
console.log("La temperatura en Farenheit es "+ convertirFarenheit)*/
/*
//Ejercicio 3 de variable
let ingreso =  prompt("ingrese el valor del ingreso");
let costos= prompt("ingrese el costo")
let impuesto= prompt("ingrese el porcentaje de impuesto")
//sacar ganancia bruta 
let ganancia= ingreso - costos;
//obtener la cantidad de impuesto
let tax= ganancia * impuesto/ 100;
//obtener gancia neta
let gananciaNeta= ganancia - tax;
//imprimir en la web
document.write("$"+ gananciaNeta)*/

//Ejercicio 4 variables
let nombre= prompt("ingresa tu nombre y apellido");
//para la primera inicial
let primeraInicial= nombre.slice(0,1);
//buscando posicion de segundo caracter
let posicion= nombre.indexOf(" ") + 1;
let segundaInicial= nombre.slice(posicion, posicion + 1);
document.write("Tus iniciales son "+ primeraInicial.toUpperCase() + segundaInicial.toUpperCase())

//Ejercicio coinConverter
module.exports = function coinConvert(dolar) {
    var arr = [];
  
    // Añade el monto equivalente en soles
    arr.push(dolar*3.25);
  
    // Añade el monto equivalente en pesos mexicanos
    arr.push(dolar*18);
  
    // Añade el monto equivalente en pesos chilenos
    arr.push(dolar*660);
  
    return arr;
  };

  //Ejercicio cuenta de restaurante
  module.exports = function restaurantBill(bill) {
 
    var tax = bill * 0.10;
    var total = bill + tax;
     
    return '$' + total / 5 ;
  };



