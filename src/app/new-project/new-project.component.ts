import { Component } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css'],
  providers: [ProjectService]
})
export class NewProjectComponent {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  submitForm(type: string, title: string,  description: string, starter: string,   goal: number) {
  var newProject: Project = new Project(type, title, description, starter,   goal);
  this.projectService.addProject(newProject);
  }
}
