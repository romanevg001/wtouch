import { Component, OnInit, ChangeDetectionStrategy, OnChanges, DoCheck, ChangeDetectorRef,
  ViewChild, AfterViewInit, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
  inputs:['movie'],
  outputs:['emEditMovie'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieItemComponent implements OnInit, OnChanges, DoCheck  {
  movie;
  origMovie = {...this.movie};
  emEditMovie = new EventEmitter();
  
  constructor(private _cd: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.offUpdate();
  }

  ngDoCheck(){
    if(JSON.stringify(this.origMovie)!=JSON.stringify(this.movie)){
      this.updateView();
      setTimeout(()=>this.offUpdate())
    }   
  }

  ngOnChanges(){
    console.log(this.movie)
  }

  editMovie(movie){
    this.emEditMovie.emit(movie)
  }

  updateView(){
    this._cd.detectChanges();
  }

  offUpdate(){
    this._cd.detach();
  }

  

}
