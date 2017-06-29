import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FlightViewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-flight-view',
  templateUrl: 'flight-view.html',
})
export class FlightViewPage {

  /**
   * Objects declared to store flight information and settings information.
   */
  flight: {};
  filters: {};

  /**
   * Object used to store the current time in seconds.
   */
  seconds: any;

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
    this.flight = navParams.get('flight');
    this.filters = navParams.get('filters');

    console.log("flight: ");
    console.log(this.flight);
    console.log("filters: ");
    console.log(this.filters);

    this.seconds = new Date().getTime();
  }

  /**
   * Displays appropriate prompt message based on information button clicked.
   */
  showHelp(item){
    var body = "";
    var title = "";

    switch(item){
      case "icao":
        title = "ICAO Number";
        body = "This is the six-digit hexadecimal identifier broadcast by the aircraft over the air in order to identify itself. "
        body += "Blocks of these codes are assigned to countries by the International Civil Aviation Organization (ICAO). "
        body += "Each country then assigns individual codes to aircraft registered in that country. ";
        break;
      case "model":
        title = "Aircraft Model";
        body = "A description of the aircraft’s model. This is populated from a database, and is NOT transmited by the aircraft.";
        break;
      case "time":
        title = "Position Time";
        body = "The time that the position was last reported by the aircraft.";
        break;
      case "op":
        title = "Operator";
        body = "The name of the aircraft’s operator. This is populated from a database, and is NOT transmitted by the aircraft.";
        break;
    }

    let alert = this.alertCtrl.create({
      title: title,
      subTitle: body,
      buttons: ['Done']
    });

    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlightViewPage');
  }
}
