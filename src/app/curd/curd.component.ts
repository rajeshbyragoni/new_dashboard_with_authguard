import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import  {CommonService} from '../service/common.service';
declare var $: any;
@Component({
	selector: 'app-curd',
	templateUrl: './curd.component.html',
	styleUrls: ['./curd.component.css']
})
export class CurdComponent implements OnInit {

	fullData : any;
	


	constructor(private fb : FormBuilder, private router : Router, private _CommonService : CommonService) { }

	ngOnInit() {
		this.getFullData();
	}
	
	getFullData(){
		this._CommonService.getListData().subscribe(
			result =>{
				this.fullData = result.data.employees;
				//console.log(result.data.employees);
			}, error => {
				console.log(error.toString());
			});
	}


	// delete method start here ....

	deleteClick(id){

		$('#'+id).show();
		$('#k'+id).attr("disabled", 'disabled');
		this._CommonService.deleteData(id).subscribe(

			result => {
				$('#'+id).hide();
				this.ngOnInit();

			}, error => {

				console.log(error.toString());
			}

			);
	}


	// delete method end here ....

}
