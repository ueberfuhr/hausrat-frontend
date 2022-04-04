import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ViewCalculationComponent} from './view-calculation.component';

describe('ViewCalculationComponent', () => {
  let component: ViewCalculationComponent;
  let fixture: ComponentFixture<ViewCalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCalculationComponent ],
      // imports: [ FontAwesomeModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCalculationComponent);
    component = fixture.componentInstance;
    component.calculation = {
      id: 3,
      request: {
        product: 'COMPACT',
        livingArea: 100
      },
      value: 100000,
      currency: 'EUR',
      timestamp: new Date()
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
