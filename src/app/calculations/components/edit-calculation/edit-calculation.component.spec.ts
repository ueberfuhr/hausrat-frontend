import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FormsModule} from '@angular/forms';
import {EditCalculationComponent} from './edit-calculation.component';

describe('EditTodoComponent', () => {
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

  it('should show coorect submit button title', () => {
    expect(fixture.nativeElement.querySelector('button[type="submit"]').innerText).toEqual('Berechnen');
  });

});
