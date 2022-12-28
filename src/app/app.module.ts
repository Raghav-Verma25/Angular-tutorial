import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { UserDetialComponent } from './user-detial/user-detial.component';
import { Child2Component } from './child2/child2.component';
import { UsdInrPipe } from './pipes/usd-inr.pipe';
import { ReactiveFormValidationComponent } from './reactive-form-validation/reactive-form-validation.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ServiceFooterComponent } from './service-footer/service-footer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    UserDetialComponent,
    Child2Component,
    UsdInrPipe,
    ReactiveFormValidationComponent,
    TemplateDrivenFormComponent,
    ToDoListComponent,
    ServiceFooterComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
