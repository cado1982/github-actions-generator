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
            const result = {};
            result[this.type.internalName] = {
                types: this.types
            };

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
