
// Stament of Variables
let _old = prompt('Ingresa tu edad');
let _number = prompt('Ingresa un numero');
let _actions = prompt('Escoje una accion: crear, modificar, actualizar, borrar');


//Operations 1
console.info('Condicionales');
if(_old<=10){
    console.log('Eres niño');
}
else if(_old<20){
console.log('Eres Joven');
}
else if(_old>=30){
    console.log('Eres Adulto');
}

//Operations 2

result = _number % 2;

if(result === 0){
    console.log(`El numero ${_number} es un número par.`);
} else{
    console.log(`El numero ${_number} es un número impar.`);
}

//Operations 3

switch(_actions){

    case 'crear':
        console.log(`Usted eligio ${_actions}`);
        break;
    
    case 'modificar':
        console.log(`Usted eligio ${_actions}`);
        break;
    
    case 'actualizar':
        console.log(`Usted eligio ${_actions}`);
        break;
    
    case 'borrar':
        console.log(`Usted eligio ${_actions}`);
        break;
    
    default:
        console.log('Usted no eligio ninguna opcion');
} 

