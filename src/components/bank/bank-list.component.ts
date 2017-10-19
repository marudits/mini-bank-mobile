import { Component, OnInit } from '@angular/core';

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
		private callNumber: CallNumber
		){ }

	ngOnInit(): void {
		this.getList();
	}

	action(type: string, item: Bank): void{
		switch(type){
			case 'nav':
				console.log(`Navigate to ${item.location.lat},${item.location.lng}`)
				break;
			case 'call':
				console.log(`Call to phone number ${item.phone}`);
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