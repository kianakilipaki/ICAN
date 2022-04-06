import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { OrgLoginComponent } from './login/org-login/org-login.component';
import { UserLoginComponent } from './login/user-login/user-login.component';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './main/menu/menu.component';
import { HomeComponent } from './main/pages/home/home.component';
import { ProfileComponent } from './main/pages/profile/profile.component';
import { FormsComponent } from './main/pages/forms/forms.component';
import { LeadershipComponent } from './main/pages/leadership/leadership.component';
import { MessagesComponent } from './main/pages/messages/messages.component';
import { SettingsComponent } from './main/pages/settings/settings.component';
import { MembersComponent } from './main/pages/members/members.component';
import { ReportsComponent } from './main/pages/reports/reports.component';
import { NewFormComponent } from './main/pages/reports/new-form/new-form.component';
import { OpenFormComponent } from './main/pages/forms/open-form/open-form.component';
import { OpenReportComponent } from './main/pages/reports/open-report/open-report.component';
import { RoomListComponent } from './main/pages/messages/room-list.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage,getStorage } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    MainComponent,
    MenuComponent,
    HomeComponent,
    ProfileComponent,
    FormsComponent,
    LeadershipComponent,
    MessagesComponent,
    SettingsComponent,
    MembersComponent,
    ReportsComponent,
    OrgLoginComponent,
    UserLoginComponent,
    NewFormComponent,
    OpenFormComponent,
    OpenReportComponent,
    RoomListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideRemoteConfig(() => getRemoteConfig()),
    provideStorage(() => getStorage()),
  ],
  providers: [
    ScreenTrackingService,UserTrackingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
