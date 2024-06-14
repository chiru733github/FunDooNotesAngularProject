import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../Services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit{
  hide:boolean=true;
  RegisterForm!: FormGroup
  constructor(private user: UserService, private formbuilder:FormBuilder){}
  ngOnInit(): void {
    this.RegisterForm = this.formbuilder.group({
      firstName:[''],
      lastName:[''],
      email:[''],
      password:[''],
      confirmPassword:['']
    })
  }

  OnRegister()
  {
    let data={
      firstName:this.RegisterForm.value.firstName,
      lastName:this.RegisterForm.value.lastName,
      email:this.RegisterForm.value.email,
      password: this.RegisterForm.value.password
    }
    if(data.password===this.RegisterForm.value.confirmPassword){
    this.user.register(data).subscribe((response:any)=>{
      console.log(response);
    })
    }
    else{
      alert('Password Mismatch');
    }
  }
}
