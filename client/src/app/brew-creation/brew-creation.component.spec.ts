import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrewCreationComponent } from './brew-creation.component';

describe('BrewCreationComponent', () => {
  let component: BrewCreationComponent;
  let fixture: ComponentFixture<BrewCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrewCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrewCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
