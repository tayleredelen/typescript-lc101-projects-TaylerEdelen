"use strict";
// // URL for the instructions: 
// // https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
exports.__esModule = true;
var SpaceLocation_1 = require("./SpaceLocation");
// // Part 1: Declare (5) Variables With Type
var spacecraftName = "Determination"; //comment out for part 4
var speedMph = 17500; //comment out for part 4
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
var milesPerKilometer = 0.621; //comment out for part 4
// // Part 2: Print Days to Mars
// // Code an output statement here (use a template literal):
var milesToMars = (kilometersToMars * milesPerKilometer);
var hoursToMars = (milesToMars / speedMph);
var daysToMars = (hoursToMars / 24);
// console.log (`${spacecraftName} would take ${daysToMars} days to get to Mars.`)
// // Part 3: Create a Function ("getDaysToLocation")
// function getDaysToLocation(kilometersAway: number): number {
//     let milesAway: number = kilometersAway * milesPerKilometer;
//     let hours: number = milesAway / speedMph;
//     return (hours / 24);
// }
//comment out for part 4
// // // Move your output statement from part 2 here. Update the template literal to call
// // // the function and print the outputs for a Mars trip and a moon trip.
// console.log (`${spacecraftName} would take ${getDaysToLocation(kilometersToTheMoon)} days to get to the Moon.`)
// // // Part 4: Create a Spacecraft Class
var Spacecraft = /** @class */ (function () {
    function Spacecraft(name, speedMph) {
        this.milesPerKilometer = 0.621;
        this.name = name;
        this.speedMph = speedMph;
    }
    Spacecraft.prototype.getDaysToLocation = function (kilometersAway) {
        var milesAway = kilometersAway * this.milesPerKilometer;
        var hoursToMars = milesAway / this.speedMph;
        return hoursToMars / 24;
    };
    Spacecraft.prototype.printDaysToLocation = function (location) {
        console.log("".concat(this.name, " would take ").concat(this.getDaysToLocation(location.kilometersAway), " days to get to ").concat(location.name, "."));
    };
    return Spacecraft;
}());
// // Create an instance of the class here:
var spaceShuttle = new Spacecraft("Determination", 17500);
// // Move your output statements from part 3 here. Update the template literals use the instance of the class.
// console.log (`${spaceShuttle.name} would take ${spaceShuttle.getDaysToLocation(kilometersToMars)} days to get to Mars.`)
// console.log (`${spaceShuttle.name} would take ${spaceShuttle.getDaysToLocation(kilometersToTheMoon)} days to get to the Moon.`)
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('the Moon', kilometersToTheMoon));
// // Part 5: Export and Import the SpaceLocation Class
// // Add the required import statement BEFORE the part 1 concent.
// export class SpaceLocation {
//    kilometersAway: number;
//    name: string;
//    constructor(name: string, kilometersAway: number) {
//       this.name = name;
//       this.kilometersAway = kilometersAway;
//    }
// }
// class Spacecraft {
//    milesPerKilometer: number = 0.621;
//    name: string;
//    speedMph: number;
//    constructor(name: string, speedMph: number) {
//       this.name = name;
//       this.speedMph = speedMph;
//    }
//    getDaysToLocation(kilometersAway: number): number {
//       let milesAway: number = kilometersAway * this.milesPerKilometer;
//       let hours: number = milesAway / this.speedMph;
//       return hours / 24;
//    }
//    printDaysToLocation(location: SpaceLocation) {
//       console.log(`${this.name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
//    }
// }
// // Add the printDaysToLocation function to the Spacecraft class.
// // Paste in the code from step 6 here:
