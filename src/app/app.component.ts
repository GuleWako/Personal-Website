import { AfterViewInit, Component, ElementRef, HostBinding, NgModule, OnInit, ViewChild, inject, signal } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { HomeComponent } from "./components/home/home.component";
import { OurserviceComponent } from "./components/myservice/ourservice.component";
import { OurworkComponent } from "./components/mywork/ourwork.component";
import { ContactComponent } from "./components/contact/contact.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,  RouterOutlet, NavbarComponent, FooterComponent, CommonModule, AboutusComponent, HomeComponent, OurserviceComponent, OurworkComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {

  darkMode = signal<boolean>(false);
  router = inject(Router)
  @HostBinding('class.dark') get mode(){  
    return this.darkMode();
  } 

  toggleDarkMode() {
    this.darkMode.set(!this.darkMode());
  }

  @ViewChild('home', { static: false }) home!: ElementRef;
  @ViewChild('about', { static: false }) about!: ElementRef;
  @ViewChild('services', { static: false }) services!: ElementRef;
  @ViewChild('works', { static: false }) works!: ElementRef;
  @ViewChild('contact', { static: false }) contact!: ElementRef;
  @ViewChild('footer', { static: false }) footer!: ElementRef;


  private sectionMap = new Map<string, ElementRef>();

  ngAfterViewInit() {
    this.sectionMap.set('home', this.home);
    this.sectionMap.set('about', this.about);
    this.sectionMap.set('services', this.services);
    this.sectionMap.set('works', this.works);
    this.sectionMap.set('contact', this.contact);
    this.sectionMap.set('footer', this.footer);
  }
  selectSection(section: string){
   const target = this.sectionMap.get(section)
    if (target) {
      target.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
