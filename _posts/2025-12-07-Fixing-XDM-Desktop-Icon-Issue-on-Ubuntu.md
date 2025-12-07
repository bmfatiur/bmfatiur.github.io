---
layout: post
title: "Fixing Xtreme Download Manager Desktop Icon Issue on Ubuntu 🛠️"
date: 2025-12-07 23:47:00+0600
description: "A complete guide to making XDM launch from the desktop icon and terminal without sudo."
tags: [Ubuntu, Linux, XDM, troubleshooting, desktop, applications, al-folio]
categories: Linux
permalink: /blog/2025/Fixing-XDM-Desktop-Icon-Issue-on-Ubuntu
---

If you’ve installed **Xtreme Download Manager (XDM)** on Ubuntu, you may have noticed a frustrating issue:  

- Clicking the desktop icon does nothing.  
- Running `xdman` in the terminal fails unless you use `sudo`.  

Here’s a simple, step‑by‑step solution to make XDM launch smoothly from both the **desktop icon** and the **terminal** without requiring administrative privileges.

---

## 🔹 Step 1: Create a Custom Script

First, create a wrapper script that ensures XDM starts correctly.

Save this as `/opt/xdman/My-Edited/xdm.sh`:

```bash
#!/bin/bash

xdman

sleep 1

pid=$(pgrep -f "xdm-app")

if [ "$pid" != "" ]; then
    kill -9 "$pid"
    xdman
fi
```

Make it executable:

```bash
sudo chmod a+x /opt/xdman/My-Edited/xdm.sh
```

---

## 🔹 Step 2: Update the Desktop Entry

The `.desktop` file is usually located in `/usr/share/applications`.

### Original `xdm-app.desktop`

```ini
[Desktop Entry]
Version=1.0
Encoding=UTF-8
Exec=env GTK_USE_PORTAL=1 GDK_BACKEND=x11 /opt/xdman/xdm-app %U
Type=Application
Terminal=false
Name=Xtreme Download Manager
Comment=Xtreme Download Manager
Categories=Network;
Icon=/opt/xdman/xdm-logo.svg
MimeType=application/xdm-app;x-scheme-handler/xdm-app;
StartupNotify=true
```

### Updated `xdm-app.desktop`

Change the **Exec** property to point to your custom script:

```ini
[Desktop Entry]
Version=1.0
Encoding=UTF-8
Exec=env GTK_USE_PORTAL=1 GDK_BACKEND=x11 /opt/xdman/My-Edited/xdm.sh %U
Type=Application
Terminal=false
Name=Xtreme Download Manager
Comment=Xtreme Download Manager
Categories=Network;
Icon=/opt/xdman/xdm-logo.svg
MimeType=application/xdm-app;x-scheme-handler/xdm-app;
StartupNotify=true
```

✅ **Result**  
Now the desktop icon correctly launches XDM using your script.

---

## 🔹 Step 3: Fix Terminal Launch Without `sudo`

To solve the issue when typing `xdman` in the terminal without `sudo`, edit the local desktop entry inside `/opt/xdman/xdm-app`.

You’ll see something like this:

```ini
[Desktop Entry]
Version=1.0
Encoding=UTF-8
Exec=env GTK_USE_PORTAL=1 /opt/xdman/xdm-app %U
Type=Application
Terminal=false
Name=Xtreme Download Manager
Comment=Xtreme Download Manager
Categories=Network;
Icon=/opt/xdman/xdm-logo.svg
MimeType=application/xdm-app;x-scheme-handler/xdm-app;
StartupNotify=true
```

Update the **Exec** line:

```ini
Exec=env GTK_USE_PORTAL=1 GDK_BACKEND=x11 /opt/xdman/My-Edited/xdm.sh %U
```

✅ **Result**  
Now XDM launches properly both from the **desktop icon** and directly from the **terminal** without requiring `sudo`.

---

## 🎉 Final Outcome

With these three steps:

1. Custom script  
2. Updated `.desktop` file  
3. Fixed terminal entry  

You’ve eliminated the need for `sudo` and ensured XDM runs seamlessly on Ubuntu. Enjoy faster downloads without the hassle!