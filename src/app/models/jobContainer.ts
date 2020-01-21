import { EnvironmentVariable } from './environmentVariable';

export class GithubJobContainer {
    public id: string;
    public image: string;
    public env: EnvironmentVariable[];
    public ports: number[];
    public volumes: {}[];
    public options: {}[];
}
