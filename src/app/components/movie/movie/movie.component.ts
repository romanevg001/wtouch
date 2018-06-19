import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as MovieActions from '../movie.actions';
import * as reducer from '../reducers';
import { MovieItem } from '../movie.models';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movie$;
  constructor(
    private store: Store<reducer.State>,
    private _activatedRoute: ActivatedRoute
  ) {

   }

  ngOnInit() {
    let id = this._activatedRoute.snapshot.params['id'];

    this.store.dispatch(new MovieActions.LoadItem(id));
    this.movie$ = this.store.select(reducer.getMovie);
  }

}
