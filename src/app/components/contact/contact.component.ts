import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
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
  contact = { name: '', email: '', message: '' };

  sendEmail() {
    const subject = encodeURIComponent("New Message from " + this.contact.name);
    const body = encodeURIComponent(
      `Name: ${this.contact.name}\nEmail: ${this.contact.email}\n\nMessage:\n${this.contact.message}`
    );

    window.open(`mailto:gulumawakuma3@gmail.com?subject=${subject}&body=${body}`, '_blank');
  }
c="@"

}
