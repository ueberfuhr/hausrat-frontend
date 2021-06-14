import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {CalculationResult} from '../models/calculation-result.model';
import {CalculationRequest} from '../models/calculation-request.model';
import {CalculationsMappingService} from './calculations-mapping.service';

@Injectable({
    providedIn: 'root'
})
export class CalculationsService {

    private readonly basePath = environment.SERVICE_URL;

    constructor(private http: HttpClient,
                private mappingService: CalculationsMappingService) {
    }

    getAll(): Promise<CalculationResult[]> {
        return this.http.get<CalculationResult[]>(this.path())
            .toPromise()
            .then(results => results.map(result => this.mappingService.fromApi(result)));
    }

    private path(result?: CalculationResult): string {
        return `${this.basePath}/calculations` + (result ? `/${result.id}` : '');
    }

    process(request: CalculationRequest): Promise<CalculationResult> {
        return this.http.post<CalculationResult>(this.path(), this.mappingService.toApi(request), {observe: 'response'})
            .toPromise()
            .then(response => this.mappingService.fromApi(response.body));
    }

    public getByURL(location: string): Promise<CalculationResult> {
        return this.http.get<CalculationResult>(location)
            .toPromise()
            .then(result => this.mappingService.fromApi(result));
    }
}
