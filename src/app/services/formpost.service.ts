import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";
import { map, catchError } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { baseURL } from "../shared/baseurl";
import { ProcessHTTPMsgService } from "./process-httpmsg.service";
import { Register } from "../shared/register";

@Injectable({
  providedIn: "root",
})
export class FormpostService {
  constructor(
    private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService
  ) {}
  sendPhoneNo(phno: String) {
    const obj = {
      to: phno,
    };
    console.log(obj);
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
    return this.http.post<any>(
      "https://education4all.herokuapp.com/sendSMS",
      obj,
      httpOptions
    );
  }
  verifyOTP(obj = {}): Observable<any> {
    console.log(obj, "hdsgh");
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
    return this.http.post<any>(
      "https://education4all.herokuapp.com/otpVerify",
      obj,
      httpOptions
    );
  }
  postForm(data: Register): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
    const obj = {
      name: data.firstname + " " + data.lastname,
      userName: data.username,
      password: data.password,
      phone: data.phno,
      class: data.grade,
      board: data.board,
      email: data.email,
      state: data.state,
      city: data.city,
    };
    console.log(obj);
    return this.http.post<any>(
      "https://education4all.herokuapp.com/register",
      obj,
      httpOptions
    );
  }
  login(data): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
    console.log(data);
    return this.http.post<any>(
      "https://education4all.herokuapp.com/login",
      data,
      httpOptions
    ).pipe(catchError(this.processHTTPMsgService.handleError));
  }

  show(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        authorization: "Bearer " + localStorage.token,
      }),
    };
    return this.http.get<any>(
      "https://education4all.herokuapp.com/showUser",
      httpOptions
    );
  }

  sendImage(img: File): Observable<any> {
    const obj = {
      file: img
    }
    console.log(img)
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "multipart/form-data",
        "authorization": "Bearer " + localStorage.token,
        'Accept': 'application/json'
      }),
    };
    return this.http.post<any>(
      "https://education-files.herokuapp.com/upload", obj,
      httpOptions
    );
  }

  getAns(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "authorization": "Bearer " + localStorage.token,
      }),
    };
    return this.http.get<any>(
      "https://education-files.herokuapp.com/allTests", httpOptions
    );
  }
  // getImage(): Observable<any>{
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type':  'application/json',
  //       'authorization': 'Bearer ' + localStorage.token
  //     })
  //   };
  //   return this.http.get<any>("https://education-files.herokuapp.com/image", httpOptions);
  // }
}
