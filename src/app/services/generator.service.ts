import { Injectable } from '@angular/core';
import { GithubAction } from 'src/app/models/action';
import { GithubEvent, GithubEventType } from 'src/app/models/event';
import * as YAML from 'yaml';
import { KeyValuePair } from '../models/keyValuePair';
import { GithubJob } from '../models/job';
import eventTypes from '../models/eventTypes';

@Injectable({
    providedIn: 'root'
})
export class GeneratorService {
    public input: GithubAction;

    constructor() {
        this.input = new GithubAction();
        const event = new GithubEvent();
        event.type = eventTypes[0];
        this.input.on.push(event);
    }

    public getResult(): string {
        return YAML.stringify(this.input.getObject());
    }

    public addEvent() {
        const newEvent = new GithubEvent();
        newEvent.type = eventTypes[0];
        this.input.on.push(newEvent);
    }

    public removeEvent(event: GithubEvent) {
        const indexOf = this.input.on.indexOf(event);

        if (indexOf !== -1) {
            this.input.on.splice(indexOf, 1);
        }
    }

    public addEnvironmentVariable(): void {
        this.input.env.push(new KeyValuePair());
    }

    public removeEnvironmentVariable(env: KeyValuePair): void {
        const indexOf = this.input.env.indexOf(env);

        if (indexOf !== -1) {
            this.input.env.splice(indexOf, 1);
        }
    }

    public addJob(): void {
        this.input.jobs.push(new GithubJob());
    }

    public removeJob(job: GithubJob): void {
        const indexOf = this.input.jobs.indexOf(job);

        if (indexOf !== -1) {
            this.input.jobs.splice(indexOf, 1);
        }
    }
}
