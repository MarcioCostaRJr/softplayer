import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
        MatButtonModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCardModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatSidenavModule,
        MatTableModule,
        MatToolbarModule } from '@angular/material';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonsComponent } from './persons/persons.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { DetailPersonComponent } from './detail-person/detail-person.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { HttpInterceptorService } from './login/http-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent,
    AddPersonComponent,
    EditPersonComponent,
    DetailPersonComponent,
    MenuComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
