import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class User {
    id: number;
    date_naissance:string;
    email: string;
    nom: string;
    pass: string;
    prenom: string;
    sexe: string;
    tel:string;
    role_id:number;
    service_id:number;
}

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        
        return this.http.get<any>("http://localhost:9090/SpringRestCrud_war/employee/login/"+username+"/"+password).pipe(map(user => {

           

                if(user){
                    console.log("login");
                    console.log(user);
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
    
                
            
            }
            
          

        }));
    }


    userrole(id){

        return this.http.get<any>("http://localhost:9090/SpringRestCrud_war/employee/role/"+id).pipe(map(id => {
            
            localStorage.setItem('currentUserrole', JSON.stringify(id));
            console.log(id);
           

            }));
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        
    }
}