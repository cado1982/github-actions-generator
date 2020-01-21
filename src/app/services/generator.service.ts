import { Injectable } from '@angular/core';
import { GithubAction } from 'src/app/models/action';
import { GithubEvent, GithubEventType } from 'src/app/models/event';
import * as YAML from 'yaml';

@Injectable({
    providedIn: 'root'
})
export class GeneratorService {
    public input: GithubAction;

    public results: string;

    public types: any[] = [];

    constructor() {
        this.types = [
            new GithubEventType('Push', 'push', []),
            new GithubEventType('Pull Request', 'pull_request', [
                'assigned',
                'unassigned',
                'labeled',
                'unlabeled',
                'opened',
                'edited',
                'closed',
                'reopened',
                'synchronize',
                'ready_for_review',
                'locked',
                'unlocked',
                'review_requested',
                'review_request_removed'
            ]),
            new GithubEventType('Create', 'create', [])
        ];

        this.input = new GithubAction();
        const event = new GithubEvent();
        event.type = this.types[0];
        this.input.on.push(event);
    }

    public generate() {
        const doc = new Document();
        this.results = YAML.stringify(this.input.getObject());
    }

    public getResult(): string {
        const doc = new Document();
        return YAML.stringify(this.input.getObject());
    }

    public addEvent() {
        const newEvent = new GithubEvent();
        newEvent.type = this.types[0];
        this.input.on.push(newEvent);
    }
}
