import { Component, OnInit } from '@angular/core';
import {NavigatorService} from "../services/navigator.service";

@Component({
  selector: 'app-splash-video',
  templateUrl: './splash-video.component.html',
  styleUrls: ['./splash-video.component.scss']
})
export class SplashVideoComponent implements OnInit {

  isIE: boolean;

  constructor(public nav: NavigatorService) { }

  ngOnInit() {
    this.isIE = this.nav.detectIE();
    console.log(this.isIE)
  }

}
