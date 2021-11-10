import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms'
import { FormComponent } from './form/form.component';
import { SingInComponent } from './sing-in/sing-in.component';
import { HttpclientComponent } from './httpclient/httpclient.component';
import { FetchComponent } from './fetch/fetch.component';
import { UsersService } from './users.service';
import { CustomService } from './services/custom.service';
import { HooksComponent } from './hooks/hooks.component';
import { ChildhooksComponent } from './hooks/childhooks/childhooks.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    SingInComponent,
    HttpclientComponent,
    FetchComponent,
    HooksComponent,
    ChildhooksComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
 
  ],
  providers: [UsersService,CustomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
