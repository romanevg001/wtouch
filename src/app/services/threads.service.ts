import { Http} from '@angular/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {AllUserData} from '../share/to/all-user-data.model';

@Injectable({
  providedIn: 'root'
})
export class ThreadsService {

  constructor(private _http: Http) { }

  loadUserTreads():Observable<AllUserData>{
     return this._http.get('/api/threads').map((res)=>res.json())
  }
}
