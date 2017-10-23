import {Component, OnInit, HostListener} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  
  showNav: boolean;

  constructor() { }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    let ih = window.innerHeight;
    let sy = window.scrollY;
    if (sy >= ih) {
      this.showNav = true;
    } else {
      this.showNav = false;
    }
  }
}
