import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EMPTY, of} from 'rxjs';
import {FormsModule} from '@angular/forms';
import {CalculationsListComponent} from './calculations-list.component';
import {CalculationsService} from '../../services/calculations.service';
import {ViewCalculationComponent} from '../view-calculation/view-calculation.component';
import {EditCalculationComponent} from '../edit-calculation/edit-calculation.component';
import {createMock} from '@testing-library/angular/jest-utils';

describe('CalculationsListComponent', () => {
    let component: CalculationsListComponent;
    let fixture: ComponentFixture<CalculationsListComponent>;
    let service: CalculationsService;

    beforeEach(async () => {
        service = createMock(CalculationsService);
        service.loadAll = jest.fn(() => of([]));
        (service as any).calculationsChanged = EMPTY; // hack :(

        await TestBed.configureTestingModule({
            declarations: [CalculationsListComponent, ViewCalculationComponent, EditCalculationComponent],
            imports: [FormsModule],
            providers: [
                {provide: CalculationsService, useValue: service}
            ]
        }).compileComponents();
        fixture = TestBed.createComponent(CalculationsListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
        expect(service.loadAll).toHaveBeenCalledTimes(1);
    });
});
