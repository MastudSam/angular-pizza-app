import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatTabsModule
  ],
  exports: [MatButtonModule, MatCheckboxModule, MatTabsModule],
  
})
export class AppMaterialModule { }
