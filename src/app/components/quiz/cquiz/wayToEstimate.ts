import {EstimateType, EnumToArray} from "../../../models/enum.model";
import {Answers, Quiz} from "../quiz.model";


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
}

class MyDerivedClass1 extends MyClass {
    // пустой
}
class MyDerivedClass2 extends MyClass {
    static get [Symbol.species]() {
      //  console.log(MyClass)
        return MyClass;
    }
}
let instance1 = new MyDerivedClass1("foo"),
    clone1 = instance1.clone(),
    instance2 = new MyDerivedClass2("bar"),
    clone2 = instance2.clone();
console.log(clone1 instanceof MyClass);
console.log(clone1 instanceof MyDerivedClass1);
console.log(clone2 instanceof MyClass);
console.log(clone2 instanceof MyDerivedClass2);

