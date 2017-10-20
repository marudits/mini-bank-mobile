import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

//Service
import { BankService } from '../../utils/services/bank.service';

//Component
import { Bank } from '../../components/bank/bank';

@Component({
	selector: 'page-bank',
	templateUrl: './bank.html'
})
export class BankPage implements OnInit{
	private listItem: Bank[];

	constructor(public navCtrl: NavController, private bankService: BankService){

	}

	ngOnInit(): void {
		this.getList(null);
	}

	private getList(refresher: any): void {
		this.bankService.getList()
			.then((items) => {
				this.listItem = items
				if(refresher){
					refresher.complete();
				}
			})
	}
}
