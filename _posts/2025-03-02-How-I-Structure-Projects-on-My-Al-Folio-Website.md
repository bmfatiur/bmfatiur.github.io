---
layout: post
title: "🛠️ How I Structure Projects on My Al-Folio Website"
description: "A behind-the-scenes look at how I organize and present my projects using al-folio"
date: 2025-03-02 16:20:02+0600
tags: [writing, blog, website]
categories: al-folio
permalink: /blog/2025/How-I-Structure-Projects-on-My-Al-Folio-Website
---

Al-folio powers my portfolio—and over time, I’ve discovered how to use it to not just list projects, but to tell clear, curated stories about what I’ve built. Here's how I structure my project posts, and how you can too.

---

## 💡 The Basics: YAML Front Matter

Each project starts with a **front matter block** that defines how it appears on the site.

Here are some examples I’ve used:

# Project 1: Research-focused

```yaml
---
layout: page
title: Project 1
description: with background image
img: assets/img/12.jpg
importance: 1
category: work
related_publications: true
```

---

# Project 2: With comments enabled

```yaml
---
layout: page
title: Project 2
description: a project with a background image and giscus comments
img: assets/img/3.jpg
importance: 2
category: academic
giscus_comments: true
```

---

# Project 3: External redirect

```yaml
---
layout: page
title: Project 3 with very long name
description: a project that redirects to another website
img: assets/img/7.jpg
redirect: https://unsplash.com
importance: 3
category: work
```

---

# Project 4: No cover image

```yaml
---
layout: page
title: Project 4
description: another without an image
img:
importance: 3
category: fun
```

---

# Project 5: Creative UI build

```yaml
---
layout: page
title: Project 5
description: a project with a background image
img: assets/img/1.jpg
importance: 3
category: fun
```

---

## 🧠 What These Fields Do

- **`layout: page`** — Tells al-folio this is a standalone page.
- **`title`** — The visible name in the project grid and browser tab.
- **`description`** — Shown in project cards and metadata.
- **`img`** — Project thumbnail (used in preview cards).
- **`importance`** — Lower numbers float higher in the project listing.
- **`category`** — Groups projects into tabs (like `work` or `fun`).
- **`redirect`** — If set, clicking the project card takes you to another site.
- **`giscus_comments: true`** — Enables user feedback below the post.
- **`related_publications: true`** — Automatically links to connected publications.

---

## 🔄 How I Use These Fields

I use `importance` to surface high-priority projects on top, and `category` to separate work-based projects from more experimental or fun builds.

Some of my academic or long-form builds include `related_publications`, while more interactive ones—like game engines—link out via `redirect`.

I even turn on `giscus_comments` for public-facing projects where I welcome questions or suggestions.

---

## 🎯 Why It Works

- Keeps my homepage clean and smartly sorted
- Makes it easy for viewers to distinguish between project types
- Allows me to customize engagement (comments, links, etc.) per project
- Aligns with Jekyll’s flexible static-site structure
