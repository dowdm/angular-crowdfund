import { Component } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProjectService, AuthenticationService]
})
export class AdminComponent {
  user;
  private isLoggedIn: Boolean;
  private userName: String;

  constructor(private projectService: ProjectService, public authService: AuthenticationService, private router: Router) {
   this.authService.user.subscribe(user =>  {
     if (user == null) {
        this.isLoggedIn = false;
        this.router.navigate(['']);
      } else {
        this.isLoggedIn = true;
      }
   });
 }
}
