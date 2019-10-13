import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

    constructor() { }

    projSelected = new Array();

    ngOnInit() {
    }

    /**
     * Opens a project and removes the previously selected one
     * 
     * project - number representing the project
     * 
     * mapping is:
     * 0 - raytheon
     * 1 - cis
     * 2 - atlantis
     * 3 - acsu
     * 4 - spikeball
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

}
