import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-select',
  templateUrl: './quiz-select.component.html',
  styleUrls: ['./quiz-select.component.scss'],
  inputs:['qz'],
  outputs: ['qz']
})
export class QuizSelectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  changeValue(question){
    let val =question.answers[0];
    val.valid = (val.answer == val.rightAnswer) ? true : false;
    question.historyAnswers.push(val);
  }
}
