export class KeyValuePair {
    public key = '';
    public value = '';

    public getObject(): {} {
        const result = {};
        result[this.key] = this.value;
        return result;
    }
}
