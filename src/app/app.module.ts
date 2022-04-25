import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { BodyComponent } from './body/body.component';
import { FootComponent } from './foot/foot.component';
import { LandingSectionComponent } from './body/landing-section/landing-section.component';
import { WorkExperienceComponent } from './body/work-experience/work-experience.component';
import { InternshipExperienceComponent } from './body/internship-experience/internship-experience.component';
import { HomeComponent } from './body/home/home.component';
import { ProjectExperienceComponent } from './body/project-experience/project-experience.component';
import { AchievementsComponent } from './body/achievements/achievements.component';
import { CommunityComponent } from './body/community/community.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    BodyComponent,
    FootComponent,
    LandingSectionComponent,
    WorkExperienceComponent,
    InternshipExperienceComponent,
    HomeComponent,
    ProjectExperienceComponent,
    AchievementsComponent,
    CommunityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
