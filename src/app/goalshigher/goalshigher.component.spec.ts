import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalshigherComponent } from './goalshigher.component';

describe('GoalshigherComponent', () => {
  let component: GoalshigherComponent;
  let fixture: ComponentFixture<GoalshigherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalshigherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalshigherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
