<img src="icon.svg" width="64" height="64"/>
  
# Gist Writer

![visitors](badges/visitors.svg)
[![Deploy](https://img.shields.io/github/deployments/gist-writer/gist-writer.github.io/github-pages?label=deploy&logo=github)](https://github.com/gist-writer/gist-writer.github.io/deployments)
[![Version](https://img.shields.io/endpoint?url=https://gist-writer.github.io/version.json)](https://github.com/gist-writer/gist-writer-app/tags)

A distraction-free writing app for GitHub Gists. Runs in the browser, installs as a PWA on desktop, iOS, and Android. 

&nbsp;

---

## What it is

Gist Writer is a minimal Markdown editor backed by your GitHub Gists. Open a gist, write, close the tab — it saves automatically. No account required beyond GitHub OAuth.

- **Draft mode** — start writing immediately, gist is created in the background
- **Auto-save** — debounced saves to GitHub, works silently while you type
- **Search** — filter and find your gists by filename instantly; GitHub's own UI has no search
- **Formatting** — select any text for an inline toolbar: bold, italic, links, headers. Notion-style, stays out of the way until you need it
- **Offline** — edits queue locally and sync when you're back online
- **Installable** — works as a PWA on iOS and Android, lives on your home screen
- **Share** — copy a direct link to any gist; opens in edit mode for owners, read-only for everyone else
- **Dark / light mode** — follows your system preference automatically
- **Images** — paste any image URL directly into the editor and it embeds inline; supports imgur and any direct `.jpg .png .gif .webp .svg` link


## Use it

**[gist-writer.github.io](https://gist-writer.github.io)**

Sign in with GitHub. That's it.

## Privacy

Your GitHub token is stored only in your browser's `localStorage`. No server, no analytics, no tracking. All reads and writes go directly to the GitHub API.

---

*Built with [gist-writer/gist-writer-app](https://github.com/gist-writer/gist-writer-app)*
