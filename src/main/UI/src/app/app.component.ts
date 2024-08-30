import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {WeatherService} from "./service/weather.service";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  city: string = '';
  temperature: string = '';
  location: string = '';
  condition: string = '';
  wind: string = '';
  description: boolean = false;
  title: string = '';
  constructor(private weatherService: WeatherService) { }

  fetchWeather() {
    this.weatherService.getWeather(this.city).subscribe(data => {
      const weatherData = JSON.parse(data);
      this.temperature = `${weatherData.current.temp_c}°C (${weatherData.current.temp_f}°F)`;
      this.location = `${weatherData.location.name}, ${weatherData.location.region}, ${weatherData.location.country}`;
      this.condition = weatherData.current.condition.text;
      this.wind = `${weatherData.current.wind_mph} mph (${weatherData.current.wind_kph} kph) ${weatherData.current.wind_dir}`;
    });
  }
  showInfo() {
    this.description = true;
  }
}
