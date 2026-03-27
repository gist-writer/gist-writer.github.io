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

## Why Gist Writer?

Most markdown editors save to their own cloud — locking your notes into someone else's database. Gist Writer saves directly to your GitHub Gists, so your files are plain `.md` files you already own, version-controlled by GitHub, and accessible from anywhere. Gists can be **public** (discoverable, searchable) or **secret** (unlisted — only accessible via direct URL).

---

## Features

- **WYSIWYG formatting** — select text for an inline toolbar: bold, italic, links, headers
- **Auto-save** — periodically saves to GitHub, works silently in the background as you type
- **Gist management** — browse, search, rename and delete; everything GitHub's UI lacks
- **Offline** — edits queue locally and sync when you're back online
- **Share** — every gist gets a direct link; edit mode for owners, read-only for everyone else
- **Version history** — every save is a git commit; nothing is ever lost

---

## Getting Started

1. Visit **[gist-writer.github.io](https://gist-writer.github.io)** — no sign-in required, start writing immediately
2. Sign in with GitHub to sync your notes as Gists — public or secret, shareable by link
3. Install as a PWA — runs as a native app on both desktop and mobile

---

## Privacy

Your GitHub token is stored only in your browser's `localStorage`. No server, no analytics, no tracking. All reads and writes go directly to the GitHub API.

→ [Full data & privacy details](docs/data-privacy.md)
