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

}
