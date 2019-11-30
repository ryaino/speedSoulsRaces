import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceCreationComponent } from './race-creation.component';

describe('RaceCreationComponent', () => {
  let component: RaceCreationComponent;
  let fixture: ComponentFixture<RaceCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaceCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
