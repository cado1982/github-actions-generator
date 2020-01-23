import { Component, OnInit, Input } from '@angular/core';
import { GithubJobContainer } from 'src/app/models/jobContainer';
import { KeyValuePair } from 'src/app/models/keyValuePair';

@Component({
    selector: 'app-editor-job-container',
    templateUrl: './editor-job-container.component.html',
    styleUrls: ['./editor-job-container.component.scss']
})
export class EditorJobContainerComponent implements OnInit {
    @Input() public container: GithubJobContainer;

    constructor() { }

    ngOnInit() {
    }

    public addEnvironmentVariable(): void {
        this.container.env.push(new KeyValuePair());
    }

    public removeEnvironmentVariable(value: KeyValuePair): void {
        const indexOf = this.container.env.indexOf(value);

        if (indexOf !== -1) {
            this.container.env.splice(indexOf, 1);
        }
    }
}
