import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GithubJobService } from 'src/app/models/jobService';
import { KeyValuePair } from 'src/app/models/keyValuePair';

@Component({
    selector: 'app-editor-job-service',
    templateUrl: './editor-job-service.component.html',
    styleUrls: ['./editor-job-service.component.scss']
})
export class EditorJobServiceComponent implements OnInit {
    @Input() public service: GithubJobService;
    @Output() public remove = new EventEmitter<GithubJobService>();

    constructor() { }

    ngOnInit() {
    }

    public addEnvironmentVariable(): void {
        this.service.container.env.push(new KeyValuePair());
    }

    public removeEnvironmentVariable(value: KeyValuePair): void {
        const indexOf = this.service.container.env.indexOf(value);

        if (indexOf !== -1) {
            this.service.container.env.splice(indexOf, 1);
        }
    }
}
