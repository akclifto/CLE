
const person = {
    name: 'adam',
    age: 34,
    location: {
        city: 'Phoenix',
        temp: 105
    }
};

//The old way
// const name = person.name;
// const age = person.age;
// const city = person.location.city;
// const temp = person.location.temp;

// The new way with ES6 destructuring off an object with a default value for name and renaming syntax
const {name: firstName = 'Anonymous', age} = person;
// Desctructuring off a nested object with renaming syntax for temp
const {city, temp: temperature} = person.location;

console.log(`${firstName} is ${age} and lives in ${city} where it's ${temperature} degrees.`);


const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Self-published' } = book.publisher;

console.log(publisherName); //Penguin or default to self-published