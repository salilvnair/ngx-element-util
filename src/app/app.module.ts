import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { NgxElementUtilModule } from 'projects/ngx-element-util/src/public-api';

const CUSTOM_ELEMENT_ENTRY_COMPONENT  = [
  TestComponent
]
@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    NgxElementUtilModule
  ],
  providers: [],
  entryComponents: [CUSTOM_ELEMENT_ENTRY_COMPONENT],
  bootstrap: [AppComponent]
})
export class AppModule { }
