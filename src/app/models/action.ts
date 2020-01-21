import { GithubEvent } from './event';

export class GithubAction {
    public name: string;
    public on: any = [];

    public getObject() {
        return {
            name: this.name,
            on: this.on.map(t => t.getObject())
        };
    }
}
