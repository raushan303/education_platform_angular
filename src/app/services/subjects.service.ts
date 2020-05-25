import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }



  getSubject(): Observable<any> {
    return this.http.get<any>(baseURL + 'subjects')
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

}
