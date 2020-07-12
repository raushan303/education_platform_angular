import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { 

    }

  ifUser(user: String): Observable<Boolean> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<any>(baseURL + 'users/' + user, httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
