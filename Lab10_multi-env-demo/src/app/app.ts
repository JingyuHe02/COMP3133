import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Lab Exercise 10 - Multi Environment Angular Demo';
  environment = environment;

  environments = [
    {
      name: 'TEST',
      command: 'ng serve',
      description: 'Default development configuration using src/environments/environment.ts'
    },
    {
      name: 'UAT',
      command: 'ng serve --configuration uat',
      description: 'Uses src/environments/environment.uat.ts through file replacement'
    },
    {
      name: 'PROD',
      command: 'ng serve --configuration production',
      description: 'Uses src/environments/environment.prod.ts through file replacement'
    }
  ];
}
