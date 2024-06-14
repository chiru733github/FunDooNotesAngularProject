import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../Services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  LoginForm!: FormGroup

  constructor(private user: UserService, private formbuilder:FormBuilder){}
  ngOnInit(): void {
    this.LoginForm = this.formbuilder.group({
      email:[''],
      password:['']
    })
  }
  Onlogin()
  {
    let data={
      email:this.LoginForm.value.email,
      password: this.LoginForm.value.password
    }
    this.user.Login(data).subscribe((response:any)=>{
      console.log(response.message);
      localStorage.setItem("token",response.data);
    })
  }
}
