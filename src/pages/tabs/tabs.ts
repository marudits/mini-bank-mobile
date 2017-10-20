import { Component } from '@angular/core';

//Pages
import { ContactPage } from '../contact/contact';
import { BankPage } from '../bank/bank';
import { RatingPage } from '../rating/rating';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = BankPage;
  tab2Root = RatingPage;
  tab3Root = ContactPage;

  constructor() {
  }

  onTabSelected (type: string){
  	switch (type) {
  		case "bank":
  			console.log('onTabSelected: home');
  		default:
  			console.log('onTabSelected: ', type);
  			break;
  	}
  }
}
