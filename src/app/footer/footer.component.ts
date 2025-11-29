import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LegalDialogComponent } from '../legal-dialog/legal-dialog.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(private dialog: MatDialog) {}

  openDialog(type: 'mentions' | 'confidentialite' | 'cgv' | 'contact') {
    this.dialog.open(LegalDialogComponent, {
      width: '700px',
      data: { type },
      panelClass: 'legal-dialog',
      //panelClass: 'custom-dialog-container',
      backdropClass: 'legal-dialog-backdrop'
    });
  }
}
