import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BuyoutPage } from "../buyout/buyout";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class ShopPage {
  constructor(public navCtrl: NavController) {
  }
  onGoToBuyout(name: string) {
    this.navCtrl.push(BuyoutPage,name);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopPage');
  }
}
