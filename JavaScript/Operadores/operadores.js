// Statement of variable
    let num1 = 10;
    let num2 = 5;
    let result, result1,result2,text;
    let text1 = 'Hola';
    let text2 = 'Mundo';
    let a = { valor:10};
    let b = { valor:10};


     //Operations with variables
     result = num1 > num2;
     result1 = num1 < num2;
     result2 = num1-9 == num2-3;
   

     

        console.info("Operadores\n")
        console.log(`¿El número ${num1} es mayor que el número ${num2}?`+result);
        console.log(`¿El número ${num1} es menor que el número ${num2}?`+result1);
        console.log("¿El número 1 es igual al número 2?"+result2);
        console.log("¿El texto 1 es igual al texto 2?"+(text1 == text2));
        console.log("¿Los objetos son iguales?"+(a === b));
        console.log("AND lógico:", +(num1>num2) && (a===b));
        console.log("OR lógico:",+(num2<num1) && (num1>num2));
        console.log(`La suma de ${num1} + ${num2-2}:`+(result = num1 + num2-2));
        console.log(`La resta de ${num1} - ${num2-2}:`+(result = num1 - (num2-2)));
        console.log(`La multiplicación de ${num1} * ${num2-2}:`+ (result = num1 *(num2-2)));
        console.log(`La division de ${num1} / ${num2-2}:`+ (result = num1 /(num2-2)));
        console.log(`${num1} módulo de ${num2-2}:`+ (result = num1 % (num2-2)));
