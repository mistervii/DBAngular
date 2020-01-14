import { Component, OnInit, ViewChild, Type } from '@angular/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import {DashboardService} from './dashboard.service';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs';
import { projet } from './projet.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { tache } from './tache.model';
import { FileSelectDirective, FileUploader} from 'ng2-file-upload';
import { FileService } from './file.service';
import {saveAs} from 'file-saver';

export interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {



    

  displayedColumns: string[] = ['id', 'nom', 'description', 'budget'];

  projets: any[]=[];
  validatingForm: FormGroup;


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  data: any[];
  selectedvalue:any=7;
  dataSource = new ProjectDataSource(this.dashboardService);
  dataTacheSource =new TacheDataSource(this.dashboardService,this.selectedvalue);

  constructor(private dashboardService : DashboardService,private authenticationService:AuthenticationService,private router:Router) { 
    
    if (!this.authenticationService.currentUserValue) { 
    this.router.navigate(['/login']);
      } 

    


}

  ngOnInit() {
    
    
    this.dashboardService.getSelectProjects().subscribe(res => {

      this.projets = res;
 
    });
    this.validatingForm = new FormGroup({
      contactFormModalName: new FormControl('', Validators.required),
      contactFormModalEmail: new FormControl('', Validators.email),
      contactFormModalSubject: new FormControl('', Validators.required),
      contactFormModalMessage: new FormControl('', Validators.required),
      
    });
  
  }
  

  get contactFormModalName() {
    return this.validatingForm.get('contactFormModalName');
  }

  get contactFormModalEmail() {
    return this.validatingForm.get('contactFormModalEmail');
  }

  get contactFormModalSubject() {
    return this.validatingForm.get('contactFormModalSubject');
  }

  get contactFormModalMessage() {
    return this.validatingForm.get('contactFormModalMessage');
  }
  selectProject(selectedvalue){

    this.dataTacheSource =new TacheDataSource(this.dashboardService,selectedvalue);
    console.log(selectedvalue);
  }

}
export class TacheDataSource extends DataSource<any> {
  selectedvalue:any;
  constructor(private dashboardService: DashboardService,selectedvalue:any) {

   
    super();
    this.selectedvalue=selectedvalue;
    
  }
  connect(): Observable<tache[]> {
    
    return this.dashboardService.getTache(this.selectedvalue);
    
  }
  disconnect() {}
}

export class ProjectDataSource extends DataSource<any> {
  constructor(private dashboardService: DashboardService) {
    
    super();
    
  }
  connect(): Observable<projet[]> {
    
    return this.dashboardService.getProjects();
    
  }
  disconnect() {}
}
