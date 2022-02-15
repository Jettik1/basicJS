
var a = 5;
const  MYNAMESPACE = (function(){
        var a = 3;
        var b = 4;
        function summa(...params){
            var n = 0;
            for(var param of params){
              n += param;
            }
            return n;
        }
        return {
          a: a
        };
  })();
  console.log(a);
  console.log(MYNAMESPACE.a);// по факту постранство имен - это анонимная функия, которая в свою очередь является объектом первого класса Function
const msg = 'Hello'


function Person(first, last, age, gender, _interests) {

    // Определения методов и свойств
    this.name = {
      'first': first,
      'last' : last
    };
    this.age = age;
    this.gender = gender;
    //...см. Введение в объекты для полного определения
  }
  var person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);

  console.log(Person.__prototype__)
console.log(person1.valueOf())

class Dog {
    constructor(name) {
        this.name = name
    }

    sayHi() {
        console.log(this.name)
    }
}
const dog1 = new Dog('Gaw')
console.log('1 Prototype: '+ Dog.prototype)
console.log('1 Dog.__prototype__ '+ Dog.__prototype__)
console.log('1 Object.getPrototypeOf(Dog) '+ Object.getPrototypeOf(Dog))
console.log('1 typeof Dog ' + typeof Dog)
console.log('2 Prototype: '+ Person.prototype)
console.log('2 __prototype__: '+ Person.__prototype__)
console.log('2 Object.getPrototypeOf(Person): '+ Object.getPrototypeOf(Person))
console.log('2 typeof Person '+ typeof Person)
console.log('3 dog1.prototype '+ dog1.prototype)
console.log('3 dog1.__prototype__ '+ dog1.__prototype__)
console.log('3 Object.getPrototypeOf(dog1) '+ Object.getPrototypeOf(dog1))
console.log('3 typeof dog1 '+ typeof dog1)

Dog.prototype.sayNo = function() {
    console.log('NO!')
}// добавление новой функции к классу, которая не является частью конструктора и будет считываться при цикле for...in

dog1.sayNo();
for (let i in dog1) {
    console.log(dog1[i])// выведет имя Gaw и sayNo , но sayHi здесь не будет
}

// пользовательский объект
function User( name, email, role ) {
    this.name = name;
    this.email = email;
    this.role = role;
  }
  User.prototype.sayHey = function() {
    console.log( `Hey, I’m an ${this.role}`);
  }
  // объект editor наследует от user
  function Editor( name, email ) {
     // функция Call вызывает Constructor или User и наделяет Editor теми же свойствами
     User.call(this, name, email, "admin"); 
  }
  // Для настройки цепочки прототипов мы с помощью прототипа User создадим новый объект и присвоим его прототипу Editor
  Editor.prototype = Object.create( User.prototype );
  // Теперь из объекта Editor можно обращаться ко всем свойствам и методам User
  var david = new Editor( "David", "matthew@medium.com");
  david.sayHey();



