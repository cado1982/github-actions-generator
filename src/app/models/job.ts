import { KeyValuePair } from './keyValuePair';
import { GithubJobStep } from './jobStep';
import { GithubJobStrategy } from './jobStrategy';
import { GithubJobContainer } from './jobContainer';
import { JobStepWith } from './jobStepWith';

export class GithubJob {
    public id = '';
    public name = '';
    public needs: string[] = [];
    public runsOn: string;
    public env: KeyValuePair[] = [];
    public if = '';
    public steps: GithubJobStep[] = [];
    public timeoutMinutes: number | undefined;
    public strategy: GithubJobStrategy = new GithubJobStrategy();
    public container: GithubJobContainer = new GithubJobContainer();
    public services: GithubJobContainer[] = [];

    public getObject(): any {
        const result: any = {};
        const value: any = {};

        if (this.name) {
            value.name = this.name.trim();
        }
        if (this.runsOn) {
            value['runs-on'] = this.runsOn.trim();
        }
        if (this.needs && this.needs.length > 0) {
            value.needs = this.needs.length === 1 ? this.needs[0] : this.needs;
        }
        if (this.env && this.env.length > 0) {
            value.env = this.env.map(e => e.getObject());
        }
        if (this.if) {
            value.if = this.if.trim();
        }
        if (this.timeoutMinutes > 0) {
            value['timeout-minutes'] = this.timeoutMinutes;
        }
        if (this.steps && this.steps.length > 0) {
            value.steps = this.steps.map(s => s.getObject());
        }
        if (this.strategy && this.strategy.matrix.length > 0 || this.strategy.failFast || this.strategy.maxParallel > 0) {
            result.strategy = this.strategy.getObject();
        }
        if (this.container.isValid()) {
            result.container = this.container.getObject();
        }

        result[this.id] = value;

        return result;
    }

    public addEnvironmentVariable(): void {
        this.env.push(new KeyValuePair());
    }

    public removeEnvironmentVariable(env: KeyValuePair): void {
        const indexOf = this.env.indexOf(env);

        if (indexOf !== -1) {
            this.env.splice(indexOf, 1);
        }
    }

    public addStep(): void {
        this.steps.push(new GithubJobStep());
    }

    public removeStep(step: GithubJobStep): void {
        const indexOf = this.steps.indexOf(step);

        if (indexOf !== -1) {
            this.steps.splice(indexOf, 1);
        }
    }
}
