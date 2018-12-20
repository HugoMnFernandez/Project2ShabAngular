import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewActiveBattlesComponent } from './view-active-battles.component';

describe('ViewActiveBattlesComponent', () => {
  let component: ViewActiveBattlesComponent;
  let fixture: ComponentFixture<ViewActiveBattlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewActiveBattlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewActiveBattlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
