function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.country = "India";
  this.gender = "male";
}

const userDetails = new User("Krishna", "Paul");
console.log(userDetails);

let object = {
  name: "Krishna",
  age: 21,
  print: function () {
    console.log(`My Name is : ${this.name}, and age is : ${this.age}`);
  },
};

object.print.call({ name: "Arijit", age: 24 });
object.print.apply({ name: "Arindam", age: 23 });
let bindFunc = object.print.bind({ name: "Doyal", age: 11 });
bindFunc();
