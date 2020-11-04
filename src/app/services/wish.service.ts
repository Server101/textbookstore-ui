
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Observable,of, from } from 'rxjs/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
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
