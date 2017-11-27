import {Component, OnInit} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {User} from "./user.model";

@Component({
  selector: "app-signin-screen",
  templateUrl: "./signin-screen.component.html",
  styleUrls:["./auth.component.css"]

})

export class SigninScreenComponent implements OnInit{
  signForm: FormGroup;

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
      console.log(user);

    }

  }

}
