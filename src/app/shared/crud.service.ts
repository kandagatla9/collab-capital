import { Injectable } from '@angular/core';

import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from './student';
import { map } from 'rxjs/operators';

export class User {
 $key!: string;
  emp!: string;
  id!: string;
  ABOUTCOMPANY!: string;
  email!: string;
  phone!: number;
}

@Injectable({
  providedIn: 'root'
})

export class CrudService {
  studentsRef!: Observable<any>;
  // REST API
  endpoint = 'https://collabgenics-api.herokuapp.com/api/search';

  constructor(private httpClient: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  addUser(data: any): Observable<User> {
    return this.httpClient.post<User>(this.endpoint, {'search':'53'}, this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }  

  getUsers(): Observable<any> {
    return  this.studentsRef=this.httpClient.get<any>(this.endpoint)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }
  getSingleUser(id: any): Observable<User> {
    return this.httpClient.get<User>(this.endpoint +id)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }  



  updateUser(id: string, data: any): Observable<User> {
    return this.httpClient.put<User>(this.endpoint + '/users/' + id, JSON.stringify(data), this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  deleteUser(id: string){
    return this.httpClient.delete<User>(this.endpoint + '/users/' + id, this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  processError(err: { error: { message: string; }; status: any; message: any; }) {
     let message = '';
     if(err.error instanceof ErrorEvent) {
      message = err.error.message;
     } else {
      message = `Error Code: ${err.status}\nMessage: ${err.message}`;
     }
     console.log(message);
     return throwError(message);
  }
  
}