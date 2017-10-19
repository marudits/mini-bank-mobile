import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

//Service
import { RatingService } from '../../utils/services/rating.service';

//helpers
import { calculateDiffTime } from '../../utils/helpers/dateAndTime';

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
				let newItems = [];
				for(let item of items){
					let newItem = Object.assign({}, item, {bank: item.bank});
					newItem.createdAt = calculateDiffTime(item.createdAt);
					newItems.push(newItem);
				}

				this.listItem = newItems;

				if(refresher){
					refresher.complete();
				}

			});
	}

}
