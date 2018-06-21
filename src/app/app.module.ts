import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EstacionamientoPage } from '../pages/estacionamientos/estacionamiento';

//Server modules
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';

//Services
import { ParkingService } from '../services/parking.service';

export const firebaseConfig = {
  fire: {
    apiKey: "AIzaSyA77zKGBvl7O81Wuh-u0Bhbax5HMhJXh3k",
    authDomain: "parking-2464b.firebaseapp.com",
    databaseURL: "https://parking-2464b.firebaseio.com",
    projectId: "parking-2464b",
    storageBucket: "parking-2464b.appspot.com",
    messagingSenderId: "982360187100"
  }
}

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    EstacionamientoPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig.fire),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    EstacionamientoPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireDatabase,
    ParkingService
  ]
})
export class AppModule {}
