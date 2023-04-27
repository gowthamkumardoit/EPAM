import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { ButtonCounterService } from 'src/app/service/button-counter.service';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Output() currentOutputValue = new EventEmitter<number>();
  currentValue: any;
  constructor(private btnService: ButtonCounterService) {  }

  ngOnInit(): void {
    this.currentValue = this.btnService.buttonCounter;
  }

  increment() {
    if (this.currentValue < 10) {
      this.currentValue = this.btnService.incrementButton(this.currentValue);
      this.currentOutputValue.emit(this.currentValue);
    }
  }
}
