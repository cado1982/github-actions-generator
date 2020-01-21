export class EnvironmentVariable {
    public key = '';
    public value = '';

    public getObject(): {} {
        const result = {};
        result[this.key] = this.value;
        return result;
    }
}
