import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from './project';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ProjectsService {

  constructor(private httpClient: HttpClient) { 
  }

  urlPrefix: string = "http://localhost:9090"; //make this as empty ("") if you are using asp.net core [without CORS]

  //GET API
  getAllProjects(): Observable<Project[]>
  {
    /* Add using Middle Interceptor */

    //var currentUser = { token : "" };
    //var headers = new HttpHeaders();
    //headers = headers.set("Authorization","Bearer");
    ///if(sessionStorage['currentUser'] != null){
    //  currentUser = JSON.parse(sessionStorage['currentUser']);
    //  headers = headers.set("Authorization", "Bearer " + currentUser.token);
    //}

    return this.httpClient.get<Project[]>(this.urlPrefix + "/api/Projects",{ responseType:"json"})
    .pipe(map(
      (data: Project[]) => {
        for(var i=0; i<data.length; i++){
          data[i].teamSize = data[i].teamSize*100;
        }
        return data;
      }
    ))
  }

  //Insert API
  insertProject(newProject: Project): Observable<Project>{
    var requestHeaders = new HttpHeaders();
    requestHeaders = requestHeaders.set("X-XSRF-TOKEN", sessionStorage['XSRFRequestToken']);
    return this.httpClient.post<Project>(this.urlPrefix + "/api/Projects",newProject, {headers: requestHeaders, responseType:"json"});
  }

  //Update API
  updateProject(existingProject: Project): Observable<Project>{
    return this.httpClient.put<Project>(this.urlPrefix + "/api/Projects", existingProject, {responseType:"json"});
  }

  //Delete API
  deleteProject(projectID: number) : Observable<string>{
    return this.httpClient.delete<string>(this.urlPrefix + "/api/Projects?ProjectID="+projectID);
  }

  //Search API
  SearchProjects(searchBy: string,searchText: string) : Observable<Project[]>{
    return this.httpClient.get<Project[]>(this.urlPrefix + "/api/Projects/search/"+searchBy+"/"+searchText,{responseType:"json"});
  }

}