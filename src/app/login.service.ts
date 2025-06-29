import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginViewModel } from './login-view-model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})


export class LoginService {

  private httpClient: HttpClient | null = null;

  constructor(private httpBackend: HttpBackend, private jwtHelperService: JwtHelperService)
  {
  }

  urlPrefix: string = "http://localhost:9090";
  currentUserName: any = null;

  public Login(loginViewModel: LoginViewModel): Observable<any>{
    this.httpClient = new HttpClient(this.httpBackend); // To not use interceptor here.
    return this.httpClient.post<any>(this.urlPrefix+ "/authenticate", loginViewModel, {responseType: "json", observe: "response"})
    .pipe(map(response => {
      console.log(response);
      if(response){
        this.currentUserName = response.body.userName;
        sessionStorage['currentUser'] = JSON.stringify(response.body);
        sessionStorage['XSRFRequestToken'] = response.headers.get("XSRF-REQUEST-TOKEN");
      }
      return response.body;
    }))
  }

  public Logout(){
    sessionStorage.removeItem("currentUser");
    this.currentUserName = null;
  }

  public isAuthenticated(): boolean
  {
    var token = sessionStorage.getItem("currentUser") ? JSON.parse(sessionStorage.getItem("currentUser") as any).token : null;
    if (this.jwtHelperService.isTokenExpired())
    {
      return false; //token is not valid
    }
    else
    {
      return true; //token is valid
    }
  }
}
