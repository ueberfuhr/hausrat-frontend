/* tslint:disable:no-string-literal */
import {Injectable} from '@angular/core';
import {CalculationResult} from '../models/calculation-result.model';
import {CalculationRequest} from '../models/calculation-request.model';

@Injectable({
  providedIn: 'root'
})
export class CalculationsMappingService {

  constructor() {
  }

  fromApi(api: any): CalculationResult {
    // we have to rename living_area to livingArea
    const result = Object.assign({}, api);
    if (result.request && result.request['living_area']) {
      result.request.livingArea = result.request['living_area'];
      delete result.request['living_area'];
    }
    return result;
  }

  toApi(req: CalculationRequest): any {
    // we have to rename livingArea to living_area
    const result = Object.assign({}, req) as any;
    if (result.livingArea) {
      result['living_area'] = result.livingArea;
    }
    delete result.livingArea;
    return result;
  }

}
