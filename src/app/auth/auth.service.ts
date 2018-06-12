import {Injectable} from '@angular/core';
import urljoin from 'url-join';
import {environment} from "../../environments/environment"
import {User} from "./user.model";
import {Http,Headers, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Router} from "@angular/router";

@Injectable()
export class AuthService {
	userUrl: string;
	currentUser?:User;

	constructor(private http: Http, private router: Router) {
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

	login = ({token, userId, firstName, lastName, email}) => {
		this.currentUser = new User(email, null, firstName, lastName, userId);
		localStorage.setItem('token', token);
		localStorage.setItem('user', JSON.stringify({userId, firstName, lastName, email}));
		this.router.navigateByUrl('/');
	}

	isLoggedIn(){
		return localStorage.getItem('token') !== null;
	}

}