import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'buttonCounter';
  /**
   * variable declartion for Header Button
   */

  headerButtonValue: number = 0;
  /**
    * variable declartion for Footer Button
    */
  footerButtonValue: number = 0;
  /**
    * variable declartion for Content Button
    */
  contentButtonValue: number = 0;
  /**
   * variable declartion for SideNav Button
   */
  sideNavButtonValue: number = 0;

  /**
   * Function for update Header Button value
   * @param value number
   */
  updateHeader(value: number) {
    this.headerButtonValue = value;
  }
  /**
   * Function for update Footer Button value
   * @param value number
   */
  updateFooter(value: number) {
    this.footerButtonValue = value;
  }
  /**
   * Function for update Content Button value
   * @param value number
   */
  updateContent(value: number) {
    this.contentButtonValue = value;
  }
  /**
   * Function for update SideNav Button value
   * @param value number
   */
  updateSideNav(value: number) {
    this.sideNavButtonValue = value;
  }
}
