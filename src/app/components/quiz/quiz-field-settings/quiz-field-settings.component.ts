import { Component, OnInit } from '@angular/core';
import * as  en  from '../../../models/enum.model';

@Component({
  selector: 'app-quiz-field-settings',
  templateUrl: './quiz-field-settings.component.html',
  styleUrls: ['./quiz-field-settings.component.scss'],
  inputs:['qz'],
  outputs: ['qz']
})
export class QuizFieldSettingsComponent implements OnInit {
  evaluateType = en.enumToArray(en.EvaluateType);
  waytosaveType = en.enumToArray(en.WaytosaveType);

  constructor() { }

  ngOnInit() {
  }

  changeType(question,val){
    question.waytosave = val.id;
  }
 

  changeEvaluateType(question,val){
    question.evaluateType = val.id;
  }

}
