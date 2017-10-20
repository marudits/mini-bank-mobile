import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

//Service
import { RatingService } from '../../utils/services/rating.service';

@Component({
	selector: 'page-rating',
	templateUrl: './rating.html'
})
export class RatingPage implements OnInit {
	private listItem;

	constructor(public navCtrl: NavController, private ratingService: RatingService){
		
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

}
