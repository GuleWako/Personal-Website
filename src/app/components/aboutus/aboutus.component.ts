import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {
  callMe() {
    window.location.href = "tel:+251934437389";
  }
  sendEmail() {
    window.location.href = "mailto:gulumawakuma3@gmail.com?subject=Hello&body=Your message here";
  }
  
currentYear: number= new Date().getFullYear();

}
