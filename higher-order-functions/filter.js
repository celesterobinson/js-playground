let animals = [
    { name: "Fluffykins", species: "rabbit" },
    { name: "Caro", species: "dog" },
    { name: "Hamilton", species: "dog" },
    { name: "Harold", species: "fish" },
    { name: "Ursula", species: "cat" },
    { name: "Jimmy", species: "fish" }
]

//ES6
let dogs = animals.filter((animal) => animal.species === "dog");

//Normal Callback
let dogs = animals.filter(function(animal){
    return animal.species === "dog";
})

//For Loop
let dogs = []
for (let i = 0; i < animals.length; i++) {
    if (animals[i].species === "dog") {
        dogs.push(animals[i]);
    }
}

console.log(dogs);
