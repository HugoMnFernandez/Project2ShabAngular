import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowHeroComponent } from './follow-hero.component';

describe('FollowHeroComponent', () => {
  let component: FollowHeroComponent;
  let fixture: ComponentFixture<FollowHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
