"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = []; //array of cargo objects initialized
        this.astronauts = []; //array of astronaut objects initialized
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        var sum = 0;
        for (var i = 0; i < items.length; i++) {
            sum += items[i].massKg; //at index i of massKg
        }
        return sum;
    };
    Rocket.prototype.currentMassKg = function () {
        return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
    };
    Rocket.prototype.canAdd = function (item) {
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg; //uses this.currentMassKg() to get total of cargo and astronaut, then adds current items massKg and evaluates if it is less than or equal to totalCapacityKg returns boolean
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        return false;
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        return false;
    };
    return Rocket;
}());
exports.Rocket = Rocket;
