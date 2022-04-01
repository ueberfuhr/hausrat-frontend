import {ComponentFixture, TestBed} from '@angular/core/testing';

import {of} from 'rxjs';
import {FormsModule} from '@angular/forms';
import {CalculationsListComponent} from './calculations-list.component';
import {CalculationsService} from '../../services/calculations.service';
import {ViewCalculationComponent} from '../view-calculation/view-calculation.component';
import {EditCalculationComponent} from '../edit-calculation/edit-calculation.component';

describe('CalculationsListComponent', () => {
    let component: CalculationsListComponent;
    let fixture: ComponentFixture<CalculationsListComponent>;
    let service: jasmine.SpyObj<CalculationsService>;

    beforeEach(async () => {
        const serviceSpy = jasmine.createSpy('CalculationsService');
        await TestBed.configureTestingModule({
            declarations: [CalculationsListComponent, ViewCalculationComponent, EditCalculationComponent],
            imports: [FormsModule],
            providers: [
                {provide: CalculationsService, useValue: serviceSpy}
            ]
        }).compileComponents();
        service = TestBed.inject(CalculationsService) as jasmine.SpyObj<CalculationsService>;
        service.loadAll = jasmine.createSpy().and.returnValue(of());
        (service as any).calculationsChanged = of(); // hack :(
        fixture = TestBed.createComponent(CalculationsListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
        expect(service.loadAll).toHaveBeenCalledTimes(1);
    });
});
