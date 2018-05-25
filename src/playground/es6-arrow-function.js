const square = function(x){
  return x * x;
}

// const squareArrow = (x) => {
//   return x * x;
// }
// all arrow functions are anonymous, they need to be assigned to variables to be called
const squareArrow = (x) => x * x; // not use return anywhere
 console.log(square(8))


const user = {
  name: "justine",
  places: ["singapour", "paris", "montreal"],
  // printPlacesLived: function() { can be written like
  printPlacesLived() {
    // this.places.forEach(function(city){
    //   console.log(this.name + ' has lived in ' + city)
    // }) => this.name cannot be accessed, we need an arrow function
    this.places.forEach((city) => {
      console.log(this.name + ' has lived in ' + city)

    }) // you dont want to use arrow function in methods
  }
}

user.printPlacesLived()

const multiplier = {
  numbers: [1,2,3,4,5,6],
  multiplyBy: 8,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy)
  }
}

console.log(multiplier.multiply())
