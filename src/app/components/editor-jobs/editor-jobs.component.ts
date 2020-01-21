import { Component, OnInit, Input } from '@angular/core';
import { GithubJob } from 'src/app/models/job';
import { GeneratorService } from 'src/app/services/generator.service';

@Component({
    selector: 'app-editor-jobs',
    templateUrl: './editor-jobs.component.html',
    styleUrls: ['./editor-jobs.component.scss']
})
export class EditorJobsComponent implements OnInit {
    @Input() public jobs: GithubJob[];

    constructor(public generator: GeneratorService) { }

    ngOnInit() {
    }

    public addJob(): void {
        this.generator.addJob();
    }
}
