import { EnvironmentVariable } from './environmentVariable';

export class GithubJobStep {
    public id = '';
    public if = '';
    public name = '';
    public uses = '';
    public run = '';
    public workingDirectory = '';
    public shell = '';
    public with: {}[] | {entrypoint: string, args: string} | {entrypoint: string};
    public continueOnError: boolean;
    public timeoutMinutes: number;
    public env: EnvironmentVariable[] = [];

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
            
        }

        result[this.id] = value;

        return result;
    }
}
