

class Test {
    private static instance;
    private _data = [];
    constructor(){
        if(! Test.instance){
            Test.instance = this;
          }
       
          return Test.instance;
    }

    setZoo(meaning){
        this._data.push(meaning)
    }
    getZoo(){
        return this._data
    }
   
}
const t = new Test();
Object.freeze(t)
export {t};


export class CarMaker {
    doors: number =0;

    drive () {
        console.log("Vroom, I have " + this.doors + " doors");
    };

    static factory(type){
        var constr = type,
        types = {
            Compact : Compact,
            Convertible: Convertible
        }

        if (types[constr] == undefined) {
            throw {
                name: "Error",
                message: constr + " doesn’t exist"
            };
        }

        return new types[constr]();
    }
 /* 
    static Compact () {
        doors = 4;
    }; */
/*    private Convertible () {
        this.doors = 2;
    };
    private SUV () {
        this.doors = 24;
    }; */
    

}

class Compact extends CarMaker {
    doors = 4;
}

class Convertible extends CarMaker {
    doors = 2;
};

class SUV  extends CarMaker {
    doors = 24;
}


/* 
 class LocalHost implements IWayToSave {
    save(){
        console.log('Save to LocalHost')
    }
}

 class ToServer implements IWayToSave {
    save(){
        console.log('Save to Server')
        
    }
} */