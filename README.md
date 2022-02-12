node-red-contrib-openweathermap-api
================

Node-RED node for openweathermap-api

Get current weather, daily forecast for 16 days, and 3-hourly forecast 5 days for your city. Helpful stats, graphics, and this day in history charts are available for your reference. Interactive maps show precipitation, clouds, pressure, wind around your location stations. Data is available in JSON, XML, or HTML format. **Note**: This sample Swagger file covers the `current` endpoint only from the OpenWeatherMap API. <br/><br/> **Note**: All parameters are optional, but you must select at least one parameter. Calling the API by city ID (using the `id` parameter) will provide the most precise location results.

## Install

To install the stable version use the `Menu - Manage palette - Install` 
option and search for node-red-contrib-openweathermap-api, or run the following 
command in your Node-RED user directory, typically `~/.node-red`

    npm install node-red-contrib-openweathermap-api

## Usage

### Methods

#### GET /weather

Access current weather data for any location on Earth including over 200,000 cities! Current weather is frequently updated based on global models and data from more than 40,000 weather stations.

    q : string
    id : string
    lat : string
    lon : string
    zip : string
    units : string
    lang : string
    mode : string
     
    Accept : 'application/json'


## License

#### CC Attribution-ShareAlike 4.0 (CC BY-SA 4.0)

https://openweathermap.org/price