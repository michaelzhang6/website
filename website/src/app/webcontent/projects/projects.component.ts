import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  aiProject = false;
  websiteInfo = false;
  riscv = false;

  // one project can have lock
  lock = false;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Returns true if project can be opened, false otherwise. If project can be
   * can be opened, grabs lock.
   */
  openProject(project: number) {
    if (!this.lock) {
      this.lock = true;
      if (project == 0) {
        this.websiteInfo = true;
      }
      if (project == 1) {
        this.aiProject = true;
      }
      if (project == 2) {
        this.riscv = true;
      }
    }
  }
}
