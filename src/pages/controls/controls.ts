import { Component } from '@angular/core';
import {  NavController, NavParams, ViewController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the ControlsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-controls',
  templateUrl: 'controls.html',
})
export class ControlsPage {

  /**
   * Form group to take various user filters as input for API call.
   */
  private filtersInput : FormGroup;

  /**
   * Local filters object to store user filters for API call.
   */
  myFilters : any;

  constructor(private formBuilder: FormBuilder, public viewCtrl: ViewController, public navCtrl: NavController, public params: NavParams) {
    this.myFilters = params.get("filters");

    console.log("Filters from controls.ts:");
    console.log(this.myFilters);

    this.filtersInput = this.formBuilder.group({
      altitude: [{lower: this.myFilters.altitude.lower, upper: this.myFilters.altitude.upper}, Validators.required],
      radius: [this.myFilters.radius],
    });
  }

  /**
   * Closes the modal and passes the filters back to the main view (home.ts)
   */
  dismiss() {
    let data = this.filtersInput.value;
    data.coordinates = this.myFilters.coordinates;
    this.viewCtrl.dismiss(data);
  }


  logForm(){
    console.log(this.filtersInput.value)
    let data = this.filtersInput.value;
    this.viewCtrl.dismiss(data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ControlsPage');
  }

}
