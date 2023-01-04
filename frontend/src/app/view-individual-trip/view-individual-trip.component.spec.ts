import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewIndividualTripComponent } from './view-individual-trip.component';

describe('ViewIndividualTripComponent', () => {
  let component: ViewIndividualTripComponent;
  let fixture: ComponentFixture<ViewIndividualTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewIndividualTripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewIndividualTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
