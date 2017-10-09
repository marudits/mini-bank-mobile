import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//Pages
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

//CustomPages
import { BankPage } from '../pages/bank/bank';
import { RatingPage } from '../pages/rating/rating';
import { RatingFormPage } from '../pages/rating/rating-form';


//Components
import { BankList } from '../components/bank/bank-list.component';
import { RatingForm } from '../components/rating/rating-form.component';
import { RatingList } from '../components/rating/rating-list.component';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//Services
import { BankService } from '../utils/services/bank.service';
import { RatingService } from '../utils/services/rating.service';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    BankPage,
    BankList,
    RatingPage,
    RatingFormPage,
    RatingForm,
    RatingList
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    BankPage,
    BankList,
    RatingPage,
    RatingFormPage,
    RatingForm,
    RatingList
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BankService,
    RatingService
  ]
})
export class AppModule {}
