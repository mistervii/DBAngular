import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { projet } from './projet.model';
import { User } from 'src/app/services/authentication.service';
import { tache } from './tache.model';
import { Com } from './com.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  user:User;
  data:any[]=[];
  data2:any[]=[];
  select:Observable<projet[]>;
  tache:Observable<tache[]>;
  id_service:any;
  prj:Observable<projet[]>;
  constructor(private http: HttpClient) {

   }

   getSelectProjects(): Observable<projet[]> {
    
   
      return this.http.get<projet[]>("http://localhost:9090/SpringRestCrud_war/service/projets/3")
 
   
 }

    getProjects(): Observable<projet[]> {
       this.user= JSON.parse(localStorage.getItem("currentUser"));
       
        this.http.get<any>("http://localhost:9090/SpringRestCrud_war/employee/service/"+this.user.id).subscribe(res => {
          this.data = res;
          console.log(this.data["id"]);
          this.prj=this.http.get<projet[]>("http://localhost:9090/SpringRestCrud_war/service/projets/"+this.data["id"]);
         });
       
      return this.prj
    }
      
    getCom(id): Observable<Com[]>{

      return this.http.get<Com[]>("http://localhost:9090/SpringRestCrud_war/commentaire/list/priorite/"+id);

    }
    getTache(selectedproject):Observable<tache[]>{

        return this.http.get<tache[]>("http://localhost:9090/SpringRestCrud_war/projet/taches/"+selectedproject);
      

    }
  
}
