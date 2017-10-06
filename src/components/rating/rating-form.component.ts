import { Component } from '@angular/core';

//Component
import { Rating } from './rating';


//Services
import { RatingService } from '../../utils/services/rating.service';

@Component({
	selector: 'rating-form',
	templateUrl: 'rating-form.component.html'
})
export class RatingForm {
	private rating: Rating;

	constructor(private ratingService: RatingService){}

	private validateForm(){
		//check value
		if(this.rating.value < 0 || this.rating.value > 5){
			return false;
		}

		return true;
	}

	sendRating(): void {
		this.ratingService.sendRating(this.rating)
			.then((item) => console.log('Rating was sent. ', item))
			.catch(this.handleError);

	}

	private handleError(error: any){
		console.error('An error occured.', error);
	}
}