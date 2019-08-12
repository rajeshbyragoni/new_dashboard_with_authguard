import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import  {CommonService} from '../service/common.service';
@Component({
	selector: 'app-edit',
	templateUrl: './edit.component.html',
	styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

	id : any;
	editDataForm : FormGroup;

	constructor(private fb : FormBuilder, private router : Router, private route : ActivatedRoute, private _CommonService : CommonService) {
		this.editCreateForm();
	}

	ngOnInit() {
		this.route.queryParams.subscribe(params => {
			
			this.id = params['id'];
			this.getEditData(params['id']);

		});
	}

	getEditData(id){
		this._CommonService.getIdData(id).subscribe(

			result =>{
				this.editDataForm.get('name').setValue(result.employee.name);
				this.editDataForm.get('phone').setValue(result.employee.phone);
				this.editDataForm.get('email').setValue(result.employee.email);
				this.editDataForm.get('emp_id').setValue(result.employee.emp_id);
				this.editDataForm.get('company').setValue(result.employee.company);
				this.editDataForm.get('location').setValue(result.employee.location);
			}, error => {

				console.log(error.toString());
			});
	}


	editCreateForm(){
		this.editDataForm = this.fb.group({

			name :['', Validators.required],
			phone :['', Validators.required],
			email :['', Validators.required],
			emp_id :['', Validators.required],
			company :['', Validators.required],
			location :['', Validators.required],
			

		});

	}

		editClick(name, phone, email, emp_id, company, location){
		this._CommonService.updateListData(name, phone, email, emp_id, company, location, this.id).subscribe(
			result => {
				console.log(result.employee);
				if(result.status){
					this.router.navigate(['/crud']);
				}
				//console.log(result);

			}, error => {

				console.log(error.toString());
			}


			);
	}

}
