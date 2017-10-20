import { Component,  Input } from '@angular/core';

//Component
import { Rating } from './rating';

@Component({
	selector: 'rating-list',
	templateUrl: 'rating-list.component.html'
})
export class RatingList {
	@Input()listItem: Rating[];

	constructor(){

	}
}