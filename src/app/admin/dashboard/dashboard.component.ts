import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

export class DashboardComponent implements OnInit{
  
  constructor(private dashboardserivce : DashboardService){

  }

  Designation: string = "";
  Username: string = "";
  NoOfTeamMembers: number = 0;
  TotalCostOfAllProjects: number = 0;
  PendingTasks: number = 0;
  UpComingProjects: number = 0;
  ProjectCost: number = 0;
  
  CurrentExpenditure: number = 0;
  AvailableFunds: number = 0;

  Clients: string[] = [];
  Projects: string[] = [];
  Years: number[] = [];
  TeamMembersSummary: any = [];
  TeamMembers: any = [];

  ngOnInit(): void {
    this.Designation = "Team Lead";
    this.Username = "Veer Solanki";
    this.NoOfTeamMembers = 20;
    this.TotalCostOfAllProjects = 212;
    this.PendingTasks = 12;
    this.UpComingProjects = 3;
    this.ProjectCost = 1200000;
    this.CurrentExpenditure = 1100000;
    this.AvailableFunds = 1200000;

    this.Clients = [
      "Secure IT Info Tech.", "TCS Edge", "DLE Electronics"
    ];
    this.Projects = [
      "Project A", "Project B", "Project C", "Project D", "Project E"
    ];

    for(var i=2026;i>2020;i--)
    {
       this.Years.push(i);
    }

    this.TeamMembersSummary = this.dashboardserivce.getTeamMembersSummary();

    this.TeamMembers = [
      {
        Region: 'East',
        Members: [
          { ID: 1, Name: 'Ford', Status: 'Available' },
          { ID: 2, Name: 'Miller', Status: 'Available' },
          { ID: 3, Name: 'Jones', Status: 'Busy' },
          { ID: 4, Name: 'James', Status: 'Busy' },
        ],
      },
      {
        Region: 'West',
        Members: [
          { ID: 5, Name: 'Anna', Status: 'Available' },
          { ID: 6, Name: 'Arun', Status: 'Available' },
          { ID: 7, Name: 'Varun', Status: 'Busy' },
          { ID: 8, Name: 'Jasmine', Status: 'Busy' },
        ],
      },
      {
        Region: 'South',
        Members: [
          { ID: 9, Name: 'Krishna', Status: 'Available' },
          { ID: 10, Name: 'Mohan', Status: 'Available' },
          { ID: 11, Name: 'Raju', Status: 'Busy' },
          { ID: 12, Name: 'Farooq', Status: 'Busy' },
        ],
      },
      {
        Region: 'North',
        Members: [
          { ID: 13, Name: 'Jacob', Status: 'Available' },
          { ID: 14, Name: 'Smith', Status: 'Available' },
          { ID: 15, Name: 'Jones', Status: 'Busy' },
          { ID: 16, Name: 'James', Status: 'Busy' },
        ],
      },
    ];
  }

  onProjectChange($event:any){
    if ($event.target.innerHTML.trim() == 'Project A')
    {
      this.ProjectCost = 2113507;
      this.CurrentExpenditure = 96788;
      this.AvailableFunds = 52436;
    } else if ($event.target.innerHTML.trim() == 'Project B')
    {
      this.ProjectCost = 88923;
      this.CurrentExpenditure = 22450;
      this.AvailableFunds = 2640;
    } else if ($event.target.innerHTML.trim() == 'Project C')
    {
      this.ProjectCost = 662183;
      this.CurrentExpenditure = 7721;
      this.AvailableFunds = 9811;
    } else if ($event.target.innerHTML.trim() == 'Project D')
    {
      this.ProjectCost = 928431;
      this.CurrentExpenditure = 562;
      this.AvailableFunds = 883;
    }
  }

}
