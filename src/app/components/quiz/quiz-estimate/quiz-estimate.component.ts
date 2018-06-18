import { Component, OnInit } from '@angular/core';
import * as  en  from '../../../models/enum.model';

@Component({
  selector: 'app-quiz-estimate',
  templateUrl: './quiz-estimate.component.html',
  styleUrls: ['./quiz-estimate.component.scss'],
  inputs:['qz'],
  outputs: ['qz']
})
export class QuizEstimateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  countEstimate(question){
    if(question.historyAnswers.length==0) return;
 
    if(question.evaluateType == en.EvaluateType.FirstWay){
        question.evaluateMark =(question.historyAnswers[question.historyAnswers.length-1].valid) ? 10 : 0 ;
  
    } else if(question.evaluateType == en.EvaluateType.SecondWay){
        question.evaluateMark = 
          (question.historyAnswers[question.historyAnswers.length-1].valid 
          && (question.historyAnswers.length == 1)
          ) ? 10 : 
          (question.historyAnswers[question.historyAnswers.length-1].valid 
          && (question.historyAnswers.length > 1)) ? 5 : 0 ;
    }
}

}
