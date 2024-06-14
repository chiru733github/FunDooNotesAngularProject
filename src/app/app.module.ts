import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';

import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';

import { RegisterComponent } from './Components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AddNotesComponent } from './Components/add-notes/add-notes.component';
import { PresentedInDashboardComponent } from './Components/presented-in-dashboard/presented-in-dashboard.component';
import { DisplayNotesComponent } from './Components/display-notes/display-notes.component';
import { IconsComponent } from './Components/icons/icons.component';
import { UpdateNotesComponent } from './Components/update-notes/update-notes.component';
import { AuthguardService } from './Services/authguard/authguard.service';
import { ArchiveComponent } from './Components/archive/archive.component';
import { TrashComponent } from './Components/trash/trash.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResetPasswordComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    DashboardComponent,
    AddNotesComponent,
    PresentedInDashboardComponent,
    DisplayNotesComponent,
    IconsComponent,
    UpdateNotesComponent,
    ArchiveComponent,
    TrashComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatExpansionModule,
    FormsModule,ReactiveFormsModule,HttpClientModule,MatMenuModule,
    MatDialogModule
  ],
  providers: [
    provideClientHydration(),
    AuthguardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
