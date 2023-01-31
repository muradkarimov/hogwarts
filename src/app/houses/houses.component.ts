import { Component } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { BottomSheetComponent } from '../bottom-sheet/bottom-sheet.component';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss']
})
export class HousesComponent {
  constructor(private _bottomSheet: MatBottomSheet,public router:Router) {}

  openBottomSheet(): void {
  let sheet =   this._bottomSheet.open(BottomSheetComponent);
  sheet.afterDismissed().subscribe(x => {
  this.router.navigate(['/houses']);
  });
}


}
