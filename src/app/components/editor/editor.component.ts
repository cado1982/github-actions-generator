import { Component, OnInit } from '@angular/core';
import { GeneratorService } from 'src/app/services/generator.service';
import { GithubEvent } from 'src/app/models/event';
import { EnvironmentVariable } from 'src/app/models/environmentVariable';

@Component({
    selector: 'app-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
    constructor(public generator: GeneratorService) { }

    ngOnInit() {
    }

    public removeEvent(event: GithubEvent): void {
        const indexOf = this.generator.input.on.indexOf(event);

        if (indexOf !== -1) {
            this.generator.input.on.splice(indexOf, 1);
        }
    }

    public addEnvironmentVariable() {
        this.generator.addEnvironmentVariable();
    }

    public removeEnvironmentVariable(env: EnvironmentVariable) {
        this.generator.removeEnvironmentVariable(env);
    }
}
