module.exports = {
  branches: [
    // Maintenance branch for the 2.x line. main has moved to release-please for 3.x.
    // channel 'latest' keeps 2.x releases on the latest dist-tag. Without it semantic-release uses the
    // branch name and runs `npm dist-tag add <version> release-2.x`.
    { name: '2.x', range: '2.x', channel: 'latest' },
    { name: 'main', channel: 'latest' },
    { name: 'next', channel: 'next', prerelease: true },
    { name: 'development', channel: 'dev', prerelease: true },
  ],
  repositoryUrl: 'https://github.com/ionic-team/capacitor-file-viewer.git',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      "@semantic-release/changelog",
      {
        "changelogFile": "../../CHANGELOG.md"
      }
    ],
    '@semantic-release/npm',
    [
      '@semantic-release/github',
      {
        successComment: false,
        failComment: false,
        releasedLabels: false,
        addReleases: 'bottom',
        releaseNotes: {
          changelogFile: '../../CHANGELOG.md'
        }
      }
    ],
    [
      "@semantic-release/exec",
      {
        // This is necessary because @semantic-release/git won't commit files in parent directory
        //  see  https://github.com/semantic-release/git/issues/485
        prepareCmd:
          "git add ../../CHANGELOG.md",
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['package.json'],
        message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
      }
    ]
  ]
};