import { HeaderComponent } from './header/header.component';
import { AuthGuard } from './_guards/auth.guard';
import { AuthenticationService } from './_services/authentication.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApplicationComponent } from './application/application.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { UserService } from './_services';
import { ApplicationListComponent } from './application-list/application-list.component';
import { ApplicationNewComponent } from './application-new/application-new.component';
import { ApplicationEditComponent } from './application-edit/application-edit.component';
import { RouterModule } from '@angular/router';
import { ApplicationService } from './_services/application.service';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { UserListComponent } from './user-list/user-list.component';
import { AdminAppListComponent } from './admin-app-list/admin-app-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ApplicationComponent,
    ApplicationListComponent,
    ApplicationNewComponent,
    HeaderComponent,
    ApplicationEditComponent,
    AdminDashboardComponent,
    AdminViewComponent,
    UserListComponent,
    AdminAppListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [UserService, AuthenticationService, AuthGuard, ApplicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
