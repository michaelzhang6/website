import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    /**
       * Scrolls to element id
       * 
       * id - element id
       */
    jumpTo(id: string) {
        document.getElementById(id).scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
}
