import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
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
