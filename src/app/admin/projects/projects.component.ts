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
  
  projects: Project[] = [];
  newProjects: Project = new Project();
  editProject: Project = new Project();
  editIndex: any = null;
  deleteProject: Project = new Project();
  deleteIndex : any = null;
  searchBy: string = "Project Name";
  searchText: string = "";

  constructor(private projectService: ProjectsService){

  }

  ngOnInit(): void {
    this.projectService.getAllProjects().subscribe(
      (response: Project[])=>{
        this.projects = response;
      }
    );
  }

  onSaveClick(){
    this.projectService.insertProject(this.newProjects).subscribe(
      (response)=>{
        //Add project to GRID
        var p: Project = new Project();
        p.projectID = response.projectID;
        p.projectName = response.projectName;
        p.dateOfStart = response.dateOfStart;
        p.teamSize = response.teamSize;
        this.projects.push(p);

        //Clear New Project  Dailog - TextBoxes
        this.newProjects.projectID = null;
        this.newProjects.projectName = null;
        this.newProjects.dateOfStart = null;
        this.newProjects.teamSize = null;
    },(error)=>{
      console.log(error.message);
    }
  );}


  onEditClick(event: any, index:number){
    this.editProject.projectID = this.projects[index].projectID;
    this.editProject.projectName = this.projects[index].projectName;
    this.editProject.dateOfStart = this.projects[index].dateOfStart;
    this.editProject.teamSize = this.projects[index].teamSize;
    this.editIndex = index;
  }

  onUpdateClick(){
    this.projectService.updateProject(this.editProject).subscribe((response: Project)=>{
       var p: Project = new Project();
        p.projectID = response.projectID;
        p.projectName = response.projectName;
        p.dateOfStart = response.dateOfStart;
        p.teamSize = response.teamSize;
        this.projects[this.editIndex] = p;

         //Clear New Project  Dailog - TextBoxes
        this.newProjects.projectID = null;
        this.newProjects.projectName = null;
        this.newProjects.dateOfStart = null;
        this.newProjects.teamSize = null;
        this.editIndex = null;
    },
    (error)=>{
      console.log(error);
    });
  }

  onDeleteClick(event: any, index:number){
    this.deleteIndex = index;
    this.deleteProject.projectID = this.projects[index].projectID;
    this.deleteProject.projectName = this.projects[index].projectName;
    this.deleteProject.dateOfStart = this.projects[index].dateOfStart;
    this.deleteProject.teamSize = this.projects[index].teamSize;
  }

  onDeleteConfirmClick(){
    this.projectService.deleteProject(this.deleteProject.projectID).subscribe((response)=>{
      this.projects.splice(this.deleteIndex,1);
      this.deleteProject.projectID = null;
      this.deleteIndex.projectName = null;
      this.deleteIndex.dateOfStart = null;
      this.deleteIndex.teamSize = null;
    },(error)=>{
      console.log(error);
    });
  }

  onSearchClick(){
    this.projectService.SearchProjects(this.searchBy,this.searchText).subscribe(
      (response: Project[])=>{
        this.projects = response;
      },
      (error)=>{
        console.log(error);
      });
  }

}
