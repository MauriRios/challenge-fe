import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule, routing } from 'src/app/app-routing.module';
import { BalanceComponent } from './components/balance/balance.component';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './components/cards/cards.component';
import { ChartsGraphComponent } from './components/charts-graph/charts-graph.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { TableComponent } from './components/table/table.component';
import { LoginComponent } from './auth/login/login.component';


@NgModule({
  declarations: [
    UsersComponent,
    HomeComponent,
    SidemenuComponent,
    CardsComponent,
    ChartsGraphComponent,
    NavbarComponent,
    TableComponent,
    BalanceComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    routing,
  ]
})
export class UsersModule { }
