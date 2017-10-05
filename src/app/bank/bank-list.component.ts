import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';


//Component
import { Bank } from './bank';

//Service
import { BankService } from './bank.service';

@Component({
	selector: 'bank-list',
	templateUrl: './bank-list.component.html',
	//styleUrls: ['./bank.scss']
})

export class BankList implements OnInit {

	private listItem: Bank[];
	private selectedBank: Bank;

	constructor(
		//private router: Router,
		private bankService: BankService
		){ }

	ngOnInit(): void {
		console.log('BankList: ngOnInit');
		this.getList();
	}

	getList(): void {
		console.log('BankList: getList');
		this.bankService.getList().then((items) => {
			console.log(items);
			this.listItem = items;
		});
		console.log('BankList: listItem: ', this.listItem)
	}
}