import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoggedComponent } from './logged_area/logged/logged.component';
import { RegistrationFormComponent } from './logged_area/registration-form/registration-form.component';
import { RegistrationResultComponent } from './logged_area/registration-result/registration-result.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'logged', component: LoggedComponent },
  { path: 'registration', component: RegistrationFormComponent },
  { path: 'registered', component: RegistrationResultComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
