import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

  constructor(
    private builder:FormBuilder ,
    private auth:AuthServiceService,
    private touter:Router
  ) { }


  // form inputs fileds
  registerForm=this.builder.group({
    id:this.builder.control('' , Validators.compose([Validators.required])),
    fname:this.builder.control('',Validators.required),
    email : this.builder.control('',Validators.compose([Validators.required , Validators.email])),
    password:this.builder.control('' , Validators.required),
    number:this.builder.control('',Validators.compose([Validators.required])),
    gender:this.builder.control('',Validators.required),
    adress:this.builder.control('' , Validators.required)
  })
  register(){
    if(this.registerForm.valid){
      this.auth.registerUser(this.registerForm.value).subscribe(res=>{
        this.touter.navigate(['/dashboard'])
      })
    }
    else{
     alert("Please enter valid data")
    }
  }
  ngOnInit(): void {
  }

}
