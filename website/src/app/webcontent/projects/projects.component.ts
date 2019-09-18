import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

    // queue for project selection (only one at any given time)
    projSelected = new Array();

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.fragment.subscribe((fragment: string) => {
            if (fragment == null) {
                return;
            } else {
                if (fragment.includes("error") || fragment.includes("access")) {
                    this.openProject(3);
                }
            }
        })
    }

    /**
     * Opens a project and removes the previously selected one
     * 
     * project - number representing the project
     * 
     * mapping is:
     * 0 - website
     * 1 - ai
     * 2 - riscv
     * 3 - spotifyTrends
     */
    openProject(project: number) {
        // unselected
        if (this.projSelected.length == 0) {
            this.projSelected.push(project)
        } else {
            // non empty 
            // click on same one
            if (this.projSelected[0] == project) {
                this.projSelected.pop();
            } else {
                // click on new one
                this.projSelected.pop();
                this.projSelected.push(project);
            }
        }

    }

    jumpTop() {
        document.getElementById('projects').scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
}
