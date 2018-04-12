let animals = [
    { name: "Fluffykins", species: "rabbit" },
    { name: "Caro", species: "dog" },
    { name: "Hamilton", species: "dog" },
    { name: "Harold", species: "fish" },
    { name: "Ursula", species: "cat" },
    { name: "Jimmy", species: "fish" }
]

//ES6
let names = animals.map((animal) => animal.name + " is a " + animal.species);

//Normal Callback
let names = animals.map(function(animal){
    return animal.name + " is a " + animal.species;
})

//For Loop
let names = []
for (let i = 0; i < animals.length; i++) {
    names.push(animals[i].name + " is a " + animals[i].species)
}

console.log(names);