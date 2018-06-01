// Object destructuring

// console.log("coucou")
//
// const person = {
//   name: 'Justine',
//   age: 26,
//   location: {
//     city: 'Paris',
//     temp: 28
//   }
// };
//
// const {name = "Anonymous", age, location} = person // default value is anonymous
//
// const { city, temp: temperature} = person.location // temperature is renamed
// console.log(`${name} is ${age} ! she lives in ${city} where it's ${temperature} degrees`)


// Array destructuring : pulls items out of an array

const address = ['85 rue Jupiter', 'Paris', '75003', 'France'];

const [street, city = 'New York', ,] = address;

console.log(`your are at ${street} in ${city}`)
