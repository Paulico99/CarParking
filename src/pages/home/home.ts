import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { EstacionamientoPage } from '../estacionamientos/estacionamiento';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController) {

  }
  Estacionados(){
   // this.navCtrl.setRoot(AboutPage);
    this.navCtrl.push(EstacionamientoPage);
    //this.navCtrl.popToRoot();
    }
}
