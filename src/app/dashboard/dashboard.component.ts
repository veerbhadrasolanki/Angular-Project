import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

export class DashboardComponent implements OnInit{
  
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
  }
}
