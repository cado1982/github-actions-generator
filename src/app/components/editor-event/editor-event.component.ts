import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { GithubEvent } from 'src/app/models/event';
import { GeneratorService } from 'src/app/services/generator.service';
import eventTypes from '../../models/eventTypes';

@Component({
    selector: 'app-editor-event',
    templateUrl: './editor-event.component.html',
    styleUrls: ['./editor-event.component.scss']
})
export class EditorEventComponent implements OnInit {
    @Input() public event: GithubEvent;

    private _branchesExcluded = false;
    public get branchesExcluded(): boolean { return this._branchesExcluded; }
    public set branchesExcluded(newValue: boolean) {
        this._branchesExcluded = newValue;

        if (newValue) {
            this.event.branchesIgnore = this.branches;
            this.event.branches = '';
        } else {
            this.event.branchesIgnore = '';
            this.event.branches = this.branches;
        }
    }

    private _tagsExcluded = false;
    public get tagsExcluded(): boolean { return this._tagsExcluded; }
    public set tagsExcluded(newValue: boolean) {
        this._tagsExcluded = newValue;

        if (newValue) {
            this.event.tagsIgnore = this.tags;
            this.event.tags = '';
        } else {
            this.event.tagsIgnore = '';
            this.event.tags = this.tags;
        }
    }

    private _branches: string;
    public get branches(): string { return this._branches; }
    public set branches(newValue: string) {
        this._branches = newValue;

        if (this.branchesExcluded) {
            this.event.branches = '';
            this.event.branchesIgnore = newValue;
        } else {
            this.event.branches = newValue;
            this.event.branchesIgnore = '';
        }
    }

    private _tags: string;
    public get tags(): string { return this._tags; }
    public set tags(newValue: string) {
        this._tags = newValue;

        if (this.tagsExcluded) {
            this.event.tags = '';
            this.event.tagsIgnore = newValue;
        } else {
            this.event.tags = newValue;
            this.event.tagsIgnore = '';
        }
    }

    public types = eventTypes;

    constructor(public generator: GeneratorService) { }

    ngOnInit() {
    }

    public remove(): void {
        this.generator.removeEvent(this.event);
    }

}
