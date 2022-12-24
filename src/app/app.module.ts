import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { UserDetialComponent } from './user-detial/user-detial.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    UserDetialComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
