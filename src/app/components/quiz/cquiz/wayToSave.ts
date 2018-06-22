import {WaytosaveType} from "../../../models/enum.model";
import {Answers, Quiz} from "../quiz.model";

export interface IWayToSave {
    save();
}

export class WayToSave {
    static init(qz:Quiz){
        if(qz.waytosave == WaytosaveType.LocalStorage){
            return new LocalHost()
        }else if (qz.waytosave == WaytosaveType.API) {
            return new ToServer()
        }
    }
}

 class LocalHost implements IWayToSave {
    save(){
        console.log('Save to LocalHost')
    }
}

 class ToServer implements IWayToSave {
    save(){
        console.log('Save to Server')
        
    }
}