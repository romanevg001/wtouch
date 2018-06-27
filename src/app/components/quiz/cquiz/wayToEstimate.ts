import {EstimateType, EnumToArray} from "../../../models/enum.model";
import {Answers, Quiz} from "../quiz.model";


export interface IWayToEstimate {
    countEstimate();
}

export class WayToEstimate {

    static init(qz: Quiz){
      /*   new EnumToArray(EstimateType).numArray.forEach((item)=>{
            if((item.id == qz.evaluateType) && (typeof this['_'+item.name] == "function")) new ('_'+item.name)(qz.historyAnswers)
        }) */

        if(qz.evaluateType == EstimateType.OneTry){
            return new OneTry(qz.historyAnswers)
        }else if (qz.evaluateType == EstimateType.SeveralTries) {
            return new SeveralTries(qz.historyAnswers)
        }
    }
  
}

 class OneTry implements IWayToEstimate {

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


