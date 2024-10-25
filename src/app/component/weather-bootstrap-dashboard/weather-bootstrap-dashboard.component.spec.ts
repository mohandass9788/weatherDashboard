import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherBootstrapDashboardComponent } from './weather-bootstrap-dashboard.component';

describe('WeatherBootstrapDashboardComponent', () => {
  let component: WeatherBootstrapDashboardComponent;
  let fixture: ComponentFixture<WeatherBootstrapDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherBootstrapDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherBootstrapDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
