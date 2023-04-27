import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { ContentComponent } from './component/content/content.component';
import { HighlightDirective } from './shared/highlight.directive';
import { ButtonComponent } from './component/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    ContentComponent,
    HighlightDirective,
    ButtonComponent
  ],
  exports:[],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
