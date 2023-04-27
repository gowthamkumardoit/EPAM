import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor() { }
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
