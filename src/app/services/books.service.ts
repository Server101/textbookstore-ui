import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';


import {Observable,of, from } from 'rxjs/';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http:HttpClient) { }
//Functions for book s
 

   //Function to get all the wishes from the databases
   getBooks() {
    return this.http.get('/server/api/v1/book');
}

getBook(id: string) {
    return this.http.get('server/api/v1/book' + id);
}

//To retrieve the books for list
getBookname(book_name: string) {
  return this.http.get('server/api/v1/book' + book_name);

  
}

createBookRegistration(book) {
    let body = JSON.stringify(book);
    return this.http.post('/server/api/v1/book', body, httpOptions);
}
}


