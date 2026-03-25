<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)"  srcset="icon-dark.svg"  width="96" height="96"/>
  <source media="(prefers-color-scheme: light)" srcset="icon-light.svg" width="96" height="96"/>
  <img src="icon-light.svg" width="96" height="96" alt="Gist Writer"/>
</picture>

# GistWriter

*A distraction-free writing app backed by GitHub Gists*

[![Deploy](https://img.shields.io/github/deployments/gist-writer/gist-writer.github.io/github-pages?label=deploy&logo=github&style=for-the-badge&color=4A90D9)](https://github.com/gist-writer/gist-writer.github.io/deployments)
[![Version](https://img.shields.io/endpoint?url=https://gist-writer.github.io/version.json&style=for-the-badge&color=4A90D9)](https://github.com/gist-writer/gist-writer-app/tags)
![visitors](badges/visitors.svg)

</div>

&nbsp;

---

## What it is

Gist Writer is a minimal WYSIWYG markdown editor backed by your GitHub Gists. Open a gist, write, close the tab — it saves automatically. No account required beyond GitHub OAuth.

- **Draft mode** — start writing immediately, gist is created in the background
- **Auto-save** — debounced saves to GitHub, works silently while you type
- **Version history** — every save is a commit; your full edit history is preserved in git forever, nothing is ever lost
- **Search** — filter and find your gists by filename instantly; GitHub's own UI has no search
- **Formatting** — select any text for an inline toolbar: bold, italic, links, headers. Notion-style, stays out of the way until you need it
- **Offline** — edits queue locally and sync when you're back online
- **Installable** — works as a PWA on iOS and Android, lives on your home screen
- **Share** — copy a direct link to any gist; opens in edit mode for owners, read-only for everyone else (private/public)
- **Dark / light mode** — follows your system preference automatically
- **Images** — paste any image URL directly into the editor and it embeds inline; supports imgur and any direct `.jpg .png .gif .webp .svg` link
- **Drag & drop** — drag a `.md` file from your desktop onto the editor to instantly create a new gist from it
- **Zero data retention** — signing out wipes your token and all local data instantly; nothing lingers on the device


## Use it

**[gist-writer.github.io](https://gist-writer.github.io)**

Sign in with GitHub. That's it.

## Privacy

Your GitHub token is stored only in your browser's `localStorage`. No server, no analytics, no tracking. All reads and writes go directly to the GitHub API.

---

*Built with [gist-writer/gist-writer-app](https://github.com/gist-writer/gist-writer-app)*
