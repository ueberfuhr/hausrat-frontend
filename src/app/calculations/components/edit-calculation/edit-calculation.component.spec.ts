import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FormsModule} from '@angular/forms';
import {EditCalculationComponent} from './edit-calculation.component';

describe('EditCalculationComponent', () => {
  let component: EditCalculationComponent;
  let fixture: ComponentFixture<EditCalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [EditCalculationComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCalculationComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show correct submit button title', () => {
    const submitButton = fixture.nativeElement.querySelector('button[type="submit"]');
    expect(submitButton.textContent).toEqual('Berechnen');
  });

});
