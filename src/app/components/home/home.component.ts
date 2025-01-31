import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  openGoogleDrive() {
    window.open("https://drive.google.com/file/d/1SOxO3M9kIr0AEvPDEZncojPQ4UUpx5Id/view?usp=sharing", "_blank");
  }
  @Output() sectionSelected = new EventEmitter<string>();

  selectSection(section: string) {
    this.sectionSelected.emit(section)

  } 
}
