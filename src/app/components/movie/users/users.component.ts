import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as MovieActions from '../movie.actions';
import * as reducer from '../reducers';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users$: Observable<any>;
  userPosts$: Observable<any>;
  userId;


  constructor(
    private store: Store<reducer.State>,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {
    this._router.events.filter(e => e instanceof NavigationEnd) 
    .forEach(e => {
      this.userId = this._activatedRoute.snapshot.params['id'];
      if(this.userId){
        this.editMovie(this.userId)
      }
    });
  }

  ngOnInit() {

    this.store.dispatch(new MovieActions.Load());
    this.users$ = this.store.select(reducer.getMovieList);

  }
 

  editMovie(id){
    this.store.dispatch(new MovieActions.LoadItem(id));
    this.userPosts$ = this.store.select(reducer.getMovie);
  
    
  }

}
