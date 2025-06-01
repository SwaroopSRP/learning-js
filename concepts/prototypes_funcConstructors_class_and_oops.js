// Prototypes
function Gadget(brand){this.brand=brand;}
const g=new Gadget("TechCorp");
const proto={info:function(){return"Brand: "+this.brand;}};
g.__proto__=proto;
console.log(g.info());
Object.setPrototypeOf(g,{info:function(){return"Gadget by "+this.brand;}});
console.log(g.info());
console.log(Object.getPrototypeOf(g));

function describe(feature,year){return this.brand+" with "+feature+" released in "+year;}
const anotherGadget={brand:"NeoTech"};

/*
call:   func.call(thisArg, arg1, arg2, ...) — calls the function with specified `this` and arguments
apply:  func.apply(thisArg, [arg1, arg2, ...]) — like call but takes arguments as an array
bind:   func.bind(thisArg, arg1, arg2, ...) — returns a new function with `this` and arguments bound, doesn't invoke immediately
*/

// Using call: invokes the function immediately, passing arguments one by one
console.log(describe.call(anotherGadget,"AI Assistant",2025));

// Using apply: invokes the function immediately, passing arguments as an array
console.log(describe.apply(anotherGadget,["Quantum Sensor",2030]));

// Using bind: returns a new function with `this` bound to the given object
const boundDescribe=describe.bind(anotherGadget,"Holographic Display",2040);
console.log(boundDescribe());


// Functional Constructors

/*
Functional constructors in JavaScript are regular functions used to create and initialize objects.
When used with the `new` keyword, they:
- Create a new object.
- Set the prototype of the new object to the constructor's `.prototype`.
- Bind `this` inside the function to the new object.
- Return the new object implicitly (unless an object is returned manually).

Prototype methods are defined on the constructor's prototype so all instances share the method (memory efficient).

Private fields in functional constructors can be created using closures (variables inside the constructor that aren’t attached to `this`).
or by # (for both vars and methods since ES2022)
*/

function Vehicle(type){
    let secretCode="V"+Math.floor(Math.random()*1000); // private field using closure
    this.type=type;
    this.getSecret=function(){return secretCode;} // privileged method to access private field
}
Vehicle.prototype.describe=function(){
    return"This is a "+this.type;
};

const v=new Vehicle("Electric Scooter");
console.log(v.describe());
console.log(v.getSecret());
console.log(Object.getPrototypeOf(v)===Vehicle.prototype);

class SecretBox{#code="XYZ123";reveal(){return this.#code;}}
console.log(new SecretBox().reveal());


// Classes, OOPs Concepts and Getters/Setters

/*
In JavaScript, `class` syntax provides a cleaner and more structured way to create objects and handle inheritance.

Key components:
- **Constructor**: A special method for initializing new objects.
- **Getters/Setters**: Provide controlled access to properties.
- **Four Pillars of OOP**:
  1. **Encapsulation**: Grouping data and methods that operate on that data within a class.
  2. **Abstraction**: Hiding internal details and showing only essentials.
  3. **Inheritance**: One class can inherit from another, reusing its properties/methods.
  4. **Polymorphism**: The same method name can behave differently in different classes (method overriding).
*/

class Account{
    #balance;
    constructor(owner,balance=0){
        this.owner=owner;
        this.#balance=balance;
    }
    deposit(amount){
        if(amount>0)this.#balance+=amount;
    }
    withdraw(amount){
        if(amount>0&&amount<=this.#balance)this.#balance-=amount;
    }
    get balance(){return this.#balance;}
    set balance(amount){
        if(amount>=0)this.#balance=amount;
    }
    info(){return this.owner+"'s account";}
}

class SavingsAccount extends Account{
    constructor(owner,balance,interestRate){
        super(owner,balance);
        this.interestRate=interestRate;
    }
    info(){return super.info()+" with "+this.interestRate+"% interest";} // polymorphism
}

const sa=new SavingsAccount("Riya",1000,5);
sa.deposit(500);
sa.withdraw(200);
console.log(sa.balance);
sa.balance=3000;
console.log(sa.info());
