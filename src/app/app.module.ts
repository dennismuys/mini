import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { SplashVideoComponent } from './splash-video/splash-video.component';
import { IntroComponent } from './intro/intro.component';
import {ScrollToModule} from "ng2-scroll-to/index";
import { NavbarComponent } from './navbar/navbar.component';
import {NavigatorService} from "./services/navigator.service";
import { CollageComponent } from './collage/collage.component';
import { LanguageSwitcherComponent } from './components/language-switcher/language-switcher.component';
import { ChapterOneComponent } from './chapter-one/chapter-one.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, "assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent,
    SplashVideoComponent,
    IntroComponent,
    NavbarComponent,
    CollageComponent,
    LanguageSwitcherComponent,
    ChapterOneComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ScrollToModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [NavigatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
