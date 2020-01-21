import { GithubEvent } from './event';
import * as YAML from 'yaml';
import { EnvironmentVariable } from './environmentVariable';
import { GithubJob } from './job';

export class GithubAction {
    public name: string;
    public on: GithubEvent[] = [];
    public env: EnvironmentVariable[] = [];
    public jobs: GithubJob[] = [];

    public getObject() {
        const result: any = {};

        if (this.name) { result.name = this.name; }
        if (this.on && this.on.length > 0) { result.on = this.on.map(t => t.getObject()); }
        if (this.env && this.env.length > 0) { result.env = this.env.map(e => e.getObject()); }
        if (this.jobs && this.jobs.length > 0) { result.jobs = this.jobs.map(j => j.getObject()); }

        return result;
    }
}
