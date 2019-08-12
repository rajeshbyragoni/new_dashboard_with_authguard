import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import  {CommonService} from '../service/common.service';
declare var $: any;
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	loginData:FormGroup;
	constructor(private fb : FormBuilder, private router : Router, private _CommonService : CommonService) {
		this.createLoginForm();
	}

	ngOnInit() {

		if (localStorage.getItem('isLoggedIn') === 'true') {
			this.router.navigate(['/dashboard']);
		} else{
			this.router.navigate(['/']);
		}
		
	}

	createLoginForm(){
		this.loginData= this.fb.group({

			username : ['', Validators.required],
			password : ['', [Validators.required, Validators.minLength(6)]],

		});

	}

	loginClick(username, password){
		this._CommonService.getLoginData(username, password).subscribe(

			reslut => {
				if (reslut.status) {
					localStorage.setItem('isLoggedIn', 'true');
					localStorage.setItem('token', reslut.token);
					this.router.navigate(['/dashboard']);
				}
			},
			error => {
				console.log(error.toString());
			}
			);
	}

}
