import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { METDrawerComponent } from './drawer.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [METDrawerComponent],
  exports: [METDrawerComponent],
  entryComponents: [METDrawerComponent],
})
export class MetDrawerModule { }
