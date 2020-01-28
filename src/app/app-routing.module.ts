import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProgressBarModule } from './global/progress-bar/progress-bar.module';
import { HomeComponent } from './pages/home/home.component';
import { CreditComponent } from './pages/credit/credit.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';
import { SalaryComponent } from './pages/salary/salary.component';
import { WorkingTimeComponent } from './pages/working-time/working-time.component';
import { SummaryComponent } from './pages/summary/summary.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'  },
  { path: 'home', component: HomeComponent },
  { path: 'credit', component: CreditComponent },
  { path: 'userinfo', component: UserInfoComponent },
  { path: 'salary', component: SalaryComponent },
  { path: 'working-time', component: WorkingTimeComponent },
  { path: 'summary', component: SummaryComponent }
];

@NgModule({
  declarations: [HomeComponent, CreditComponent, UserInfoComponent, SalaryComponent, WorkingTimeComponent, SummaryComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    ProgressBarModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
