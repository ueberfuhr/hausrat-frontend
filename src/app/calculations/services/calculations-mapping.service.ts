import {Injectable} from '@angular/core';
import {CalculationResult} from '../models/calculation-result.model';
import {CalculationRequest} from '../models/calculation-request.model';
import {CalculationRequestDto} from './calculation-request-dto';
import {CalculationResultDto} from './calculation-result-dto';

@Injectable({
    providedIn: 'root'
})
export class CalculationsMappingService {

    resultFromApi(result: CalculationResultDto): CalculationResult {
        return {
            id: result.id,
            request: this.requestFromApi(result.request),
            principal: result.principal,
            value: result.value,
            currency: result.currency,
            timestamp: result.timestamp
        };
    }

    requestFromApi(req: CalculationRequestDto): CalculationRequest {
        return {
            livingArea: req.living_area,
            product: req.product
        };
    }

    requestToApi(req: CalculationRequest): CalculationRequestDto {
        return {
            living_area: req.livingArea,
            product: req.product
        };
    }

}
