import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  public showPark: any;
  public park: any;
  public p: any;
  public p0: any;
  public p1: any;
  public park0: any;
  public park1: any;
  public numFree: any;
  public numBusy: any;
  constructor(public navCtrl: NavController, private afDB: AngularFireDatabase){}
  
  ionViewWillEnter(){

    this.showPark = this.afDB.list('/parking/').valueChanges().subscribe(parking => {
      console.log(parking[0]);
      this.park = parking[0];
      this.p = this.park['d'];
      this.p0 = this.p[0];
      this.p1 = this.p[1]
      this.park0 = this.p0['s'];
      this.park1 = this.p1['s'];
      console.log(this.p0['s']);
      console.log(this.p1['s']);
      let numFree = Object.keys(this.p).length
      this.numFree = 0;
      for(var i = 0; i < numFree; i++){
        let free = this.p[i]
        if(free['s'] == 'f'){
          this.numFree++;
        }
      }
      this.numBusy = 36 - this.numFree;
    });
  }

  /*viewDidLeave(): void{
    this.showPark.unsubscribe();
  }*/

  ngOnDestroy(): void{
    this.showPark.unsubscribe();
  }
}
