import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test.component';

import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { MainComponent } from './component/main/main.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { PropertyBindComponent } from './component/property-bind/property-bind.component';
import { InputComponent } from './component/input/input.component';
import { StyleBindComponent } from './component/style-bind/style-bind.component';
import { WhatIfComponent } from './component/what-if/what-if.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NavBarComponent,
    SidebarComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    PropertyBindComponent,
    InputComponent,
    StyleBindComponent,
    WhatIfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
