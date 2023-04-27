import { Component, EventEmitter, Output, Input } from '@angular/core';
import { ButtonCounterService } from 'src/app/service/button-counter.service';

@Component({
  selector: 'app-button-counter',
  templateUrl: './button-counter.component.html',
  styleUrls: ['./button-counter.component.css']
})
export class ButtonCounterComponent {
  constructor(private btnService: ButtonCounterService) { }
  @Output() currentOutputValue = new EventEmitter<number>();
  @Input() isDualButton: any;
  currentValue: number = 0;

  increment() {
    if (this.currentValue < 10) {
      this.currentValue = this.btnService.incrementButton(this.currentValue);
      this.currentOutputValue.emit(this.currentValue);
    } 
  }
}
