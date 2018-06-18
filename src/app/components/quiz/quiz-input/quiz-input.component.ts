import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-input',
  templateUrl: './quiz-input.component.html',
  styleUrls: ['./quiz-input.component.scss'],
  inputs:['qz'],
  outputs: ['qz']
})
export class QuizInputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  changeValue(question){
    let val =question.answers[0];
    val.valid = (val.answer == val.rightAnswer) ? true : false;
    question.historyAnswers.push(val);
   // this.countEstimate(question);
  }
}
