import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ButtonCounterService {

  constructor() { }
/*
Function to increment the button value by 1
*/
  incrementButton(currentValue: any) {
    return currentValue + 1;
  }
}
