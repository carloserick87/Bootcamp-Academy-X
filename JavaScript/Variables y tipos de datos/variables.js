//Variables

const _name = "Carlos";
let _phrase ="¡Hola Mundo!";
let number_list = [1,2,3,4,5];
number_list.push(6);
let paragraph = "La lluvia en Sevilla es una maravilla";
let word = /lluvia/;




//statements print

console.log(`Hola Mundo! Soy ${_name}`);
console.log(`Mi nombre en mayúsculas es ${_name.toUpperCase()}`);
console.log(`Mi nombre en minúsculas es: ${_name.toLowerCase()}`);
console.log(`El mensaje de '¡Hola Mundo!' tiene ${_phrase.length} caracteres`);
console.log(`El tercer número del array con los valores '1,2,3,4,5' es: ${number_list[2]}`);
console.log(`Se añade el número que sigue en orden al final del arreglo y es: ${number_list[5]}`);
console.info(`Se encontró el patrón \'${word.exec(paragraph)}\' en el texto "La lluvia en Sevilla es una maravilla", por lo que el resultado es : ${word.exec(paragraph)} `);

