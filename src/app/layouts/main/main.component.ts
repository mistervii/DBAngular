import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  role:any;
  constructor() { }

  ngOnInit() {



  }

  isAdmin(){
    this.role= JSON.parse(localStorage.getItem("currentUserrole"));

    if(this.role.id==3){

      return true;
    }else{

      return false;
    }
  }

}
