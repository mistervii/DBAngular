import { Component } from '@angular/core';
import { AuthenticationService, User } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentUser: User;
  title = 'Jeeproject';
  constructor( private authenticationService: AuthenticationService){
    
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);

  }
}
