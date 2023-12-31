import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
      constructor(private bs:Router){}
      uname:any;
       pwd:any;
       user:any;

  logincheck(){
      if(this.uname==="admin" && this.pwd==="admin123"){
        this.bs.navigateByUrl("/admin/home")
        this.user={
          "username":this.uname,
          "password":this.pwd
        }
      localStorage.setItem("loginuser",JSON.stringify(this.user));
      }
      else 
      {
        if(this.uname!=null && this.pwd==="12345"){
            this.bs.navigateByUrl("/nav/home")
            this.user={
              "username":this.uname,
              "password":this.pwd
            }
          localStorage.setItem("loginuser",JSON.stringify(this.user));
        }
        else{
          alert("Username/password incorrect");
        }
      }


  }


}
