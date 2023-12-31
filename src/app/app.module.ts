import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {SecurityModule} from "./security/security.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ToastrModule} from "ngx-toastr";
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { CommonModule } from '@angular/common';
// @ts-ignore
import {NgxSpinnerModule} from "ngx-spinner";
import {EmployeeModule} from "./employee/employee.module";
// @ts-ignore
import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SecurityModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    NgxSpinnerModule,
    EmployeeModule,
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
