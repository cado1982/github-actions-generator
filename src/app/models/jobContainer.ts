import { KeyValuePair } from './keyValuePair';

export class GithubJobContainer {
    public id: string;
    public image: string;
    public env: KeyValuePair[];
    public ports: number[];
    public volumes: {}[];
    public options: {}[];
}
