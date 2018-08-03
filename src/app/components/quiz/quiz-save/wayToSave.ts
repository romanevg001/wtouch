import {WaytosaveType, EnumToArray} from "../../../share/models/enum.model";
import {Answers, Quiz} from "../../../share/models/quiz.model";

export class WayToSave {

    constructor (qz:Quiz){
        new EnumToArray(WaytosaveType).numArray.forEach((item)=>{
            if((item.id == qz.waytosave) && (typeof this['_'+item.name] == "function")) this['_'+item.name]()
        })
    }
   

    private _LocalStorage(){
        console.log('Save to LocalHost')
    }

    private _API(){
        console.log('Save to Server')

    }


    
}