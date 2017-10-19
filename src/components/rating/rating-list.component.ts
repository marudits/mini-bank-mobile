import { Component,  Input } from '@angular/core';
import { NavController } from 'ionic-angular';

//Component
import { Rating } from './rating';

//pages
import { RatingFormPage } from '../../pages/rating/rating-form';


@Component({
	selector: 'rating-list',
	templateUrl: 'rating-list.component.html'
})
export class RatingList {
	@Input()listItem: Rating[];

	constructor(
		private navController: NavController
		){

	}

	navPage(page: string): void{
		switch (page) {
			case "rating-form":
				console.log('nav to rating-form');
				this.navController.push(RatingFormPage, {item: {}});
				break;
			
			default:
				// code...
				break;
		}
	}
}