import { Component,  OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Rating } from './rating';

import { RatingService } from '../../utils/services/rating.service';

//helpers
import { calculateDiffTime } from '../../utils/helpers/dateAndTime';

//pages
import { RatingFormPage } from '../../pages/rating/rating-form';


@Component({
	selector: 'rating-list',
	templateUrl: 'rating-list.component.html'
})
export class RatingList implements OnInit {
	private listItem: Rating[];

	constructor(
		private ratingService: RatingService,
		private navController: NavController
		){

	}

	ngOnInit(): void{
		this.getList();
		console.log('Lifecycle: OnInit');
	}

	getList(): void {
		let params = {include: 'bank', order: 'createdAt DESC'};
		this.ratingService.getList(params)
			.then((items) => {
				let newItems = [];
				for(let item of items){
					let newItem = Object.assign({}, item, {bank: item.bank});
					newItem.createdAt = calculateDiffTime(item.createdAt);
					newItems.push(newItem);
				}

				this.listItem = newItems;
			});
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