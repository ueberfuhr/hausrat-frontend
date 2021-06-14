import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {environment} from '../../../environments/environment';
import {CalculationsService} from './calculations.service';

describe('TodosService', () => {
  let service: CalculationsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(CalculationsService);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpMock.verify();
  });

  it('should return empty todos array', (done) => {
    service.getAll()
      .then(response => expect(response).toHaveSize(0))
      .then(done);
    httpMock
      .expectOne({method: 'GET', url: `${environment.SERVICE_URL}/calculations`})
      .flush([]);
  });
  it('should return todos in array', (done) => {
    service.getAll()
      .then(response => {
        expect(response).toHaveSize(1);
        expect(response[0].id).toEqual(5);
      })
      .then(done);
    httpMock
      .expectOne({method: 'GET', url: `${environment.SERVICE_URL}/calculations`})
      .flush([{id: 5, value: 100, currency: 'EUR', request: { 'living-area': 100, product: 'compact'}}]);
  });

});
