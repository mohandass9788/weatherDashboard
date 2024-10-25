import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherDashboardComponent } from './component/weather-dashboard/weather-dashboard.component';
import { WeatherBootstrapDashboardComponent } from "./component/weather-bootstrap-dashboard/weather-bootstrap-dashboard.component";
import { Observable } from 'rxjs';
import { LoaderService } from './service/loader.service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WeatherDashboardComponent, WeatherBootstrapDashboardComponent, ProgressSpinnerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'weatherDashboard';
  isLoading: any;

  constructor(private loaderService: LoaderService) {
    console.log('Loading weather', this.loaderService.isLoading$)
    this.loaderService.isLoading$.subscribe(isLoading => this.isLoading = isLoading);
  }
}
