import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, DoCheck } from '@angular/core';
import { Router, Route, RouterStateSnapshot } from '@angular/router';
import { select, Store } from '@ngrx/store';
import * as MovieActions from '../movie.actions';
import * as reducer from '../reducers';
import {MatDialog, MatDialogRef} from '@angular/material';
import { AddMovieComponent } from '../add-movie/add-movie.component';
import { MovieService } from '../movie.services';
import { SearchModel } from '../../../share/models/common.model';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']

})
export class MovieListComponent implements OnInit,AfterViewInit {
  movieList$;
  searchInfo:SearchModel = new SearchModel();
  searchResults;
  editingMovie;

  @ViewChild('btnDeleteMovie', {read: ElementRef}) _btnDeleteMovie: ElementRef;
  @ViewChild('btnCheck', {read: ElementRef}) _btnCheck: ElementRef;
  @ViewChild('btnAddMovie', {read: ElementRef}) _btnAddMovie: ElementRef;
  delMovie:Observable<any>;
  resMovie = '';

  constructor(
    private store: Store<reducer.State>,
    private _router: Router,
    public dialog: MatDialog,
  ) {    /*  search */
    this.searchInfo.placeHolder = "Search movies";
    this.searchInfo.callBack = this.searchСallBack.bind(this);
    this.searchInfo.midCallBack = this.searchMidСallBack.bind(this);




  }
  searchMidСallBack(req: string) {
      if(req && req.length>1) {
        this.getSearchResult(req);
      }
  }
  searchСallBack(req: string) {
      if(req) {
        this._router.navigate(['/movies',req['id']]);
        console.log(req)
      }else{
        this.searchInfo.resultsList = [];
      }
  }

  getSearchResult(req: string){
    this.store.dispatch(new MovieActions.Load('love'));
    this.movieList$ = this.store.select(reducer.getMovieList).take(10);
    
  /*   this._movieService.getMovieList(req).take(10).subscribe((data)=>{
      console.log(data)
      this.searchInfo.resultsList = data;
    }) */
  }

  ngOnInit() {
    this.store.dispatch(new MovieActions.Load('love'));
    this.movieList$ = this.store.select(reducer.getMovieList).take(10);
  
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddMovieComponent, {
      width: '350px'
    });
  }
/*   deleteMovie(id){
    this.store.dispatch(new MovieActions.Remove(id));
    this.store.subscribe((d)=>{
      console.log(d)
    })
  }
  */
  editMovie(movie){
    console.log('movie',movie)
    this.editingMovie = movie;
  } 

  ngAfterViewInit(){
    this.delMovie = Observable.fromEvent(this._btnDeleteMovie.nativeElement,"click")
    this.delMovie.map((x)=>{ console.log(x); return x})
     .buffer(this.delMovie.debounce(()=>Observable.interval(500)))
     .forEach((x)=>{console.log(x); 
        console.log('click del')
        this.resMovie += '.';
      });


      Observable.fromEvent(this._btnAddMovie.nativeElement,"click")
      .switchMap(()=>{
        return Observable.interval(1000)

      }).subscribe(x=>console.log(x));
      

      let stream = Observable.fromEvent(this._btnCheck.nativeElement,'change')
      .map((x)=>{ console.log((x['target'] as HTMLInputElement).checked)});

      stream.subscribe(()=>{
    
      }) 
  }

}
