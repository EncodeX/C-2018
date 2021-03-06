import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserSign } from '../../models/userSign';

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  private user = {} as UserSign;
  errMessage = ``;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private afAuth: AngularFireAuth,
    private events: Events
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
    this.events.publish(`app:pageLoaded`);
  }

  async signUp() {
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(this.user.email, this.user.password);
      if (result) {
        // this.navCtrl.setRoot(`LoginPage`, { from_sign_up: true, email: this.user.email, password: this.user.password });
        this.events.publish(`nav:go-to-login`, { from_sign_up: true, email: this.user.email, password: this.user.password });
      }
    } catch (e) {
      console.error(e);
      this.errMessage = e.message;
    }
  }

  back() {
    this.events.publish(`nav:go-to-login`);
  }

}
