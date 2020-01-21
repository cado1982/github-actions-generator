import { Component, OnInit, Input } from '@angular/core';
import { GithubJob } from 'src/app/models/job';
import { EnvironmentVariable } from 'src/app/models/environmentVariable';

@Component({
    selector: 'app-editor-job',
    templateUrl: './editor-job.component.html',
    styleUrls: ['./editor-job.component.scss']
})
export class EditorJobComponent implements OnInit {
    @Input() public job: GithubJob;

    private _needs = '';
    public get needs() {
        return this._needs;
    }
    public set needs(newValue: string) {
        this._needs = newValue;

        const split = newValue.split(',');
        const trimmed = split.map(s => s.trim());

        this.job.needs = trimmed.filter(t => !!t);
    }

    constructor() { }

    ngOnInit() {
    }

    public addEnvironmentVariable(): void {
        this.job.addEnvironmentVariable();
    }

    public removeEnvironmentVariable(env: EnvironmentVariable): void {
        this.job.removeEnvironmentVariable(env);
    }

}
