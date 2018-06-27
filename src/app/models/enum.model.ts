export enum WaytosaveType {
    API = 1, 
    LocalStorage = 2
}

export enum QuestionType {
    Select = 1, 
    Text = 2,
    Radio = 3
}

export enum EstimateType {
    OneTry = 1,
    SeveralTries = 2
}


export interface IenumArray {
    id: number; 
    name: string;
}
/* export function enumToArray(en) {
  let map: {id: number; name: string}[] = [];
  for(var n in en) {
      if (typeof en[n] === 'number') {
          map.push({id: <any>en[n], name: n});
      }
  }
    return map;
} 

export function findById(id) {
    let map: {id: number; name: string}[] = [];
    for(var n in en) {
        if (typeof en[n] === 'number') {
            map.push({id: <any>en[n], name: n});
        }
    }
      return map;
  } 
 */
 
export class EnumToArray{
    private en;
    numArray:  IenumArray[] = [];

    constructor(en){
        this.en = en;
        this._toArray();
    }

    private _toArray() {
       console.log(this.en)
        for(var n in this.en) {
            if (typeof this.en[n] === 'number') {
                this.numArray.push({id: <any>this.en[n], name: n});
            }
        }
    }

    findById(id){
        return this.numArray.find((el)=>el.id==id)
    }
} 