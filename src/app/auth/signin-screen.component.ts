import {Component, OnInit} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {User} from "./user.model";
import {AuthService} from "./auth.service";

@Component({
  selector: "app-signin-screen",
  templateUrl: "./signin-screen.component.html",
  styleUrls:["./auth.component.css"],

})

export class SigninScreenComponent implements OnInit{
  signForm: FormGroup;

  constructor(private auth: AuthService)
  {

  }

 ngOnInit(){
    this.signForm= new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ]),
      password:  new FormControl(null,[
        Validators.required
      ])
    })
  }

  onSubmit(){
    if(this.signForm.valid){
      const {email, password} = this.signForm.value;
      const user= new User(email, password, null, null);
      this.auth.signin(user)
      .subscribe(
        this.auth.login,
        err =>   console.log(err)
       ); 

    }

  }

}
