import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { ResourcesComponent } from './resources/resources.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from './shared/user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AuthInterceptor } from './auth/auto.interceptor';
import { AdminComponent } from './admin/admin.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { CameraComponent } from './camera/camera.component';
import { ParticipantsComponent } from './participants/participants.component';
import { RoomsComponent } from './rooms/rooms.component';
import { SettingsComponent } from './settings/settings.component';
import { DeviceSelectComponent } from './settings/device-select.component';
import { VideochatComponent } from './videochat/videochat.component';

import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    LoginComponent,
    ResourcesComponent,
    UserComponent,
    RegistrationComponent,
    AdminComponent,
    ForbiddenComponent,
    CameraComponent,
    ParticipantsComponent,
    RoomsComponent,
    SettingsComponent,
    DeviceSelectComponent,
    VideochatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      progressBar: true
    })
  ],
  providers: [UserService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
