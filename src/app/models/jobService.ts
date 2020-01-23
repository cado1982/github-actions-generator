import { GithubJobContainer } from './jobContainer';

export class GithubJobService {
    public id = '';
    public container: GithubJobContainer = new GithubJobContainer();

    public getObject(): any {
        const result: any = {};

        result[this.id] = this.container.getObject();

        return result;
    }
}
