import { Component, Input } from '@angular/core';
import { NavController, Platform, ToastController  } from 'ionic-angular';

//ionic native
import { CallNumber } from '@ionic-native/call-number';

//Component
import { Bank } from './bank';

//Pages
import { RatingFormPage } from '../../pages/rating/rating-form';

//Service
import { BankService } from '../../utils/services/bank.service';

//Config
import { KEY } from '../../utils/config/app';

@Component({
	selector: 'bank-list',
	templateUrl: 'bank-list.component.html'
})

export class BankList {

	@Input()listItem: Bank[];
	private gmapsKey = KEY.gmaps;

	constructor(
		private bankService: BankService,
		private callNumber: CallNumber,
		private platform: Platform,
		private toastController: ToastController,
		private navController: NavController
		){ }

	action(type: string, item: Bank): void{
		switch(type){
			case 'nav':
				const destination = `${item.location.lat},${item.location.lng}`
				
				if(this.platform.is('ios')){
					window.open('maps://?q=' + destination, '_system')
				} else if(this.platform.is('android')) {
					let label = encodeURI('Pinned Location');
					window.open('geo:0,0?q=' + destination + '(' + label + ')', '_system');
				} else {
					window.open(`http://maps.google.com?q=${destination}`)
				}
				break;
			case 'call':
				this.callNumber.callNumber(item.phone, true)
					.then(() => console.log('Launched dialer!'))
					.catch(() => console.error('Error launching dialer'));
				break;
			case 'fav':
				console.log(`Favourite ${item.name}`);
				this.bankService.favouriteBank(item)
					.then(() => this.showToast({message: 'Successfully favourite this bank'}))
				break;
			case 'rev':
				console.log(`Make a review of ${item.name}`);
				this.navController.push(RatingFormPage, {item: item});
				break;
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