import {Component, OnInit} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {User} from "./user.model";
import {AuthService} from "./auth.service";
@Component({
  selector: "app-signup-screen",
  templateUrl: "signup-screen.component.html",
  styleUrls:["./auth.component.css"]
})

export class SignupScreenComponent implements OnInit{
  signForm: FormGroup;

  constructor(private authService: AuthService){}
  ngOnInit(){
    this.signForm= new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ]),
      password:  new FormControl(null,[
        Validators.required
      ]),
      name: new FormControl(null, [
        Validators.required
      ]),
      fullname: new FormControl(null, [
        Validators.required
      ])
    })
  }

  onSubmit(){
    if(this.signForm.valid){
      const {name, fullname, email, password} = this.signForm.value;
      const user= new User(email, password, name, fullname);
      console.log(user);
      this.authService.signup(user).subscribe(
          this.authService.login,
          err => console.log(err)
        );
    }

  }

}
