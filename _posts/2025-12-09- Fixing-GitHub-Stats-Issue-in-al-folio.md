---
layout: post
title: "Fixing GitHub Stats Card Issue in Jekyll al-folio 🚀"
date: 2025-12-09 02:30:00+0600
description: "Step-by-step guide to deploying GitHub Readme Stats on Vercel and integrating with al-folio."
tags: [GitHub, Jekyll, al-folio, troubleshooting, stats, Vercel]
categories: Linux
permalink: /blog/2025/Fixing-GitHub-Stats-Issue-in-al-folio
---

# Deploy on Your Own

## First Step: Get Your Personal Access Token (PAT)

To deploy your own instance of **GitHub Readme Stats**, you need a GitHub Personal Access Token (PAT). This token allows you to bypass API limits and optionally show private contributions.

### Classic Token

- Go to [Account → Settings → Developer Settings → Personal access tokens → Tokens (classic)](https://github.com/settings/tokens).
- Click on **Generate new token → Generate new token (classic)**.
- Select scopes:
  - `repo`
  - `read:user`
- Click **Generate token** and copy it.

### Fine-Grained Token

> ⚠️ **Warning:** Fine-grained tokens limit scope to issues and only include public commits.

- Go to [Account → Settings → Developer Settings → Personal access tokens → Fine-grained tokens](https://github.com/settings/tokens).
- Click on **Generate new token → Generate new token**.
- Select an expiration date.
- Choose **All repositories**.
- Under **Repository permissions**, set:
  - Commit statuses: read-only
  - Contents: read-only
  - Issues: read-only
  - Metadata: read-only
  - Pull requests: read-only
- Click **Generate token** and copy it.

---

## On Vercel

🎥 [Step-by-step video tutorial by @codeSTACKr](https://youtu.be/n6d4KHSKqGk?t=107)

Since the GitHub API only allows **5k requests per hour**, hosting on your own Vercel server removes this limitation.

> 💡 **Note:** Since [PR #58](https://github.com/anuraghazra/github-readme-stats/pull/58), request handling has improved with fewer downtime issues.  
> 💡 **Note:** On [Vercel Pro](https://vercel.com/pricing), you can increase `maxDuration` in [`vercel.json`](https://github.com/bmfatiur/github-readme-stats/blob/master/vercel.json) if requests frequently time out. Keep it below **30 seconds** to avoid high memory usage.

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/bmfatiur/github-readme-stats)

👉 Before deploying, **fork** [bmfatiur/github-readme-stats](https://github.com/bmfatiur/github-readme-stats).

---

<details>
<summary><b>🔧 Step-by-step guide on setting up your own Vercel instance</b></summary>

1. Go to [vercel.com](https://vercel.com/).
2. Click **Log in**.  
   ![](https://files.catbox.moe/pcxk33.png)
3. Sign in with GitHub → **Continue with GitHub**.  
   ![](https://files.catbox.moe/b9oxey.png)
4. Allow GitHub access to repositories if prompted.
5. Fork the repo.
6. Go to your [Vercel dashboard](https://vercel.com/dashboard).
7. Click **Add New → Project**.  
   ![](https://files.catbox.moe/3n76fh.png)
8. Import the forked repo via **Continue with GitHub → Import**.  
   ![](https://files.catbox.moe/mg5p04.png)
9. Create a PAT (see [above](#first-step-get-your-personal-access-token-pat)).
10. Add the PAT as an environment variable named `PAT_1`.  
    ![](https://files.catbox.moe/0yclio.png)
11. Click **Deploy** → check your domains to use the API.

</details>

---

## Update Jekyll al-folio Includes

Finally, update the following files in your al‑folio repo:

- `_includes/repository/repo.liquid`
- `_includes/repository/repo_user.liquid`

Replace all instances of:

```
https://github-readme-stats.vercel.app
```

with your deployed domain, e.g.:

```
https://github-readme-stats-theta-pink-91.vercel.app
```

---

✅ That’s it! Your GitHub stats cards should now render correctly in al‑folio. Hopefully working smoothly — _InshaAllah_.

```

```
