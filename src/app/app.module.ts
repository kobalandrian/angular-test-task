import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule, APP_BASE_HREF, LocationStrategy, HashLocationStrategy} from '@angular/common';

// materials
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

// pipe
import { FormatTimePipe } from './app.component';

import {Routes, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { S1HeaderComponent } from './s1-header/s1-header.component';
import { S1Section1Component } from './s1-section1/s1-section1.component';
import { S1Section2Component } from './s1-section2/s1-section2.component';
import { S1FooterComponent } from './s1-footer/s1-footer.component';
import { S2HeaderComponent } from './s2-header/s2-header.component';
import { S2Section1Component } from './s2-section1/s2-section1.component';
import { S2FooterComponent } from './s2-footer/s2-footer.component';
import {MenuComponent} from './menu/menu.component';
import {DemoMaterialModule} from './material.module';

const appRoutes: Routes = [
  { path: '', component: Step2Component},
  { path: 'step2', component: Step1Component},
  { path: 'item/:id', component: S2HeaderComponent},
  { path: 'item/:id', component: S2FooterComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    FormatTimePipe,
    Step1Component,
    Step2Component,
    S1HeaderComponent,
    S1Section1Component,
    S1Section2Component,
    S1FooterComponent,
    S2HeaderComponent,
    S2Section1Component,
    S2FooterComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    DemoMaterialModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
