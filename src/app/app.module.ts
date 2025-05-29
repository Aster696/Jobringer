import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgZorroModule } from './ng-zorro/ng-zorro.module';
import { SwiperModule } from 'swiper/angular';
import { Page404Component } from './page404/page404.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        Page404Component
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgZorroModule,
        SwiperModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
