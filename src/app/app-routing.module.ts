import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { FormsComponent } from './main/pages/forms/forms.component';
import { HomeComponent } from './main/pages/home/home.component';
import { LeadershipComponent } from './main/pages/leadership/leadership.component';
import { MembersComponent } from './main/pages/members/members.component';
import { MessagesComponent } from './main/pages/messages/messages.component';
import { ProfileComponent } from './main/pages/profile/profile.component';
import { SettingsComponent } from './main/pages/settings/settings.component';
import { ReportsComponent } from './main/pages/reports/reports.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'main',
    component: MainComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'forms', component: FormsComponent },
      { path: 'leadership', component: LeadershipComponent },
      { path: 'messages', component: MessagesComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'members', component: MembersComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'logout',   redirectTo: '/login', pathMatch: 'full' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
