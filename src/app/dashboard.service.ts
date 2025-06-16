import { Injectable } from '@angular/core';

@Injectable()

export class DashboardService {
  getTeamMembersSummary():any[] {
     var TeamMembersSummary = [
      {Region:"East", TeamMembersCount:20, TempUnavailableMembers:4},
      {Region:"West", TeamMembersCount:15, TempUnavailableMembers:8},
      {Region:"South", TeamMembersCount:17, TempUnavailableMembers:1},
      {Region:"North", TeamMembersCount:15, TempUnavailableMembers:6}
    ];

    return TeamMembersSummary;
  }
}
