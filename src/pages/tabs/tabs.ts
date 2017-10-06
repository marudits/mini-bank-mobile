import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

import { BankPage } from '../bank/bank';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = BankPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
