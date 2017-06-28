"use strict";

class Pet {
    constructor(type) {
        this.type = type
    }

    getPetType() {
        return this.type
    }
}

class Dog extends Pet {
    constructor() {
        super("dog")
    }
}

class Cat extends Pet {
    constructor() {
        super("cat")
    }
}

class PetWithOrder {
    constructor(pet, count) {
        this.pet = pet;
        this.count = count
    }

    getPet() {
        return this.pet
    }

    getCount() {
        return this.count
    }

    getPetType() {
        return this.pet.getPetType()
    }
}

class DogCatQueue {
    constructor() {
        this.dogQ = [];
        this.catQ = [];
        this.count = 0
    }

    addPet(pet) {
        if (pet.getPetType() == "dog") {
            this.dogQ.push(new PetWithOrder(pet, this.count++))
        } else if (pet.getPetType() == "cat") {
            this.catQ.push(new PetWithOrder(pet, this.count++))
        }
    }

    pollDog() {
        if (this.dogQ.length == 0) return null;
        return this.dogQ.pop().getPet()
    }

    pollCat() {
        if (this.catQ.length == 0) return null;
        return this.catQ.pop().getPet()
    }

    pollAll() {
        if (this.catQ.length == 0 && this.dogQ.length == 0) return null;
        if (this.catQ.length == 0) return this.dogQ.pop().getPet();
        if (this.dogQ.length == 0) return this.catQ.pop().getPet();

        if (this.catQ[0].getCount() < this.dogQ[0].getCount()) {
            return this.catQ.shift().getPet()
        } else {
            return this.dogQ.shift().getPet()
        }
    }

}

var test1 = ["dog", "dog", "cat", "cat", "dog", "cat"];

var createQ = function (petArray) {
    var queue = new DogCatQueue();
    for (var i in petArray) {
        queue.addPet(new Pet(petArray[i]))
    }
    return queue
};

export function dequeueCatsAndDogsQueue() {
    var queue = createQ(test1);
    var allResult = [];
    var catResult = [];
    var dogResult = [];

    var len = queue.dogQ.length + queue.catQ.length;
    for (let i = 0; i < len; i++) {
        allResult.push(queue.pollAll().getPetType())
    }
    for (let i = 0; i < queue.dogQ.length; i++) {
        dogResult.push(queue.pollDog().getPetType())
    }
    for (let i = 0; i < queue.catQ.length; i++) {
        catResult.push(queue.pollCat().getPetType())
    }

    return allResult
}
