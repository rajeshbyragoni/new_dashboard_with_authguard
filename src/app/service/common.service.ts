import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders,  HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class CommonService {

	constructor(private http : HttpClient, private route: ActivatedRoute, private router: Router) { }



	// login page start here ...

	getLoginData(email, password):Observable<any>{
		const url = 'https://gowtham-rest-api-crud.herokuapp.com/login';
		const data = new FormData();
		data.append('email', email);
		data.append('password', password);
		return this.http.post<any>(url, data)
		.pipe(map((Response : Response) => {
			console.log(Response);
			return Response;
		}), catchError((error: Response) => {

			return throwError(error.status);

		}))
	}


		// register page start here ...

	
	getRegisterData(name, email, password):Observable<any> {
     
     const url ='https://gowtham-rest-api-crud.herokuapp.com/register';
     const token = localStorage.getItem('token');
     const data= new FormData();
     data.append('name', name);
     data.append('email', email);
     data.append('password', password);
     return this.http.post<any>(url, data)
     .pipe(map((Response:Response)=>{
          return Response;
     }), catchError((error:Response)=>{
           return throwError(error.status); 
     }));
	
	}


	// register page end here ....
	


	// get method start here ....

	getListData():Observable<any> {
		const url = 'https://gowtham-rest-api-crud.herokuapp.com/employees';
		const token = localStorage.getItem('token');
		const data = new FormData();
		const params = new HttpParams().set('token', token);

		return this.http.get<any>(url, {params})
		.pipe(map((Response : Response)=>{
			return Response;

		}), catchError((error: Response)=>{
			return throwError(error.status);
		}))

	}


	// post method start here ....

	addListData( name, phone, email, emp_id, company, location):Observable<any> {
		const token = localStorage.getItem('token')
		const url ='https://gowtham-rest-api-crud.herokuapp.com/employees';
		const params = new HttpParams().set('token', token);
		const data = new FormData();
		data.append('name', name);
		data.append('phone', phone);
		data.append('email', email);
		data.append('emp_id', emp_id);
		data.append('company', company);
		data.append('location', location);

		return this.http.post<any>(url, data, {params})
		.pipe(map((Response : Response) => {
			return Response;

		}), catchError((error: Response) => {

			return throwError(error.status);

		}));
	}

	// post method end here ....


	// update method start here ....


	/// get id/////

	getIdData(id):Observable<any> {
		const token = localStorage.getItem('token')
		const url ='https://gowtham-rest-api-crud.herokuapp.com/employees/' + id;
		const params = new HttpParams().set('token', token);
		return this.http.get<any>(url,  {params})
		.pipe(map((Response : Response) => {
			return Response;

		}), catchError((error: Response) => {

			return throwError(error.status);

		}));
	}


	/// get id/////

	///post data...

	updateListData(name, phone, email, emp_id, company, location, id):Observable<any> {

		const url ='https://gowtham-rest-api-crud.herokuapp.com/employees/' + id;
		const token = localStorage.getItem('token');
		const params = new HttpParams().set('token', token);
		const data = ({ name, phone, email, emp_id, company, location, id:id, token:token });
		const headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.put<any>(url, data)
		.pipe(map((Response : Response) => {
			return Response;

		}), catchError((error: Response) => {

			return throwError(error.status);

		}));
	}

	///post data...



	// delete method start here ....

	deleteData(id):Observable<any> {

		const url ='https://gowtham-rest-api-crud.herokuapp.com/employees/' + id;
		const token = localStorage.getItem('token');
		const params = new HttpParams().set('token', token);
		return this.http.delete<any>(url, {params})
		.pipe(map((Response : Response) => {
			return Response;

		}), catchError((error: Response) => {

			return throwError(error.status);

		}));
	}


	// delete method end here ....


}



