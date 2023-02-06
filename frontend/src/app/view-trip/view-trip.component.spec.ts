import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewTripComponent } from './view-trip.component';


describe('ViewTripComponent', () => {
  let component: ViewTripComponent;
  let fixture: ComponentFixture<ViewTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
