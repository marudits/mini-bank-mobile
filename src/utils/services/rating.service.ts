import { Injectable } from '@angular/core';
import { Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import * as qs from 'qs';

import { Rating } from '../../components/rating/rating';
import { url } from '../config/app';

@Injectable()
export class RatingService {
	private apiUrl: string = url.api;
	private modelUrl: string = this.apiUrl + 'Ratings';
	private headers = new Headers({
		'Content-Type': 'application/json'
	});

	constructor(private http: Http){

	}

	getList(params: Object = null): Promise<Rating[]>{
		let url = params ? this.modelUrl + '?' + qs.stringify({filter: params}) : this.modelUrl;
		return this.http.get(url, {headers: this.headers})
			.toPromise()
			.then(response => response.json() as Rating[])
			.catch(this.handleError);
	}

	sendRating(rating: Rating): Promise<Rating>{
		return this.http
			.post(this.modelUrl, rating, {headers: this.headers})
			.toPromise()
			.then(response => response.json() as Rating)
			.catch(this.handleError);
	}

	private handleError(error: any): Promise<any>{
		console.error('An error occured. ', error);

		return Promise.reject(error.message || error);
	}
}

