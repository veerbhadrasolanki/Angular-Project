import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../projects.service';
import { Project } from '../../project';

@Component({
  selector: 'projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})

export class ProjectsComponent implements OnInit{
  
  projects!: Project[];

  constructor(private projectService: ProjectsService){

  }

  ngOnInit(): void {
    this.projectService.getAllProjects().subscribe(
      (response: Project[])=>{
        this.projects = response;
      }
    );
  }
}
