import { GithubEvent } from './event';
import { KeyValuePair } from './keyValuePair';
import { GithubJob } from './job';
import YAML from 'yaml';
import YAMLMap from 'yaml/dist/schema/Map';
import YAMLSeq from 'yaml/dist/schema/Seq';
import YAMLNode from 'yaml/dist/schema/Node';

export class GithubAction {
    public name: string;
    public on: GithubEvent[] = [];
    public env: KeyValuePair[] = [];
    public jobs: GithubJob[] = [];

    public getObject(): YAMLNode {
        const contents: any = {};
        if (this.name) { contents.name = this.name; }
        if (this.on && this.on.length > 0) { contents.on = this.getOn(); }
        if (this.env && this.env.length > 0) { contents.env = this.env.map(e => e.getObject()); }
        if (this.jobs && this.jobs.length > 0) { contents.jobs = this.getJobs(); }

        const node = YAML.createNode(contents);
        node.spaceBefore = true;

        return node;
    }

    private getJobs(): YAMLNode {
        const value = this.jobs.map(j => j.getObject());
        const node = YAML.createNode(value);

        return node;
    }

    public getOn(): YAMLNode {
        if (this.on.length === 1 && typeof this.on[0].getObject() === 'string') {
            const node = YAML.createNode(this.on[0].getObject());
            return node;
        } else if (this.on.every(o => typeof o.getObject() === 'string')) {
            const seq = new YAMLSeq();
            seq.items = this.on.map(e => e.getObject());
            seq.type = 'FLOW_SEQ';
            const node = YAML.createNode(seq);
            return node;
        } else {
            const result: any = {};

            this.on.forEach(on => {
                const value = on.getObject();

                if (typeof value === 'string') {
                    result[value] = null;
                } else {
                    result[on.type.internalName] = on.getObject();
                }
            });

            const node = YAML.createNode(result);
            return node;
        }
    }
}
