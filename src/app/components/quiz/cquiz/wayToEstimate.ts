import {EstimateType, EnumToArray} from "../../../share/models/enum.model";
import {Answers, Quiz} from "../../../share/models/quiz.model";


export interface IWayToEstimate {
    countEstimate();
}

export class WayToEstimate {

    static init(qz: Quiz){
        switch(qz.evaluateType){
            case EstimateType.OneTry: {
                return new OneTry(qz.historyAnswers)
            }
            case EstimateType.SeveralTries: {
                return new SeveralTries(qz.historyAnswers)
            }
        }
    }
}

let OneTry = class OneTry implements IWayToEstimate {

    constructor(private historyAnswers: Answers[]){    }
    
    countEstimate(){
        return (this.historyAnswers[this.historyAnswers.length-1].valid) ? 10 : 0 ;
    }
}


class SeveralTries implements IWayToEstimate {

    constructor(private historyAnswers: Answers[]){}

    countEstimate(){
         return (this.historyAnswers[this.historyAnswers.length-1].valid  && (this.historyAnswers.length == 1)) ? 10 : 
            (this.historyAnswers[this.historyAnswers.length-1].valid && (this.historyAnswers.length > 1)) ? 5 : 0 ;
    }
}

/* 
class MyClass {
    value;
    static get [Symbol.species]() {
        return this;
    }
    constructor(value) {
        this.value = value;
    }
    clone() {
        console.log('this.constructor',this.constructor)
        console.log('Symbol.species', Symbol.species)
        console.log(new this.constructor[Symbol.species](this.value))
        return new this.constructor[Symbol.species](this.value);
    } 

    parentmethod(name){
        console.log('parent method ',name)
    }
}

class MyDerivedClass1 extends MyClass {
   somemothod(){
     super.parentmethod('MyDerivedClass1')
   }
}
class MyDerivedClass2 extends MyClass {
    static get [Symbol.species]() {
      //  console.log(MyClass)
        return MyClass;
    }
    somemothod(){
        super.parentmethod('MyDerivedClass2')
    }
}
let instance1 = new MyDerivedClass1("foo"),
    clone1 = instance1.clone(),
    instance2 = new MyDerivedClass2("bar"),
    clone2 = instance2.clone();


instance1.somemothod();
 Object.setPrototypeOf(instance1,instance2);
instance1.somemothod();

let gg = new MyClass('tyu');
MyClass.prototype[Symbol.toStringTag] = "Magic";
console.log(Object.prototype.toString.call(gg), gg.toString(),typeof gg);
console.log(Object.prototype.toString.call(instance1), instance1.toString(),typeof instance1);

 var receiver = {
     _name:9
 },
     supplier = {
        _name:0,
        get name() {
             return this._name
        },
        set name(n){
            this._name = n;
        },
        fff(){

        }
    };
    
    Object.assign(receiver, supplier);
  var descriptor = Object.getOwnPropertyDescriptor(receiver, "name");
 console.log(descriptor)
 console.log(receiver) 
 



 var obj = {
    а: 1,
    0: 1,
    с: 1,
    2: 1,
    b: 1,
    1: 1
};
obj['d'] = 1;
console.log(Object.getOwnPropertyNames(obj).join(""));


let person = {
    getGreeting() {
        return "Hello";
    }
};
let dog = {
    getGreeting() {
        return "Woof";
    }
};
// прототип - person
let friend = Object.create(person);
//Object.setPrototypeOf(friend,dog);
console.log(friend.getGreeting());


class myobj {
    items:number[] = [];
    constructor(items:number[]){
        this.items = items;
    }
    *lower(step){
        for(let item of this.items){
            if(item < step) yield item;
        }
    }

    *[Symbol.iterator]() {
        for(let item of this.items){
            if(item > 0) yield item;
        }
    }
}
let myobj1 = new myobj([-1,0,20,3,-8,-44,4,2])
for(let item of myobj1.lower(0)){
    console.log(item)
}

let arr1 = Array.of(1,4);
let arr2 = [...arr1]
let arr3 = Array.from(myobj1);
console.log(arr2)
console.log(arr3)
arr3.fill(666,1,2);
console.log(arr3)


let promiseTest = new Promise((resolve,reject)=>{
    for(let item of myobj1){
        if(item > 30) {
                resolve(item);


        }  else {reject(item)};
    }

})
let promiseTest2 = new Promise((resolve,reject)=>{
    resolve(3);
})
let promiseTest3 = new Promise((resolve,reject)=>{
    resolve(34);
})
console.log('promiseTest=>')

promiseTest.then((data)=>{
    console.log('data=>',data)
},(err)=>{
    console.log('reject=>',err)

}).catch((err)=>{
    console.log('catch=>',err)

})
 */
/* window['onunhandledrejection'] = function(err){
    console.log('wind onunhandledrejection err=>',err)
}
window['onrejectionhandled'] = function(err){
    console.log('wind onrejectionhandled err=>',err)
} */
/* 
Promise.all([promiseTest,promiseTest2,promiseTest3]).then((val)=>{
    console.log('all=',val)
})  */
/* 
Promise.race([promiseTest,promiseTest2,promiseTest3]).then((val)=>{
    console.log('race=',val)
})  */



