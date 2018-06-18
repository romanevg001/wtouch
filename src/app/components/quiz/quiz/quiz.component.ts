import { Component, OnInit } from '@angular/core';
import * as  en  from '../../../models/enum.model';
import * as  m  from '../quiz.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  questionType = en.QuestionType;
  //waytosaveType = en.enumToArray(en.WaytosaveType);
  //evaluateType = en.enumToArray(en.EvaluateType);
  quiz: m.Quiz[] = [];

  constructor() { 
    

  }

  ngOnInit() {
  }

  onSubmit(){
    //let value = this.saveQuiz.value;
    console.log(this.quiz)
    //this.store.dispatch(new MovieActions.SaveQuiz(value));
    
  }

}
