import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  user:any;
  username:any;
  constructor(private bs:Router){}

  logout(){
    localStorage.removeItem("loginuser")
    this.bs.navigateByUrl("/")
  }

  ngOnInit(){

    if(localStorage.getItem("loginuser")==null){
        this.bs.navigateByUrl("/")
    }
    else{
     this.user= localStorage.getItem("loginuser")
      this.user=JSON.parse(this.user);
        this.username=this.user.username;


    }


  }
}
