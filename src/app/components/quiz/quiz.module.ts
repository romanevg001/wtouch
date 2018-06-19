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
import { QuizComponent } from './quiz/quiz.component';
import { QuizSelectComponent } from './quiz-select/quiz-select.component';
import { QuizInputComponent } from './quiz-input/quiz-input.component';
import { QuizCheckboxComponent } from './quiz-checkbox/quiz-checkbox.component';
import { QuizFieldSettingsComponent } from './quiz-field-settings/quiz-field-settings.component';
import { QuizEstimateComponent } from './quiz-estimate/quiz-estimate.component';


@NgModule({
  declarations: [
    QuizComponent,
    QuizSelectComponent,
    QuizInputComponent,
    QuizCheckboxComponent,
    QuizFieldSettingsComponent,
    QuizEstimateComponent
  ],
  imports: [
    RouterModule.forChild(routes),
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

