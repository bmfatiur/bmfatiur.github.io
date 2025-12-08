---
layout: post
title: "Fixing GitHub Profile Trophy Issue in Jekyll al-folio 🏆"
date: 2025-12-09 03:25:00+0600
description: "Step-by-step guide to self-host GitHub Profile Trophy on Vercel and integrate with al-folio."
tags: [GitHub, Jekyll, al-folio, troubleshooting, stats, Vercel, trophies]
categories: Linux
permalink: /blog/2025/Fixing-GitHub-Profile-Trophy-Issue-in-al-folio
---

If you’ve tried using **GitHub Profile Trophy** in your Jekyll al‑folio site, you may have noticed that the default API endpoint (`https://github-profile-trophy.vercel.app`) sometimes fails due to request limits. The fix? 🚀 Deploy your own instance on **Vercel** with a Personal Access Token (PAT). This guide walks you through the process step by step.

---

## Step 1: Get Your Personal Access Token (PAT)

To run your own instance, you’ll need a **GitHub Personal Access Token**. This ensures smooth API requests and allows private contributions to be displayed.

### Classic Token

1. Go to [Settings → Developer Settings → Personal access tokens → Tokens (classic)](https://github.com/settings/tokens).
2. Click **Generate new token → Generate new token (classic)**.
3. Select scopes:
   - `repo`
   - `read:user`
4. Click **Generate token** and copy it.

### Fine-Grained Token

> ⚠️ **Warning:** Fine-grained tokens only include public commits and limit scope to issues.

1. Go to [Settings → Developer Settings → Personal access tokens → Fine-grained tokens](https://github.com/settings/tokens).
2. Click **Generate new token → Generate new token**.
3. Select an expiration date.
4. Choose **All repositories**.
5. Under **Repository permissions**, set:
   - Commit statuses: read-only
   - Contents: read-only
   - Issues: read-only
   - Metadata: read-only
   - Pull requests: read-only
6. Click **Generate token** and copy it.

---

## Step 2: Deploy on Vercel

🎥 [Watch the step-by-step video tutorial by @codeSTACKr](https://youtu.be/n6d4KHSKqGk?t=107)

Since GitHub’s API allows only **5k requests per hour**, hosting on your own Vercel server removes this limitation.

> 💡 **Note:** On [Vercel Pro](https://vercel.com/pricing), you can increase `maxDuration` in [`vercel.json`](https://github.com/bmfatiur/github-profile-trophy/blob/master/vercel.json) if requests frequently time out. Keep it below **30 seconds** to avoid high memory usage.

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/bmfatiur/github-profile-trophy)

👉 Before deploying, **fork** [bmfatiur/github-profile-trophy](https://github.com/bmfatiur/github-profile-trophy).

---

## Step 3: Set Up Your Vercel Instance

<details>
<summary><b>🔧 Step-by-step guide</b></summary>

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
9. Create a PAT (see [Step 1](#step-1-get-your-personal-access-token-pat)).
10. Add the PAT as an environment variable named **`GITHUB_TOKEN1`**.
    > ⚠️ Important: Use `GITHUB_TOKEN1` (not `PAT_1` as shown in this screenshot).  
    > ![](https://files.catbox.moe/0yclio.png)
11. Click **Deploy** → check your domains to use the API.

</details>

---

## Step 4: Update al-folio Includes

Finally, update your al‑folio repo:

- `_includes/repository/repo_trophies.liquid`

Replace all instances of:

```

https://github-profile-trophy.vercel.app

```

with your deployed domain, e.g.:

```

https://github-profile-trophy-theta-pink-91.vercel.app

```

---

That’s it 🎉! Your GitHub Profile Trophy cards should now render correctly in al‑folio without hitting API limits. With your own Vercel deployment, you’ll enjoy smoother performance and reliable stats — _InshaAllah_.

```

```
