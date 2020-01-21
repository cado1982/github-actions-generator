import { KeyValuePair } from './keyValuePair';

export class JobStepWith {
    public inputParameters: KeyValuePair[] = [];
    public entrypoint = '';
    public args = '';

    public getObject(): any {
        let value: any = {};

        if (this.inputParameters && this.inputParameters.length > 0) {
            value = this.inputParameters.map(p => p.getObject());
        } else {
            value.args = this.args;
            value.entrypoint = this.entrypoint;
        }

        return value;
    }
}