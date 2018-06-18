import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizEstimateComponent } from './quiz-estimate.component';

describe('QuizEstimateComponent', () => {
  let component: QuizEstimateComponent;
  let fixture: ComponentFixture<QuizEstimateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizEstimateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizEstimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
