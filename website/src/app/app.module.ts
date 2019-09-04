import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './webcontent/home/home.component';
import { CoursesComponent } from './webcontent/courses/courses.component';
import { ProjectsComponent } from './webcontent/projects/projects.component';
import { ExperienceComponent } from './webcontent/experience/experience.component';
import { ContactComponent } from './webcontent/contact/contact.component';
import { BudapestComponent } from './webcontent/budapest/budapest.component';
import { WebsiteinfoComponent } from './webcontent/websiteinfo/websiteinfo.component';
import { AiprojectComponent } from './webcontent/aiproject/aiproject.component';
import { RiscvComponent } from './webcontent/riscv/riscv.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    ProjectsComponent,
    ExperienceComponent,
    ContactComponent,
    BudapestComponent,
    WebsiteinfoComponent,
    AiprojectComponent,
    RiscvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
