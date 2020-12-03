import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable,of, from } from 'rxjs/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

//Export the data from user wishlist and create a new table
export class WishdataService {
  private baseUrl = '/server/api/v1/wish';  
  
  constructor(private http:HttpClient) { }  
  
  getStudentList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'students-list');  
  }  
  
  createStudent(student: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'save-student', student);  
  }  
  
  deleteStudent(id: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}/delete-student/${id}`, { responseType: 'text' });  
  }  
  
  getStudent(id: number): Observable<Object> {  
    return this.http.get(`${this.baseUrl}/student/${id}`);  
  }  
  
  updateStudent(id: number, value: any): Observable<Object> {  
    return this.http.post(`${this.baseUrl}/update-student/${id}`, value);  
  }  
  
}



export class WishService {

  constructor(private http:HttpClient) { }

   //Function to get all the wishes from the databases
   getWishes() {
    return this.http.get('/server/api/v1/wish');
}

getWish(id: string) {
    return this.http.get('server/api/v1/wish' + id);
}

createWishRegistration(wish) {
    let body = JSON.stringify(wish);
    return this.http.post('/server/api/v1/wish', body, httpOptions);
}
}