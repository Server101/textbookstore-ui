
import {Injectable} from '@angular/core';
//import {HttpClientModule, HttpClientModule, HttpHeaders} from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Observable,of, from } from 'rxjs/';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable()
export class BikeService {

    constructor(private http:HttpClient) { }

    //Function to get all the wishes from the databases
    getBikes() {
        return this.http.get('/server/api/v1/bikes');
    }

    getBike(id: number) {
        return this.http.get('server/api/v1/bikes' + id);
    }

    createBikeRegistration(bike) {
        let body = JSON.stringify(bike);
        return this.http.post('/server/api/v1/bikes', body, httpOptions);
    }
}