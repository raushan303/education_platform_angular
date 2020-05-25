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
export class ChapterService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  getchapter(id: number): Observable<any> {
    return this.http.get<any>(baseURL + 'chapters')
      .pipe(catchError(this.processHTTPMsgService.handleError));

    // return this.http.get<any>(baseURL + 'chapters').pipe(map(chapters => chapters.map((chapter) => {
    //   if(chapter.id==id)
    //     return chapter;
    // })))
    //   .pipe(catchError(this.processHTTPMsgService.handleError));

      // return this.getDishes().pipe(map(dishes => dishes.map(dish => dish.id)))
      // .pipe(catchError(error => error)); 
  }


}
