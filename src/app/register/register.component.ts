import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import  {CommonService} from '../service/common.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 registerData:FormGroup;

	constructor(private fb : FormBuilder, private router : Router, private _CommonService : CommonService) {
		

		this.createRegisterForm();

	}

	ngOnInit() {
	}

	createRegisterForm(){
		this.registerData = this.fb.group({
			name:['', Validators.required],
			username : ['', Validators.required],
			password : ['', [Validators.required, Validators.minLength(6)]],

		});
	}

	registerClick(name, username, password){
		this._CommonService.getRegisterData(name, username, password).subscribe(

			result=>{
				//console.log(result);
			}, error=>{
				console.log(error.toString());
			}
			)
	}

}
