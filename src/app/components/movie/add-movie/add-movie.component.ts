import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import * as MovieActions from '../movie.actions';
import * as reducer from '../reducers';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {
  addMovieForm: FormGroup;
  title: FormControl;
  body: FormControl;

  constructor( 
    private _fb: FormBuilder,
    private store: Store<reducer.State>,
    public dialogRef: MatDialogRef<any>

  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.title = this._fb.control('', Validators.compose([Validators.minLength(3), Validators.maxLength(50)]));
    this.body = this._fb.control('', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(350)]));
    
    this.addMovieForm = this._fb.group({
      title: this.title,
      body: this.body,
    })
  }

  onSubmit(){
    this.store.dispatch(new MovieActions.Add(this.addMovieForm.value));
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close('Pizza!');
  }

}
