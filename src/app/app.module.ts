import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './components/app.component';
import { EditorComponent } from './components/editor/editor.component';
import { ResultsComponent } from './components/results/results.component';
import { EditorEventComponent } from './components/editor-event/editor-event.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    ResultsComponent,
    EditorEventComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
