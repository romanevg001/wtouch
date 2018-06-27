import { Component, OnInit,Input, Output } from '@angular/core';
import {Quiz} from "../quiz.model";
import {WayToEstimate} from "../cquiz/wayToEstimate";
import {t, CarMaker} from "../cquiz/wayToSave";
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
   // console.log()
   //console.log(WayToEstimate.init(this.qz.evaluateType, this.qz.historyAnswers))

  }
  changeValue(){
/* 
    t.setZoo(7)
    t.setZoo(4)
    console.log(t)
    console.log(CarMaker.factory('Compact'))
    console.log(CarMaker.factory('Convertible').drive())

 */
    let val =this.qz.answers[0];
    val.valid = (val.answer == val.rightAnswer) ? true : false;
    this.qz.historyAnswers.push(val); 
    this.qz.evaluateMark = WayToEstimate.init(this.qz).countEstimate();
   this.save();
  }

  save(){
    console.log('save')

    new WayToSave(this.qz);
  }
}
