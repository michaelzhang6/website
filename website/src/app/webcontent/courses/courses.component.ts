import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

    budapest = false;
    moreCourses = false;
    constructor() { }

    ngOnInit() {
    }

    jumpTop() {
        document.getElementById('courses').scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
}
