import { Component, OnInit } from '@angular/core';
import { Platform } from 'ionic-angular';

//ionic native
import { CallNumber } from '@ionic-native/call-number';

//Component
import { Bank } from './bank';

//Service
import { BankService } from '../../utils/services/bank.service';

@Component({
	selector: 'bank-list',
	templateUrl: 'bank-list.component.html'
})

export class BankList implements OnInit {

	private listItem: Bank[];

	constructor(
		private bankService: BankService,
		private callNumber: CallNumber,
		private platform: Platform
		){ }

	ngOnInit(): void {
		this.getList();
	}

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
				break;
			case 'rev':
				console.log(`Make a review of ${item.name}`)
				break;
		}
	}

	getList(): void {
		this.bankService.getList().then((items) => {
			this.listItem = items;
		});
	}
}