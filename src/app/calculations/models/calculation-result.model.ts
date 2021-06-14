import {CalculationRequest} from './calculation-request.model';

export class CalculationResult {

    constructor(
        public id: number,
        public request: CalculationRequest,
        public value: number,
        public currency: string,
        public timestamp: Date) {
    }

}
