import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from "@angular/router";
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { SignupComponent } from './signup/signup.component';

const appRoutes: Routes = [
  {path: '', component: StartComponent},
  {path: 'second', component: ButtonsComponent},
  {path: 'third', component: SignupComponent},
  {path: 'contact', redirectTo: '/ ', pathMatch: 'full'},
  {path: '**', redirectTo: '/'}
];
@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    ButtonsComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
