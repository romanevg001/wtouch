import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app-state';

@Component({
  selector: 'app-message-section',
  templateUrl: './message-section.component.html',
  styleUrls: ['./message-section.component.scss']
})
export class MessageSectionComponent implements OnInit {

  constructor(private _store: Store<AppState>) { 
    _store.subscribe((state)=>console.log('MessageSectionComponent => ',state))
  }

  ngOnInit() {
  }

}
