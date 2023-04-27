import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ButtonCounterService {
  buttonCounter: number = 0;

  constructor() { }
  /*
  Function to increment the button value by 1
  */
  incrementButton(currentValue: number) {
    return currentValue + 1;
  }
}
