import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Bank } from '../../components/bank/bank';
import { url } from '../config/app';

@Injectable()
export class BankService {
	private apiUrl: string = url.api;
	private modelUrl: string = this.apiUrl + 'Banks';
	private headers = new Headers({
		'Content-Type': 'application/json'
	});

	constructor(private http: Http){

	}

	getList(): Promise<Bank[]>{

		return this.http.get(this.modelUrl, {headers: this.headers})
			.toPromise()
			.then(response => response.json() as Bank[])
			.catch(this.handleError);
	}

	private handleError(error: any): Promise<any>{
		console.error('An error occured. ', error);

		return Promise.reject(error.message || error);
	}
}