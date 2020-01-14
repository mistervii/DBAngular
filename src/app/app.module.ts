import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MainModule } from './layouts/main/main.module';
import {DataViewModule} from 'primeng/dataview';
import { MatTabsModule, MatListModule } from '@angular/material';
import { MainComponent } from './layouts/main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './layouts/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { MDBBootstrapModule } from 'angular-bootstrap-md';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MainModule,
    DataViewModule,
    MatTabsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgSelectModule,
    MDBBootstrapModule.forRoot(),
    MatListModule

    
  ],
  exports:[
    MatTabsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
