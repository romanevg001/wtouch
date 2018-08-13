import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnChanges, Input, DoCheck
 } from '@angular/core';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class EditMovieComponent  {
  @Input() data;
  public name:number=0;

  constructor(public cd: ChangeDetectorRef) {
  //  this.cd.detach()
/*     let key = setInterval(()=>{
      this.name += 3;
      if(this.name > 80) clearInterval(key);
    },1000) */

  }

  onChange() {
    this.name= 88;
  }

}
