let name = prompt("andvändarnamn: ")
let password = prompt("Lösenord: ")

const person = {
  name: "andres",
  password: "123456",
  adress: "Home 125",
  mobile: 0703454567,
  content: function() {
    return this.name + " " + this.adress + " " + this.mobile;
  }
}

while (name != person.name | password != person.password) {
  
name = prompt("andvändarnamn: ")
password = prompt("Lösenord: ")

if (name == person.name) {
  if (password == person.password) {
    console.log(`welcome: ${person.name}, with mobilenr: ${person.mobile}`)
  }

  else {
    console.log(`The password is incorrect`)
  }
}
else {
  console.log(`The username: ${person.name} does not exist`)
}
}
