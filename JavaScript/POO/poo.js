//First class
class Vehicle_1{
    constructor(wheels,passanger){
        this.wheels = wheels;
        this.passanger = passanger;
    }

    info_1(){
        console.log(`Este vehículo tiene ${this.wheels} ruedas. Puede transportar ${this.passanger} pasajeros.`)
    }

}
//Subclass
class Vehicle_2 extends Vehicle_1{
    constructor(wheels,_vehicle,_type){
        super(wheels);
        this._vehicle = _vehicle;
        this._type = _type;
    }
   info_2(){
    console.log(`Este vehículo tiene ${this.wheels} ruedas. Es una ${this._vehicle} de tipo ${this._type}.`)
   }
}

const description_1 = new Vehicle_1(4,5);
const description_2 = new Vehicle_2(2,'bicicleta','Montaña');

description_1.info_1();
description_2.info_2();