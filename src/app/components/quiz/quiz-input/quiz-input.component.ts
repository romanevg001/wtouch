import { Component, OnInit,Input, Output } from '@angular/core';
import {Quiz} from "../quiz.model";
import {WayToEstimate} from "../cquiz/wayToEstimate";
import {WayToSave} from "../quiz-save/wayToSave";

@Component({
  selector: 'app-quiz-input',
  templateUrl: './quiz-input.component.html',
  styleUrls: ['./quiz-input.component.scss'],
  inputs:['qz'],
  outputs: ['qz']
})
export class QuizInputComponent implements OnInit {
  qz: Quiz;
  constructor() { 
   
  }

  ngOnInit() {

  }
  changeValue(){

    let val =this.qz.answers[0];
    val.valid = (val.answer == val.rightAnswer) ? true : false;
    this.qz.historyAnswers.push(val); 
    this.qz.evaluateMark = WayToEstimate.init(this.qz).countEstimate();
   this.save();
  }

  save(){

    new WayToSave(this.qz);
  }
}
