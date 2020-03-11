import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgoDetails } from './ngodata';
import { Observable } from 'rxjs';
   
@Injectable({
  providedIn: 'root'
})
export class NgodetailsService {

  private _url: string = '/assets/json/ngo.json';
  constructor(private http: HttpClient) { 
  }

  getngodetails(): Observable<NgoDetails[]>{
    return this.http.get<NgoDetails[]>(this._url);
  }
}
