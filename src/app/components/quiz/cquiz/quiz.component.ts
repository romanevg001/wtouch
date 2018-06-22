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
  
  quiz: m.Quiz[] = [{
    question: 'Is it question 1 ?',
    answers: [
      {answer:'answer 1', id:0, valid: false},
      {answer:'answer 2', id:1, valid: true},
      {answer:'answer 3', id:2, valid: false}
    ],
    historyAnswers:[],
    waytosave:1,
    fieldType: 1,
    evaluateType: 2,
    evaluateMark: null
  },{
    question: 'Is it question 2 ?',
    answers: [{answer:'', id:0, valid: false, rightAnswer: 'bom'}],
    historyAnswers:[],
    waytosave:2,
    fieldType: 2,
    evaluateType: 1,
    evaluateMark: null
  },
  {
    question: 'Is it question 3 ?',
    answers: [
      {answer:'answer 1', id:0, valid: false},
      {answer:'answer 2', id:1, valid: false},
      {answer:'answer 3', id:2, valid: true}
    ],
    historyAnswers:[],
    waytosave:2,
    fieldType: 1,
    evaluateType: 1,
    evaluateMark: null
  },{
    question: 'Is it question 4 ?',
    answers: [{answer:'', id:0, valid: false, rightAnswer: 'z'}],
    historyAnswers:[],
    waytosave:2,
    fieldType: 2,
    evaluateType: 2,
    evaluateMark: null
  }];

  constructor() { 
  }



  ngOnInit() {
    console.log(this.quiz)
  }

  onSubmit(){
    //let value = this.saveQuiz.value;
    //this.store.dispatch(new MovieActions.SaveQuiz(value));
   // wayToSave:_wayToSave.IWayToSave = new _wayToSave.LocalHost();

    //new Exercise(new _typeOfField.fieldInput(),new _wayToSave.LocalHost())
    
  }

}
