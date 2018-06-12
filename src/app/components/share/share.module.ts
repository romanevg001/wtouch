import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import * as m from '@angular/material';

import {CdkTableModule} from '@angular/cdk/table'
import {OverlayModule} from '@angular/cdk/overlay';
/* 
@NgModule({
  exports: [
    // CDk
    CdkTableModule,
    OverlayModule, 
    
    // m.Material
    m.MatAutocompleteModule,
    m.MatButtonModule,
    m.MatButtonToggleModule,
    m.MatCardModule,
    m.MatCheckboxModule,
    m.MatChipsModule,
    m.MatDatepickerModule,
    m.MatDialogModule,
    m.MatExpansionModule,
    m.MatGridListModule,
    m.MatIconModule,
    m.MatInputModule,
    m.MatListModule,
    m.MatMenuModule,
    m.MatProgressBarModule,
    m.MatProgressSpinnerModule,
    m.MatRadioModule,
    m.MatRippleModule,
    m.MatSelectModule,
    m.MatSidenavModule,
    m.MatSlideToggleModule,
    m.MatSliderModule,
    m.MatSnackBarModule,
    m.MatTabsModule,
    m.MatToolbarModule,
    m.MatTooltipModule,
    
    m.MatNativeDateModule,
    m.MatSortModule,
    m.MatPaginatorModule
  ]
})
export class PlunkerMaterialModule {}
 */


import * as b from 'ngx-bootstrap';

/* @NgModule({
  exports: [
    b.AccordionModule,
    b.AlertModule
  ]
})
export class PlunkerBootstrapModule {}
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    b.AccordionModule.forRoot()

  ],
  declarations: [
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    b.AccordionModule
  ],
  providers: [
  ]
})

export class ShareModule {
}
