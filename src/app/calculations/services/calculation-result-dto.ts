import {CalculationRequestDto} from './calculation-request-dto';

export interface CalculationResultDto {

    id: number;
    request: CalculationRequestDto;
    value: number;
    currency: string;
    timestamp: Date;
    principal?: string;

}
