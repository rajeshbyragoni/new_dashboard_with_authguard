import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { CurdComponent } from './curd/curd.component';
import { AddemplyeComponent } from './addemplye/addemplye.component';
import  {AuthGuard} from './auth.guard';
import { EditComponent } from './edit/edit.component';
import { RegisterComponent } from './register/register.component';
import { FileuploadComponent } from './fileupload/fileupload.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    CurdComponent,
    AddemplyeComponent,
    EditComponent,
    RegisterComponent,
    FileuploadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
