import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';


//Component
import { Rating } from './rating';
import { Bank } from '../bank/bank';

//Pages
import { RatingPage } from '../../pages/rating/rating';

//Services
import { RatingService } from '../../utils/services/rating.service';
import { BankService } from '../../utils/services/bank.service';



@Component({
	selector: 'rating-form',
	templateUrl: 'rating-form.component.html'
})
export class RatingForm implements OnInit {
	private rating: Rating;
	private bankList: Bank[];

	constructor(
		private ratingService: RatingService, 
		private bankService: BankService,
		private navController: NavController,
		private toastController: ToastController
		){
		let rating = {
			id: -1,
			bankId: -1,
			name: '',
			email: '',
			text: '',
			value: 0,
			createdAt: (new Date()).toString(),
			bank: []
		};

		// if(item.id && item.id !== -1){
		// 	rating = item;
		// }

		this.rating = rating;
	}

	private validateForm(formData: Object){
		let {bankId, email, text, value} = this.rating;

		//check bankId
		if(isNaN(bankId) || bankId === -1){
			this.showToast({message: 'Bank should be selected'});
			return false;
		}

		//check email
		if(!email || email.trim() === ''){
			this.showToast({message: 'Email should be not empty'});
			return false;
		}

		//check text 
		if(!text || text.trim().length < 15){
			this.showToast({message: 'Text should be more than 15 char'});
			return false;
		}

		//check value
		if(value < 1 || value > 5){
			this.showToast({message: 'Star value should be 1-5'});
			return false;
		}

		return true;
	}

	ngOnInit(){
		this.getBankList();
	}

	private getBankList(): void {
		this.bankService.getList()
			.then((items) => this.bankList = items)
			.catch(this.handleError)
	}

	handleError(this: any, error: any){
		this.showToast({
			message: 'An error occured. ' + (error.statusText || ''),
			duration: 2500
		});
	}

	sendRating(): void {
		let formData = this.rating;

		if(this.validateForm(formData)){

			if(formData.id === -1){
				delete formData.id;
				delete formData.bank;
				formData.createdAt = (new Date()).toString();
				console.log('formData: ', formData);

				let that = this;
				this.ratingService.sendRating(formData)
					.then((item) => {
						that.showToast({
					      message: 'Rating was sent successfully'
					    });

					    that.navController.push(RatingPage);
					})
					.catch((err) => this.handleError(err));	
			}
			
		}

	}

	private showToast(params): void {
		let defaultParams = {
			message: 'Message not set',
			duration: 1500
		}
		let toast = this.toastController.create(Object.assign({}, defaultParams, params));
		toast.present();
	}
}