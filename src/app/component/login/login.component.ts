import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userdata:any;
  constructor(private builder:FormBuilder , private router:Router , private auth:AuthServiceService) { }
// form inputs fileds
loginForm=this.builder.group({
  username:this.builder.control('' , Validators.compose([Validators.required])),
  password:this.builder.control('',Validators.required),
})
login(){
 if(this.loginForm.valid){
  this.auth.GetByCode(this.loginForm.value.username).subscribe(res =>{
    this.userdata =res;
    console.log(this.userdata)
    if(this.userdata.password === this.loginForm.value.password){
      this.router.navigate(['/dashboard']);
      localStorage.setItem('auth' , JSON.stringify(res));
      this.auth.loginUser=localStorage.getItem('auth');
    }
    else{
      alert("you have not a account ,register new account")
    }
  })
 }
 else{
  alert("Enter valid Data")
 }
 
}
  ngOnInit(): void {
  }

}
