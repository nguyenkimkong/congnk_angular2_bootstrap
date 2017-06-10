import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { Router } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from "./module/core/header/header.component";
import { FooterComponent } from "./module/core/footer/footer.component";
import { SidebarmenuComponent } from "./module/core/sidebarmenu/sidebarmenu.component";
import { DialogService } from "./module/core/utils/dialog.service";
import { AppComponent } from "./app.component";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarmenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule
  ],
  providers: [DialogService],
  bootstrap: [AppComponent]
})
export class AppModule {
    
  constructor (){
      
  }  
}
