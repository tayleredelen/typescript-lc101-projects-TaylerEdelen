import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';
import { Payload } from './Payload';


export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = []; //array of cargo objects initialized
    astronauts: Astronaut[] = []; //array of astronaut objects initialized

    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass(items: Payload[]): number { //syntax doesn't need function keyword inside class
        let sum = 0;
        for(let i = 0; i < items.length; i++){
            sum += items[i].massKg; //at index i of massKg
        }
        return sum;
    }

    currentMassKg(): number {
       return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
    }

    canAdd(item: Payload): boolean { //this method takes item we give and look at massKg, then add to total mass of all other items. Check those together to see if they exceed total mass capacity.
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg; //uses this.currentMassKg() to get total of cargo and astronaut, then adds current items massKg and evaluates if it is less than or equal to totalCapacityKg returns boolean
    }

    addCargo(cargo: Cargo): boolean { //this method adds item from canAdd to cargoItems if it doesn't exceed total mass capacity
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        return false;
    }

    addAstronaut(astronaut: Astronaut): boolean {
        if(this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        return false;
    }

}

