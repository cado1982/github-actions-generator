import { GithubEventType } from './event';

const eventTypes: GithubEventType[] = [
    new GithubEventType('Push', 'push', []),
    new GithubEventType('Pull Request', 'pull_request', [
        'assigned',
        'unassigned',
        'labeled',
        'unlabeled',
        'opened',
        'edited',
        'closed',
        'reopened',
        'synchronize',
        'ready_for_review',
        'locked',
        'unlocked',
        'review_requested',
        'review_request_removed'
    ]),
    new GithubEventType('Create', 'create', []),
    new GithubEventType('Schedule', 'schedule', []),
    new GithubEventType('Check Run', 'check_run', [
        'created',
        'rerequested',
        'completed',
        'requested_action'
    ]),
    new GithubEventType('Check Suite', 'check_suite', [
        'completed',
        'requested',
        'rerequested'
    ]),
    new GithubEventType('Delete', 'delete', []),
    new GithubEventType('Deployment', 'deployment', []),
    new GithubEventType('Deployment Status', 'deployment_status', []),
    new GithubEventType('Fork', 'fork', []),
    new GithubEventType('Gollum', 'gollum', []),
    new GithubEventType('Issue Comment', 'issue_comment', [
        'created',
        'edited',
        'deleted'
    ]),
    new GithubEventType('Issues', 'issues', [
        'opened',
        'edited',
        'deleted',
        'transferred',
        'pinned',
        'unpinned',
        'closed',
        'reopened',
        'assigned',
        'unassigned',
        'labeled',
        'unlabeled',
        'locked',
        'unlocked',
        'milestoned',
        'demilestoned'
    ]),
    new GithubEventType('Label', 'label', [
        'created',
        'edited',
        'deleted'
    ]),
    new GithubEventType('Milestone', 'milestone', [
        'created',
        'closed',
        'opened',
        'edited',
        'deleted'
    ]),
    new GithubEventType('Page Build', 'page_build', []),
    new GithubEventType('Project', 'project', [
        'created',
        'updated',
        'closed',
        'reopened',
        'edited',
        'deleted'
    ]),
    new GithubEventType('Project Card', 'project_card', [
        'created',
        'moved',
        'converted',
        'edited',
        'deleted',
    ]),
    new GithubEventType('Project Column', 'project_column', [
        'created',
        'updated',
        'moved',
        'deleted'
    ]),
    new GithubEventType('Public', 'public', []),
    new GithubEventType('Pull Request Review', 'pull_request_review', [
        'submitted',
        'edited',
        'dismissed'
    ]),
    new GithubEventType('Pull Request Review Comment', 'pull_request_review_comment', [
        'created',
        'edited',
        'deleted'
    ]),
    new GithubEventType('Release', 'release', [
        'published,',
        'unpublished',
        'created',
        'edited',
        'deleted',
        'prereleased'
    ]),
    new GithubEventType('Status', 'status', []),
    new GithubEventType('Public', 'public', []),
    new GithubEventType('Watch', 'watch', ['starting']),
    new GithubEventType('Repository Dispatch', 'repository_dispatch', [])
];

export default eventTypes;
