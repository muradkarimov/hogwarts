import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HousesComponent } from './houses/houses.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MaterialModule } from './material.module';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { RegisterComponent } from './register/register.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    HousesComponent,
    DialogBoxComponent,
    RegisterComponent,
    BottomSheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
