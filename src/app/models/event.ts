export class GithubEvent {
    public type: GithubEventType;
    public branches = '';
    public branchesIgnore = '';
    public tags = '';
    public tagsIgnore = '';
    public paths = '';
    public pathsIgnore = '';
    public cron = '';

    public getObject(): any {
        if (!this.typesValid &&
            !this.branches &&
            !this.branchesIgnore &&
            !this.tags &&
            !this.tagsIgnore &&
            !this.paths &&
            !this.pathsIgnore &&
            !this.cronValid) {
                return this.type.internalName;
        } else {
            const value: any = {};
            if (this.typesValid) {
                value.types = this.type.selectedTypes;
            }
            if (this.branches && (this.type.internalName === 'push' || this.type.internalName === 'pull_request')) {
                value.branches = this.branches;
            }
            if (this.branchesIgnore && (this.type.internalName === 'push' || this.type.internalName === 'pull_request')) {
                value['branches-ignore'] = this.branchesIgnore;
            }
            if (this.tags && (this.type.internalName === 'push' || this.type.internalName === 'pull_request')) {
                value.tags = this.tags;
            }
            if (this.tagsIgnore && (this.type.internalName === 'push' || this.type.internalName === 'pull_request')) {
                value['tags-ignore'] = this.tagsIgnore;
            }
            if (this.paths && (this.type.internalName === 'push' || this.type.internalName === 'pull_request')) {
                value.paths = this.paths;
            }
            if (this.pathsIgnore && (this.type.internalName === 'push' || this.type.internalName === 'pull_request')) {
                value['paths-ignore'] = this.pathsIgnore;
            }
            if (this.cronValid) {
                value.cron = this.cron;
            }

            const result = {};
            result[this.type.internalName] = value;

            return result;
        }
    }

    private get typesValid(): boolean { return this.type && this.type.selectedTypes && this.type.selectedTypes.length > 0; }
    private get cronValid(): boolean { return this.cron && this.type.internalName === 'schedule'; }
}

export class GithubEventType {
    constructor(
        public displayName: string,
        public internalName: string,
        public types: string[],
        public selectedTypes: string[] = []
    ) {

    }
}
