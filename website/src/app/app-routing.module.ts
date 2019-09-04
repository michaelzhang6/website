import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './webcontent/home/home.component';
import { CoursesComponent } from './webcontent/courses/courses.component';
import { ProjectsComponent } from './webcontent/projects/projects.component';
import { ExperienceComponent } from './webcontent/experience/experience.component';
import { ContactComponent } from './webcontent/contact/contact.component';
import { BudapestComponent } from "./webcontent/budapest/budapest.component";
import { WebsiteinfoComponent } from './webcontent/websiteinfo/websiteinfo.component';
import { AiprojectComponent } from './webcontent/aiproject/aiproject.component';
import { RiscvComponent } from "./webcontent/riscv/riscv.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'courses',
    component: CoursesComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'experience',
    component: ExperienceComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'budapest',
    component: BudapestComponent
  },
  {
    path: 'websiteinfo',
    component: WebsiteinfoComponent
  },
  {
    path: 'ai',
    component: AiprojectComponent
  },
  {
    path: 'riscv',
    component: RiscvComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
