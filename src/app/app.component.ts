import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherDashboardComponent } from './component/weather-dashboard/weather-dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WeatherDashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'weatherDashboard';
}
