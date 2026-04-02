import { RouterOutlet } from '@angular/router';
import { StudentsComponent } from './students.component';
import { Component, signal } from '@angular/core';
import { Student } from './student/student';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StudentsComponent, Student],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Lab09 Student App';

  getTitle() {
    return this.title;
  }

  getCurrentDate() {
    return new Date().toLocaleDateString();
  }
}
