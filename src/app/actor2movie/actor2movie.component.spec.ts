import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actor2movieComponent } from './actor2movie.component';

describe('Actor2movieComponent', () => {
  let component: Actor2movieComponent;
  let fixture: ComponentFixture<Actor2movieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Actor2movieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Actor2movieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
