import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import  {CommonService} from '../service/common.service';
declare var $: any;
@Component({
  selector: 'app-addemplye',
  templateUrl: './addemplye.component.html',
  styleUrls: ['./addemplye.component.css']
})
export class AddemplyeComponent implements OnInit {

dataForm : FormGroup;

  constructor(private fb : FormBuilder, private router : Router, private _CommonService : CommonService) {
this.addCreateDataForm();

   }

  ngOnInit() {
  }

  	// post method start here ....

	addCreateDataForm(){
		this.dataForm = this.fb.group({
			name :['', Validators.required],
			phone :['', Validators.required],
			email :['', Validators.required],
			emp_id :['', Validators.required],
			company :['', Validators.required],
			location :['', Validators.required],
			

		});

	}
		dataClick(name, phone, email, emp_id, company, location){
		//console.log(111);
		this._CommonService.addListData(name, phone, email, emp_id, company, location).subscribe(
			result => {
				if (result.status) {
					this.router.navigate(['/crud']);

				}
				
			}, error => {

			});
	}

}
