import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ShareModule }       from '../../share/share.module';

import { reducers } from './reducers';
import { ThreadsService } from './chat.services';
//import { MovieEffects } from './chat.effect';
import { routes } from './chat.router';

import { ChatComponent } from './chat/chat.component';
import { MessageSectionComponent } from './message-section/message-section.component';
import { ThreadSectionComponent } from './thread-section/thread-section.component';

@NgModule({
  declarations: [
    ChatComponent,
    MessageSectionComponent,
    ThreadSectionComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    StoreModule.forFeature('chat', reducers),
  //  EffectsModule.forFeature([MovieEffects]),
    ShareModule
  ],
  entryComponents: [
    ChatComponent
  ],
  exports: [RouterModule],  
  bootstrap: [
    ChatComponent
  ],
  providers:[ThreadsService]
  
})
export class MovieModule {}

