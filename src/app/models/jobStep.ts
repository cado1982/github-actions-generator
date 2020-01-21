import { KeyValuePair } from './keyValuePair';
import { JobStepWith } from './jobStepWith';

export class GithubJobStep {
    public id = '';
    public if = '';
    public name = '';
    public uses = '';
    public run = '';
    public workingDirectory = '';
    public shell = '';
    public with: JobStepWith = new JobStepWith();
    public continueOnError: boolean;
    public timeoutMinutes: number;
    public env: KeyValuePair[] = [];

    public getObject(): any {
        const result: any = {};
        const value: any = {};

        if (this.if) {
            value.if = this.if.trim();
        }
        if (this.name) {
            value.name = this.name.trim();
        }
        if (this.uses) {
            value.uses = this.uses.trim();
        }
        if (this.run) {
            value.run = this.run.trim();
        }
        if (this.workingDirectory) {
            value['working-directory'] = this.workingDirectory.trim();
        }
        if (this.shell) {
            value.shell = this.shell.trim();
        }
        if (this.env && this.env.length > 0) {
            value.env = this.env.map(e => e.getObject());
        }
        if (this.continueOnError) {
            value['continue-on-error'] = true;
        }
        if (this.timeoutMinutes > 0) {
            value['timeout-minutes'] = this.timeoutMinutes;
        }
        if (this.with) {
            value.with = this.with.getObject();
        }

        if (this.id) {
            result[this.id] = value;

            return result;
        } else {
            return value;
        }
        
    }
}
