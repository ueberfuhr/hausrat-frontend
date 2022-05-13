import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {CalculationsService} from './calculations.service';
import {API_ENDPOINT} from '../../../environments/app-config.model';
import {firstValueFrom} from 'rxjs';

describe('CalculationsService', () => {
    let service: CalculationsService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                {provide: API_ENDPOINT, useValue: 'localhost:8080'},
            ]
        });
        httpMock = TestBed.inject(HttpTestingController);
        service = TestBed.inject(CalculationsService);
    });

    afterEach(() => {
        // After every test, assert that there are no more pending requests.
        httpMock.verify();
    });

    it('should return empty todos array', (done) => {
        firstValueFrom(service.loadAll())
            .then(response => expect(response).toHaveLength(0))
            .then(done);
        httpMock
            .expectOne({method: 'GET', url: `localhost:8080/calculations`})
            .flush([]);
    });
    it('should return todos in array', (done) => {

        firstValueFrom(service.loadAll())
            .then(response => {
                expect(response).toHaveLength(1);
                expect(response[0]?.id).toEqual(5);
            })
            .then(done);
        httpMock
            .expectOne({method: 'GET', url: `localhost:8080/calculations`})
            .flush([{id: 5, value: 100, currency: 'EUR', request: {'living-area': 100, product: 'compact'}}]);
    });

});
