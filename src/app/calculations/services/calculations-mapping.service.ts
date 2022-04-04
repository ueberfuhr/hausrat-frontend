import {Injectable} from '@angular/core';
import {CalculationResult} from '../models/calculation-result.model';
import {CalculationRequest} from '../models/calculation-request.model';
import {CalculationRequestDto} from './calculation-request-dto';
import {CalculationResultDto} from './calculation-result-dto';

@Injectable({
    providedIn: 'root'
})
export class CalculationsMappingService {

    // we could use CamelCaseInterceptor?
    // https://github.com/GetTerminus/ngx-tools/issues/129

    resultFromApi(result: CalculationResultDto): CalculationResult {
        return result;
        /*
                return {
                    id: result.id,
                    request: this.requestFromApi(result.request),
                    principal: result.principal,
                    value: result.value,
                    currency: result.currency,
                    timestamp: result.timestamp
                };
        */
    }

    /*
        requestFromApi(req: CalculationRequestDto): CalculationRequest {
            return {
                livingArea: req.livingArea,
                product: req.product
            };
        }
    */
    requestToApi(req: CalculationRequest): CalculationRequestDto {
        return req;
        /*
        return {
            livingArea: req.livingArea,
            product: req.product
        };
        */
    }

}
