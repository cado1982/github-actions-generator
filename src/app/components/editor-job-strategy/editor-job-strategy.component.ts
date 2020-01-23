import { Component, OnInit, Input } from '@angular/core';
import { GithubJobStrategy } from 'src/app/models/jobStrategy';
import { KeyValuePair } from 'src/app/models/keyValuePair';

@Component({
    selector: 'app-editor-job-strategy',
    templateUrl: './editor-job-strategy.component.html',
    styleUrls: ['./editor-job-strategy.component.scss']
})
export class EditorJobStrategyComponent implements OnInit {
    @Input() public strategy: GithubJobStrategy;

    constructor() { }

    ngOnInit() {
    }

    public addMatrix(): void {
        this.strategy.matrix.push(new KeyValuePair());
    }

    public removeMatrix(value: KeyValuePair): void {
        const indexOf = this.strategy.matrix.indexOf(value);

        if (indexOf !== -1) {
            this.strategy.matrix.splice(indexOf, 1);
        }
    }
}
