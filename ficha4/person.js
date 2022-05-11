function Person(firstName, lastName){
    this.firstName = firstName,
    this.lastName = lastName
} 

Person.prototype.greet= function(){
    console.log("ola " + this.firstName + " " + this.lastName + "eu tenho " + this.age + " anos" );
}

Person.prototype.age = null;


var john = new Person("John","Doe");

john.age = 24;
john.greet();

var joana = new Person("Joana","Doe");

joana.age = 23;
joana.greet();



console.log(john.__proto__);
console.log(joana.__proto__);
console.log(john.__proto__ === joana.__proto__);




