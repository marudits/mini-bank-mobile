import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

//Service
import { RatingService } from '../../utils/services/rating.service';

//pages
import { RatingFormPage } from '../../pages/rating/rating-form';

@Component({
	selector: 'page-rating',
	templateUrl: './rating.html'
})
export class RatingPage implements OnInit {
	private listItem;

	constructor(public navController: NavController, private ratingService: RatingService){
		
	}

	ngOnInit(): void{
		this.getList(null);
	}

	getList(refresher: any): void {
		let params = {include: 'bank', order: 'createdAt DESC'};
		this.ratingService.getList(params)
			.then((items) => {
				this.listItem = items;

				if(refresher){
					refresher.complete();
				}

			});
	}

	
	navPage(page: string): void{
		switch (page) {
			case "rating-form":
				this.navController.push(RatingFormPage, {item: {}});
				break;
			default:
				// code...
				break;
		}
	}

}
