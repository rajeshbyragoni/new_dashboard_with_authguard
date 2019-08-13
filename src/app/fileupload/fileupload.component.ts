import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import  {CommonService} from '../service/common.service';
declare var $: any;
@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {

  fileData:FormGroup;
  fileToUpload: File = null;
  fileList: FileList;
  file: File;
  name :any;
  dataFile:any;
  imgData:any;
  listData:any;
  constructor(private fb : FormBuilder, private router : Router, private _CommonService : CommonService) { 
    this.createFileUpload();
  }

  ngOnInit() {
    this. listDataFile();

    //console.log('result');
  }


  fileChange(event) {
    this.fileList = event.target.files;
    if (this.fileList.length > 0) {
      this.file = this.fileList[0];
    }
    const file = event.target['files'][0];
    this.name = file;
  }

  createFileUpload(){
    this.fileData = this.fb.group({
      name:['', Validators.required],
    });
  }

  /*** uploaddata .... *****/

  uploadFile() {
    //console.log(this.file)
    this._CommonService.postFile(this.file).subscribe(
    	result => {
        this.ngOnInit();
      }, error => {
        console.log(error);
      });
  }


  /*** uploaddata list .... *****/
  listDataFile(){
    this._CommonService.getFile().subscribe(
      result =>{
        this.listData = result.data.files;
        //console.log(result);

      }, error => {
        console.log(error);
      });

  }
  /*** uploaddata list  end.... *****/

  deleteImg(id){
    $('#'+id).show();
    $('#j'+id).attr("disabled", 'disabled'); 
    this._CommonService.deleteFile(id).subscribe(
      result =>{
         $('#'+id).hide();
        //console.log(result);
        this.ngOnInit();

      }, error => {
        console.log(error);
      });
  }

}
