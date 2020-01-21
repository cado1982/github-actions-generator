export class GithubEvent {
    public type: GithubEventType;
    public types: string[] | undefined;
    public branches: string | undefined;
    public branchesIgnore: string | undefined;
    public tags: string | undefined;
    public tagsIgnore: string | undefined;
    public paths: string | undefined;
    public pathsIgnore: string | undefined;
    public schedule: string | undefined;

    public getObject(): any {
        if (!this.types &&
            !this.branches &&
            !this.branchesIgnore &&
            !this.tags &&
            !this.tagsIgnore &&
            !this.paths &&
            !this.pathsIgnore &&
            !this.schedule) {
                return this.type.internalName;
        } else {
            const value: any = {};
            if (this.types) {
                value.types = this.types;
            }
            if (this.branches && (this.type.internalName === 'push' || this.type.internalName === 'pull_request')) {
                value.branches = this.branches;
            }
            if (this.branchesIgnore && (this.type.internalName === 'push' || this.type.internalName === 'pull_request')) {
                value.branchesIgnore = this.branchesIgnore;
            }
            if (this.tags && (this.type.internalName === 'push' || this.type.internalName === 'pull_request')) {
                value.tags = this.tags;
            }
            if (this.tagsIgnore && (this.type.internalName === 'push' || this.type.internalName === 'pull_request')) {
                value.tagsIgnore = this.tagsIgnore;
            }
            if (this.paths && (this.type.internalName === 'push' || this.type.internalName === 'pull_request')) {
                value.paths = this.paths;
            }
            if (this.pathsIgnore && (this.type.internalName === 'push' || this.type.internalName === 'pull_request')) {
                value.pathsIgnore = this.pathsIgnore;
            }
            if (this.schedule) {
                value.schedule = this.schedule;
            }

            const result = {};
            result[this.type.internalName] = value;

            return result;
        }
    }
}

export class GithubEventType {
    constructor(
        public displayName: string,
        public internalName: string,
        public types: string[]
    ) {

    }
}
