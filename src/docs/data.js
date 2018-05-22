// cached data so we don't abuse github's API in dev
const data = [
  {
    id: 10270250,
    name: 'react',
    full_name: 'facebook/react',
    owner: {
      login: 'facebook',
      id: 69631,
      avatar_url: 'https://avatars3.githubusercontent.com/u/69631?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/facebook',
      html_url: 'https://github.com/facebook',
      followers_url: 'https://api.github.com/users/facebook/followers',
      following_url:
        'https://api.github.com/users/facebook/following{/other_user}',
      gists_url: 'https://api.github.com/users/facebook/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/facebook/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/facebook/subscriptions',
      organizations_url: 'https://api.github.com/users/facebook/orgs',
      repos_url: 'https://api.github.com/users/facebook/repos',
      events_url: 'https://api.github.com/users/facebook/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/facebook/received_events',
      type: 'Organization',
      site_admin: false,
    },
    private: false,
    html_url: 'https://github.com/facebook/react',
    description:
      'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
    fork: false,
    url: 'https://api.github.com/repos/facebook/react',
    forks_url: 'https://api.github.com/repos/facebook/react/forks',
    keys_url: 'https://api.github.com/repos/facebook/react/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/facebook/react/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/facebook/react/teams',
    hooks_url: 'https://api.github.com/repos/facebook/react/hooks',
    issue_events_url:
      'https://api.github.com/repos/facebook/react/issues/events{/number}',
    events_url: 'https://api.github.com/repos/facebook/react/events',
    assignees_url:
      'https://api.github.com/repos/facebook/react/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/facebook/react/branches{/branch}',
    tags_url: 'https://api.github.com/repos/facebook/react/tags',
    blobs_url: 'https://api.github.com/repos/facebook/react/git/blobs{/sha}',
    git_tags_url: 'https://api.github.com/repos/facebook/react/git/tags{/sha}',
    git_refs_url: 'https://api.github.com/repos/facebook/react/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/facebook/react/git/trees{/sha}',
    statuses_url: 'https://api.github.com/repos/facebook/react/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/facebook/react/languages',
    stargazers_url: 'https://api.github.com/repos/facebook/react/stargazers',
    contributors_url:
      'https://api.github.com/repos/facebook/react/contributors',
    subscribers_url: 'https://api.github.com/repos/facebook/react/subscribers',
    subscription_url:
      'https://api.github.com/repos/facebook/react/subscription',
    commits_url: 'https://api.github.com/repos/facebook/react/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/facebook/react/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/facebook/react/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/facebook/react/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/facebook/react/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/facebook/react/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/facebook/react/merges',
    archive_url:
      'https://api.github.com/repos/facebook/react/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/facebook/react/downloads',
    issues_url: 'https://api.github.com/repos/facebook/react/issues{/number}',
    pulls_url: 'https://api.github.com/repos/facebook/react/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/facebook/react/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/facebook/react/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/facebook/react/labels{/name}',
    releases_url: 'https://api.github.com/repos/facebook/react/releases{/id}',
    deployments_url: 'https://api.github.com/repos/facebook/react/deployments',
    created_at: '2013-05-24T16:15:54Z',
    updated_at: '2018-05-21T21:39:37Z',
    pushed_at: '2018-05-21T18:21:47Z',
    git_url: 'git://github.com/facebook/react.git',
    ssh_url: 'git@github.com:facebook/react.git',
    clone_url: 'https://github.com/facebook/react.git',
    svn_url: 'https://github.com/facebook/react',
    homepage: 'https://reactjs.org',
    size: 136066,
    stargazers_count: 96301,
    watchers_count: 96301,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    forks_count: 18127,
    mirror_url: null,
    archived: false,
    open_issues_count: 462,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
    },
    forks: 18127,
    open_issues: 462,
    watchers: 96301,
    default_branch: 'master',
    score: 144.78847,
  },
  {
    id: 4287921,
    name: 'react',
    full_name: 'reactphp/react',
    owner: {
      login: 'reactphp',
      id: 1696866,
      avatar_url: 'https://avatars2.githubusercontent.com/u/1696866?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/reactphp',
      html_url: 'https://github.com/reactphp',
      followers_url: 'https://api.github.com/users/reactphp/followers',
      following_url:
        'https://api.github.com/users/reactphp/following{/other_user}',
      gists_url: 'https://api.github.com/users/reactphp/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/reactphp/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/reactphp/subscriptions',
      organizations_url: 'https://api.github.com/users/reactphp/orgs',
      repos_url: 'https://api.github.com/users/reactphp/repos',
      events_url: 'https://api.github.com/users/reactphp/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/reactphp/received_events',
      type: 'Organization',
      site_admin: false,
    },
    private: false,
    html_url: 'https://github.com/reactphp/react',
    description: 'Event-driven, non-blocking I/O with PHP.',
    fork: false,
    url: 'https://api.github.com/repos/reactphp/react',
    forks_url: 'https://api.github.com/repos/reactphp/react/forks',
    keys_url: 'https://api.github.com/repos/reactphp/react/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/reactphp/react/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/reactphp/react/teams',
    hooks_url: 'https://api.github.com/repos/reactphp/react/hooks',
    issue_events_url:
      'https://api.github.com/repos/reactphp/react/issues/events{/number}',
    events_url: 'https://api.github.com/repos/reactphp/react/events',
    assignees_url:
      'https://api.github.com/repos/reactphp/react/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/reactphp/react/branches{/branch}',
    tags_url: 'https://api.github.com/repos/reactphp/react/tags',
    blobs_url: 'https://api.github.com/repos/reactphp/react/git/blobs{/sha}',
    git_tags_url: 'https://api.github.com/repos/reactphp/react/git/tags{/sha}',
    git_refs_url: 'https://api.github.com/repos/reactphp/react/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/reactphp/react/git/trees{/sha}',
    statuses_url: 'https://api.github.com/repos/reactphp/react/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/reactphp/react/languages',
    stargazers_url: 'https://api.github.com/repos/reactphp/react/stargazers',
    contributors_url:
      'https://api.github.com/repos/reactphp/react/contributors',
    subscribers_url: 'https://api.github.com/repos/reactphp/react/subscribers',
    subscription_url:
      'https://api.github.com/repos/reactphp/react/subscription',
    commits_url: 'https://api.github.com/repos/reactphp/react/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/reactphp/react/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/reactphp/react/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/reactphp/react/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/reactphp/react/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/reactphp/react/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/reactphp/react/merges',
    archive_url:
      'https://api.github.com/repos/reactphp/react/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/reactphp/react/downloads',
    issues_url: 'https://api.github.com/repos/reactphp/react/issues{/number}',
    pulls_url: 'https://api.github.com/repos/reactphp/react/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/reactphp/react/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/reactphp/react/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/reactphp/react/labels{/name}',
    releases_url: 'https://api.github.com/repos/reactphp/react/releases{/id}',
    deployments_url: 'https://api.github.com/repos/reactphp/react/deployments',
    created_at: '2012-05-10T18:00:00Z',
    updated_at: '2018-05-21T21:28:16Z',
    pushed_at: '2018-05-17T18:39:11Z',
    git_url: 'git://github.com/reactphp/react.git',
    ssh_url: 'git@github.com:reactphp/react.git',
    clone_url: 'https://github.com/reactphp/react.git',
    svn_url: 'https://github.com/reactphp/react',
    homepage: 'https://reactphp.org',
    size: 1321,
    stargazers_count: 6103,
    watchers_count: 6103,
    language: 'PHP',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 596,
    mirror_url: null,
    archived: false,
    open_issues_count: 7,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
    },
    forks: 596,
    open_issues: 7,
    watchers: 6103,
    default_branch: 'master',
    score: 102.72608,
  },
  {
    id: 75396575,
    name: 'react',
    full_name: 'duxianwei520/react',
    owner: {
      login: 'duxianwei520',
      id: 3249653,
      avatar_url: 'https://avatars1.githubusercontent.com/u/3249653?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/duxianwei520',
      html_url: 'https://github.com/duxianwei520',
      followers_url: 'https://api.github.com/users/duxianwei520/followers',
      following_url:
        'https://api.github.com/users/duxianwei520/following{/other_user}',
      gists_url: 'https://api.github.com/users/duxianwei520/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/duxianwei520/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/duxianwei520/subscriptions',
      organizations_url: 'https://api.github.com/users/duxianwei520/orgs',
      repos_url: 'https://api.github.com/users/duxianwei520/repos',
      events_url: 'https://api.github.com/users/duxianwei520/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/duxianwei520/received_events',
      type: 'User',
      site_admin: false,
    },
    private: false,
    html_url: 'https://github.com/duxianwei520/react',
    description: '一个react+redux+webpack+ES6+antd的SPA的后台管理底层框架',
    fork: false,
    url: 'https://api.github.com/repos/duxianwei520/react',
    forks_url: 'https://api.github.com/repos/duxianwei520/react/forks',
    keys_url: 'https://api.github.com/repos/duxianwei520/react/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/duxianwei520/react/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/duxianwei520/react/teams',
    hooks_url: 'https://api.github.com/repos/duxianwei520/react/hooks',
    issue_events_url:
      'https://api.github.com/repos/duxianwei520/react/issues/events{/number}',
    events_url: 'https://api.github.com/repos/duxianwei520/react/events',
    assignees_url:
      'https://api.github.com/repos/duxianwei520/react/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/duxianwei520/react/branches{/branch}',
    tags_url: 'https://api.github.com/repos/duxianwei520/react/tags',
    blobs_url:
      'https://api.github.com/repos/duxianwei520/react/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/duxianwei520/react/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/duxianwei520/react/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/duxianwei520/react/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/duxianwei520/react/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/duxianwei520/react/languages',
    stargazers_url:
      'https://api.github.com/repos/duxianwei520/react/stargazers',
    contributors_url:
      'https://api.github.com/repos/duxianwei520/react/contributors',
    subscribers_url:
      'https://api.github.com/repos/duxianwei520/react/subscribers',
    subscription_url:
      'https://api.github.com/repos/duxianwei520/react/subscription',
    commits_url:
      'https://api.github.com/repos/duxianwei520/react/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/duxianwei520/react/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/duxianwei520/react/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/duxianwei520/react/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/duxianwei520/react/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/duxianwei520/react/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/duxianwei520/react/merges',
    archive_url:
      'https://api.github.com/repos/duxianwei520/react/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/duxianwei520/react/downloads',
    issues_url:
      'https://api.github.com/repos/duxianwei520/react/issues{/number}',
    pulls_url: 'https://api.github.com/repos/duxianwei520/react/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/duxianwei520/react/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/duxianwei520/react/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/duxianwei520/react/labels{/name}',
    releases_url:
      'https://api.github.com/repos/duxianwei520/react/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/duxianwei520/react/deployments',
    created_at: '2016-12-02T13:08:43Z',
    updated_at: '2018-05-21T09:54:35Z',
    pushed_at: '2018-04-18T03:51:59Z',
    git_url: 'git://github.com/duxianwei520/react.git',
    ssh_url: 'git@github.com:duxianwei520/react.git',
    clone_url: 'https://github.com/duxianwei520/react.git',
    svn_url: 'https://github.com/duxianwei520/react',
    homepage: '',
    size: 3983,
    stargazers_count: 1754,
    watchers_count: 1754,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    forks_count: 658,
    mirror_url: null,
    archived: false,
    open_issues_count: 6,
    license: {
      key: 'gpl-2.0',
      name: 'GNU General Public License v2.0',
      spdx_id: 'GPL-2.0',
      url: 'https://api.github.com/licenses/gpl-2.0',
    },
    forks: 658,
    open_issues: 6,
    watchers: 1754,
    default_branch: 'master',
    score: 98.655525,
  },
  {
    id: 90759930,
    name: 'react',
    full_name: 'discountry/react',
    owner: {
      login: 'discountry',
      id: 4507101,
      avatar_url: 'https://avatars0.githubusercontent.com/u/4507101?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/discountry',
      html_url: 'https://github.com/discountry',
      followers_url: 'https://api.github.com/users/discountry/followers',
      following_url:
        'https://api.github.com/users/discountry/following{/other_user}',
      gists_url: 'https://api.github.com/users/discountry/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/discountry/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/discountry/subscriptions',
      organizations_url: 'https://api.github.com/users/discountry/orgs',
      repos_url: 'https://api.github.com/users/discountry/repos',
      events_url: 'https://api.github.com/users/discountry/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/discountry/received_events',
      type: 'User',
      site_admin: false,
    },
    private: false,
    html_url: 'https://github.com/discountry/react',
    description: 'React docs in Chinese | React 中文文档翻译',
    fork: false,
    url: 'https://api.github.com/repos/discountry/react',
    forks_url: 'https://api.github.com/repos/discountry/react/forks',
    keys_url: 'https://api.github.com/repos/discountry/react/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/discountry/react/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/discountry/react/teams',
    hooks_url: 'https://api.github.com/repos/discountry/react/hooks',
    issue_events_url:
      'https://api.github.com/repos/discountry/react/issues/events{/number}',
    events_url: 'https://api.github.com/repos/discountry/react/events',
    assignees_url:
      'https://api.github.com/repos/discountry/react/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/discountry/react/branches{/branch}',
    tags_url: 'https://api.github.com/repos/discountry/react/tags',
    blobs_url: 'https://api.github.com/repos/discountry/react/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/discountry/react/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/discountry/react/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/discountry/react/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/discountry/react/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/discountry/react/languages',
    stargazers_url: 'https://api.github.com/repos/discountry/react/stargazers',
    contributors_url:
      'https://api.github.com/repos/discountry/react/contributors',
    subscribers_url:
      'https://api.github.com/repos/discountry/react/subscribers',
    subscription_url:
      'https://api.github.com/repos/discountry/react/subscription',
    commits_url: 'https://api.github.com/repos/discountry/react/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/discountry/react/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/discountry/react/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/discountry/react/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/discountry/react/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/discountry/react/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/discountry/react/merges',
    archive_url:
      'https://api.github.com/repos/discountry/react/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/discountry/react/downloads',
    issues_url: 'https://api.github.com/repos/discountry/react/issues{/number}',
    pulls_url: 'https://api.github.com/repos/discountry/react/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/discountry/react/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/discountry/react/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/discountry/react/labels{/name}',
    releases_url: 'https://api.github.com/repos/discountry/react/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/discountry/react/deployments',
    created_at: '2017-05-09T15:09:00Z',
    updated_at: '2018-05-21T06:29:27Z',
    pushed_at: '2018-05-18T09:37:06Z',
    git_url: 'git://github.com/discountry/react.git',
    ssh_url: 'git@github.com:discountry/react.git',
    clone_url: 'https://github.com/discountry/react.git',
    svn_url: 'https://github.com/discountry/react',
    homepage: 'https://doc.react-china.org/',
    size: 187005,
    stargazers_count: 552,
    watchers_count: 552,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    forks_count: 270,
    mirror_url: null,
    archived: false,
    open_issues_count: 2,
    license: {
      key: 'cc-by-4.0',
      name: 'Creative Commons Attribution 4.0',
      spdx_id: 'CC-BY-4.0',
      url: 'https://api.github.com/licenses/cc-by-4.0',
    },
    forks: 270,
    open_issues: 2,
    watchers: 552,
    default_branch: 'master',
    score: 85.86497,
  },
  {
    id: 72628285,
    name: 'react',
    full_name: 'Cathy0807/react',
    owner: {
      login: 'Cathy0807',
      id: 20653643,
      avatar_url: 'https://avatars0.githubusercontent.com/u/20653643?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Cathy0807',
      html_url: 'https://github.com/Cathy0807',
      followers_url: 'https://api.github.com/users/Cathy0807/followers',
      following_url:
        'https://api.github.com/users/Cathy0807/following{/other_user}',
      gists_url: 'https://api.github.com/users/Cathy0807/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/Cathy0807/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/Cathy0807/subscriptions',
      organizations_url: 'https://api.github.com/users/Cathy0807/orgs',
      repos_url: 'https://api.github.com/users/Cathy0807/repos',
      events_url: 'https://api.github.com/users/Cathy0807/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/Cathy0807/received_events',
      type: 'User',
      site_admin: false,
    },
    private: false,
    html_url: 'https://github.com/Cathy0807/react',
    description: '京东首页构建',
    fork: false,
    url: 'https://api.github.com/repos/Cathy0807/react',
    forks_url: 'https://api.github.com/repos/Cathy0807/react/forks',
    keys_url: 'https://api.github.com/repos/Cathy0807/react/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/Cathy0807/react/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/Cathy0807/react/teams',
    hooks_url: 'https://api.github.com/repos/Cathy0807/react/hooks',
    issue_events_url:
      'https://api.github.com/repos/Cathy0807/react/issues/events{/number}',
    events_url: 'https://api.github.com/repos/Cathy0807/react/events',
    assignees_url:
      'https://api.github.com/repos/Cathy0807/react/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/Cathy0807/react/branches{/branch}',
    tags_url: 'https://api.github.com/repos/Cathy0807/react/tags',
    blobs_url: 'https://api.github.com/repos/Cathy0807/react/git/blobs{/sha}',
    git_tags_url: 'https://api.github.com/repos/Cathy0807/react/git/tags{/sha}',
    git_refs_url: 'https://api.github.com/repos/Cathy0807/react/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/Cathy0807/react/git/trees{/sha}',
    statuses_url: 'https://api.github.com/repos/Cathy0807/react/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/Cathy0807/react/languages',
    stargazers_url: 'https://api.github.com/repos/Cathy0807/react/stargazers',
    contributors_url:
      'https://api.github.com/repos/Cathy0807/react/contributors',
    subscribers_url: 'https://api.github.com/repos/Cathy0807/react/subscribers',
    subscription_url:
      'https://api.github.com/repos/Cathy0807/react/subscription',
    commits_url: 'https://api.github.com/repos/Cathy0807/react/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/Cathy0807/react/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/Cathy0807/react/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/Cathy0807/react/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/Cathy0807/react/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/Cathy0807/react/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/Cathy0807/react/merges',
    archive_url:
      'https://api.github.com/repos/Cathy0807/react/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/Cathy0807/react/downloads',
    issues_url: 'https://api.github.com/repos/Cathy0807/react/issues{/number}',
    pulls_url: 'https://api.github.com/repos/Cathy0807/react/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/Cathy0807/react/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/Cathy0807/react/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/Cathy0807/react/labels{/name}',
    releases_url: 'https://api.github.com/repos/Cathy0807/react/releases{/id}',
    deployments_url: 'https://api.github.com/repos/Cathy0807/react/deployments',
    created_at: '2016-11-02T10:18:45Z',
    updated_at: '2018-05-21T09:00:50Z',
    pushed_at: '2016-11-01T11:02:41Z',
    git_url: 'git://github.com/Cathy0807/react.git',
    ssh_url: 'git@github.com:Cathy0807/react.git',
    clone_url: 'https://github.com/Cathy0807/react.git',
    svn_url: 'https://github.com/Cathy0807/react',
    homepage: null,
    size: 940,
    stargazers_count: 291,
    watchers_count: 291,
    language: 'JavaScript',
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 219,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: null,
    forks: 219,
    open_issues: 0,
    watchers: 291,
    default_branch: 'master',
    score: 81.556366,
  },
  {
    id: 73039160,
    name: 'react-pxq',
    full_name: 'bailicangdu/react-pxq',
    owner: {
      login: 'bailicangdu',
      id: 20297227,
      avatar_url: 'https://avatars2.githubusercontent.com/u/20297227?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/bailicangdu',
      html_url: 'https://github.com/bailicangdu',
      followers_url: 'https://api.github.com/users/bailicangdu/followers',
      following_url:
        'https://api.github.com/users/bailicangdu/following{/other_user}',
      gists_url: 'https://api.github.com/users/bailicangdu/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/bailicangdu/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/bailicangdu/subscriptions',
      organizations_url: 'https://api.github.com/users/bailicangdu/orgs',
      repos_url: 'https://api.github.com/users/bailicangdu/repos',
      events_url: 'https://api.github.com/users/bailicangdu/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/bailicangdu/received_events',
      type: 'User',
      site_admin: false,
    },
    private: false,
    html_url: 'https://github.com/bailicangdu/react-pxq',
    description: '一个 react + redux 的完整项目 和 个人总结',
    fork: false,
    url: 'https://api.github.com/repos/bailicangdu/react-pxq',
    forks_url: 'https://api.github.com/repos/bailicangdu/react-pxq/forks',
    keys_url:
      'https://api.github.com/repos/bailicangdu/react-pxq/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/bailicangdu/react-pxq/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/bailicangdu/react-pxq/teams',
    hooks_url: 'https://api.github.com/repos/bailicangdu/react-pxq/hooks',
    issue_events_url:
      'https://api.github.com/repos/bailicangdu/react-pxq/issues/events{/number}',
    events_url: 'https://api.github.com/repos/bailicangdu/react-pxq/events',
    assignees_url:
      'https://api.github.com/repos/bailicangdu/react-pxq/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/bailicangdu/react-pxq/branches{/branch}',
    tags_url: 'https://api.github.com/repos/bailicangdu/react-pxq/tags',
    blobs_url:
      'https://api.github.com/repos/bailicangdu/react-pxq/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/bailicangdu/react-pxq/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/bailicangdu/react-pxq/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/bailicangdu/react-pxq/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/bailicangdu/react-pxq/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/bailicangdu/react-pxq/languages',
    stargazers_url:
      'https://api.github.com/repos/bailicangdu/react-pxq/stargazers',
    contributors_url:
      'https://api.github.com/repos/bailicangdu/react-pxq/contributors',
    subscribers_url:
      'https://api.github.com/repos/bailicangdu/react-pxq/subscribers',
    subscription_url:
      'https://api.github.com/repos/bailicangdu/react-pxq/subscription',
    commits_url:
      'https://api.github.com/repos/bailicangdu/react-pxq/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/bailicangdu/react-pxq/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/bailicangdu/react-pxq/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/bailicangdu/react-pxq/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/bailicangdu/react-pxq/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/bailicangdu/react-pxq/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/bailicangdu/react-pxq/merges',
    archive_url:
      'https://api.github.com/repos/bailicangdu/react-pxq/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/bailicangdu/react-pxq/downloads',
    issues_url:
      'https://api.github.com/repos/bailicangdu/react-pxq/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/bailicangdu/react-pxq/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/bailicangdu/react-pxq/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/bailicangdu/react-pxq/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/bailicangdu/react-pxq/labels{/name}',
    releases_url:
      'https://api.github.com/repos/bailicangdu/react-pxq/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/bailicangdu/react-pxq/deployments',
    created_at: '2016-11-07T03:30:29Z',
    updated_at: '2018-05-21T18:50:21Z',
    pushed_at: '2018-05-12T10:04:35Z',
    git_url: 'git://github.com/bailicangdu/react-pxq.git',
    ssh_url: 'git@github.com:bailicangdu/react-pxq.git',
    clone_url: 'https://github.com/bailicangdu/react-pxq.git',
    svn_url: 'https://github.com/bailicangdu/react-pxq',
    homepage: '',
    size: 2957,
    stargazers_count: 4685,
    watchers_count: 4685,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 1581,
    mirror_url: null,
    archived: false,
    open_issues_count: 76,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
    },
    forks: 1581,
    open_issues: 76,
    watchers: 4685,
    default_branch: 'master',
    score: 75.725075,
  },
  {
    id: 77513419,
    name: 'react',
    full_name: 'react-redux-antd-es6/react',
    owner: {
      login: 'react-redux-antd-es6',
      id: 24805142,
      avatar_url: 'https://avatars3.githubusercontent.com/u/24805142?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/react-redux-antd-es6',
      html_url: 'https://github.com/react-redux-antd-es6',
      followers_url:
        'https://api.github.com/users/react-redux-antd-es6/followers',
      following_url:
        'https://api.github.com/users/react-redux-antd-es6/following{/other_user}',
      gists_url:
        'https://api.github.com/users/react-redux-antd-es6/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/react-redux-antd-es6/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/react-redux-antd-es6/subscriptions',
      organizations_url:
        'https://api.github.com/users/react-redux-antd-es6/orgs',
      repos_url: 'https://api.github.com/users/react-redux-antd-es6/repos',
      events_url:
        'https://api.github.com/users/react-redux-antd-es6/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/react-redux-antd-es6/received_events',
      type: 'Organization',
      site_admin: false,
    },
    private: false,
    html_url: 'https://github.com/react-redux-antd-es6/react',
    description: '基于react的企业后台管理开发框架',
    fork: false,
    url: 'https://api.github.com/repos/react-redux-antd-es6/react',
    forks_url: 'https://api.github.com/repos/react-redux-antd-es6/react/forks',
    keys_url:
      'https://api.github.com/repos/react-redux-antd-es6/react/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/react-redux-antd-es6/react/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/react-redux-antd-es6/react/teams',
    hooks_url: 'https://api.github.com/repos/react-redux-antd-es6/react/hooks',
    issue_events_url:
      'https://api.github.com/repos/react-redux-antd-es6/react/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/react-redux-antd-es6/react/events',
    assignees_url:
      'https://api.github.com/repos/react-redux-antd-es6/react/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/react-redux-antd-es6/react/branches{/branch}',
    tags_url: 'https://api.github.com/repos/react-redux-antd-es6/react/tags',
    blobs_url:
      'https://api.github.com/repos/react-redux-antd-es6/react/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/react-redux-antd-es6/react/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/react-redux-antd-es6/react/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/react-redux-antd-es6/react/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/react-redux-antd-es6/react/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/react-redux-antd-es6/react/languages',
    stargazers_url:
      'https://api.github.com/repos/react-redux-antd-es6/react/stargazers',
    contributors_url:
      'https://api.github.com/repos/react-redux-antd-es6/react/contributors',
    subscribers_url:
      'https://api.github.com/repos/react-redux-antd-es6/react/subscribers',
    subscription_url:
      'https://api.github.com/repos/react-redux-antd-es6/react/subscription',
    commits_url:
      'https://api.github.com/repos/react-redux-antd-es6/react/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/react-redux-antd-es6/react/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/react-redux-antd-es6/react/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/react-redux-antd-es6/react/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/react-redux-antd-es6/react/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/react-redux-antd-es6/react/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/react-redux-antd-es6/react/merges',
    archive_url:
      'https://api.github.com/repos/react-redux-antd-es6/react/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/react-redux-antd-es6/react/downloads',
    issues_url:
      'https://api.github.com/repos/react-redux-antd-es6/react/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/react-redux-antd-es6/react/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/react-redux-antd-es6/react/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/react-redux-antd-es6/react/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/react-redux-antd-es6/react/labels{/name}',
    releases_url:
      'https://api.github.com/repos/react-redux-antd-es6/react/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/react-redux-antd-es6/react/deployments',
    created_at: '2016-12-28T07:44:04Z',
    updated_at: '2018-05-17T05:44:16Z',
    pushed_at: '2018-03-13T15:09:52Z',
    git_url: 'git://github.com/react-redux-antd-es6/react.git',
    ssh_url: 'git@github.com:react-redux-antd-es6/react.git',
    clone_url: 'https://github.com/react-redux-antd-es6/react.git',
    svn_url: 'https://github.com/react-redux-antd-es6/react',
    homepage: '',
    size: 42581,
    stargazers_count: 304,
    watchers_count: 304,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 111,
    mirror_url: null,
    archived: false,
    open_issues_count: 2,
    license: {
      key: 'gpl-2.0',
      name: 'GNU General Public License v2.0',
      spdx_id: 'GPL-2.0',
      url: 'https://api.github.com/licenses/gpl-2.0',
    },
    forks: 111,
    open_issues: 2,
    watchers: 304,
    default_branch: 'master',
    score: 75.1819,
  },
  {
    id: 39316535,
    name: 'react',
    full_name: 'azat-co/react',
    owner: {
      login: 'azat-co',
      id: 1137314,
      avatar_url: 'https://avatars1.githubusercontent.com/u/1137314?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/azat-co',
      html_url: 'https://github.com/azat-co',
      followers_url: 'https://api.github.com/users/azat-co/followers',
      following_url:
        'https://api.github.com/users/azat-co/following{/other_user}',
      gists_url: 'https://api.github.com/users/azat-co/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/azat-co/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/azat-co/subscriptions',
      organizations_url: 'https://api.github.com/users/azat-co/orgs',
      repos_url: 'https://api.github.com/users/azat-co/repos',
      events_url: 'https://api.github.com/users/azat-co/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/azat-co/received_events',
      type: 'User',
      site_admin: false,
    },
    private: false,
    html_url: 'https://github.com/azat-co/react',
    description: 'Examples for the React Quickly book. ',
    fork: false,
    url: 'https://api.github.com/repos/azat-co/react',
    forks_url: 'https://api.github.com/repos/azat-co/react/forks',
    keys_url: 'https://api.github.com/repos/azat-co/react/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/azat-co/react/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/azat-co/react/teams',
    hooks_url: 'https://api.github.com/repos/azat-co/react/hooks',
    issue_events_url:
      'https://api.github.com/repos/azat-co/react/issues/events{/number}',
    events_url: 'https://api.github.com/repos/azat-co/react/events',
    assignees_url:
      'https://api.github.com/repos/azat-co/react/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/azat-co/react/branches{/branch}',
    tags_url: 'https://api.github.com/repos/azat-co/react/tags',
    blobs_url: 'https://api.github.com/repos/azat-co/react/git/blobs{/sha}',
    git_tags_url: 'https://api.github.com/repos/azat-co/react/git/tags{/sha}',
    git_refs_url: 'https://api.github.com/repos/azat-co/react/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/azat-co/react/git/trees{/sha}',
    statuses_url: 'https://api.github.com/repos/azat-co/react/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/azat-co/react/languages',
    stargazers_url: 'https://api.github.com/repos/azat-co/react/stargazers',
    contributors_url: 'https://api.github.com/repos/azat-co/react/contributors',
    subscribers_url: 'https://api.github.com/repos/azat-co/react/subscribers',
    subscription_url: 'https://api.github.com/repos/azat-co/react/subscription',
    commits_url: 'https://api.github.com/repos/azat-co/react/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/azat-co/react/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/azat-co/react/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/azat-co/react/issues/comments{/number}',
    contents_url: 'https://api.github.com/repos/azat-co/react/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/azat-co/react/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/azat-co/react/merges',
    archive_url:
      'https://api.github.com/repos/azat-co/react/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/azat-co/react/downloads',
    issues_url: 'https://api.github.com/repos/azat-co/react/issues{/number}',
    pulls_url: 'https://api.github.com/repos/azat-co/react/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/azat-co/react/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/azat-co/react/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/azat-co/react/labels{/name}',
    releases_url: 'https://api.github.com/repos/azat-co/react/releases{/id}',
    deployments_url: 'https://api.github.com/repos/azat-co/react/deployments',
    created_at: '2015-07-18T23:58:37Z',
    updated_at: '2018-05-11T18:17:08Z',
    pushed_at: '2016-12-06T21:19:00Z',
    git_url: 'git://github.com/azat-co/react.git',
    ssh_url: 'git@github.com:azat-co/react.git',
    clone_url: 'https://github.com/azat-co/react.git',
    svn_url: 'https://github.com/azat-co/react',
    homepage: 'https://www.manning.com/books/react-quickly',
    size: 6909,
    stargazers_count: 183,
    watchers_count: 183,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 97,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
    },
    forks: 97,
    open_issues: 0,
    watchers: 183,
    default_branch: 'master',
    score: 71.95095,
  },
  {
    id: 45753079,
    name: 'react',
    full_name: 'werein/react',
    owner: {
      login: 'werein',
      id: 3116920,
      avatar_url: 'https://avatars0.githubusercontent.com/u/3116920?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/werein',
      html_url: 'https://github.com/werein',
      followers_url: 'https://api.github.com/users/werein/followers',
      following_url:
        'https://api.github.com/users/werein/following{/other_user}',
      gists_url: 'https://api.github.com/users/werein/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/werein/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/werein/subscriptions',
      organizations_url: 'https://api.github.com/users/werein/orgs',
      repos_url: 'https://api.github.com/users/werein/repos',
      events_url: 'https://api.github.com/users/werein/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/werein/received_events',
      type: 'Organization',
      site_admin: false,
    },
    private: false,
    html_url: 'https://github.com/werein/react',
    description:
      'Extremely simple boilerplate, easiest you can find, for React application including all the necessary tools: Flow | React 16 | redux | babel 6 | webpack 3 | css-modules | jest | enzyme | express + optional: sass/scss',
    fork: false,
    url: 'https://api.github.com/repos/werein/react',
    forks_url: 'https://api.github.com/repos/werein/react/forks',
    keys_url: 'https://api.github.com/repos/werein/react/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/werein/react/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/werein/react/teams',
    hooks_url: 'https://api.github.com/repos/werein/react/hooks',
    issue_events_url:
      'https://api.github.com/repos/werein/react/issues/events{/number}',
    events_url: 'https://api.github.com/repos/werein/react/events',
    assignees_url: 'https://api.github.com/repos/werein/react/assignees{/user}',
    branches_url: 'https://api.github.com/repos/werein/react/branches{/branch}',
    tags_url: 'https://api.github.com/repos/werein/react/tags',
    blobs_url: 'https://api.github.com/repos/werein/react/git/blobs{/sha}',
    git_tags_url: 'https://api.github.com/repos/werein/react/git/tags{/sha}',
    git_refs_url: 'https://api.github.com/repos/werein/react/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/werein/react/git/trees{/sha}',
    statuses_url: 'https://api.github.com/repos/werein/react/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/werein/react/languages',
    stargazers_url: 'https://api.github.com/repos/werein/react/stargazers',
    contributors_url: 'https://api.github.com/repos/werein/react/contributors',
    subscribers_url: 'https://api.github.com/repos/werein/react/subscribers',
    subscription_url: 'https://api.github.com/repos/werein/react/subscription',
    commits_url: 'https://api.github.com/repos/werein/react/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/werein/react/git/commits{/sha}',
    comments_url: 'https://api.github.com/repos/werein/react/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/werein/react/issues/comments{/number}',
    contents_url: 'https://api.github.com/repos/werein/react/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/werein/react/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/werein/react/merges',
    archive_url:
      'https://api.github.com/repos/werein/react/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/werein/react/downloads',
    issues_url: 'https://api.github.com/repos/werein/react/issues{/number}',
    pulls_url: 'https://api.github.com/repos/werein/react/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/werein/react/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/werein/react/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/werein/react/labels{/name}',
    releases_url: 'https://api.github.com/repos/werein/react/releases{/id}',
    deployments_url: 'https://api.github.com/repos/werein/react/deployments',
    created_at: '2015-11-07T20:22:23Z',
    updated_at: '2018-05-20T12:30:52Z',
    pushed_at: '2017-11-09T10:21:37Z',
    git_url: 'git://github.com/werein/react.git',
    ssh_url: 'git@github.com:werein/react.git',
    clone_url: 'https://github.com/werein/react.git',
    svn_url: 'https://github.com/werein/react',
    homepage: 'https://wereinhq.com/guides/react',
    size: 220,
    stargazers_count: 203,
    watchers_count: 203,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 79,
    mirror_url: null,
    archived: false,
    open_issues_count: 4,
    license: null,
    forks: 79,
    open_issues: 4,
    watchers: 203,
    default_branch: 'master',
    score: 70.584366,
  },
  {
    id: 61573702,
    name: 'react',
    full_name: 'ui-router/react',
    owner: {
      login: 'ui-router',
      id: 16856735,
      avatar_url: 'https://avatars0.githubusercontent.com/u/16856735?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/ui-router',
      html_url: 'https://github.com/ui-router',
      followers_url: 'https://api.github.com/users/ui-router/followers',
      following_url:
        'https://api.github.com/users/ui-router/following{/other_user}',
      gists_url: 'https://api.github.com/users/ui-router/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/ui-router/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/ui-router/subscriptions',
      organizations_url: 'https://api.github.com/users/ui-router/orgs',
      repos_url: 'https://api.github.com/users/ui-router/repos',
      events_url: 'https://api.github.com/users/ui-router/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/ui-router/received_events',
      type: 'Organization',
      site_admin: false,
    },
    private: false,
    html_url: 'https://github.com/ui-router/react',
    description: '🔼 UI-Router for React',
    fork: false,
    url: 'https://api.github.com/repos/ui-router/react',
    forks_url: 'https://api.github.com/repos/ui-router/react/forks',
    keys_url: 'https://api.github.com/repos/ui-router/react/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/ui-router/react/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/ui-router/react/teams',
    hooks_url: 'https://api.github.com/repos/ui-router/react/hooks',
    issue_events_url:
      'https://api.github.com/repos/ui-router/react/issues/events{/number}',
    events_url: 'https://api.github.com/repos/ui-router/react/events',
    assignees_url:
      'https://api.github.com/repos/ui-router/react/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/ui-router/react/branches{/branch}',
    tags_url: 'https://api.github.com/repos/ui-router/react/tags',
    blobs_url: 'https://api.github.com/repos/ui-router/react/git/blobs{/sha}',
    git_tags_url: 'https://api.github.com/repos/ui-router/react/git/tags{/sha}',
    git_refs_url: 'https://api.github.com/repos/ui-router/react/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/ui-router/react/git/trees{/sha}',
    statuses_url: 'https://api.github.com/repos/ui-router/react/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/ui-router/react/languages',
    stargazers_url: 'https://api.github.com/repos/ui-router/react/stargazers',
    contributors_url:
      'https://api.github.com/repos/ui-router/react/contributors',
    subscribers_url: 'https://api.github.com/repos/ui-router/react/subscribers',
    subscription_url:
      'https://api.github.com/repos/ui-router/react/subscription',
    commits_url: 'https://api.github.com/repos/ui-router/react/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/ui-router/react/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/ui-router/react/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/ui-router/react/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/ui-router/react/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/ui-router/react/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/ui-router/react/merges',
    archive_url:
      'https://api.github.com/repos/ui-router/react/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/ui-router/react/downloads',
    issues_url: 'https://api.github.com/repos/ui-router/react/issues{/number}',
    pulls_url: 'https://api.github.com/repos/ui-router/react/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/ui-router/react/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/ui-router/react/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/ui-router/react/labels{/name}',
    releases_url: 'https://api.github.com/repos/ui-router/react/releases{/id}',
    deployments_url: 'https://api.github.com/repos/ui-router/react/deployments',
    created_at: '2016-06-20T19:14:56Z',
    updated_at: '2018-05-19T11:46:43Z',
    pushed_at: '2018-05-21T07:24:37Z',
    git_url: 'git://github.com/ui-router/react.git',
    ssh_url: 'git@github.com:ui-router/react.git',
    clone_url: 'https://github.com/ui-router/react.git',
    svn_url: 'https://github.com/ui-router/react',
    homepage: 'https://ui-router.github.io/react/',
    size: 2328,
    stargazers_count: 270,
    watchers_count: 270,
    language: 'TypeScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 58,
    mirror_url: null,
    archived: false,
    open_issues_count: 19,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
    },
    forks: 58,
    open_issues: 19,
    watchers: 270,
    default_branch: 'master',
    score: 68.46808,
  },
  {
    id: 62127931,
    name: 'React',
    full_name: 'leilihuang/React',
    owner: {
      login: 'leilihuang',
      id: 13639327,
      avatar_url: 'https://avatars1.githubusercontent.com/u/13639327?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/leilihuang',
      html_url: 'https://github.com/leilihuang',
      followers_url: 'https://api.github.com/users/leilihuang/followers',
      following_url:
        'https://api.github.com/users/leilihuang/following{/other_user}',
      gists_url: 'https://api.github.com/users/leilihuang/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/leilihuang/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/leilihuang/subscriptions',
      organizations_url: 'https://api.github.com/users/leilihuang/orgs',
      repos_url: 'https://api.github.com/users/leilihuang/repos',
      events_url: 'https://api.github.com/users/leilihuang/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/leilihuang/received_events',
      type: 'User',
      site_admin: false,
    },
    private: false,
    html_url: 'https://github.com/leilihuang/React',
    description: '写写React组件',
    fork: false,
    url: 'https://api.github.com/repos/leilihuang/React',
    forks_url: 'https://api.github.com/repos/leilihuang/React/forks',
    keys_url: 'https://api.github.com/repos/leilihuang/React/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/leilihuang/React/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/leilihuang/React/teams',
    hooks_url: 'https://api.github.com/repos/leilihuang/React/hooks',
    issue_events_url:
      'https://api.github.com/repos/leilihuang/React/issues/events{/number}',
    events_url: 'https://api.github.com/repos/leilihuang/React/events',
    assignees_url:
      'https://api.github.com/repos/leilihuang/React/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/leilihuang/React/branches{/branch}',
    tags_url: 'https://api.github.com/repos/leilihuang/React/tags',
    blobs_url: 'https://api.github.com/repos/leilihuang/React/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/leilihuang/React/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/leilihuang/React/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/leilihuang/React/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/leilihuang/React/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/leilihuang/React/languages',
    stargazers_url: 'https://api.github.com/repos/leilihuang/React/stargazers',
    contributors_url:
      'https://api.github.com/repos/leilihuang/React/contributors',
    subscribers_url:
      'https://api.github.com/repos/leilihuang/React/subscribers',
    subscription_url:
      'https://api.github.com/repos/leilihuang/React/subscription',
    commits_url: 'https://api.github.com/repos/leilihuang/React/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/leilihuang/React/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/leilihuang/React/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/leilihuang/React/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/leilihuang/React/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/leilihuang/React/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/leilihuang/React/merges',
    archive_url:
      'https://api.github.com/repos/leilihuang/React/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/leilihuang/React/downloads',
    issues_url: 'https://api.github.com/repos/leilihuang/React/issues{/number}',
    pulls_url: 'https://api.github.com/repos/leilihuang/React/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/leilihuang/React/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/leilihuang/React/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/leilihuang/React/labels{/name}',
    releases_url: 'https://api.github.com/repos/leilihuang/React/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/leilihuang/React/deployments',
    created_at: '2016-06-28T09:25:07Z',
    updated_at: '2018-05-08T01:36:56Z',
    pushed_at: '2016-11-28T01:56:31Z',
    git_url: 'git://github.com/leilihuang/React.git',
    ssh_url: 'git@github.com:leilihuang/React.git',
    clone_url: 'https://github.com/leilihuang/React.git',
    svn_url: 'https://github.com/leilihuang/React',
    homepage: null,
    size: 2288,
    stargazers_count: 125,
    watchers_count: 125,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 52,
    mirror_url: null,
    archived: false,
    open_issues_count: 1,
    license: null,
    forks: 52,
    open_issues: 1,
    watchers: 125,
    default_branch: 'master',
    score: 65.219406,
  },
  {
    id: 64466362,
    name: 'react',
    full_name: 'zf-huangxiao/react',
    owner: {
      login: 'zf-huangxiao',
      id: 16551082,
      avatar_url: 'https://avatars0.githubusercontent.com/u/16551082?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/zf-huangxiao',
      html_url: 'https://github.com/zf-huangxiao',
      followers_url: 'https://api.github.com/users/zf-huangxiao/followers',
      following_url:
        'https://api.github.com/users/zf-huangxiao/following{/other_user}',
      gists_url: 'https://api.github.com/users/zf-huangxiao/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/zf-huangxiao/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/zf-huangxiao/subscriptions',
      organizations_url: 'https://api.github.com/users/zf-huangxiao/orgs',
      repos_url: 'https://api.github.com/users/zf-huangxiao/repos',
      events_url: 'https://api.github.com/users/zf-huangxiao/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/zf-huangxiao/received_events',
      type: 'User',
      site_admin: false,
    },
    private: false,
    html_url: 'https://github.com/zf-huangxiao/react',
    description: 'demo of React.js',
    fork: false,
    url: 'https://api.github.com/repos/zf-huangxiao/react',
    forks_url: 'https://api.github.com/repos/zf-huangxiao/react/forks',
    keys_url: 'https://api.github.com/repos/zf-huangxiao/react/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/zf-huangxiao/react/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/zf-huangxiao/react/teams',
    hooks_url: 'https://api.github.com/repos/zf-huangxiao/react/hooks',
    issue_events_url:
      'https://api.github.com/repos/zf-huangxiao/react/issues/events{/number}',
    events_url: 'https://api.github.com/repos/zf-huangxiao/react/events',
    assignees_url:
      'https://api.github.com/repos/zf-huangxiao/react/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/zf-huangxiao/react/branches{/branch}',
    tags_url: 'https://api.github.com/repos/zf-huangxiao/react/tags',
    blobs_url:
      'https://api.github.com/repos/zf-huangxiao/react/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/zf-huangxiao/react/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/zf-huangxiao/react/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/zf-huangxiao/react/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/zf-huangxiao/react/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/zf-huangxiao/react/languages',
    stargazers_url:
      'https://api.github.com/repos/zf-huangxiao/react/stargazers',
    contributors_url:
      'https://api.github.com/repos/zf-huangxiao/react/contributors',
    subscribers_url:
      'https://api.github.com/repos/zf-huangxiao/react/subscribers',
    subscription_url:
      'https://api.github.com/repos/zf-huangxiao/react/subscription',
    commits_url:
      'https://api.github.com/repos/zf-huangxiao/react/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/zf-huangxiao/react/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/zf-huangxiao/react/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/zf-huangxiao/react/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/zf-huangxiao/react/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/zf-huangxiao/react/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/zf-huangxiao/react/merges',
    archive_url:
      'https://api.github.com/repos/zf-huangxiao/react/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/zf-huangxiao/react/downloads',
    issues_url:
      'https://api.github.com/repos/zf-huangxiao/react/issues{/number}',
    pulls_url: 'https://api.github.com/repos/zf-huangxiao/react/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/zf-huangxiao/react/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/zf-huangxiao/react/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/zf-huangxiao/react/labels{/name}',
    releases_url:
      'https://api.github.com/repos/zf-huangxiao/react/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/zf-huangxiao/react/deployments',
    created_at: '2016-07-29T08:57:29Z',
    updated_at: '2018-05-16T07:40:19Z',
    pushed_at: '2016-07-29T08:22:59Z',
    git_url: 'git://github.com/zf-huangxiao/react.git',
    ssh_url: 'git@github.com:zf-huangxiao/react.git',
    clone_url: 'https://github.com/zf-huangxiao/react.git',
    svn_url: 'https://github.com/zf-huangxiao/react',
    homepage: null,
    size: 970,
    stargazers_count: 5,
    watchers_count: 5,
    language: 'JavaScript',
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 119,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: null,
    forks: 119,
    open_issues: 0,
    watchers: 5,
    default_branch: 'master',
    score: 59.75514,
  },
  {
    id: 93503545,
    name: 'React',
    full_name: 'HackYourFuture/React',
    owner: {
      login: 'HackYourFuture',
      id: 20858568,
      avatar_url: 'https://avatars2.githubusercontent.com/u/20858568?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/HackYourFuture',
      html_url: 'https://github.com/HackYourFuture',
      followers_url: 'https://api.github.com/users/HackYourFuture/followers',
      following_url:
        'https://api.github.com/users/HackYourFuture/following{/other_user}',
      gists_url: 'https://api.github.com/users/HackYourFuture/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/HackYourFuture/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/HackYourFuture/subscriptions',
      organizations_url: 'https://api.github.com/users/HackYourFuture/orgs',
      repos_url: 'https://api.github.com/users/HackYourFuture/repos',
      events_url:
        'https://api.github.com/users/HackYourFuture/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/HackYourFuture/received_events',
      type: 'Organization',
      site_admin: false,
    },
    private: false,
    html_url: 'https://github.com/HackYourFuture/React',
    description: 'Specifications React Module',
    fork: false,
    url: 'https://api.github.com/repos/HackYourFuture/React',
    forks_url: 'https://api.github.com/repos/HackYourFuture/React/forks',
    keys_url: 'https://api.github.com/repos/HackYourFuture/React/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/HackYourFuture/React/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/HackYourFuture/React/teams',
    hooks_url: 'https://api.github.com/repos/HackYourFuture/React/hooks',
    issue_events_url:
      'https://api.github.com/repos/HackYourFuture/React/issues/events{/number}',
    events_url: 'https://api.github.com/repos/HackYourFuture/React/events',
    assignees_url:
      'https://api.github.com/repos/HackYourFuture/React/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/HackYourFuture/React/branches{/branch}',
    tags_url: 'https://api.github.com/repos/HackYourFuture/React/tags',
    blobs_url:
      'https://api.github.com/repos/HackYourFuture/React/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/HackYourFuture/React/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/HackYourFuture/React/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/HackYourFuture/React/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/HackYourFuture/React/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/HackYourFuture/React/languages',
    stargazers_url:
      'https://api.github.com/repos/HackYourFuture/React/stargazers',
    contributors_url:
      'https://api.github.com/repos/HackYourFuture/React/contributors',
    subscribers_url:
      'https://api.github.com/repos/HackYourFuture/React/subscribers',
    subscription_url:
      'https://api.github.com/repos/HackYourFuture/React/subscription',
    commits_url:
      'https://api.github.com/repos/HackYourFuture/React/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/HackYourFuture/React/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/HackYourFuture/React/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/HackYourFuture/React/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/HackYourFuture/React/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/HackYourFuture/React/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/HackYourFuture/React/merges',
    archive_url:
      'https://api.github.com/repos/HackYourFuture/React/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/HackYourFuture/React/downloads',
    issues_url:
      'https://api.github.com/repos/HackYourFuture/React/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/HackYourFuture/React/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/HackYourFuture/React/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/HackYourFuture/React/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/HackYourFuture/React/labels{/name}',
    releases_url:
      'https://api.github.com/repos/HackYourFuture/React/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/HackYourFuture/React/deployments',
    created_at: '2017-06-06T09:58:23Z',
    updated_at: '2018-05-08T08:50:13Z',
    pushed_at: '2018-05-14T09:15:16Z',
    git_url: 'git://github.com/HackYourFuture/React.git',
    ssh_url: 'git@github.com:HackYourFuture/React.git',
    clone_url: 'https://github.com/HackYourFuture/React.git',
    svn_url: 'https://github.com/HackYourFuture/React',
    homepage: null,
    size: 990,
    stargazers_count: 12,
    watchers_count: 12,
    language: null,
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 56,
    mirror_url: null,
    archived: false,
    open_issues_count: 12,
    license: null,
    forks: 56,
    open_issues: 12,
    watchers: 12,
    default_branch: 'master',
    score: 56.151176,
  },
  {
    id: 70613426,
    name: 'react',
    full_name: 'myitcv/react',
    owner: {
      login: 'myitcv',
      id: 3374574,
      avatar_url: 'https://avatars1.githubusercontent.com/u/3374574?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/myitcv',
      html_url: 'https://github.com/myitcv',
      followers_url: 'https://api.github.com/users/myitcv/followers',
      following_url:
        'https://api.github.com/users/myitcv/following{/other_user}',
      gists_url: 'https://api.github.com/users/myitcv/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/myitcv/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/myitcv/subscriptions',
      organizations_url: 'https://api.github.com/users/myitcv/orgs',
      repos_url: 'https://api.github.com/users/myitcv/repos',
      events_url: 'https://api.github.com/users/myitcv/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/myitcv/received_events',
      type: 'User',
      site_admin: false,
    },
    private: false,
    html_url: 'https://github.com/myitcv/react',
    description:
      "Package myitcv.io/react is a set of GopherJS bindings for Facebook's React, a Javascript library for building user interfaces",
    fork: false,
    url: 'https://api.github.com/repos/myitcv/react',
    forks_url: 'https://api.github.com/repos/myitcv/react/forks',
    keys_url: 'https://api.github.com/repos/myitcv/react/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/myitcv/react/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/myitcv/react/teams',
    hooks_url: 'https://api.github.com/repos/myitcv/react/hooks',
    issue_events_url:
      'https://api.github.com/repos/myitcv/react/issues/events{/number}',
    events_url: 'https://api.github.com/repos/myitcv/react/events',
    assignees_url: 'https://api.github.com/repos/myitcv/react/assignees{/user}',
    branches_url: 'https://api.github.com/repos/myitcv/react/branches{/branch}',
    tags_url: 'https://api.github.com/repos/myitcv/react/tags',
    blobs_url: 'https://api.github.com/repos/myitcv/react/git/blobs{/sha}',
    git_tags_url: 'https://api.github.com/repos/myitcv/react/git/tags{/sha}',
    git_refs_url: 'https://api.github.com/repos/myitcv/react/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/myitcv/react/git/trees{/sha}',
    statuses_url: 'https://api.github.com/repos/myitcv/react/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/myitcv/react/languages',
    stargazers_url: 'https://api.github.com/repos/myitcv/react/stargazers',
    contributors_url: 'https://api.github.com/repos/myitcv/react/contributors',
    subscribers_url: 'https://api.github.com/repos/myitcv/react/subscribers',
    subscription_url: 'https://api.github.com/repos/myitcv/react/subscription',
    commits_url: 'https://api.github.com/repos/myitcv/react/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/myitcv/react/git/commits{/sha}',
    comments_url: 'https://api.github.com/repos/myitcv/react/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/myitcv/react/issues/comments{/number}',
    contents_url: 'https://api.github.com/repos/myitcv/react/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/myitcv/react/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/myitcv/react/merges',
    archive_url:
      'https://api.github.com/repos/myitcv/react/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/myitcv/react/downloads',
    issues_url: 'https://api.github.com/repos/myitcv/react/issues{/number}',
    pulls_url: 'https://api.github.com/repos/myitcv/react/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/myitcv/react/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/myitcv/react/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/myitcv/react/labels{/name}',
    releases_url: 'https://api.github.com/repos/myitcv/react/releases{/id}',
    deployments_url: 'https://api.github.com/repos/myitcv/react/deployments',
    created_at: '2016-10-11T16:30:55Z',
    updated_at: '2018-05-21T19:11:24Z',
    pushed_at: '2018-05-21T19:11:28Z',
    git_url: 'git://github.com/myitcv/react.git',
    ssh_url: 'git@github.com:myitcv/react.git',
    clone_url: 'https://github.com/myitcv/react.git',
    svn_url: 'https://github.com/myitcv/react',
    homepage: 'https://github.com/myitcv/react/wiki',
    size: 10952,
    stargazers_count: 203,
    watchers_count: 203,
    language: 'Go',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 14,
    mirror_url: null,
    archived: false,
    open_issues_count: 10,
    license: {
      key: 'bsd-3-clause',
      name: 'BSD 3-Clause "New" or "Revised" License',
      spdx_id: 'BSD-3-Clause',
      url: 'https://api.github.com/licenses/bsd-3-clause',
    },
    forks: 14,
    open_issues: 10,
    watchers: 203,
    default_branch: 'master',
    score: 54.852116,
  },
  {
    id: 63104093,
    name: 'react',
    full_name: 'sf-wdi-gaia/react',
    owner: {
      login: 'sf-wdi-gaia',
      id: 18692329,
      avatar_url: 'https://avatars0.githubusercontent.com/u/18692329?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/sf-wdi-gaia',
      html_url: 'https://github.com/sf-wdi-gaia',
      followers_url: 'https://api.github.com/users/sf-wdi-gaia/followers',
      following_url:
        'https://api.github.com/users/sf-wdi-gaia/following{/other_user}',
      gists_url: 'https://api.github.com/users/sf-wdi-gaia/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/sf-wdi-gaia/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/sf-wdi-gaia/subscriptions',
      organizations_url: 'https://api.github.com/users/sf-wdi-gaia/orgs',
      repos_url: 'https://api.github.com/users/sf-wdi-gaia/repos',
      events_url: 'https://api.github.com/users/sf-wdi-gaia/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/sf-wdi-gaia/received_events',
      type: 'Organization',
      site_admin: false,
    },
    private: false,
    html_url: 'https://github.com/sf-wdi-gaia/react',
    description: '[react, js]',
    fork: false,
    url: 'https://api.github.com/repos/sf-wdi-gaia/react',
    forks_url: 'https://api.github.com/repos/sf-wdi-gaia/react/forks',
    keys_url: 'https://api.github.com/repos/sf-wdi-gaia/react/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/sf-wdi-gaia/react/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/sf-wdi-gaia/react/teams',
    hooks_url: 'https://api.github.com/repos/sf-wdi-gaia/react/hooks',
    issue_events_url:
      'https://api.github.com/repos/sf-wdi-gaia/react/issues/events{/number}',
    events_url: 'https://api.github.com/repos/sf-wdi-gaia/react/events',
    assignees_url:
      'https://api.github.com/repos/sf-wdi-gaia/react/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/sf-wdi-gaia/react/branches{/branch}',
    tags_url: 'https://api.github.com/repos/sf-wdi-gaia/react/tags',
    blobs_url: 'https://api.github.com/repos/sf-wdi-gaia/react/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/sf-wdi-gaia/react/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/sf-wdi-gaia/react/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/sf-wdi-gaia/react/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/sf-wdi-gaia/react/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/sf-wdi-gaia/react/languages',
    stargazers_url: 'https://api.github.com/repos/sf-wdi-gaia/react/stargazers',
    contributors_url:
      'https://api.github.com/repos/sf-wdi-gaia/react/contributors',
    subscribers_url:
      'https://api.github.com/repos/sf-wdi-gaia/react/subscribers',
    subscription_url:
      'https://api.github.com/repos/sf-wdi-gaia/react/subscription',
    commits_url: 'https://api.github.com/repos/sf-wdi-gaia/react/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/sf-wdi-gaia/react/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/sf-wdi-gaia/react/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/sf-wdi-gaia/react/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/sf-wdi-gaia/react/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/sf-wdi-gaia/react/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/sf-wdi-gaia/react/merges',
    archive_url:
      'https://api.github.com/repos/sf-wdi-gaia/react/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/sf-wdi-gaia/react/downloads',
    issues_url:
      'https://api.github.com/repos/sf-wdi-gaia/react/issues{/number}',
    pulls_url: 'https://api.github.com/repos/sf-wdi-gaia/react/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/sf-wdi-gaia/react/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/sf-wdi-gaia/react/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/sf-wdi-gaia/react/labels{/name}',
    releases_url:
      'https://api.github.com/repos/sf-wdi-gaia/react/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/sf-wdi-gaia/react/deployments',
    created_at: '2016-07-11T21:38:54Z',
    updated_at: '2017-06-03T18:59:40Z',
    pushed_at: '2016-07-13T02:11:43Z',
    git_url: 'git://github.com/sf-wdi-gaia/react.git',
    ssh_url: 'git@github.com:sf-wdi-gaia/react.git',
    clone_url: 'https://github.com/sf-wdi-gaia/react.git',
    svn_url: 'https://github.com/sf-wdi-gaia/react',
    homepage: null,
    size: 730,
    stargazers_count: 4,
    watchers_count: 4,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 88,
    mirror_url: null,
    archived: false,
    open_issues_count: 5,
    license: null,
    forks: 88,
    open_issues: 5,
    watchers: 4,
    default_branch: 'master',
    score: 52.66022,
  },
  {
    id: 38934449,
    name: 'react-redux',
    full_name: 'reduxjs/react-redux',
    owner: {
      login: 'reduxjs',
      id: 13142323,
      avatar_url: 'https://avatars3.githubusercontent.com/u/13142323?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/reduxjs',
      html_url: 'https://github.com/reduxjs',
      followers_url: 'https://api.github.com/users/reduxjs/followers',
      following_url:
        'https://api.github.com/users/reduxjs/following{/other_user}',
      gists_url: 'https://api.github.com/users/reduxjs/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/reduxjs/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/reduxjs/subscriptions',
      organizations_url: 'https://api.github.com/users/reduxjs/orgs',
      repos_url: 'https://api.github.com/users/reduxjs/repos',
      events_url: 'https://api.github.com/users/reduxjs/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/reduxjs/received_events',
      type: 'Organization',
      site_admin: false,
    },
    private: false,
    html_url: 'https://github.com/reduxjs/react-redux',
    description: 'Official React bindings for Redux',
    fork: false,
    url: 'https://api.github.com/repos/reduxjs/react-redux',
    forks_url: 'https://api.github.com/repos/reduxjs/react-redux/forks',
    keys_url: 'https://api.github.com/repos/reduxjs/react-redux/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/reduxjs/react-redux/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/reduxjs/react-redux/teams',
    hooks_url: 'https://api.github.com/repos/reduxjs/react-redux/hooks',
    issue_events_url:
      'https://api.github.com/repos/reduxjs/react-redux/issues/events{/number}',
    events_url: 'https://api.github.com/repos/reduxjs/react-redux/events',
    assignees_url:
      'https://api.github.com/repos/reduxjs/react-redux/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/reduxjs/react-redux/branches{/branch}',
    tags_url: 'https://api.github.com/repos/reduxjs/react-redux/tags',
    blobs_url:
      'https://api.github.com/repos/reduxjs/react-redux/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/reduxjs/react-redux/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/reduxjs/react-redux/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/reduxjs/react-redux/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/reduxjs/react-redux/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/reduxjs/react-redux/languages',
    stargazers_url:
      'https://api.github.com/repos/reduxjs/react-redux/stargazers',
    contributors_url:
      'https://api.github.com/repos/reduxjs/react-redux/contributors',
    subscribers_url:
      'https://api.github.com/repos/reduxjs/react-redux/subscribers',
    subscription_url:
      'https://api.github.com/repos/reduxjs/react-redux/subscription',
    commits_url:
      'https://api.github.com/repos/reduxjs/react-redux/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/reduxjs/react-redux/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/reduxjs/react-redux/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/reduxjs/react-redux/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/reduxjs/react-redux/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/reduxjs/react-redux/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/reduxjs/react-redux/merges',
    archive_url:
      'https://api.github.com/repos/reduxjs/react-redux/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/reduxjs/react-redux/downloads',
    issues_url:
      'https://api.github.com/repos/reduxjs/react-redux/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/reduxjs/react-redux/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/reduxjs/react-redux/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/reduxjs/react-redux/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/reduxjs/react-redux/labels{/name}',
    releases_url:
      'https://api.github.com/repos/reduxjs/react-redux/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/reduxjs/react-redux/deployments',
    created_at: '2015-07-11T17:32:01Z',
    updated_at: '2018-05-21T21:37:10Z',
    pushed_at: '2018-05-12T20:02:47Z',
    git_url: 'git://github.com/reduxjs/react-redux.git',
    ssh_url: 'git@github.com:reduxjs/react-redux.git',
    clone_url: 'https://github.com/reduxjs/react-redux.git',
    svn_url: 'https://github.com/reduxjs/react-redux',
    homepage: 'https://redux.js.org/basics/usage-with-react',
    size: 863,
    stargazers_count: 12582,
    watchers_count: 12582,
    language: 'JavaScript',
    has_issues: true,
    has_projects: false,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    forks_count: 2017,
    mirror_url: null,
    archived: false,
    open_issues_count: 18,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
    },
    forks: 2017,
    open_issues: 18,
    watchers: 12582,
    default_branch: 'master',
    score: 49.341217,
  },
  {
    id: 15480067,
    name: 'react-bootstrap',
    full_name: 'react-bootstrap/react-bootstrap',
    owner: {
      login: 'react-bootstrap',
      id: 6853419,
      avatar_url: 'https://avatars3.githubusercontent.com/u/6853419?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/react-bootstrap',
      html_url: 'https://github.com/react-bootstrap',
      followers_url: 'https://api.github.com/users/react-bootstrap/followers',
      following_url:
        'https://api.github.com/users/react-bootstrap/following{/other_user}',
      gists_url: 'https://api.github.com/users/react-bootstrap/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/react-bootstrap/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/react-bootstrap/subscriptions',
      organizations_url: 'https://api.github.com/users/react-bootstrap/orgs',
      repos_url: 'https://api.github.com/users/react-bootstrap/repos',
      events_url:
        'https://api.github.com/users/react-bootstrap/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/react-bootstrap/received_events',
      type: 'Organization',
      site_admin: false,
    },
    private: false,
    html_url: 'https://github.com/react-bootstrap/react-bootstrap',
    description: 'Bootstrap 3 components built with React',
    fork: false,
    url: 'https://api.github.com/repos/react-bootstrap/react-bootstrap',
    forks_url:
      'https://api.github.com/repos/react-bootstrap/react-bootstrap/forks',
    keys_url:
      'https://api.github.com/repos/react-bootstrap/react-bootstrap/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/react-bootstrap/react-bootstrap/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/react-bootstrap/react-bootstrap/teams',
    hooks_url:
      'https://api.github.com/repos/react-bootstrap/react-bootstrap/hooks',
    issue_events_url:
      'https://api.github.com/repos/react-bootstrap/react-bootstrap/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/react-bootstrap/react-bootstrap/events',
    assignees_url:
      'https://api.github.com/repos/react-bootstrap/react-bootstrap/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/react-bootstrap/react-bootstrap/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/react-bootstrap/react-bootstrap/tags',
    blobs_url:
      'https://api.github.com/repos/react-bootstrap/react-bootstrap/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/react-bootstrap/react-bootstrap/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/react-bootstrap/react-bootstrap/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/react-bootstrap/react-bootstrap/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/react-bootstrap/react-bootstrap/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/react-bootstrap/react-bootstrap/languages',
    stargazers_url:
      'https://api.github.com/repos/react-bootstrap/react-bootstrap/stargazers',
    contributors_url:
      'https://api.github.com/repos/react-bootstrap/react-bootstrap/contributors',
    subscribers_url:
      'https://api.github.com/repos/react-bootstrap/react-bootstrap/subscribers',
    subscription_url:
      'https://api.github.com/repos/react-bootstrap/react-bootstrap/subscription',
    commits_url:
      'https://api.github.com/repos/react-bootstrap/react-bootstrap/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/react-bootstrap/react-bootstrap/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/react-bootstrap/react-bootstrap/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/react-bootstrap/react-bootstrap/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/react-bootstrap/react-bootstrap/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/react-bootstrap/react-bootstrap/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/react-bootstrap/react-bootstrap/merges',
    archive_url:
      'https://api.github.com/repos/react-bootstrap/react-bootstrap/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/react-bootstrap/react-bootstrap/downloads',
    issues_url:
      'https://api.github.com/repos/react-bootstrap/react-bootstrap/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/react-bootstrap/react-bootstrap/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/react-bootstrap/react-bootstrap/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/react-bootstrap/react-bootstrap/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/react-bootstrap/react-bootstrap/labels{/name}',
    releases_url:
      'https://api.github.com/repos/react-bootstrap/react-bootstrap/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/react-bootstrap/react-bootstrap/deployments',
    created_at: '2013-12-27T19:06:07Z',
    updated_at: '2018-05-21T19:07:33Z',
    pushed_at: '2018-05-19T16:44:32Z',
    git_url: 'git://github.com/react-bootstrap/react-bootstrap.git',
    ssh_url: 'git@github.com:react-bootstrap/react-bootstrap.git',
    clone_url: 'https://github.com/react-bootstrap/react-bootstrap.git',
    svn_url: 'https://github.com/react-bootstrap/react-bootstrap',
    homepage: 'https://react-bootstrap.github.io/',
    size: 6576,
    stargazers_count: 13037,
    watchers_count: 13037,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 2139,
    mirror_url: null,
    archived: false,
    open_issues_count: 82,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
    },
    forks: 2139,
    open_issues: 82,
    watchers: 13037,
    default_branch: 'master',
    score: 49.15952,
  },
  {
    id: 99535471,
    name: 'react',
    full_name: 'dk-lan/react',
    owner: {
      login: 'dk-lan',
      id: 12515367,
      avatar_url: 'https://avatars1.githubusercontent.com/u/12515367?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/dk-lan',
      html_url: 'https://github.com/dk-lan',
      followers_url: 'https://api.github.com/users/dk-lan/followers',
      following_url:
        'https://api.github.com/users/dk-lan/following{/other_user}',
      gists_url: 'https://api.github.com/users/dk-lan/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/dk-lan/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/dk-lan/subscriptions',
      organizations_url: 'https://api.github.com/users/dk-lan/orgs',
      repos_url: 'https://api.github.com/users/dk-lan/repos',
      events_url: 'https://api.github.com/users/dk-lan/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/dk-lan/received_events',
      type: 'User',
      site_admin: false,
    },
    private: false,
    html_url: 'https://github.com/dk-lan/react',
    description: 'react 基础教程',
    fork: false,
    url: 'https://api.github.com/repos/dk-lan/react',
    forks_url: 'https://api.github.com/repos/dk-lan/react/forks',
    keys_url: 'https://api.github.com/repos/dk-lan/react/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/dk-lan/react/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/dk-lan/react/teams',
    hooks_url: 'https://api.github.com/repos/dk-lan/react/hooks',
    issue_events_url:
      'https://api.github.com/repos/dk-lan/react/issues/events{/number}',
    events_url: 'https://api.github.com/repos/dk-lan/react/events',
    assignees_url: 'https://api.github.com/repos/dk-lan/react/assignees{/user}',
    branches_url: 'https://api.github.com/repos/dk-lan/react/branches{/branch}',
    tags_url: 'https://api.github.com/repos/dk-lan/react/tags',
    blobs_url: 'https://api.github.com/repos/dk-lan/react/git/blobs{/sha}',
    git_tags_url: 'https://api.github.com/repos/dk-lan/react/git/tags{/sha}',
    git_refs_url: 'https://api.github.com/repos/dk-lan/react/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/dk-lan/react/git/trees{/sha}',
    statuses_url: 'https://api.github.com/repos/dk-lan/react/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/dk-lan/react/languages',
    stargazers_url: 'https://api.github.com/repos/dk-lan/react/stargazers',
    contributors_url: 'https://api.github.com/repos/dk-lan/react/contributors',
    subscribers_url: 'https://api.github.com/repos/dk-lan/react/subscribers',
    subscription_url: 'https://api.github.com/repos/dk-lan/react/subscription',
    commits_url: 'https://api.github.com/repos/dk-lan/react/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/dk-lan/react/git/commits{/sha}',
    comments_url: 'https://api.github.com/repos/dk-lan/react/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/dk-lan/react/issues/comments{/number}',
    contents_url: 'https://api.github.com/repos/dk-lan/react/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/dk-lan/react/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/dk-lan/react/merges',
    archive_url:
      'https://api.github.com/repos/dk-lan/react/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/dk-lan/react/downloads',
    issues_url: 'https://api.github.com/repos/dk-lan/react/issues{/number}',
    pulls_url: 'https://api.github.com/repos/dk-lan/react/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/dk-lan/react/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/dk-lan/react/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/dk-lan/react/labels{/name}',
    releases_url: 'https://api.github.com/repos/dk-lan/react/releases{/id}',
    deployments_url: 'https://api.github.com/repos/dk-lan/react/deployments',
    created_at: '2017-08-07T04:07:34Z',
    updated_at: '2018-05-18T10:47:13Z',
    pushed_at: '2018-05-11T06:00:37Z',
    git_url: 'git://github.com/dk-lan/react.git',
    ssh_url: 'git@github.com:dk-lan/react.git',
    clone_url: 'https://github.com/dk-lan/react.git',
    svn_url: 'https://github.com/dk-lan/react',
    homepage: null,
    size: 3783,
    stargazers_count: 13,
    watchers_count: 13,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    forks_count: 24,
    mirror_url: null,
    archived: false,
    open_issues_count: 2,
    license: null,
    forks: 24,
    open_issues: 2,
    watchers: 13,
    default_branch: 'master',
    score: 48.75113,
  },
  {
    id: 79425827,
    name: 'react-living-app',
    full_name: 'djirdehh/react-living-app',
    owner: {
      login: 'djirdehh',
      id: 12476938,
      avatar_url: 'https://avatars2.githubusercontent.com/u/12476938?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/djirdehh',
      html_url: 'https://github.com/djirdehh',
      followers_url: 'https://api.github.com/users/djirdehh/followers',
      following_url:
        'https://api.github.com/users/djirdehh/following{/other_user}',
      gists_url: 'https://api.github.com/users/djirdehh/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/djirdehh/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/djirdehh/subscriptions',
      organizations_url: 'https://api.github.com/users/djirdehh/orgs',
      repos_url: 'https://api.github.com/users/djirdehh/repos',
      events_url: 'https://api.github.com/users/djirdehh/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/djirdehh/received_events',
      type: 'User',
      site_admin: false,
    },
    private: false,
    html_url: 'https://github.com/djirdehh/react-living-app',
    description:
      '🌎 A react app that helps you compare the cost of living between cities worldwide',
    fork: false,
    url: 'https://api.github.com/repos/djirdehh/react-living-app',
    forks_url: 'https://api.github.com/repos/djirdehh/react-living-app/forks',
    keys_url:
      'https://api.github.com/repos/djirdehh/react-living-app/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/djirdehh/react-living-app/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/djirdehh/react-living-app/teams',
    hooks_url: 'https://api.github.com/repos/djirdehh/react-living-app/hooks',
    issue_events_url:
      'https://api.github.com/repos/djirdehh/react-living-app/issues/events{/number}',
    events_url: 'https://api.github.com/repos/djirdehh/react-living-app/events',
    assignees_url:
      'https://api.github.com/repos/djirdehh/react-living-app/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/djirdehh/react-living-app/branches{/branch}',
    tags_url: 'https://api.github.com/repos/djirdehh/react-living-app/tags',
    blobs_url:
      'https://api.github.com/repos/djirdehh/react-living-app/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/djirdehh/react-living-app/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/djirdehh/react-living-app/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/djirdehh/react-living-app/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/djirdehh/react-living-app/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/djirdehh/react-living-app/languages',
    stargazers_url:
      'https://api.github.com/repos/djirdehh/react-living-app/stargazers',
    contributors_url:
      'https://api.github.com/repos/djirdehh/react-living-app/contributors',
    subscribers_url:
      'https://api.github.com/repos/djirdehh/react-living-app/subscribers',
    subscription_url:
      'https://api.github.com/repos/djirdehh/react-living-app/subscription',
    commits_url:
      'https://api.github.com/repos/djirdehh/react-living-app/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/djirdehh/react-living-app/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/djirdehh/react-living-app/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/djirdehh/react-living-app/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/djirdehh/react-living-app/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/djirdehh/react-living-app/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/djirdehh/react-living-app/merges',
    archive_url:
      'https://api.github.com/repos/djirdehh/react-living-app/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/djirdehh/react-living-app/downloads',
    issues_url:
      'https://api.github.com/repos/djirdehh/react-living-app/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/djirdehh/react-living-app/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/djirdehh/react-living-app/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/djirdehh/react-living-app/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/djirdehh/react-living-app/labels{/name}',
    releases_url:
      'https://api.github.com/repos/djirdehh/react-living-app/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/djirdehh/react-living-app/deployments',
    created_at: '2017-01-19T07:07:41Z',
    updated_at: '2018-05-17T01:28:17Z',
    pushed_at: '2018-02-03T22:37:33Z',
    git_url: 'git://github.com/djirdehh/react-living-app.git',
    ssh_url: 'git@github.com:djirdehh/react-living-app.git',
    clone_url: 'https://github.com/djirdehh/react-living-app.git',
    svn_url: 'https://github.com/djirdehh/react-living-app',
    homepage: 'https://citii-io.herokuapp.com/',
    size: 12774,
    stargazers_count: 306,
    watchers_count: 306,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 68,
    mirror_url: null,
    archived: false,
    open_issues_count: 7,
    license: null,
    forks: 68,
    open_issues: 7,
    watchers: 306,
    default_branch: 'master',
    score: 47.944225,
  },
  {
    id: 55052570,
    name: 'React',
    full_name: 'VolmitSoftware/React',
    owner: {
      login: 'VolmitSoftware',
      id: 34003941,
      avatar_url: 'https://avatars0.githubusercontent.com/u/34003941?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/VolmitSoftware',
      html_url: 'https://github.com/VolmitSoftware',
      followers_url: 'https://api.github.com/users/VolmitSoftware/followers',
      following_url:
        'https://api.github.com/users/VolmitSoftware/following{/other_user}',
      gists_url: 'https://api.github.com/users/VolmitSoftware/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/VolmitSoftware/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/VolmitSoftware/subscriptions',
      organizations_url: 'https://api.github.com/users/VolmitSoftware/orgs',
      repos_url: 'https://api.github.com/users/VolmitSoftware/repos',
      events_url:
        'https://api.github.com/users/VolmitSoftware/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/VolmitSoftware/received_events',
      type: 'Organization',
      site_admin: false,
    },
    private: false,
    html_url: 'https://github.com/VolmitSoftware/React',
    description: 'Smart Server Performance',
    fork: false,
    url: 'https://api.github.com/repos/VolmitSoftware/React',
    forks_url: 'https://api.github.com/repos/VolmitSoftware/React/forks',
    keys_url: 'https://api.github.com/repos/VolmitSoftware/React/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/VolmitSoftware/React/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/VolmitSoftware/React/teams',
    hooks_url: 'https://api.github.com/repos/VolmitSoftware/React/hooks',
    issue_events_url:
      'https://api.github.com/repos/VolmitSoftware/React/issues/events{/number}',
    events_url: 'https://api.github.com/repos/VolmitSoftware/React/events',
    assignees_url:
      'https://api.github.com/repos/VolmitSoftware/React/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/VolmitSoftware/React/branches{/branch}',
    tags_url: 'https://api.github.com/repos/VolmitSoftware/React/tags',
    blobs_url:
      'https://api.github.com/repos/VolmitSoftware/React/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/VolmitSoftware/React/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/VolmitSoftware/React/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/VolmitSoftware/React/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/VolmitSoftware/React/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/VolmitSoftware/React/languages',
    stargazers_url:
      'https://api.github.com/repos/VolmitSoftware/React/stargazers',
    contributors_url:
      'https://api.github.com/repos/VolmitSoftware/React/contributors',
    subscribers_url:
      'https://api.github.com/repos/VolmitSoftware/React/subscribers',
    subscription_url:
      'https://api.github.com/repos/VolmitSoftware/React/subscription',
    commits_url:
      'https://api.github.com/repos/VolmitSoftware/React/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/VolmitSoftware/React/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/VolmitSoftware/React/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/VolmitSoftware/React/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/VolmitSoftware/React/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/VolmitSoftware/React/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/VolmitSoftware/React/merges',
    archive_url:
      'https://api.github.com/repos/VolmitSoftware/React/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/VolmitSoftware/React/downloads',
    issues_url:
      'https://api.github.com/repos/VolmitSoftware/React/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/VolmitSoftware/React/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/VolmitSoftware/React/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/VolmitSoftware/React/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/VolmitSoftware/React/labels{/name}',
    releases_url:
      'https://api.github.com/repos/VolmitSoftware/React/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/VolmitSoftware/React/deployments',
    created_at: '2016-03-30T10:02:03Z',
    updated_at: '2018-05-09T04:15:30Z',
    pushed_at: '2018-05-09T04:15:27Z',
    git_url: 'git://github.com/VolmitSoftware/React.git',
    ssh_url: 'git@github.com:VolmitSoftware/React.git',
    clone_url: 'https://github.com/VolmitSoftware/React.git',
    svn_url: 'https://github.com/VolmitSoftware/React',
    homepage: '',
    size: 112133,
    stargazers_count: 16,
    watchers_count: 16,
    language: null,
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 20,
    mirror_url: null,
    archived: false,
    open_issues_count: 23,
    license: null,
    forks: 20,
    open_issues: 23,
    watchers: 16,
    default_branch: 'master',
    score: 47.838116,
  },
  {
    id: 1266120,
    name: 'react',
    full_name: 'marcusphillips/react',
    owner: {
      login: 'marcusphillips',
      id: 239982,
      avatar_url: 'https://avatars2.githubusercontent.com/u/239982?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/marcusphillips',
      html_url: 'https://github.com/marcusphillips',
      followers_url: 'https://api.github.com/users/marcusphillips/followers',
      following_url:
        'https://api.github.com/users/marcusphillips/following{/other_user}',
      gists_url: 'https://api.github.com/users/marcusphillips/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/marcusphillips/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/marcusphillips/subscriptions',
      organizations_url: 'https://api.github.com/users/marcusphillips/orgs',
      repos_url: 'https://api.github.com/users/marcusphillips/repos',
      events_url:
        'https://api.github.com/users/marcusphillips/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/marcusphillips/received_events',
      type: 'User',
      site_admin: false,
    },
    private: false,
    html_url: 'https://github.com/marcusphillips/react',
    description: 'Easy-rerender templating language',
    fork: false,
    url: 'https://api.github.com/repos/marcusphillips/react',
    forks_url: 'https://api.github.com/repos/marcusphillips/react/forks',
    keys_url: 'https://api.github.com/repos/marcusphillips/react/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/marcusphillips/react/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/marcusphillips/react/teams',
    hooks_url: 'https://api.github.com/repos/marcusphillips/react/hooks',
    issue_events_url:
      'https://api.github.com/repos/marcusphillips/react/issues/events{/number}',
    events_url: 'https://api.github.com/repos/marcusphillips/react/events',
    assignees_url:
      'https://api.github.com/repos/marcusphillips/react/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/marcusphillips/react/branches{/branch}',
    tags_url: 'https://api.github.com/repos/marcusphillips/react/tags',
    blobs_url:
      'https://api.github.com/repos/marcusphillips/react/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/marcusphillips/react/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/marcusphillips/react/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/marcusphillips/react/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/marcusphillips/react/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/marcusphillips/react/languages',
    stargazers_url:
      'https://api.github.com/repos/marcusphillips/react/stargazers',
    contributors_url:
      'https://api.github.com/repos/marcusphillips/react/contributors',
    subscribers_url:
      'https://api.github.com/repos/marcusphillips/react/subscribers',
    subscription_url:
      'https://api.github.com/repos/marcusphillips/react/subscription',
    commits_url:
      'https://api.github.com/repos/marcusphillips/react/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/marcusphillips/react/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/marcusphillips/react/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/marcusphillips/react/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/marcusphillips/react/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/marcusphillips/react/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/marcusphillips/react/merges',
    archive_url:
      'https://api.github.com/repos/marcusphillips/react/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/marcusphillips/react/downloads',
    issues_url:
      'https://api.github.com/repos/marcusphillips/react/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/marcusphillips/react/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/marcusphillips/react/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/marcusphillips/react/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/marcusphillips/react/labels{/name}',
    releases_url:
      'https://api.github.com/repos/marcusphillips/react/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/marcusphillips/react/deployments',
    created_at: '2011-01-18T05:48:46Z',
    updated_at: '2017-08-10T08:17:02Z',
    pushed_at: '2012-06-02T09:13:22Z',
    git_url: 'git://github.com/marcusphillips/react.git',
    ssh_url: 'git@github.com:marcusphillips/react.git',
    clone_url: 'https://github.com/marcusphillips/react.git',
    svn_url: 'https://github.com/marcusphillips/react',
    homepage: '',
    size: 931,
    stargazers_count: 32,
    watchers_count: 32,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 15,
    mirror_url: null,
    archived: false,
    open_issues_count: 1,
    license: null,
    forks: 15,
    open_issues: 1,
    watchers: 32,
    default_branch: 'master',
    score: 47.752907,
  },
  {
    id: 38199527,
    name: 'react-placeholder',
    full_name: 'buildo/react-placeholder',
    owner: {
      login: 'buildo',
      id: 7370958,
      avatar_url: 'https://avatars3.githubusercontent.com/u/7370958?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/buildo',
      html_url: 'https://github.com/buildo',
      followers_url: 'https://api.github.com/users/buildo/followers',
      following_url:
        'https://api.github.com/users/buildo/following{/other_user}',
      gists_url: 'https://api.github.com/users/buildo/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/buildo/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/buildo/subscriptions',
      organizations_url: 'https://api.github.com/users/buildo/orgs',
      repos_url: 'https://api.github.com/users/buildo/repos',
      events_url: 'https://api.github.com/users/buildo/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/buildo/received_events',
      type: 'Organization',
      site_admin: false,
    },
    private: false,
    html_url: 'https://github.com/buildo/react-placeholder',
    description:
      'A React component to easily replicate your page with nice placeholders while the content is loading',
    fork: false,
    url: 'https://api.github.com/repos/buildo/react-placeholder',
    forks_url: 'https://api.github.com/repos/buildo/react-placeholder/forks',
    keys_url:
      'https://api.github.com/repos/buildo/react-placeholder/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/buildo/react-placeholder/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/buildo/react-placeholder/teams',
    hooks_url: 'https://api.github.com/repos/buildo/react-placeholder/hooks',
    issue_events_url:
      'https://api.github.com/repos/buildo/react-placeholder/issues/events{/number}',
    events_url: 'https://api.github.com/repos/buildo/react-placeholder/events',
    assignees_url:
      'https://api.github.com/repos/buildo/react-placeholder/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/buildo/react-placeholder/branches{/branch}',
    tags_url: 'https://api.github.com/repos/buildo/react-placeholder/tags',
    blobs_url:
      'https://api.github.com/repos/buildo/react-placeholder/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/buildo/react-placeholder/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/buildo/react-placeholder/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/buildo/react-placeholder/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/buildo/react-placeholder/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/buildo/react-placeholder/languages',
    stargazers_url:
      'https://api.github.com/repos/buildo/react-placeholder/stargazers',
    contributors_url:
      'https://api.github.com/repos/buildo/react-placeholder/contributors',
    subscribers_url:
      'https://api.github.com/repos/buildo/react-placeholder/subscribers',
    subscription_url:
      'https://api.github.com/repos/buildo/react-placeholder/subscription',
    commits_url:
      'https://api.github.com/repos/buildo/react-placeholder/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/buildo/react-placeholder/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/buildo/react-placeholder/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/buildo/react-placeholder/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/buildo/react-placeholder/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/buildo/react-placeholder/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/buildo/react-placeholder/merges',
    archive_url:
      'https://api.github.com/repos/buildo/react-placeholder/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/buildo/react-placeholder/downloads',
    issues_url:
      'https://api.github.com/repos/buildo/react-placeholder/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/buildo/react-placeholder/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/buildo/react-placeholder/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/buildo/react-placeholder/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/buildo/react-placeholder/labels{/name}',
    releases_url:
      'https://api.github.com/repos/buildo/react-placeholder/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/buildo/react-placeholder/deployments',
    created_at: '2015-06-28T13:19:43Z',
    updated_at: '2018-05-21T12:41:52Z',
    pushed_at: '2018-05-08T14:36:15Z',
    git_url: 'git://github.com/buildo/react-placeholder.git',
    ssh_url: 'git@github.com:buildo/react-placeholder.git',
    clone_url: 'https://github.com/buildo/react-placeholder.git',
    svn_url: 'https://github.com/buildo/react-placeholder',
    homepage: '',
    size: 1272,
    stargazers_count: 540,
    watchers_count: 540,
    language: 'TypeScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    forks_count: 49,
    mirror_url: null,
    archived: false,
    open_issues_count: 4,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
    },
    forks: 49,
    open_issues: 4,
    watchers: 540,
    default_branch: 'master',
    score: 46.577923,
  },
  {
    id: 63537249,
    name: 'create-react-app',
    full_name: 'facebook/create-react-app',
    owner: {
      login: 'facebook',
      id: 69631,
      avatar_url: 'https://avatars3.githubusercontent.com/u/69631?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/facebook',
      html_url: 'https://github.com/facebook',
      followers_url: 'https://api.github.com/users/facebook/followers',
      following_url:
        'https://api.github.com/users/facebook/following{/other_user}',
      gists_url: 'https://api.github.com/users/facebook/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/facebook/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/facebook/subscriptions',
      organizations_url: 'https://api.github.com/users/facebook/orgs',
      repos_url: 'https://api.github.com/users/facebook/repos',
      events_url: 'https://api.github.com/users/facebook/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/facebook/received_events',
      type: 'Organization',
      site_admin: false,
    },
    private: false,
    html_url: 'https://github.com/facebook/create-react-app',
    description: 'Create React apps with no build configuration.',
    fork: false,
    url: 'https://api.github.com/repos/facebook/create-react-app',
    forks_url: 'https://api.github.com/repos/facebook/create-react-app/forks',
    keys_url:
      'https://api.github.com/repos/facebook/create-react-app/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/facebook/create-react-app/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/facebook/create-react-app/teams',
    hooks_url: 'https://api.github.com/repos/facebook/create-react-app/hooks',
    issue_events_url:
      'https://api.github.com/repos/facebook/create-react-app/issues/events{/number}',
    events_url: 'https://api.github.com/repos/facebook/create-react-app/events',
    assignees_url:
      'https://api.github.com/repos/facebook/create-react-app/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/facebook/create-react-app/branches{/branch}',
    tags_url: 'https://api.github.com/repos/facebook/create-react-app/tags',
    blobs_url:
      'https://api.github.com/repos/facebook/create-react-app/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/facebook/create-react-app/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/facebook/create-react-app/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/facebook/create-react-app/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/facebook/create-react-app/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/facebook/create-react-app/languages',
    stargazers_url:
      'https://api.github.com/repos/facebook/create-react-app/stargazers',
    contributors_url:
      'https://api.github.com/repos/facebook/create-react-app/contributors',
    subscribers_url:
      'https://api.github.com/repos/facebook/create-react-app/subscribers',
    subscription_url:
      'https://api.github.com/repos/facebook/create-react-app/subscription',
    commits_url:
      'https://api.github.com/repos/facebook/create-react-app/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/facebook/create-react-app/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/facebook/create-react-app/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/facebook/create-react-app/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/facebook/create-react-app/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/facebook/create-react-app/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/facebook/create-react-app/merges',
    archive_url:
      'https://api.github.com/repos/facebook/create-react-app/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/facebook/create-react-app/downloads',
    issues_url:
      'https://api.github.com/repos/facebook/create-react-app/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/facebook/create-react-app/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/facebook/create-react-app/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/facebook/create-react-app/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/facebook/create-react-app/labels{/name}',
    releases_url:
      'https://api.github.com/repos/facebook/create-react-app/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/facebook/create-react-app/deployments',
    created_at: '2016-07-17T14:55:11Z',
    updated_at: '2018-05-21T21:59:33Z',
    pushed_at: '2018-05-21T12:02:43Z',
    git_url: 'git://github.com/facebook/create-react-app.git',
    ssh_url: 'git@github.com:facebook/create-react-app.git',
    clone_url: 'https://github.com/facebook/create-react-app.git',
    svn_url: 'https://github.com/facebook/create-react-app',
    homepage: null,
    size: 5721,
    stargazers_count: 49122,
    watchers_count: 49122,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    forks_count: 10150,
    mirror_url: null,
    archived: false,
    open_issues_count: 359,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
    },
    forks: 10150,
    open_issues: 359,
    watchers: 49122,
    default_branch: 'next',
    score: 46.236145,
  },
  {
    id: 78510789,
    name: 'react',
    full_name: 'yueyingjun/react',
    owner: {
      login: 'yueyingjun',
      id: 7616127,
      avatar_url: 'https://avatars0.githubusercontent.com/u/7616127?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/yueyingjun',
      html_url: 'https://github.com/yueyingjun',
      followers_url: 'https://api.github.com/users/yueyingjun/followers',
      following_url:
        'https://api.github.com/users/yueyingjun/following{/other_user}',
      gists_url: 'https://api.github.com/users/yueyingjun/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/yueyingjun/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/yueyingjun/subscriptions',
      organizations_url: 'https://api.github.com/users/yueyingjun/orgs',
      repos_url: 'https://api.github.com/users/yueyingjun/repos',
      events_url: 'https://api.github.com/users/yueyingjun/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/yueyingjun/received_events',
      type: 'User',
      site_admin: false,
    },
    private: false,
    html_url: 'https://github.com/yueyingjun/react',
    description: null,
    fork: false,
    url: 'https://api.github.com/repos/yueyingjun/react',
    forks_url: 'https://api.github.com/repos/yueyingjun/react/forks',
    keys_url: 'https://api.github.com/repos/yueyingjun/react/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/yueyingjun/react/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/yueyingjun/react/teams',
    hooks_url: 'https://api.github.com/repos/yueyingjun/react/hooks',
    issue_events_url:
      'https://api.github.com/repos/yueyingjun/react/issues/events{/number}',
    events_url: 'https://api.github.com/repos/yueyingjun/react/events',
    assignees_url:
      'https://api.github.com/repos/yueyingjun/react/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/yueyingjun/react/branches{/branch}',
    tags_url: 'https://api.github.com/repos/yueyingjun/react/tags',
    blobs_url: 'https://api.github.com/repos/yueyingjun/react/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/yueyingjun/react/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/yueyingjun/react/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/yueyingjun/react/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/yueyingjun/react/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/yueyingjun/react/languages',
    stargazers_url: 'https://api.github.com/repos/yueyingjun/react/stargazers',
    contributors_url:
      'https://api.github.com/repos/yueyingjun/react/contributors',
    subscribers_url:
      'https://api.github.com/repos/yueyingjun/react/subscribers',
    subscription_url:
      'https://api.github.com/repos/yueyingjun/react/subscription',
    commits_url: 'https://api.github.com/repos/yueyingjun/react/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/yueyingjun/react/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/yueyingjun/react/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/yueyingjun/react/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/yueyingjun/react/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/yueyingjun/react/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/yueyingjun/react/merges',
    archive_url:
      'https://api.github.com/repos/yueyingjun/react/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/yueyingjun/react/downloads',
    issues_url: 'https://api.github.com/repos/yueyingjun/react/issues{/number}',
    pulls_url: 'https://api.github.com/repos/yueyingjun/react/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/yueyingjun/react/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/yueyingjun/react/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/yueyingjun/react/labels{/name}',
    releases_url: 'https://api.github.com/repos/yueyingjun/react/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/yueyingjun/react/deployments',
    created_at: '2017-01-10T07:55:29Z',
    updated_at: '2017-01-11T05:54:40Z',
    pushed_at: '2017-01-11T07:35:23Z',
    git_url: 'git://github.com/yueyingjun/react.git',
    ssh_url: 'git@github.com:yueyingjun/react.git',
    clone_url: 'https://github.com/yueyingjun/react.git',
    svn_url: 'https://github.com/yueyingjun/react',
    homepage: null,
    size: 298,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 54,
    mirror_url: null,
    archived: false,
    open_issues_count: 39,
    license: null,
    forks: 54,
    open_issues: 39,
    watchers: 0,
    default_branch: 'master',
    score: 46.192257,
  },
  {
    id: 25427817,
    name: 'react-dnd',
    full_name: 'react-dnd/react-dnd',
    owner: {
      login: 'react-dnd',
      id: 25307599,
      avatar_url: 'https://avatars1.githubusercontent.com/u/25307599?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/react-dnd',
      html_url: 'https://github.com/react-dnd',
      followers_url: 'https://api.github.com/users/react-dnd/followers',
      following_url:
        'https://api.github.com/users/react-dnd/following{/other_user}',
      gists_url: 'https://api.github.com/users/react-dnd/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/react-dnd/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/react-dnd/subscriptions',
      organizations_url: 'https://api.github.com/users/react-dnd/orgs',
      repos_url: 'https://api.github.com/users/react-dnd/repos',
      events_url: 'https://api.github.com/users/react-dnd/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/react-dnd/received_events',
      type: 'Organization',
      site_admin: false,
    },
    private: false,
    html_url: 'https://github.com/react-dnd/react-dnd',
    description: 'Drag and Drop for React',
    fork: false,
    url: 'https://api.github.com/repos/react-dnd/react-dnd',
    forks_url: 'https://api.github.com/repos/react-dnd/react-dnd/forks',
    keys_url: 'https://api.github.com/repos/react-dnd/react-dnd/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/react-dnd/react-dnd/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/react-dnd/react-dnd/teams',
    hooks_url: 'https://api.github.com/repos/react-dnd/react-dnd/hooks',
    issue_events_url:
      'https://api.github.com/repos/react-dnd/react-dnd/issues/events{/number}',
    events_url: 'https://api.github.com/repos/react-dnd/react-dnd/events',
    assignees_url:
      'https://api.github.com/repos/react-dnd/react-dnd/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/react-dnd/react-dnd/branches{/branch}',
    tags_url: 'https://api.github.com/repos/react-dnd/react-dnd/tags',
    blobs_url:
      'https://api.github.com/repos/react-dnd/react-dnd/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/react-dnd/react-dnd/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/react-dnd/react-dnd/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/react-dnd/react-dnd/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/react-dnd/react-dnd/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/react-dnd/react-dnd/languages',
    stargazers_url:
      'https://api.github.com/repos/react-dnd/react-dnd/stargazers',
    contributors_url:
      'https://api.github.com/repos/react-dnd/react-dnd/contributors',
    subscribers_url:
      'https://api.github.com/repos/react-dnd/react-dnd/subscribers',
    subscription_url:
      'https://api.github.com/repos/react-dnd/react-dnd/subscription',
    commits_url:
      'https://api.github.com/repos/react-dnd/react-dnd/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/react-dnd/react-dnd/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/react-dnd/react-dnd/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/react-dnd/react-dnd/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/react-dnd/react-dnd/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/react-dnd/react-dnd/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/react-dnd/react-dnd/merges',
    archive_url:
      'https://api.github.com/repos/react-dnd/react-dnd/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/react-dnd/react-dnd/downloads',
    issues_url:
      'https://api.github.com/repos/react-dnd/react-dnd/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/react-dnd/react-dnd/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/react-dnd/react-dnd/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/react-dnd/react-dnd/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/react-dnd/react-dnd/labels{/name}',
    releases_url:
      'https://api.github.com/repos/react-dnd/react-dnd/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/react-dnd/react-dnd/deployments',
    created_at: '2014-10-19T13:29:28Z',
    updated_at: '2018-05-21T15:46:56Z',
    pushed_at: '2018-05-09T08:18:47Z',
    git_url: 'git://github.com/react-dnd/react-dnd.git',
    ssh_url: 'git@github.com:react-dnd/react-dnd.git',
    clone_url: 'https://github.com/react-dnd/react-dnd.git',
    svn_url: 'https://github.com/react-dnd/react-dnd',
    homepage: 'http://react-dnd.github.io/react-dnd',
    size: 27426,
    stargazers_count: 8482,
    watchers_count: 8482,
    language: 'TypeScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    forks_count: 1006,
    mirror_url: null,
    archived: false,
    open_issues_count: 311,
    license: { key: 'other', name: 'Other', spdx_id: null, url: null },
    forks: 1006,
    open_issues: 311,
    watchers: 8482,
    default_branch: 'master',
    score: 46.053696,
  },
  {
    id: 16704625,
    name: 'react',
    full_name: 'reverbrain/react',
    owner: {
      login: 'reverbrain',
      id: 1616511,
      avatar_url: 'https://avatars2.githubusercontent.com/u/1616511?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/reverbrain',
      html_url: 'https://github.com/reverbrain',
      followers_url: 'https://api.github.com/users/reverbrain/followers',
      following_url:
        'https://api.github.com/users/reverbrain/following{/other_user}',
      gists_url: 'https://api.github.com/users/reverbrain/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/reverbrain/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/reverbrain/subscriptions',
      organizations_url: 'https://api.github.com/users/reverbrain/orgs',
      repos_url: 'https://api.github.com/users/reverbrain/repos',
      events_url: 'https://api.github.com/users/reverbrain/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/reverbrain/received_events',
      type: 'Organization',
      site_admin: false,
    },
    private: false,
    html_url: 'https://github.com/reverbrain/react',
    description: 'Realtime call tree for C++',
    fork: false,
    url: 'https://api.github.com/repos/reverbrain/react',
    forks_url: 'https://api.github.com/repos/reverbrain/react/forks',
    keys_url: 'https://api.github.com/repos/reverbrain/react/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/reverbrain/react/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/reverbrain/react/teams',
    hooks_url: 'https://api.github.com/repos/reverbrain/react/hooks',
    issue_events_url:
      'https://api.github.com/repos/reverbrain/react/issues/events{/number}',
    events_url: 'https://api.github.com/repos/reverbrain/react/events',
    assignees_url:
      'https://api.github.com/repos/reverbrain/react/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/reverbrain/react/branches{/branch}',
    tags_url: 'https://api.github.com/repos/reverbrain/react/tags',
    blobs_url: 'https://api.github.com/repos/reverbrain/react/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/reverbrain/react/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/reverbrain/react/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/reverbrain/react/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/reverbrain/react/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/reverbrain/react/languages',
    stargazers_url: 'https://api.github.com/repos/reverbrain/react/stargazers',
    contributors_url:
      'https://api.github.com/repos/reverbrain/react/contributors',
    subscribers_url:
      'https://api.github.com/repos/reverbrain/react/subscribers',
    subscription_url:
      'https://api.github.com/repos/reverbrain/react/subscription',
    commits_url: 'https://api.github.com/repos/reverbrain/react/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/reverbrain/react/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/reverbrain/react/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/reverbrain/react/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/reverbrain/react/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/reverbrain/react/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/reverbrain/react/merges',
    archive_url:
      'https://api.github.com/repos/reverbrain/react/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/reverbrain/react/downloads',
    issues_url: 'https://api.github.com/repos/reverbrain/react/issues{/number}',
    pulls_url: 'https://api.github.com/repos/reverbrain/react/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/reverbrain/react/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/reverbrain/react/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/reverbrain/react/labels{/name}',
    releases_url: 'https://api.github.com/repos/reverbrain/react/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/reverbrain/react/deployments',
    created_at: '2014-02-10T18:23:07Z',
    updated_at: '2018-03-17T13:42:07Z',
    pushed_at: '2014-07-03T19:06:38Z',
    git_url: 'git://github.com/reverbrain/react.git',
    ssh_url: 'git@github.com:reverbrain/react.git',
    clone_url: 'https://github.com/reverbrain/react.git',
    svn_url: 'https://github.com/reverbrain/react',
    homepage: null,
    size: 1833,
    stargazers_count: 36,
    watchers_count: 36,
    language: 'C++',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 10,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: 'lgpl-2.1',
      name: 'GNU Lesser General Public License v2.1',
      spdx_id: 'LGPL-2.1',
      url: 'https://api.github.com/licenses/lgpl-2.1',
    },
    forks: 10,
    open_issues: 0,
    watchers: 36,
    default_branch: 'master',
    score: 44.541374,
  },
  {
    id: 95421217,
    name: 'react',
    full_name: 'KeKe-Li/react',
    owner: {
      login: 'KeKe-Li',
      id: 13062571,
      avatar_url: 'https://avatars2.githubusercontent.com/u/13062571?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/KeKe-Li',
      html_url: 'https://github.com/KeKe-Li',
      followers_url: 'https://api.github.com/users/KeKe-Li/followers',
      following_url:
        'https://api.github.com/users/KeKe-Li/following{/other_user}',
      gists_url: 'https://api.github.com/users/KeKe-Li/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/KeKe-Li/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/KeKe-Li/subscriptions',
      organizations_url: 'https://api.github.com/users/KeKe-Li/orgs',
      repos_url: 'https://api.github.com/users/KeKe-Li/repos',
      events_url: 'https://api.github.com/users/KeKe-Li/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/KeKe-Li/received_events',
      type: 'User',
      site_admin: false,
    },
    private: false,
    html_url: 'https://github.com/KeKe-Li/react',
    description: 'react-admin',
    fork: false,
    url: 'https://api.github.com/repos/KeKe-Li/react',
    forks_url: 'https://api.github.com/repos/KeKe-Li/react/forks',
    keys_url: 'https://api.github.com/repos/KeKe-Li/react/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/KeKe-Li/react/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/KeKe-Li/react/teams',
    hooks_url: 'https://api.github.com/repos/KeKe-Li/react/hooks',
    issue_events_url:
      'https://api.github.com/repos/KeKe-Li/react/issues/events{/number}',
    events_url: 'https://api.github.com/repos/KeKe-Li/react/events',
    assignees_url:
      'https://api.github.com/repos/KeKe-Li/react/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/KeKe-Li/react/branches{/branch}',
    tags_url: 'https://api.github.com/repos/KeKe-Li/react/tags',
    blobs_url: 'https://api.github.com/repos/KeKe-Li/react/git/blobs{/sha}',
    git_tags_url: 'https://api.github.com/repos/KeKe-Li/react/git/tags{/sha}',
    git_refs_url: 'https://api.github.com/repos/KeKe-Li/react/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/KeKe-Li/react/git/trees{/sha}',
    statuses_url: 'https://api.github.com/repos/KeKe-Li/react/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/KeKe-Li/react/languages',
    stargazers_url: 'https://api.github.com/repos/KeKe-Li/react/stargazers',
    contributors_url: 'https://api.github.com/repos/KeKe-Li/react/contributors',
    subscribers_url: 'https://api.github.com/repos/KeKe-Li/react/subscribers',
    subscription_url: 'https://api.github.com/repos/KeKe-Li/react/subscription',
    commits_url: 'https://api.github.com/repos/KeKe-Li/react/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/KeKe-Li/react/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/KeKe-Li/react/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/KeKe-Li/react/issues/comments{/number}',
    contents_url: 'https://api.github.com/repos/KeKe-Li/react/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/KeKe-Li/react/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/KeKe-Li/react/merges',
    archive_url:
      'https://api.github.com/repos/KeKe-Li/react/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/KeKe-Li/react/downloads',
    issues_url: 'https://api.github.com/repos/KeKe-Li/react/issues{/number}',
    pulls_url: 'https://api.github.com/repos/KeKe-Li/react/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/KeKe-Li/react/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/KeKe-Li/react/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/KeKe-Li/react/labels{/name}',
    releases_url: 'https://api.github.com/repos/KeKe-Li/react/releases{/id}',
    deployments_url: 'https://api.github.com/repos/KeKe-Li/react/deployments',
    created_at: '2017-06-26T07:39:51Z',
    updated_at: '2018-04-28T15:49:49Z',
    pushed_at: '2018-03-12T01:03:01Z',
    git_url: 'git://github.com/KeKe-Li/react.git',
    ssh_url: 'git@github.com:KeKe-Li/react.git',
    clone_url: 'https://github.com/KeKe-Li/react.git',
    svn_url: 'https://github.com/KeKe-Li/react',
    homepage: 'https://github.com/KeKe-Li/react',
    size: 203,
    stargazers_count: 33,
    watchers_count: 33,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 10,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: null,
    forks: 10,
    open_issues: 0,
    watchers: 33,
    default_branch: 'master',
    score: 44.470715,
  },
  {
    id: 8216262,
    name: 'react',
    full_name: 'dbuenzli/react',
    owner: {
      login: 'dbuenzli',
      id: 485596,
      avatar_url: 'https://avatars2.githubusercontent.com/u/485596?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/dbuenzli',
      html_url: 'https://github.com/dbuenzli',
      followers_url: 'https://api.github.com/users/dbuenzli/followers',
      following_url:
        'https://api.github.com/users/dbuenzli/following{/other_user}',
      gists_url: 'https://api.github.com/users/dbuenzli/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/dbuenzli/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/dbuenzli/subscriptions',
      organizations_url: 'https://api.github.com/users/dbuenzli/orgs',
      repos_url: 'https://api.github.com/users/dbuenzli/repos',
      events_url: 'https://api.github.com/users/dbuenzli/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/dbuenzli/received_events',
      type: 'User',
      site_admin: false,
    },
    private: false,
    html_url: 'https://github.com/dbuenzli/react',
    description: 'Declarative events and signals for OCaml',
    fork: false,
    url: 'https://api.github.com/repos/dbuenzli/react',
    forks_url: 'https://api.github.com/repos/dbuenzli/react/forks',
    keys_url: 'https://api.github.com/repos/dbuenzli/react/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/dbuenzli/react/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/dbuenzli/react/teams',
    hooks_url: 'https://api.github.com/repos/dbuenzli/react/hooks',
    issue_events_url:
      'https://api.github.com/repos/dbuenzli/react/issues/events{/number}',
    events_url: 'https://api.github.com/repos/dbuenzli/react/events',
    assignees_url:
      'https://api.github.com/repos/dbuenzli/react/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/dbuenzli/react/branches{/branch}',
    tags_url: 'https://api.github.com/repos/dbuenzli/react/tags',
    blobs_url: 'https://api.github.com/repos/dbuenzli/react/git/blobs{/sha}',
    git_tags_url: 'https://api.github.com/repos/dbuenzli/react/git/tags{/sha}',
    git_refs_url: 'https://api.github.com/repos/dbuenzli/react/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/dbuenzli/react/git/trees{/sha}',
    statuses_url: 'https://api.github.com/repos/dbuenzli/react/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/dbuenzli/react/languages',
    stargazers_url: 'https://api.github.com/repos/dbuenzli/react/stargazers',
    contributors_url:
      'https://api.github.com/repos/dbuenzli/react/contributors',
    subscribers_url: 'https://api.github.com/repos/dbuenzli/react/subscribers',
    subscription_url:
      'https://api.github.com/repos/dbuenzli/react/subscription',
    commits_url: 'https://api.github.com/repos/dbuenzli/react/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/dbuenzli/react/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/dbuenzli/react/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/dbuenzli/react/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/dbuenzli/react/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/dbuenzli/react/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/dbuenzli/react/merges',
    archive_url:
      'https://api.github.com/repos/dbuenzli/react/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/dbuenzli/react/downloads',
    issues_url: 'https://api.github.com/repos/dbuenzli/react/issues{/number}',
    pulls_url: 'https://api.github.com/repos/dbuenzli/react/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/dbuenzli/react/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/dbuenzli/react/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/dbuenzli/react/labels{/name}',
    releases_url: 'https://api.github.com/repos/dbuenzli/react/releases{/id}',
    deployments_url: 'https://api.github.com/repos/dbuenzli/react/deployments',
    created_at: '2013-02-15T10:13:14Z',
    updated_at: '2018-05-21T09:20:37Z',
    pushed_at: '2017-10-16T16:37:51Z',
    git_url: 'git://github.com/dbuenzli/react.git',
    ssh_url: 'git@github.com:dbuenzli/react.git',
    clone_url: 'https://github.com/dbuenzli/react.git',
    svn_url: 'https://github.com/dbuenzli/react',
    homepage: 'http://erratique.ch/software/react',
    size: 291,
    stargazers_count: 76,
    watchers_count: 76,
    language: 'OCaml',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    forks_count: 7,
    mirror_url: null,
    archived: false,
    open_issues_count: 12,
    license: {
      key: 'isc',
      name: 'ISC License',
      spdx_id: 'ISC',
      url: 'https://api.github.com/licenses/isc',
    },
    forks: 7,
    open_issues: 12,
    watchers: 76,
    default_branch: 'master',
    score: 44.378498,
  },
  {
    id: 37135867,
    name: 'react-autosize-textarea',
    full_name: 'buildo/react-autosize-textarea',
    owner: {
      login: 'buildo',
      id: 7370958,
      avatar_url: 'https://avatars3.githubusercontent.com/u/7370958?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/buildo',
      html_url: 'https://github.com/buildo',
      followers_url: 'https://api.github.com/users/buildo/followers',
      following_url:
        'https://api.github.com/users/buildo/following{/other_user}',
      gists_url: 'https://api.github.com/users/buildo/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/buildo/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/buildo/subscriptions',
      organizations_url: 'https://api.github.com/users/buildo/orgs',
      repos_url: 'https://api.github.com/users/buildo/repos',
      events_url: 'https://api.github.com/users/buildo/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/buildo/received_events',
      type: 'Organization',
      site_admin: false,
    },
    private: false,
    html_url: 'https://github.com/buildo/react-autosize-textarea',
    description:
      'A textarea perfectly compatible with ReactJS default one which auto resizes its height based on user input.',
    fork: false,
    url: 'https://api.github.com/repos/buildo/react-autosize-textarea',
    forks_url:
      'https://api.github.com/repos/buildo/react-autosize-textarea/forks',
    keys_url:
      'https://api.github.com/repos/buildo/react-autosize-textarea/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/buildo/react-autosize-textarea/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/buildo/react-autosize-textarea/teams',
    hooks_url:
      'https://api.github.com/repos/buildo/react-autosize-textarea/hooks',
    issue_events_url:
      'https://api.github.com/repos/buildo/react-autosize-textarea/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/buildo/react-autosize-textarea/events',
    assignees_url:
      'https://api.github.com/repos/buildo/react-autosize-textarea/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/buildo/react-autosize-textarea/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/buildo/react-autosize-textarea/tags',
    blobs_url:
      'https://api.github.com/repos/buildo/react-autosize-textarea/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/buildo/react-autosize-textarea/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/buildo/react-autosize-textarea/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/buildo/react-autosize-textarea/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/buildo/react-autosize-textarea/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/buildo/react-autosize-textarea/languages',
    stargazers_url:
      'https://api.github.com/repos/buildo/react-autosize-textarea/stargazers',
    contributors_url:
      'https://api.github.com/repos/buildo/react-autosize-textarea/contributors',
    subscribers_url:
      'https://api.github.com/repos/buildo/react-autosize-textarea/subscribers',
    subscription_url:
      'https://api.github.com/repos/buildo/react-autosize-textarea/subscription',
    commits_url:
      'https://api.github.com/repos/buildo/react-autosize-textarea/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/buildo/react-autosize-textarea/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/buildo/react-autosize-textarea/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/buildo/react-autosize-textarea/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/buildo/react-autosize-textarea/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/buildo/react-autosize-textarea/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/buildo/react-autosize-textarea/merges',
    archive_url:
      'https://api.github.com/repos/buildo/react-autosize-textarea/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/buildo/react-autosize-textarea/downloads',
    issues_url:
      'https://api.github.com/repos/buildo/react-autosize-textarea/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/buildo/react-autosize-textarea/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/buildo/react-autosize-textarea/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/buildo/react-autosize-textarea/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/buildo/react-autosize-textarea/labels{/name}',
    releases_url:
      'https://api.github.com/repos/buildo/react-autosize-textarea/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/buildo/react-autosize-textarea/deployments',
    created_at: '2015-06-09T14:08:26Z',
    updated_at: '2018-05-21T17:18:12Z',
    pushed_at: '2018-04-11T09:41:40Z',
    git_url: 'git://github.com/buildo/react-autosize-textarea.git',
    ssh_url: 'git@github.com:buildo/react-autosize-textarea.git',
    clone_url: 'https://github.com/buildo/react-autosize-textarea.git',
    svn_url: 'https://github.com/buildo/react-autosize-textarea',
    homepage: 'http://react-components.buildo.io/#textareaautosize',
    size: 459,
    stargazers_count: 203,
    watchers_count: 203,
    language: 'TypeScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 45,
    mirror_url: null,
    archived: false,
    open_issues_count: 8,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
    },
    forks: 45,
    open_issues: 8,
    watchers: 203,
    default_branch: 'master',
    score: 43.773285,
  },
  {
    id: 47510648,
    name: 'react',
    full_name: 'pento/react',
    owner: {
      login: 'pento',
      id: 352291,
      avatar_url: 'https://avatars3.githubusercontent.com/u/352291?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/pento',
      html_url: 'https://github.com/pento',
      followers_url: 'https://api.github.com/users/pento/followers',
      following_url:
        'https://api.github.com/users/pento/following{/other_user}',
      gists_url: 'https://api.github.com/users/pento/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/pento/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/pento/subscriptions',
      organizations_url: 'https://api.github.com/users/pento/orgs',
      repos_url: 'https://api.github.com/users/pento/repos',
      events_url: 'https://api.github.com/users/pento/events{/privacy}',
      received_events_url: 'https://api.github.com/users/pento/received_events',
      type: 'User',
      site_admin: false,
    },
    private: false,
    html_url: 'https://github.com/pento/react',
    description: 'x1f4a9 Reactions.',
    fork: false,
    url: 'https://api.github.com/repos/pento/react',
    forks_url: 'https://api.github.com/repos/pento/react/forks',
    keys_url: 'https://api.github.com/repos/pento/react/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/pento/react/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/pento/react/teams',
    hooks_url: 'https://api.github.com/repos/pento/react/hooks',
    issue_events_url:
      'https://api.github.com/repos/pento/react/issues/events{/number}',
    events_url: 'https://api.github.com/repos/pento/react/events',
    assignees_url: 'https://api.github.com/repos/pento/react/assignees{/user}',
    branches_url: 'https://api.github.com/repos/pento/react/branches{/branch}',
    tags_url: 'https://api.github.com/repos/pento/react/tags',
    blobs_url: 'https://api.github.com/repos/pento/react/git/blobs{/sha}',
    git_tags_url: 'https://api.github.com/repos/pento/react/git/tags{/sha}',
    git_refs_url: 'https://api.github.com/repos/pento/react/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/pento/react/git/trees{/sha}',
    statuses_url: 'https://api.github.com/repos/pento/react/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/pento/react/languages',
    stargazers_url: 'https://api.github.com/repos/pento/react/stargazers',
    contributors_url: 'https://api.github.com/repos/pento/react/contributors',
    subscribers_url: 'https://api.github.com/repos/pento/react/subscribers',
    subscription_url: 'https://api.github.com/repos/pento/react/subscription',
    commits_url: 'https://api.github.com/repos/pento/react/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/pento/react/git/commits{/sha}',
    comments_url: 'https://api.github.com/repos/pento/react/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/pento/react/issues/comments{/number}',
    contents_url: 'https://api.github.com/repos/pento/react/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/pento/react/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/pento/react/merges',
    archive_url:
      'https://api.github.com/repos/pento/react/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/pento/react/downloads',
    issues_url: 'https://api.github.com/repos/pento/react/issues{/number}',
    pulls_url: 'https://api.github.com/repos/pento/react/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/pento/react/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/pento/react/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/pento/react/labels{/name}',
    releases_url: 'https://api.github.com/repos/pento/react/releases{/id}',
    deployments_url: 'https://api.github.com/repos/pento/react/deployments',
    created_at: '2015-12-06T19:34:56Z',
    updated_at: '2018-02-01T15:13:15Z',
    pushed_at: '2016-03-29T02:37:29Z',
    git_url: 'git://github.com/pento/react.git',
    ssh_url: 'git@github.com:pento/react.git',
    clone_url: 'https://github.com/pento/react.git',
    svn_url: 'https://github.com/pento/react',
    homepage: null,
    size: 3434,
    stargazers_count: 20,
    watchers_count: 20,
    language: 'PHP',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 10,
    mirror_url: null,
    archived: false,
    open_issues_count: 13,
    license: {
      key: 'gpl-2.0',
      name: 'GNU General Public License v2.0',
      spdx_id: 'GPL-2.0',
      url: 'https://api.github.com/licenses/gpl-2.0',
    },
    forks: 10,
    open_issues: 13,
    watchers: 20,
    default_branch: 'master',
    score: 42.35279,
  },
];

export default data;
