import { Component, OnInit } from '@angular/core';
import {Quiz} from "../quiz.model";
import {WayToEstimate} from "../cquiz/wayToEstimate";
import {WayToSave} from "../quiz-save/wayToSave";

@Component({
  selector: 'app-quiz-select',
  templateUrl: './quiz-select.component.html',
  styleUrls: ['./quiz-select.component.scss'],
  inputs:['qz'],
  outputs: ['qz']
})
export class QuizSelectComponent implements OnInit {
  qz: Quiz;
  constructor() { }

  ngOnInit() {
  }

  changeValue(val){
    console.log(val)
    //val.valid = (val.answer == val.rightAnswer) ? true : false;
    this.qz.historyAnswers.push(val);
    this.qz.evaluateMark = WayToEstimate.init(this.qz).countEstimate();

  }

  save(){
    new WayToSave(this.qz)

  }
}
