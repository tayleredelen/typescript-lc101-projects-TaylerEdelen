import { Payload } from './Payload'; //Part 28.8.3.1.2) imports Payload--this interface ensures that any class that implements it will have a massKg property

export class Astronaut implements Payload { //Part 28.8.3.1.3) exports Astronaut class and implements Payload
    massKg: number; //declare property data types
    name: string;

    constructor(massKg: number, name: string) { //Part 28.8.3.1.4) declare parameter data types
    this.massKg = massKg; //sets values
    this.name = name;
    }
}