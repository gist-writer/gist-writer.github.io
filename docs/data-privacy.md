# Data & Privacy

Gist Writer is a zero-backend app. There are no Gist Writer servers, no accounts, and no data collection of any kind.

---

## What is stored and where

| Data | Where | Who can access |
|---|---|---|
| Your notes | Your browser (IndexedDB) | You only |
| Your GitHub token | Your browser (localStorage) | You only |
| Synced gists | Your GitHub account | You + anyone you share with |

---

## Your browser (IndexedDB)

All notes are saved locally in your browser using IndexedDB — a standard storage built into every modern browser. Nothing is sent to any Gist Writer server because there isn't one.

Clearing your browser data will remove all local notes.

---

## GitHub sync

Sync happens directly between your browser and the GitHub API using your personal GitHub token. Gist Writer never sees or stores your token on any server — it lives in your browser's localStorage only.

Your gists are stored on **your GitHub account**. You own them fully. You can view, edit, or delete them at [github.com/gists](https://github.com/gists) at any time.

---

## Guest mode (no GitHub account)

If you use the app without signing in, your notes are saved locally only and never leave your device.

> ⚠️ Guest notes are permanently deleted when you log out (see below).

---

## Logging out

Logging out performs a full local wipe:

- ✅ Your GitHub token is removed from localStorage
- ✅ Your username is removed from localStorage
- ✅ All notes are deleted from local IndexedDB (including any guest notes)
- ✅ Sync metadata (etag, last sync time) is reset

Your gists are **not deleted from GitHub** — they remain safely on your GitHub account at [github.com/gists](https://github.com/gists). Only the local browser cache is cleared. Logging back in will re-sync them from GitHub.

---

## Revoking access

To fully disconnect Gist Writer from GitHub:

1. Go to [github.com/settings/tokens](https://github.com/settings/tokens)
2. Revoke the token you created for Gist Writer

This immediately cuts off any sync. Your local notes are unaffected until you log out.

---

## No analytics, no telemetry

Gist Writer does not use any analytics, tracking, or telemetry. No data about your usage, note content, or identity is ever collected.
