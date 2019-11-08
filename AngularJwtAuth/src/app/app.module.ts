import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateRdvComponent } from './Rdv/create-rdv/create-rdv.component';
import { RdvDetailsComponent } from './Rdv/rdv-details/rdv-details.component';
import { RdvListComponent } from './Rdv/rdv-list/rdv-list.component';
import { UpdateRdvComponent } from './Rdv/update-rdv/update-rdv.component';

import { CreateDossierComponent } from './Dossier/create-dossier/create-dossier.component';
import { DossierDetailsComponent } from './Dossier/dossier-details/dossier-details.component';
import { DossierListComponent } from './Dossier/dossier-list/dossier-list.component';
import { UpdateDossierComponent } from './Dossier/update-dossier/update-dossier.component';

import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';

import { httpInterceptorProviders } from './auth/auth-interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    HomeComponent,
    CreateDossierComponent,
    DossierDetailsComponent,
    DossierListComponent,
    UpdateDossierComponent,
    CreateRdvComponent,
    RdvDetailsComponent,
    RdvListComponent,
    UpdateRdvComponent,
    AdminComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
