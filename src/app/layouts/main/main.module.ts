import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatSidenavModule, MatDividerModule, MatTabsModule, MatSelectModule, MatPaginatorModule, MatDatepickerModule, MatNativeDateModule, MatInputModule, MatListModule} from '@angular/material'
import {CardModule} from 'primeng/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material';
import { DashboardService } from 'src/app/modules/dashboard/dashboard.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ReactiveFormsModule } from '@angular/forms';
import { FileSelectDirective } from 'ng2-file-upload';
import { FileService } from 'src/app/modules/dashboard/file.service';
import { AdmindashboardComponent } from 'src/app/modules/admindashboard/admindashboard/admindashboard.component';

  
@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent,
    AdmindashboardComponent,
    PostsComponent,
    FileSelectDirective 
  
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    CardModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    NgSelectModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    MatDatepickerModule,       
    MatNativeDateModule,
    MatInputModule ,
    MatListModule
     
   

    

  ],
  providers: [
    DashboardService,
    FileService
  ]
})
export class MainModule { }
