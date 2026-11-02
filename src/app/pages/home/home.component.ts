import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
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
  submitting = false;

  scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  onSubmit(): void {
    this.submitting = true;
    fetch('https://formspree.io/f/mqppgaaq', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        name: this.form.name,
        email: this.form.email,
        company: this.form.company,
        type: this.form.type,
        groupSize: this.form.groupSize,
        destination: this.form.destination,
        message: this.form.message
      })
    }).then(res => {
      this.submitting = false;
      if (res.ok) this.submitted = true;
    }).catch(() => {
      this.submitting = false;
    });
  }

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.anim').forEach(el => observer.observe(el));
  }
}
