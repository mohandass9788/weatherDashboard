import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';
import { WeatherService } from '../../service/weather.service';
import { DegreeToFPipe } from "../../pipes/degree-to-f.pipe";

@Component({
  selector: 'app-weather-card',
  standalone: true,
  imports: [CommonModule, FormsModule, InputSwitchModule, DegreeToFPipe],
  templateUrl: './weather-card.component.html',
  styleUrl: './weather-card.component.scss'
})
export class WeatherCardComponent {
  weatherService = inject(WeatherService)
  checked: boolean = false;
  @Input() icon!: string;
  @Input() value!: string;
  @Input() isCelsius: boolean | undefined = false;
}
