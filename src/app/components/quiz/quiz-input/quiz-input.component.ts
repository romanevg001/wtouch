import { Component, OnInit,Input, Output } from '@angular/core';
import {Quiz} from "../quiz.model";
import {WayToEstimate} from "../cquiz/wayToEstimate";
import {WayToSave} from "../cquiz/wayToSave";

@Component({
  selector: 'app-quiz-input',
  templateUrl: './quiz-input.component.html',
  styleUrls: ['./quiz-input.component.scss'],
  inputs:['qz'],
  outputs: ['qz']
})
export class QuizInputComponent implements OnInit {
  qz: Quiz;
  constructor() { }

  ngOnInit() {
   // console.log()
   //console.log(WayToEstimate.init(this.qz.evaluateType, this.qz.historyAnswers))

  }
  changeValue(){
    let val =this.qz.answers[0];
    val.valid = (val.answer == val.rightAnswer) ? true : false;
    this.qz.historyAnswers.push(val); 
    this.qz.evaluateMark = WayToEstimate.init(this.qz).countEstimate();
  }

  save(){
    (WayToSave.init(this.qz)).save()
  }
}
