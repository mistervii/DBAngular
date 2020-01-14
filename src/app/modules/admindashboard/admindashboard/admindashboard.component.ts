import { Component, OnInit, ViewChild, Type } from '@angular/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import {DashboardService} from '../../dashboard/dashboard.service';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs';
import { projet } from '../../dashboard/projet.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { tache } from '../../dashboard/tache.model';
import { ProjectDataSource, TacheDataSource } from '../../dashboard/dashboard.component';
import { Com } from '../../dashboard/com.model';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.scss']
})
export class AdmindashboardComponent implements OnInit {



 
  
  

  displayedColumns: string[] = ['id', 'nom', 'description', 'budget','action'];
  displayedColumnstache: string[] = ['id', 'nom', 'description', 'budget'];
  displayedColumnsCom: string[] = ['titre', 'message'];

  projets: any[]=[];
  validatingForm: FormGroup;


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  data: any[];
  selectedvalue:any=7;
  dataSource = new ProjectDataSource(this.dashboardService);
  dataSourceCom:any;
  dataTacheSource =new TacheDataSource(this.dashboardService,this.selectedvalue);

  constructor(private dashboardService : DashboardService,private authenticationService:AuthenticationService,private router:Router) { 
    
    if (!this.authenticationService.currentUserValue) { 
    this.router.navigate(['/login']);
      } 
}

ngOnInit(): void {
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

getNcom(){

this.dataSourceCom=new ComtDataSource(this.dashboardService,1);

}

getUcom(){

  this.dataSourceCom=new ComtDataSource(this.dashboardService,3);

}

getWcom(){

  this.dataSourceCom=new ComtDataSource(this.dashboardService,2);

}


}
export class ComtDataSource extends DataSource<any> {
  id:any;
  constructor(private dashboardService: DashboardService,id) {
    
    super();
    this.id=id;
  }
  connect(): Observable<Com[]> {
    
    return this.dashboardService.getCom(this.id);
    
  }
  disconnect() {}
}