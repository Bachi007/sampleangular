import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private bs:Router){}

  logout(){
    localStorage.removeItem("loginuser")
    this.bs.navigateByUrl("/")
  }

  ngOnInit(){

    if(localStorage.getItem("loginuser")==null){
        this.bs.navigateByUrl("/")
    }

  }


}
