import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { TeamService } from './team.service';

import { RouterModule, Routes } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { LeagueTableComponent } from './league-table/league-table.component';



@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    LeagueTableComponent,
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [TeamService],
  bootstrap: [AppComponent, LeagueTableComponent]
})

export class AppModule { }
