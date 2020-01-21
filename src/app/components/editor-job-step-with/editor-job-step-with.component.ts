import { Component, OnInit, Input } from '@angular/core';
import { JobStepWith } from 'src/app/models/jobStepWith';
import { KeyValuePair } from 'src/app/models/keyValuePair';

@Component({
    selector: 'app-editor-job-step-with',
    templateUrl: './editor-job-step-with.component.html',
    styleUrls: ['./editor-job-step-with.component.scss']
})
export class EditorJobStepWithComponent implements OnInit {
    @Input() public with: JobStepWith;

    constructor() { }

    ngOnInit() {
    }

    public addInputParameter(): void {
        this.with.inputParameters.push(new KeyValuePair());
    }

    public removeInputParameter(value: KeyValuePair): void {
        const indexOf = this.with.inputParameters.indexOf(value);

        if (indexOf !== -1) {
            this.with.inputParameters.splice(indexOf, 1);
        }
    }

}
