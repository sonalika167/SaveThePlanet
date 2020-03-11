import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { factDetails } from './factdata';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FactdetailsService {

  private _url: string = '/assets/json/facts.json';
  constructor(private http: HttpClient) { 
  }

  getfactdetails(): Observable<factDetails[]>{
    return this.http.get<factDetails[]>(this._url);
  }

  hello(){
    console.log("hello");
  }
}
