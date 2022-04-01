import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CalculationResult} from '../models/calculation-result.model';
import {CalculationRequest} from '../models/calculation-request.model';
import {CalculationsMappingService} from './calculations-mapping.service';
import {CalculationResultDto} from './calculation-result-dto';
import {API_ENDPOINT} from '../../../environments/app-config.model';
import {Observable, Subject} from 'rxjs';
import {ChangeEvent, ChangeEventType} from '../models/change-event';
import {map, tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CalculationsService {

    // make service observable
    private readonly calculationsChangedSubject = new Subject<ChangeEvent<CalculationResult>>();
    private readonly calculationsChangedObservable = this.calculationsChangedSubject.asObservable();

    constructor(private readonly http: HttpClient,
                private readonly mappingService: CalculationsMappingService,
                @Inject(API_ENDPOINT) private readonly apiEndpoint: string) {
    }

    get calculationsChanged(): Observable<ChangeEvent<CalculationResult>> {
        return this.calculationsChangedObservable;
    }

    // <utilities>
    // we cannot use simple function notation because "this" is undefined during invocation
    private readonly mapFromApi = (input: CalculationResultDto) => this.mappingService.resultFromApi(input);

    private path(result?: CalculationResult): string {
        return `${this.apiEndpoint}/calculations${result ? '/' + result.id : ''}`;
    }

    private fireEvent(eventType: ChangeEventType, value: CalculationResult): void {
        this.calculationsChangedSubject.next({type: eventType, value});
    }

    // </utilities>


    loadAll(): Observable<CalculationResult[]> {
        return this.http.get<CalculationResultDto[]>(this.path())
            .pipe(map(results => results.map(this.mapFromApi)));
    }

    process(request: CalculationRequest): Observable<CalculationResult> {
        return this.http.post<CalculationResultDto>(this.path(), this.mappingService.requestToApi(request))
            .pipe(
                map(this.mapFromApi),
                tap(result => this.fireEvent(ChangeEventType.Created, result))
            );
    }

}
