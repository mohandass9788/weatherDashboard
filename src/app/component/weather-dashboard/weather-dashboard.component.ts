import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { finalize } from 'rxjs/operators';

// PrimeNG imports
import { ChipModule } from 'primeng/chip';
import { ToastModule } from 'primeng/toast';
import { WeatherCardComponent } from '../weather-card/weather-card.component';
import { WeatherData, WeatherService } from '../../service/weather.service';
import { RecentSearchesService } from '../../service/recent-search.service';

// Components
@Component({
  selector: 'app-weather-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ChipModule,
    ToastModule,
    WeatherCardComponent
  ],
  templateUrl: './weather-dashboard.component.html',
  styleUrl: './weather-dashboard.component.scss',
  providers: [MessageService]
})
export class WeatherDashboardComponent {
  private weatherService = inject(WeatherService);
  private recentSearchesService = inject(RecentSearchesService);
  private messageService = inject(MessageService);

  cityName = '';
  weatherData = signal<WeatherData | null>(null);
  recentSearches = this.recentSearchesService.recentSearches;

  searchWeather() {
    if (!this.cityName.trim()) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Warning',
        detail: 'Please enter a city name'
      });
      return;
    }

    this.weatherService.getWeather(this.cityName).subscribe({
      next: (data) => {
        this.weatherData.set(data);
        this.recentSearchesService.addSearch(this.cityName);
        this.cityName = '';
      },
      error: (error) => {
        console.error(error);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: error
        });
      }
    });
  }

  searchCity(city: string) {
    this.cityName = city;
    this.searchWeather();
  }

  getWeatherIcon(weather: string): string {
    const iconMap: { [key: string]: string } = {
      'Clear': 'assets/images/sun.png',
      'Clouds': 'assets/images/clouds.png',
      'Rain': 'assets/images/cloud-rain.png',
      'Snow': 'assets/images/cloud-snow.png',
      'Thunderstorm': 'assets/images/bolt.png',
      'Drizzle': 'assets/images/cloud-rain.png',
      'Mist': 'assets/images/clouds.png',
      'Smoke': 'assets/images/clouds.png',
      'Haze': 'assets/images/clouds.png',
      'Dust': 'assets/images/clouds.png',
      'Fog': 'assets/images/clouds.png',
    };
    return iconMap[weather] || 'assets/images/clouds.png';
  }
}
