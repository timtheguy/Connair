
<h1 align="center">
<img width="200px" src="https://raw.githubusercontent.com/timtheguy/Connair/master/resources/icon_alt.png"><br>
Connair
</h1>
This repository contains the source code for Connair, an Ionic 2 mobile application for exploring the sky around you.

## Overview
### What is it?
Connair is an Ionic 2 mobile application that allows you to explore the sky, viewing aircraft flying around your location based on filters such as aircraft altitude and distance from your location. Using these filters, one can narrow down a "window" to view aircraft and then learn more about what it is in the air.

The name of the application is a portmaneau of the French word _connaître_, which means "to know," and the word _air_. This application is designed to help you get familiar with the sky.  

### How does it work?
The application uses aircraft flight data sourced from ADS-B feeders, accessed via the [ADS-B Exchange](https://www.adsbexchange.com/). The ADS-B Exchange aggregates all flight data transmitted over the air and provides free access via an application programming interface (API). This application access this API based on your location and the filters you provide, and displays the data in a familiar and straight-forward format for any end user.

### Who is it for?
In short, anyone! Many sources of aircraft information can be overwhelming or confusing for those that do not have much experience with things like ADS-B and FAA regulations, as well as aviation terminology. This app is meant to remove that barrier to knowledge.

In addition, the application was inspired by two thoughts:
1. Just as we can look around and see other cars driving around us, we look to the sky and see airplanes flying above. The difference between these two situations is that you do not have any knowledge of the airplane's license number, occupants, operator, or even it's make and model. 
2. Those living or working near airports may often notice aircraft taking off and landing, and wonder where the planes are coming from, where they are going, or who operates them.

By providing access to publicly available information related to aircraft in the sky, we can better know the skies and let that knowledge provide a sense of security, or satisfy one's curiosity of the skies above.

## Features
### Current
* View aircraft flying around you, within a user selected radius and altitude from your location.
* View the location of an aircraft with your respect to your location on a map.
* View details about the aircaft by tapping on it.

### Upcoming
* View a Wikipedia blurb about the aircraft.
* Share aircraft from the mobile app via a social media post or instant message.
* Configure location to any airport, not just your current location.

## Installation
_TODO: Add instructions for building the app locally._

## Attribution
Live flight data from ADSBexchange, http://www.ADSBexchange.com
