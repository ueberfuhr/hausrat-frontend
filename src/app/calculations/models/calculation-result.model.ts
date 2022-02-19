import {CalculationRequest} from './calculation-request.model';

/**
 * The result of a calculation.
 */
export interface CalculationResult {

    /**
     * The id of the result.
     */
    id: number;
    /**
     * The request that was originally sent to do the calculation.
     */
    request: CalculationRequest;
    /**
     * The result value.
     */
    value: number;
    /**
     * The result currency.
     */
    currency: string;
    /**
     * The timestamp of the calculation.
     */
    timestamp: Date;
    /**
     * The principal that sent the calculation request.
     */
    principal?: string;

}
