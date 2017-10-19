import { Component } from '@angular/core';

//Pages
import { ContactPage } from '../contact/contact';
import { BankPage } from '../bank/bank';
import { RatingPage } from '../rating/rating';

//Component
import { BankList } from '../../components/bank/bank-list.component';

//Services
import { BankService } from '../../utils/services/bank.service';
import { CallNumber } from '@ionic-native/call-number';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = BankPage;
  tab2Root = RatingPage;
  tab3Root = ContactPage;

  constructor(private bankService: BankService, private callNumber: CallNumber) {
  }

  onTabSelected (type: string){
  	switch (type) {
  		case "bank":
  			let bankList = new BankList(this.bankService, this.callNumber);

  			console.log('onTabSelected: home');
  			return ((() => bankList.getList)());
  		default:
  			console.log('onTabSelected: ', type);
  			break;
  	}
  }
}
