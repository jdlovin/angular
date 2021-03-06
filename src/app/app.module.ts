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
import { SwitchComponent } from './component/switch/switch.component';
import { ForWhatComponent } from './component/for-what/for-what.component';
import { TrackByComponent } from './component/track-by/track-by.component';
import { PipesComponent } from './component/pipes/pipes.component';
import { CustomPipesComponent } from './component/custom-pipes/custom-pipes.component';
import {TitlePipe } from './title.pipe';
import { InNoutComponent } from './component/in-nout/in-nout.component';
import { EmployeeDetailComponent } from './component/employee-detail/employee-detail.component';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { PostComponent } from './component/post/post.component';
import { PhotoPostComponent } from './component/photo-post/photo-post.component'
import { HttpClientModule } from '@angular/common/http';
import { DepartmentComponent } from './component/department/department.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { DepartmentDetailComponent } from './component/department-detail/department-detail.component';
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
    WhatIfComponent,
    SwitchComponent,
    ForWhatComponent,
    TrackByComponent,
    PipesComponent,
    CustomPipesComponent,
    TitlePipe,
    InNoutComponent,
    EmployeeDetailComponent,
    EmployeeListComponent,
    PostComponent,
    PhotoPostComponent,
    DepartmentComponent,
    EmployeeComponent,
    DepartmentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
