import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from './project';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ProjectsService {

  constructor(private httpClient: HttpClient) { 

  }

  //GET API
  getAllProjects(): Observable<Project[]>
  {
    return this.httpClient.get<Project[]>("http://localhost:9090/api/Projects",{responseType:"json"})
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
    return this.httpClient.post<Project>("http://localhost:9090/api/Projects",newProject, {responseType:"json"});
  }

  //Update API
  updateProject(existingProject: Project): Observable<Project>{
    return this.httpClient.put<Project>("http://localhost:9090/api/Projects", existingProject, {responseType:"json"});
  }

  //Delete API
  deleteProject(projectID: number) : Observable<string>{
    return this.httpClient.delete<string>("http://localhost:9090/api/Projects?ProjectID="+projectID);
  }

  //Search API
  SearchProjects(searchBy: string,searchText: string) : Observable<Project[]>{
    return this.httpClient.get<Project[]>("http://localhost:9090/api/Projects/search/"+searchBy+"/"+searchText,{responseType:"json"});
  }

}