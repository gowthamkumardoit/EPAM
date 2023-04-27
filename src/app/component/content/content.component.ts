import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  /** 
   * Emit the output value for background color change
   */
  @Output() currentOutputValue = new EventEmitter<number>();

  /**
   * Boolean for Dual Button and pass it to button component as input
   */
  @Input() isDualButton: boolean = true;

  /**
   * Funtion to update the emitted counter value
   * @param value number
   */
  update(value: number) {
    this.currentOutputValue.emit(value);
  }
}
