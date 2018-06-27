import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WayToSaveComponent } from './way-to-save.component';

describe('WayToSaveComponent', () => {
  let component: WayToSaveComponent;
  let fixture: ComponentFixture<WayToSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WayToSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WayToSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
