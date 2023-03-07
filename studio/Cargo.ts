import { Payload } from './Payload'; //Part 28.8.3.2.2) imports Payload--this interface ensures that any class that implements it will have a massKg property


export class Cargo implements Payload {
    massKg: number; //Part 28.8.3.2.3) declare property data types
    material: string;

    constructor(massKg: number, material: string) { //Part 28.8.3.2.4) declare parameter data types
        this.massKg = massKg; //sets values
        this.material = material;
    }
}