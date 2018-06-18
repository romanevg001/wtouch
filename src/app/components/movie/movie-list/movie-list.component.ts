import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as MovieActions from '../movie.actions';
import * as reducer from '../reducers';
import {MatDialog, MatDialogRef} from '@angular/material';
import { AddMovieComponent } from '../add-movie/add-movie.component';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movieList$;

  constructor(
    private store: Store<reducer.State>,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.store.dispatch(new MovieActions.Load('love'));
    this.movieList$ = this.store.select(reducer.getMovieList);
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddMovieComponent, {
      width: '350px'
    });
  }
  deleteMovie(id){
    this.store.dispatch(new MovieActions.Remove(id));
    this.store.subscribe((d)=>{
      console.log(d)
    })
  }

}
