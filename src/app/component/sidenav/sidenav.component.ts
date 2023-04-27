import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
 /** 
   * Emit the output value for background color change
   */
 @Output() currentOutputValue = new EventEmitter<number>();

 /**
  * Funtion to update the emitted counter value
  * @param value number
  */
 update(value: number) {
   this.currentOutputValue.emit(value);
 }
}
