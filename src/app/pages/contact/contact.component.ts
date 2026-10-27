import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  form = {
    name: '',
    company: '',
    email: '',
    type: '',
    groupSize: '',
    destination: '',
    message: ''
  };

  submitted = false;

  onSubmit(): void {
    this.submitted = true;
  }
}
