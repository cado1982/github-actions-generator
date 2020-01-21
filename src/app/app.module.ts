import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './components/app.component';
import { EditorComponent } from './components/editor/editor.component';
import { ResultsComponent } from './components/results/results.component';
import { EditorEventComponent } from './components/editor-event/editor-event.component';
import { EditorKeyValuePairsComponent } from './components/editor-keyvaluepairs/editor-keyvaluepairs.component';
import { EditorKeyValuePairComponent } from './components/editor-keyvaluepair/editor-keyvaluepair.component';
import { EditorJobsComponent } from './components/editor-jobs/editor-jobs.component';
import { EditorJobComponent } from './components/editor-job/editor-job.component';
import { EditorJobStepsComponent } from './components/editor-job-steps/editor-job-steps.component';
import { EditorJobStepComponent } from './components/editor-job-step/editor-job-step.component';
import { EditorJobStepWithComponent } from './components/editor-job-step-with/editor-job-step-with.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    ResultsComponent,
    EditorEventComponent,
    EditorKeyValuePairsComponent,
    EditorKeyValuePairComponent,
    EditorJobsComponent,
    EditorJobComponent,
    EditorJobStepsComponent,
    EditorJobStepComponent,
    EditorJobStepWithComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
