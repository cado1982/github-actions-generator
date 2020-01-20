import { Injectable } from '@angular/core';
import * as jsyaml from 'js-yaml';
import { GithubAction } from 'src/app/models/action';
import { GithubEvent, GithubEventType } from 'src/app/models/event';


@Injectable({
    providedIn: 'root'
})
export class GeneratorService {
    public input: GithubAction;

    public results: string;

    public types: any[] = [];

    constructor() {
        this.input = new GithubAction();
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
        ];
    }

    public generate() {
        const results = jsyaml.safeDump(this.input.getObject(), {flowLevel: -1, noCompatMode: true});
        this.results = results;
        console.log(results);
    }

    public getResult(): string {
        return `name: ${this.input.name}`;
    }

    public addEvent() {
        this.input.on.push(new GithubEvent());
    }
}
