import { Component } from '@angular/core';

//import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
//import { HomePage } from '../home/home';

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
}
