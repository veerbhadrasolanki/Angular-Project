import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientLocation } from './client-location';

@Injectable({
  providedIn: 'root'
})

export class ClientLocationsService {

  constructor(private httpclient: HttpClient) { }

  urlPrefix: string = "http://localhost:9090";

  getClientLocations(): Observable<ClientLocation[]>{
    return this.httpclient.get<ClientLocation[]>(this.urlPrefix+ "/api/clientlocations", {responseType: 'json'});
  }
}
