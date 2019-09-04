import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'website';

  @ViewChild("nav", { static: true }) navElement: ElementRef;
  sticky = false;
  navPos;

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.navPos = this.navElement.nativeElement.offsetTop
  }

  @HostListener('window:scroll', [])
  handleScroll() {
    const windowScroll = window.pageYOffset;
    if (windowScroll >= this.navPos) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }
}
