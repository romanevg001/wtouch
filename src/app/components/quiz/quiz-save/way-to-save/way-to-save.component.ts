import { Component, OnInit } from '@angular/core';
import {WaytosaveType, EnumToArray, IenumArray} from "../../../../share/models/enum.model";
import {Quiz} from "../../quiz.model";

@Component({
  selector: 'app-way-to-save',
  templateUrl: './way-to-save.component.html',
  styleUrls: ['./way-to-save.component.scss'],
  inputs:['qz']
})
export class WayToSaveComponent implements OnInit {
  saveTypeList: IenumArray[];
  qz:Quiz;
  constructor() { 
    this.saveTypeList = new EnumToArray(WaytosaveType).numArray;

  }

  ngOnInit() {
  }

  changeValue(val){
    this.qz.waytosave = val.id;
  }

}
