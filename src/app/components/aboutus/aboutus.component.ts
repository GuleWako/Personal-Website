import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {
  @Output() sectionSelected = new EventEmitter<string>();
  selectSection(section: string) {
    this.sectionSelected.emit(section)

  } 
  callMe() {
    window.location.href = "tel:+251934437389";
  }
  sendEmail() {
    window.location.href = "mailto:gulumawakuma3@gmail.com?subject=Hello&body=Your message here";
  }
  
currentYear: number= new Date().getFullYear();

}
