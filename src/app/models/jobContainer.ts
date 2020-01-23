import { KeyValuePair } from './keyValuePair';

export class GithubJobContainer {
    public image = '';
    public env: KeyValuePair[] = [];
    public ports: {value: number}[] = [];
    public volumes: {value: string}[] = [];
    public options = '';

    public getObject(): any {
        const result: any = {};

        if (this.isImageValid) {
            result.image = this.image;
        }
        if (this.isEnvValid) {
            result.env = this.env.map(e => e.getObject());
        }
        if (this.isPortsValid) {
            result.ports = this.ports.map(v => v.value);
        }
        if (this.isVolumesValid) {
            result.volumes = this.volumes.map(v => v.value);
        }
        if (this.isOptionsValid) {
            result.options = this.options;
        }

        return result;
    }

    public isValid(): boolean {
        return this.isImageValid ||
               this.isEnvValid ||
               this.isPortsValid ||
               this.isVolumesValid ||
               this.isOptionsValid;
    }

    private get isImageValid(): boolean {
        return !!this.image;
    }

    private get isEnvValid(): boolean {
        return this.env && this.env.length > 0;
    }

    private get isPortsValid(): boolean {
        return this.ports && this.ports.length > 0;
    }

    private get isVolumesValid(): boolean {
        return this.volumes && this.volumes.length > 0;
    }

    private get isOptionsValid(): boolean {
        return !!this.options;
    }
}
