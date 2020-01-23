import { KeyValuePair } from './keyValuePair';

export class JobStepWith {
    public inputParameters: KeyValuePair[] = [];
    public entrypoint = '';
    public args = '';

    public getObject(): any {
        let value: any = {};

        if (this.inputParameters && this.inputParameters.length > 0) {
            value = this.inputParameters.filter(p => p.key).map(p => p.getObject());
        } else {
            if (this.args) {
                value.args = this.args;
            }
            if (this.entrypoint) {
                value.entrypoint = this.entrypoint;
            }
        }

        return value;
    }
}
