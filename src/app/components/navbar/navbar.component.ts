import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isScrolled = false;
  isHidden = false;
  menuOpen = false;
  private lastScrollY = 0;

  @HostListener('window:scroll')
  onScroll(): void {
    const current = window.scrollY;
    this.isScrolled = current > 60;
    if (current > this.lastScrollY && current > 100) {
      this.isHidden = true;
    } else {
      this.isHidden = false;
    }
    this.lastScrollY = current;
  }

  scrollTo(id: string): void {
    this.menuOpen = false;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}
