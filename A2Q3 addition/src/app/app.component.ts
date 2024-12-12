import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  number1: number = 0;
  number2: number = 0;
  result: number | null = null; // Store the result of addition

  // This method is called when the button is clicked to add numbers
  addNumbers(): void {
    this.result = this.number1 + this.number2;
  }

  // This method clears the input fields and the result
  clearFields(): void {
    this.number1 = 0;
    this.number2 = 0;
    this.result = null;
  }
}
