---
layout: post
title: "Linking Inline News to Full Blog Posts in al-folio ✍️"
date: 2025-05-30 16:56:16+0600
description: "A simple guide to interconnecting your inline announcements and full-length blog content using al-folio."
tags: [Jekyll, al-folio, web-development]
categories: undergraduate-life
permalink: /blog/2025/Linking-Inline-News-to-Full-Blog-Posts-in-al-folio
---

In content-heavy academic websites, providing **concise summaries through inline posts** while maintaining access to deeper insights in full blog entries can greatly enhance navigability and clarity. In my case, I use [al-folio](https://github.com/alshedivat/al-folio)—a Jekyll-powered academic theme—to present inline event highlights that point users toward detailed posts.

### ✅ Scenario

Suppose you have:
- An inline post at: `/_news/announcement-post-1.md`
- A blog post at: `/_post/2024-05-01-blog-post-1.md`  
  with a permalink: `your-site-url/blog/2025/blog-post-1`

---

### 🔗 Linking Workflow

Inside your **inline post**, use the following snippet to create a clean link to the full article:

```markdown
[Read the full post]({{ site.baseurl }}/blog/2025/blog-post-1)
```

**So, your `/_news/announcement-post-1.md` might look like:**


```markdown
---
layout: post
date: 2025-01-26 16:50:16+0600
inline: true
related_posts: false
---

🔔 [announcement post 1]({{ site.baseurl }}/blog/2025/blog-post-1)
```


**And, your `/_post/2024-05-01-blog-post-1.md` might look like:**

```markdown
---
layout: post
title: blog post 1
date: 2025-05-01 16:40:16
description: "A description"
tags: ECA
categories: undergraduate-life
permalink: /blog/2025/blog-post-1
---

Body text would be here
```
