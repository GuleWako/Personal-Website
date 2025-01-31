import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
   @Output() sectionSelected = new EventEmitter<string>();
  selectSection(section: string) {
    this.sectionSelected.emit(section)

  } 

  goToTelegram() {
    window.open("https://t.me/wako_430", "_blank");
  }
  goToLinkedIn() {
    window.open("https://www.linkedin.com/in/guluma-wakuma/", "_blank");
  }
  goToWhatsapp() {
    window.open("https://wa.me/+251934437389", "_blank");
  }
  goToInistagram() {
    window.open("https://www.instagram.com/gulewako/", "_blank");
  }
    goToFacebook() {
      window.open("https://web.facebook.com/wako430", "_blank");
    }

}
