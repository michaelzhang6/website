import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { SpotifyTrendsComponent } from './webcontent/spotify-trends/spotify-trends.component';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { GraphicsComponent } from './webcontent/graphics/graphics.component';

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
        RiscvComponent,
        SpotifyTrendsComponent,
        GraphicsComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatSelectModule,
        MatFormFieldModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
