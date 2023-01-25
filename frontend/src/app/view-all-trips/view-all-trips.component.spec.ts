import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewAllTripsComponent } from './view-all-trips.component';


describe('ViewAllTripsComponent', () => {
  let component: ViewAllTripsComponent;
  let fixture: ComponentFixture<ViewAllTripsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllTripsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
