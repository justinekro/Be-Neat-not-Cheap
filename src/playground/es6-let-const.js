var nameVar = "Andrew";
var nameVar = "Mike"
// var is easy to be redefined and can lead to bugs !!
// function scope

console.log('nameVar', nameVar)

let nameLet = "Jen"
nameLet = "coucou" // works
// let nameLet = "julie" doesnt work : you can only change the value !!
console.log("nameLet", nameLet)

const nameConst = "franck"
// cannot be redefined or reassigned !

// let and const are also function scoped and block scoped !

var fullName = "justine kro";
if (fullName) {
  const firstName = fullName.split(' ')[0];
  console.log(firstName)
}
// console.log(firstName) here it's not defined !
