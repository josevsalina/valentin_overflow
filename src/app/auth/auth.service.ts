import {Injectable} from '@angular/core';
import urljoin from 'url-join';
import {environment} from "../../environments/environment"
import {User} from "./user.model";
import {Http,Headers, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Router} from "@angular/router";
import {MatSnackBar} from '@angular/material';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable()
export class AuthService {
	userUrl: string;
	currentUser?:User;

	constructor(private http: Http, private router: Router, public snackBar: MatSnackBar) {
		this.userUrl = urljoin(environment.apiUrl, 'auth');
		if(this.isLoggedIn())
		{
			const {userId, firstName, lastName, email} = JSON.parse(localStorage.getItem('user'));
			this.currentUser = new User(email, null, firstName, lastName, userId);
		}		
	}

	signin(user:User){
		const body = JSON.stringify(user);
		const headers = new Headers({'Content-Type':'application/json'})
		return this.http.post(urljoin(this.userUrl, 'signin'), body, {headers}).map((response: Response) => {
			const json = response.json();
			this.login(json);
			return json;
		}).catch((err: Response) => {
			console.error(err);
			return Observable.throw(err.json);

		})
	}

	signup(user:User){
		const body = JSON.stringify(user);
		const headers = new Headers({'Content-Type':'application/json'})
		return this.http.post(urljoin(this.userUrl, 'signup'), body, {headers}).map((response: Response) => {
			const json = response.json();
			this.login(json);
			return json;
		}).catch((err: Response) => {
			console.error(err);
			return Observable.throw(err.json);

		})
	}

	login = ({message, token, userId, firstName, lastName, email}) => {
		console.log(message);
		this.currentUser = new User(email, null, firstName, lastName, userId);
		localStorage.setItem('token', token);
		localStorage.setItem('user', JSON.stringify({userId, firstName, lastName, email}));
		this.router.navigateByUrl('/');
	}

	isLoggedIn(){
		return localStorage.getItem('token') !== null;
	}

  logout(){
  	localStorage.clear();
  	this.currentUser = null;
  	this.router.navigateByUrl("/signin");
  }

  showError(message){
	this.snackBar.open(message, 'x', {duration:2500})
  }

  public handleError = (error: any) => {
	  const name = error.err.name;
	  const message = error.err.message

	  if(name == 'TokenExpiredError'){
		this.showError('Tu sesión ha expirado')
	  } else if( name == 'JsonWebTokenError')
	  {
		  this.showError('Ha habido un problema con tu sesion')
	  } else {
		  this.showError(message || 'Ha ocurrido un error, intentalo nuevamente')
	  }
	  this.logout()
  }

}