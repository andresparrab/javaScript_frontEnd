// let name = prompt("andvändarnamn: ")
// let password = prompt("Lösenord: ")

// const person = {
//   name: "andres",
//   password: "123456",
//   adress: "Home 125",
//   mobile: 0703454567,
//   content: function() {
//     return this.name + " " + this.adress + " " + this.mobile;
//   }
// }

// while (name != person.name | password != person.password) {

//   if (name == person.name) {
//     if (password == person.password) {
//       console.log(`welcome: ${person.name}, with mobilenr: ${person.mobile}`)
//     }

//     else {
//       console.log(`The password is incorrect`)
//     }
//   }
//   else {
//     console.log(`The username: ${person.name} does not exist`)
//   } name = prompt("andvändarnamn: ")
//   password = prompt("Lösenord: ")

// }
//

// a simple timer to calculate the time of something 
// console.log("Testing the forloop performance")
console.time();
for (let index = 0; index < 10000; index++) {
  console.log("hej");

}
console.timeEnd();

// calculate sam thing but in the while loop
// console.log("testing the whileloop performance")
// console.time()
// i = 0
// while (i < 10000) {
//   i++
// }
//
// Creating a object and print it out in table mode
// console.timeEnd()
person = {
  username: "andres",
  age: 41,
  phone: 089998

}
console.table(person);
