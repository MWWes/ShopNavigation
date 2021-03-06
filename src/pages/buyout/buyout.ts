import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Buyout page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-buyout',
  templateUrl: 'buyout.html'
})
export class BuyoutPage {
  name: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ngOnInit(){
    this.name = this.navParams.data
  }

  onGoBack(){
    //this.navCtrl.pop();
    this.navCtrl.popToRoot();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyoutPage');
  }

}
