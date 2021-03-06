//import { Component, OnInit } from '@angular/core';

//@Component({
//  selector: 'app-fetch-data',
//  templateUrl: './fetch-data.component.html',
//  styleUrls: ['./fetch-data.component.css']
//})
//export class FetchDataComponent implements OnInit {

//  constructor() { }

//  ngOnInit() {
//  }

//}

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public forecasts: WeatherForecast[];

  constructor(http: HttpClient) {
    http.get<WeatherForecast[]>('/api/SampleData/WeatherForecasts').subscribe(result => {
      this.forecasts = result;
      }, error => console.error(error));
  }
}

interface WeatherForecast {
  dateFormatted: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

