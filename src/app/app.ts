import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Title} from './components/title/title';
import {AllHeroes} from './components/all-heroes/all-heroes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Title, AllHeroes],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('heroes');
}
