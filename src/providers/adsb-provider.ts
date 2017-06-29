import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


/*
  Generated class for the PeopleSearch provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ADSB {
  data1: any;

  data: any;

  constructor(public http: Http) {
    console.log('Hello PeopleSearch Provider');
  }

  load(filters) {
    console.log("Filters from adsb-provider.ts:");
    console.log(filters);

    return new Promise(resolve => {
      let requestURL = 'https://public-api.adsbexchange.com/VirtualRadar/AircraftList.json?lat=' + filters.coordinates.latitude + '&lng=' + filters.coordinates.longitude + '&fDstL=0&fDstU=' + filters.radius + '&fAltL=' + filters.altitude.lower + '&fAltU=' + filters.altitude.upper;
      console.log(requestURL);

      this.http.get(requestURL)
        .map(res => res.json())
        .subscribe(data => {
          this.data1 = data.acList;

          // this.data = this.applyHaversine(this.data1, filters);

          this.data1.sort((locationA, locationB) => {
              return locationA.Dst - locationB.Dst;
          });

          console.log("data (sorted): ");
          console.log(this.data1);
          // console.log("sorted: ");
          // console.log(this.data);

          resolve(this.data1);
        });
    });
  }
}
