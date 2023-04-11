import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private service: MainService, private route:Router) { }

  ngOnInit(): void {
  }

  userId:any = ''
  password:any = ''

  userIdError:any = ''
  passwordError:any = ''
  errormsg:any = ''

  onInputChange(){
    this.userIdError = ''
    this.passwordError = ''
    this.errormsg = ''
  }


  login(){

    if(!this.userId || this.userId.trim() == ''){
      this.userIdError = "Please enter userId here"
    } else if (!this.password){
      this.passwordError = "Please enter password here"
    } else {

      this.service.login({userId:this.userId,password:this.password}).subscribe(data=>{
        console.log(data)

        if(!data.errorCode){
          this.route.navigate(['/employeeList'])
        } else {
          this.errormsg = data.errorMessage
        }

      })

    }

  }

}
