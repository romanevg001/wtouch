import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {SearchBarComponent} from './search-bar/search-bar.component';
import {ViewportSizeDirective} from '../directives/viewport-size.directive';

import * as m from '@angular/material';

import {CdkTableModule} from '@angular/cdk/table'
import {OverlayModule} from '@angular/cdk/overlay';

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


@NgModule({
  imports: [
    PlunkerMaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    SearchBarComponent,
    ViewportSizeDirective
  ],
  exports: [
    PlunkerMaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SearchBarComponent,
    ViewportSizeDirective
  ],
  providers: []
})

export class ShareModule {
}
