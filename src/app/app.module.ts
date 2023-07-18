import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoggedComponent } from './logged_area/logged/logged.component';
import { RegistrationFormComponent } from './logged_area/registration-form/registration-form.component';
import { RegistrationResultComponent } from './logged_area/registration-result/registration-result.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoggedComponent,
    RegistrationFormComponent,
    RegistrationResultComponent,
    SidebarComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent],
})
export class AppModule {}
