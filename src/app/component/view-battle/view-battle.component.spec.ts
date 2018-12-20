import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBattleComponent } from './view-battle.component';

describe('ViewBattleComponent', () => {
  let component: ViewBattleComponent;
  let fixture: ComponentFixture<ViewBattleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBattleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBattleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
