import { ReportsComponent } from './dashboard/reports/reports.component';
import { Chart1Component } from './chart1/chart1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './person/home/home.component';
import { TeamComponent } from './components/team/team.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioGridComponent } from './components/portfolio-grid/portfolio-grid.component';
import { ServicesComponent } from './components/services/services.component';
import { MastheadComponent } from './components/masthead/masthead.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: 'person/home', pathMatch: 'full' },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MastheadComponent },
  { path: 'services', component: ServicesComponent,
    children: [
      { path: '', component: Chart1Component },

    ]
      
    },
  { path: 'portfolio', component: PortfolioGridComponent },
  { path: 'About', component: AboutComponent },
  { path: 'team', component: TeamComponent },
  {
    path: 'contact', component: ContactComponent,

  },
  { path: 'Login', component: LoginComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: '', component: HomeComponent }
    ]
  },
  {path: 'reports', component: ReportsComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
