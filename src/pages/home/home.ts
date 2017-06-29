
import { Component } from '@angular/core';
import { LoadingController, ModalController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { ADSB } from '../../providers/adsb-provider';
import { Airports } from '../../providers/airports/airports';
import { PopoverController, AlertController } from 'ionic-angular';
import { ControlsPage } from '../controls/controls';
import { FlightViewPage } from '../flight-view/flight-view';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html',
	providers: [ADSB]
})

export class HomePage {
	public flights: any;

	/**
	 * JSON object to store filter parameters for API calls
	 */
	public filters : any =
	{
		"radius": 100,
		"altitude":{
			"lower": 0,
			"upper": 10000
		},
		"coordinates":{
			"latitude":0,
			"longitude":0
		}
	};

	/**
	 * Variable to store the home airport of the user
	 */
	public airport : any;

	/**
	 * JSON object to store an error and the details to be shown to the user
	 */
	public error : any = {
		"status": false,
		"details": null
	}

	constructor(public modalCtrl: ModalController,
							public navCtrl: NavController,
							public adsb: ADSB,
							public popoverCtrl: PopoverController,
							public geolocation: Geolocation,
							public loadingCtrl: LoadingController,
							public alertCtrl: AlertController,
							public airports: Airports ) {

		this.loadLoc();
	}

	/**
	 * Displays the settings modal and passes user configuration back to the view after closing
	 */
	presentFiltersModal() {
		let filtersModal = this.modalCtrl.create(ControlsPage, {"filters":this.filters});

		filtersModal.onDidDismiss(data => {
			this.filters = data;
			this.loadFlights();
		});

		filtersModal.present();
	}

	/**
	 * Calls the ADSB API to return fights matching specified filters.
	 */
	loadFlights() {
		this.adsb.load(this.filters)
			.then(data1 => {
				this.flights = data1;
			});
	}

	/**
	 * Loads the user's location and store it in the filters object, notifying the user
	 * if location is unavailable.
	 *
	 * TODO: Prompt user to set home airport if location is unavailable.
	 */
	loadLoc(){
		let loading = this.loadingCtrl.create({
			content: 'Getting location...'
		});

		loading.present();

		this.geolocation.getCurrentPosition().then((position) => {
			this.filters.coordinates.latitude = position.coords.latitude;
			this.filters.coordinates.longitude = position.coords.longitude;

			this.loadFlights();
			loading.dismiss();

		}).catch((error) => {
			console.log('Error getting location', error);

			let alert = this.alertCtrl.create({
				title: 'Location Error',
				subTitle: 'The application could not access your location.',
				buttons: ['Dismiss']
			});

			alert.present();
			loading.dismiss();

			this.error.status = true;
			this.error.details = "No location available."

			// this.filters.coordinates.latitude = "40.6413";
			// this.filters.coordinates.longitude = "-73.7781";
		});
	}

	/**
	 * Takes the user's latitude and longtiude and returns the closest airport with coordinates.
	 */
	getHomeAirport(lat, long){
		let locationsLoaded = this.airports.load(lat, long);

		Promise.all([
				locationsLoaded
		]).then((result) => {
				console.log(result);
				this.airport = result[0][0];
				console.log(this.airport);
		});
	}

	/**
	 * Enables "pull to refresh" functionality, updating the flight information in the UI.
	 */
	doRefresh(refresher) {
		console.log('DOREFRESH!');

		this.adsb.load(this.filters)
			.then(data1 => {
				this.flights = data1;
				refresher.complete();
		});
	}

	/**
	 * Opens flight view when item in list is tapped.
	 */
	itemTapped(event, flight) {
			console.log(flight);
			this.navCtrl.push(FlightViewPage, {
				flight: flight,
				"filters": this.filters
			}, {animate: true, direction: 'up'});
	}
}
