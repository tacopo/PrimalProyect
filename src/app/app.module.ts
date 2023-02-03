import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModuleModule } from "./material-module/material-module.module";

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AccordionComponent } from './accordion/accordion.component';
import { TableComponent } from './table/table.component';
import { CharactersComponent } from './characters/characters.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';
import { VideosComponent } from './videos/videos.component';
import { VideoCardComponent } from './video-card/video-card.component'; 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AccordionComponent,
    TableComponent,
    CharactersComponent,
    FooterComponent,
    CardComponent,
    ButtonComponent,
    VideosComponent,
    VideoCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
