// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
// Part 1: Declare (5) Variables With Type
var spacecraftName = "Determination";
var speedMph = 17500;
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
var milesPerKilometer = 0.621;
// Part 2: Print Days to Mars
// Code an output statement here (use a template literal):
// let milesToMars: number = (kilometersToMars * milesPerKilometer);
// let hoursToMars: number = (milesToMars / speedMph);
// let daysToMars: number = (hoursToMars / 24);
// console.log (`${spacecraftName} would take ${daysToMars} days to get to Mars.`)
// Part 3: Create a Function ("getDaysToLocation")
// function getDaysToLocation(kilometersAway: number): number {
//     let milesAway: number = kilometersAway * milesPerKilometer;
//     let hours: number = milesAway / speedMph;
//     return (hours / 24);
// }
// // Move your output statement from part 2 here. Update the template literal to call
// // the function and print the outputs for a Mars trip and a moon trip.
// console.log (`${spacecraftName} would take ${getDaysToLocation(kilometersToTheMoon)} days to get to the Moon.`)
// // Part 4: Create a Spacecraft Class
// class Spacecraft {
//     milesPerKilometer: number = 0.621;
//     name: string;
//     speedMph: number;
//     constructor(name: string, speedMph: number){
//         this.name = name;
//         this.speedMph = speedMph;
//     }
//     function getDaysToLocation(kilometersAway: number): number {
//         let milesAway: number = kilometersAway * this.milesPerKilometer;
//         let hoursToMars: number = milesAway / this.speedMph;
//         return (hoursToMars / 24);
//     }
// }
// Create an instance of the class here:
// let spaceShuttle = new Spacecraft("Determination", 17500)
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
// Add the printDaysToLocation function to the Spacecraft class.
// Paste in the code from step 6 here:
