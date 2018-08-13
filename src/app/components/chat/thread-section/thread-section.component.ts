import { Component, OnInit } from '@angular/core';
import { ThreadsService} from '../chat.services';
import * as actions from '../chat.actions';
import { AppState } from '../../../store/app-state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-thread-section',
  templateUrl: './thread-section.component.html',
  styleUrls: ['./thread-section.component.scss']
})
export class ThreadSectionComponent implements OnInit {

  constructor(
    private _threadsService: ThreadsService,
    private _store: Store<AppState>,
  ) { }

  ngOnInit() {
    this._threadsService.loadUserTreads().subscribe((AllUserData)=>this._store.dispatch(
      new actions.LoadUserThread(AllUserData)
    ))
  }

}
