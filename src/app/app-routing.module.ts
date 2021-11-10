import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FetchComponent } from './fetch/fetch.component';
import { FormComponent } from './form/form.component';
import { HttpclientComponent } from './httpclient/httpclient.component';
import { SingInComponent } from './sing-in/sing-in.component';
import { HooksComponent } from './hooks/hooks.component';

const routes: Routes = [
  {
    path: 'form ',
    component: FormComponent
  },
  {
    path: 'hooks ',
    component: HooksComponent
  },

  {
    path: 'signIn ',
    component: SingInComponent
  },

  {
    path: 'httpclient',
    component: HttpclientComponent
  },
  {
    path: ' fetch ',
    component: FetchComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
