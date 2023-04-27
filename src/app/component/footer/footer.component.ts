import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor() { }
  /**
 * variable counterValue for highlighting background
 */
  counterValue: any;
  /** 
  * Emit the output value for background color change
  */
  @Output() currentOutputValue = new EventEmitter<number>();

  /**
   * Funtion to update the emitted counter value
   * @param value number
   */
  update(value: number) {
    this.counterValue = value;
    this.currentOutputValue.emit(value);
  }
}
