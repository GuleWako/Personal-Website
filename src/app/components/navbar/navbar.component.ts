import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, HostBinding, Input, Output, ViewChild, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  router = inject(Router)
  @Input() darkMode:any;
  @Input() toggleDarkMode!: () => void;
  @Output() sectionSelected = new EventEmitter<string>();
  selectSection(section: string) {
    this.sectionSelected.emit(section)

  }  
}
