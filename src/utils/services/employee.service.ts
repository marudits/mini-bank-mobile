import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import * as qs from 'qs';

import { Employee } from '../../components/employee/employee';
import { url } from '../config/app';

@Injectable()
export class EmployeeService {
	private apiUrl: string = url.api;
	private modelUrl: string = this.apiUrl + 'Employees';
	private headers = new Headers({
		'Content-Type': 'application/json'
	});

	constructor(private http: Http){

	}

	getList(params: Object = null): Promise<Employee[]>{
		let url = params ? this.modelUrl + '?' + qs.stringify({filter: params}) : this.modelUrl; 
		return this.http
			.get(url, {headers: this.headers})
			.toPromise()
			.then(res => res.json() as Employee[])
			.catch(this.handleError);

	}

	search(query: string): Observable<Employee[]>{
		return this.http
			.get(this.modelUrl + '/search?name=' + query, {headers: this.headers})
			.map(res => res.json().data as Employee[]);
	}

	private handleError(error: any): Promise<any>{
		console.error('An error occured. ', error);
		return Promise.reject(error.message || error);
	}
}

