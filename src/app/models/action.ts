import { GithubEvent } from './event';

export class GithubAction {
    public name: string;
    public on: any = [new GithubEvent()];

    public getObject() {
        return {
            name: this.name,
            on: this.on.length === 1 ? this.on[0].getObject() : this.on.map(t => t.getObject())
        };
    }
}
