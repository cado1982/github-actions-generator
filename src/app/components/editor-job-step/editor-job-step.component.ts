import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { GithubJobStep } from 'src/app/models/jobStep';
import { KeyValuePair } from 'src/app/models/keyValuePair';

@Component({
    selector: 'app-editor-job-step',
    templateUrl: './editor-job-step.component.html',
    styleUrls: ['./editor-job-step.component.scss']
})
export class EditorJobStepComponent implements OnInit {
    @Input() public step: GithubJobStep;
    @Output() public remove = new EventEmitter<GithubJobStep>();

    constructor() { }

    ngOnInit() {
    }

    public addEnvironmentVariable(): void {
        this.step.env.push(new KeyValuePair());
    }

    public removeEnvironmentVariable(env: KeyValuePair): void {
        const indexOf = this.step.env.indexOf(env);

        if (indexOf !== -1) {
            this.step.env.splice(indexOf, 1);
        }
    }

}
