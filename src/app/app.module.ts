import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatRippleModule } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FooterComponent } from './footer/footer.component';
import { LegalDialogComponent } from './legal-dialog/legal-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CardDialogComponent } from './card-dialog/card-dialog.component';
import { CardsComponent } from './cards/cards.component';
import { CallButtonComponent } from './call-button/call-button.component' ;

@NgModule({
  declarations: [AppComponent, ContactFormComponent, FooterComponent, LegalDialogComponent, ToolbarComponent, CardDialogComponent, CardsComponent, CallButtonComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatMenuModule,
    MatRippleModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [MatSnackBar],
  bootstrap: [AppComponent]
})
export class AppModule {}
