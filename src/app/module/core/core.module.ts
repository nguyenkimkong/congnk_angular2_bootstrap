import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { AlertComponent } from "./utils/alert/alert.component";

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  declarations: [AlertComponent]
})
export class CoreModule { }
