import { KeyValuePair } from './keyValuePair';

export class GithubJobStrategy {
    public failFast = false;
    public maxParallel = 0;
    public matrix: KeyValuePair[] = [];


    public getObject(): any {
        const result: any = {};

        if (this.failFast) {
            result['fail-fast'] = true;
        }
        if (this.maxParallel > 0) {
            result['max-parallel'] = this.maxParallel;
        }
        if (this.matrix && this.matrix.length > 0) {
            result.matrix = this.matrix.map(m => m.getObject());
        }

        return result;
    }
}
