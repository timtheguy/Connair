import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ControlsPage } from '../pages/controls/controls'
import { FlightViewPage } from '../pages/flight-view/flight-view';
import { HttpModule } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';
import { Airports } from '../providers/airports/airports';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ControlsPage,
    FlightViewPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ControlsPage,
    FlightViewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    Airports
  ]
})
export class AppModule {}
