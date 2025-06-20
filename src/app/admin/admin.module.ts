import { NgModule } from '@angular/core';
import { DashboardComponent } from '../admin/dashboard/dashboard.component';
import { AboutComponent } from '../admin/about/about.component';
import { MyProfileComponent } from '../admin/my-profile/my-profile.component';
import { CommonModule } from '@angular/common';
import { DashboardService } from '../dashboard.service';
import { ProjectsComponent } from '../admin/projects/projects.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AboutComponent,
    MyProfileComponent,
    ProjectsComponent
  ],
  imports: [    
    CommonModule
  ],
  exports:[
    DashboardComponent,
    AboutComponent,
    MyProfileComponent,
    ProjectsComponent
  ],
  providers:[
    DashboardService
  ]
})

export class AdminModule { 

}
