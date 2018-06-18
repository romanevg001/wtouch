import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizFieldSettingsComponent } from './quiz-field-settings.component';

describe('QuizFieldSettingsComponent', () => {
  let component: QuizFieldSettingsComponent;
  let fixture: ComponentFixture<QuizFieldSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizFieldSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizFieldSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
