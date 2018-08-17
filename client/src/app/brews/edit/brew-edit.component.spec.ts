import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrewEditComponent } from './brew-edit.component';

describe('BrewEditComponent', () => {
  let component: BrewEditComponent;
  let fixture: ComponentFixture<BrewEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrewEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrewEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
