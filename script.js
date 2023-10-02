


// class Animal{
// constructor(name,age){
// this.name = name;
// this.age = age;
// this.eat = function(){
//     console.log('i am eating');
// }
// }
// walk(){

//     console.log('i am walking');
// }
// }

// const cat = new Animal('tom',5)
// const cat_1 = new Animal('citty',7)

// cat.walk()

// cat_1.eat()


// class Animal {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//       this.eat = function () {
//         console.log("I am eating");
//       };
//     }
  
//     static type = "ANIMAL";
  
//     walk() {
//       console.log("I am walking");
//     }
//   }
  
//   const cat = new Animal("tom", 5);
  
//   console.log(cat);


//   class Animal {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//       this.eat = function () {
//         console.log("I am eating");
//       };
//     }
  
//     static type = "ANIMAL";
  
//     static walk = () => console.log("I am walking");
  
//     static countsum = (a, b) => a + b;
  
//     walk(a, b) {
//       console.log("I am walking");
//     }
//   }
  
//   const cat = new Animal("tom", 5);
  
//   cat.walk("sdvsv", "sdvsdv");
  
//   // const arr = [1, 2, 3];
  
//   // arr.map((el) => {
//   //   console.log(el);
//   // });
  
//   // console.log(Array.isArray({}));




// class Animal{
// constructor(name,age){
// this.name = name;
// this.age = age;
// }
// }

// class cat{

// }


// class bird {

// }

// const bird = new Animal('cit',5)

// const cat = new Animal('tom',7)






// class Animal {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
//   }
  
//   class Cat extends Animal {
//     constructor(name, age, hasTail) {
//       super(name, age);
//       this.hasTail = hasTail;
//     }
//   }
  
//   class Bird extends Animal {
//     constructor(name, age, canFly) {
//       super(name, age);
//       this.canFly = canFly;
//     }
//   }
  
//   const cat1 = new Cat("tom", 5, true);
//   const bird1 = new Bird("city", 7, true);
  
//   console.log(cat1);





// class Animal {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
//   }
  
//   class Cat extends Animal {
//     constructor(name, age, wantMau) {
//       super(name, age);
//       this.wantMau = wantMau;
//     }
//   }
  
//   class Bird extends Animal {
//     constructor(name, age, canFly) {
//       super(name, age);
//       this.canFly = canFly;
//     }
//   }
  
//   const cat1 = new Cat("tom", 5, true);
//   const bird1 = new Bird("city", 7, true);
  
//   console.log(cat1);



// class Person {
//     constructor(name,age) {
//         this.name = name;
//         this.age = age;
//     }
// }


// class Studnt extends Person {
//     constructor(name,age,gpa){
//   super(name,age)
//   this.gpa = gpa

//     }
// }

// class Teacher extends Person {
//     constructor(name,age,classSize){
//   super(name,age)
// this.classSize = classSize
//     }
// }

// const teacher = new Teacher('Mao',43.,17)
// const studen = new Studnt('bob',19,5)
// console.log(studen);
// console.log(teacher);






// class Person(name, age) ->

// class Student(gpa) < Person
// class Teacher(classSize) < Person

// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
  
//     walk() {
//       console.log("I am walking");
//     }
//   }
  
//   class Student extends Person {
//     constructor(name, age, gpa) {
//       super(name, age);
//       this.gpa = gpa;
//     }
  
//     learn() {
//       console.log("I am learing");
//     }
//   }
  
//   class Teacher extends Person {
//     constructor(name, age, classSize) {
//       super(name, age);
//       this.classSize = classSize;
//     }
  
//     teach() {
//       console.log("I am teaching");
//     }
//   }
  
//   const student1 = new Student("Bob", 15, 3.8);
//   const teacher1 = new Teacher("Greg", 45, 30);






// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
  
//     here() {
//       console.log("I am here");
//     }
//   }
  
//   class Student extends Person {
//     constructor(name, age, gpa) {
//       super(name, age);
//       this.gpa = gpa;
//     }
  
//     hello() {
//       super.here();
//       console.log("what's up");
//     }
//   }
  
//   class Teacher extends Person {
//     constructor(name, age, classSize) {
//       super(name, age);
//       this.classSize = classSize;
//     }
  
//     hello() {
//       super.here();
//       console.log("Hello");
//     }
//   }
  
//   const student1 = new Student("Bob", 15, 3.8);
//   const teacher1 = new Teacher("Greg", 45, 30);




class Users {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    getName(){
        return this.age = use_2.age
    }
company(use_2){
    return this.age === use_2.age
}
}


let u1 = new Users('bob',20)
let u2 = new Users('mao',22) 
console.log(u1);
console.log(u2);


console.log('hello world');

console.log('hello world 2');
console.log('hello world 33');









