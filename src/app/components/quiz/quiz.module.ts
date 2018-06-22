import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './quiz.router';
import { QuizService } from './quiz.services';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
/* 
import { reducers } from './reducers';
import { MovieEffects } from './movie.effect';
*/
import { QuizSelectComponent } from './quiz-select/quiz-select.component';
import { QuizInputComponent } from './quiz-input/quiz-input.component';
import { QuizCheckboxComponent } from './quiz-checkbox/quiz-checkbox.component';
import { QuizComponent } from './cquiz/quiz.component';
import { ShareModule } from '../share/share.module';


@NgModule({
  declarations: [
    QuizSelectComponent,
    QuizInputComponent,
    //QuizCheckboxComponent,
    QuizComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    ShareModule
  /*   StoreModule.forFeature('quiz', reducers),
    EffectsModule.forFeature([MovieEffects]), */
  ],
  exports: [RouterModule],  
  bootstrap: [
    QuizComponent
  ],
  providers:[QuizService]
  
})
export class QuizModule {}

