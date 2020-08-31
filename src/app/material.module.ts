import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';

import { LayoutModule } from '@angular/cdk/layout';
import { PlatformModule } from '@angular/cdk/platform';
const MATERIALS = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatDialogModule,
  MatCardModule,


  LayoutModule,
  PlatformModule
];
@NgModule({
  imports: [
    ...MATERIALS,
    BrowserAnimationsModule
  ],
  exports: [...MATERIALS],
})
export class MaterialModule { }
