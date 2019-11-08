import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { RdvListComponent } from './Rdv/rdv-list/rdv-list.component';
import { CreateRdvComponent } from './Rdv/create-rdv/create-rdv.component';
import { UpdateRdvComponent } from './Rdv/update-rdv/update-rdv.component';
import { RdvDetailsComponent } from './Rdv/rdv-details/rdv-details.component';

import { DossierListComponent } from './Dossier/dossier-list/dossier-list.component';
import { CreateDossierComponent } from './Dossier/create-dossier/create-dossier.component';
import { UpdateDossierComponent } from './Dossier/update-dossier/update-dossier.component';
import { DossierDetailsComponent } from './Dossier/dossier-details/dossier-details.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
  { path: 'home/dossier', redirectTo: 'dossier', pathMatch: 'full' },
  { path: 'home/dossiers', component: DossierListComponent },
  { path: 'home/addDossier', component: CreateDossierComponent },
  { path: 'home/updateDossier/:id', component: UpdateDossierComponent },
  { path: 'home/detailsDossier/:id', component: DossierDetailsComponent },

  { path: 'home/rdv', redirectTo: 'rdv', pathMatch: 'full' },
  { path: 'home/rdvs', component: RdvListComponent },
  { path: 'home/addRdv', component: CreateRdvComponent },
  { path: 'home/updateRdv/:id', component: UpdateRdvComponent },
  { path: 'home/detailsRdv/:id', component: RdvDetailsComponent },
    {
        path: 'user',
        component: UserComponent
    },

    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'auth/login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: RegisterComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
