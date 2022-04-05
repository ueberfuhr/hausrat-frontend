import {ViewCalculationComponent} from './view-calculation.component';
import {CalculationResult} from '../../models/calculation-result.model';
import {render, screen} from '@testing-library/angular';

describe('ViewCalculationComponent', () => {

    const calculation: CalculationResult = {
        id: 1,
        currency: 'EUR',
        timestamp: new Date(2022, 3, 1),
        value: 10000,
        request: {
            product: 'OPTIMAL',
            livingArea: 100
        }
    };
    const cardTitle = () => screen.getByRole('heading', {level: 5});

    beforeEach(async () => {
        await render(ViewCalculationComponent, {
            componentProperties: {calculation}
        });
    });

    it('should have product in title', () => {
        expect(cardTitle()).toHaveTextContent(calculation.request.product);
    });

    it('should have living area in title', () => {
        expect(cardTitle()).toHaveTextContent(calculation.request.livingArea.toFixed(0));
    });

});
