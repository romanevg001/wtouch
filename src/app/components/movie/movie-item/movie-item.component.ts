import { Component, OnInit, ChangeDetectionStrategy, OnChanges, DoCheck, ChangeDetectorRef,
  ViewChild, AfterViewInit, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import * as Immutable from 'Immutable';
@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
  inputs:['movie'],
  outputs:['emEditMovie'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieItemComponent implements OnInit, OnChanges,AfterViewInit, DoCheck  {
  movie;
  origMovie;
  emEditMovie = new EventEmitter();
  conter:number = 0;
  
  constructor(private _cd: ChangeDetectorRef) {
 

  }

  ngOnInit() {
    
    
  }

  ngAfterViewInit(){
    this.detach();
  }


  ngOnChanges(){
    this.origMovie = Immutable.fromJS(this.movie);
  }

  ngDoCheck(){
    if( (JSON.stringify(this.origMovie)!=JSON.stringify(this.movie))){
      this.reattach();
    }
  }

  editMovie(movie){
    this.emEditMovie.emit(movie)
  }

  reattach(){
   // this._cd.markForCheck();
    this._cd.detectChanges();
  }

  detach(){
    this._cd.detach();
  }

  

}
