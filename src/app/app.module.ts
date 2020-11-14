import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RangeComponent } from './components/range/range.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SampleRangeBasicComponent } from './components/range/sample/sample-range-basic/sample-range-basic.component';
import { SampleRangeTemplateDrivenComponent } from './components/range/sample/sample-range-template-driven/sample-range-template-driven.component';
import { SampleRangeReactiveFormsComponent } from './components/range/sample/sample-range-reactive-forms/sample-range-reactive-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    RangeComponent,
    SampleRangeBasicComponent,
    SampleRangeTemplateDrivenComponent,
    SampleRangeReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
