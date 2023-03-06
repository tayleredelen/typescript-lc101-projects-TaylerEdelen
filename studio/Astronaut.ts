import { Payload } from './Payload'; //imports Payload

export class Astronaut implements Payload{ //exports Astronaut class and implements Payload
    massKg: number;
    name: string;

    constructor(massKg: number, name: string) {
    this.massKg = massKg;
    this.name = name;
    }
}