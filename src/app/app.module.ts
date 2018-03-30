import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DialogComponent } from './dialog/dialog.component';
import { EditarComponent } from './editar/editar.component';


import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatMenuModule,
    MatToolbarModule, MatIconModule, MatTabsModule,
    MatAutocompleteModule, MatCheckboxModule,MatDatepickerModule,
    MatFormFieldModule,MatInputModule,MatRadioModule,
    MatSelectModule,MatSlideToggleModule,MatListModule,
    MatButtonToggleModule,MatProgressSpinnerModule,MatProgressBarModule,
    MatSnackBarModule,MatPaginatorModule,MatNativeDateModule,
    MatSidenavModule,MatDialogModule,MatTableModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InicialComponent } from './inicial/inicial.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DialogComponent,
    EditarComponent,
    InicialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatAutocompleteModule, MatCheckboxModule,MatDatepickerModule,
    MatFormFieldModule,MatInputModule,MatRadioModule,
    MatSelectModule,MatSlideToggleModule,MatListModule,
    MatButtonToggleModule,MatProgressSpinnerModule,MatProgressBarModule,
    MatSnackBarModule,MatPaginatorModule,MatNativeDateModule,
    MatSidenavModule,MatDialogModule,MatTableModule,
    FormsModule, ReactiveFormsModule,BrowserAnimationsModule
  ],
  providers: [],
  entryComponents: [
    DialogComponent,
    EditarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
