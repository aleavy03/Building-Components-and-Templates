// practice.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent {
  // Define a variable for data binding
  message: string = 'Hello from PracticeComponent!';
}
