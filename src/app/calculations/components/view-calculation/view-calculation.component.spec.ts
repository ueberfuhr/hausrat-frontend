import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ViewCalculationComponent} from './view-calculation.component';
import {CalculationRequest} from '../../models/calculation-request.model';
import {CalculationResult} from '../../models/calculation-result.model';

describe('ViewTodoComponent', () => {
  let component: ViewCalculationComponent;
  let fixture: ComponentFixture<ViewCalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCalculationComponent ],
      imports: [ FontAwesomeModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCalculationComponent);
    component = fixture.componentInstance;
    component.calculation = new CalculationResult(3, new CalculationRequest('COMPACT', 100), 100000, 'EUR', new Date()); // Input
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
