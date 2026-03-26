<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)"  srcset="icon-dark.svg"  width="96" height="96"/>
  <source media="(prefers-color-scheme: light)" srcset="icon-light.svg" width="96" height="96"/>
  <img src="icon-light.svg" width="96" height="96" alt="Gist Writer"/>
</picture>

# GistWriter

*A distraction-free writing app backed by GitHub Gists*

[![Deploy](https://img.shields.io/github/deployments/gist-writer/gist-writer.github.io/github-pages?label=deploy&logo=github&style=for-the-badge)](https://github.com/gist-writer/gist-writer.github.io/deployments)
[![Version](https://img.shields.io/endpoint?url=https://gist-writer.github.io/version.json&style=for-the-badge&color=4A90D9)](https://github.com/gist-writer/gist-writer-app/tags)
![visitors](badges/visitors.svg)

</div>

&nbsp;

---

## What it does

Gist Writer is a minimal WYSIWYG markdown editor backed by your GitHub Gists. Open a gist, write, close the tab — it saves automatically. No account required beyond GitHub OAuth.

- **WYSIWYG formatting** — select text for an inline toolbar: bold, italic, links, headers.
- **Auto-save** — periodically saves to GitHub, works silently in the background as you type
- **Gist management** — browse, search, rename and delete; everything GitHub's UI lacks
- **Offline** — edits queue locally and sync when you're back online
- **Share** — every gist gets a direct link; edit mode for owners, read-only for everyone else
- **Version history** — every save is a git commit; nothing is ever lost


## Use it

**[gist-writer.github.io](https://gist-writer.github.io)**

Start writing. Sign in to GitHub to enable sync.

## Privacy

Your GitHub token is stored only in your browser's `localStorage`. No server, no analytics, no tracking. All reads and writes go directly to the GitHub API.

→ [Full data & privacy details](docs/data-privacy.md)

---

*Built with [gist-writer/gist-writer-app](https://github.com/gist-writer/gist-writer-app)*
