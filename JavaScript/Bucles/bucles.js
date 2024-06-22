//statements of variable
let _number = 1;
let _num = 1;
let par = 2;
let _colors = ['rojo','verde','azul','amarillo'];
let _person = {
    nombre: 'Maria',
    edad: 27,
    profesion: 'diseñadora'
}



//Operations
for(_number; _number<=5; _number++){
    console.log(_number);
}

   //fence
   console.log('-----------------');

for(let i = 0; i < _colors.length; i++){
    console.log(_colors[i]);
}
  
   //fence
   console.log('-----------------');

for(let valor in _person){
    console.log(valor+ ':' + _person[valor]);
}

  //fence
  console.log('-----------------');


while (_num * _num < 100){
    _num++;
}
console.log("El número más cercano a 100 cuyo cuadrado es menor que 100 es:", _num);

  //fence
  console.log('-----------------');

do {
    console.log(par);
    par += 2;
} while (par <= 10);