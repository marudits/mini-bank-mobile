import { 
	Component,  
	OnChanges, OnInit, DoCheck, 
	AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, 
	OnDestroy 
	} from '@angular/core';

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
export class RatingList implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
	private listItem: Rating[];

	constructor(
		private ratingService: RatingService,
		private navController: NavController
		){

	}

	ngOnChanges(): void {
		console.log('Lifecycle: OnChanges');
	}

	ngOnInit(): void{
		this.getList();
		console.log('Lifecycle: OnInit');
	}

	ngDoCheck(): void {
		//this.getList();	
		console.log('Lifecycle: DoCheck');
	}

	ngAfterContentInit(): void {
		console.log('Lifecycle: AfterContentInit');
	}

	ngAfterContentChecked(): void {
		//console.log('Lifecycle: AfterContentChecked');
	}

	ngAfterViewInit(): void {
		console.log('Lifecycle: AfterViewInit');
	}

	ngAfterViewChecked(): void {
		//console.log('Lifecycle: AfterViewChecked');
	}

	ngOnDestroy(): void {
		console.log('Lifecycle: OnDestroy');
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