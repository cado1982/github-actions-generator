import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GithubJobStep } from 'src/app/models/jobStep';

@Component({
    selector: 'app-editor-job-steps',
    templateUrl: './editor-job-steps.component.html',
    styleUrls: ['./editor-job-steps.component.scss']
})
export class EditorJobStepsComponent implements OnInit {
    @Input() public steps: GithubJobStep[];
    @Output() public add = new EventEmitter<void>();
    @Output() public remove = new EventEmitter<GithubJobStep>();

    constructor() { }

    ngOnInit() {
    }

}
