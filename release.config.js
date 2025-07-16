module.exports = {
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer',  // analiza los commits
    '@semantic-release/release-notes-generator', // genera notas
    '@semantic-release/changelog', // actualiza CHANGELOG.md
    '@semantic-release/github', // crea un release en GitHub
    ['@semantic-release/git', {
      assets: ['CHANGELOG.md', 'package.json'],
      message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
    }]
  ]
};
