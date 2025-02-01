import { Component, OnDestroy, OnInit } from '@angular/core';
import { ClimaService } from '../../services/clima.service';
import { WeatherDatas } from 'src/app/models/interfaces/weatherDatas';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntil } from 'rxjs';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-clima-home',
  templateUrl: './clima-home.component.html',
  styleUrls: []
})
export class ClimaHomeComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<void> = new Subject<void>();
  initialCity = 'Rio de Janeiro';
  weatherDatas!: WeatherDatas;
  searchIcon = faMagnifyingGlass;

  constructor(private climaService: ClimaService) {}

  ngOnInit(): void {
    this.getWeatherDatas(this.initialCity);
  }

  getWeatherDatas(city: string): void {
    this.climaService.getWeatherDatas(city)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: (response: WeatherDatas) => {
        response && (this.weatherDatas = response);
        console.log(this.weatherDatas)
      },
        error: (error: any) =>
          console.log(error),
      })
  }

  // Quando o usuário digitar algo no campo de busca, ele vai chamar a função getWeatherDatas
  onSubmit(): void {
    this.getWeatherDatas(this.initialCity);
    this.initialCity = '';
  }

  // Quando esse component ser destruido, ele vai emitir um evento para que saiam da tela.
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
