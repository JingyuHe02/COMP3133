import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RemoveSpacesPipe } from './remove-spaces.pipe';
import { InputFormatDirective } from './input-format.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RemoveSpacesPipe, InputFormatDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  title = signal('Jingyu Angular Lab08');

  heroes = [
    { id: 1, name: 'Spider-Man' },
    { id: 2, name: 'Iron-Man' },
    { id: 3, name: 'Captain-America' }
  ];

  selectedHero: any = null;

  selectHero(hero: any) {
    this.selectedHero = hero;
  }
}