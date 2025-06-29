import { Component } from "@angular/core";
import { LoginService } from "./login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TaskManager';

  constructor(public loginService: LoginService) {}

}
