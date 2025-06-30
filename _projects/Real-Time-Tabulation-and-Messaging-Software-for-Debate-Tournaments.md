---
layout: page
title: "🗂️ Real-Time Tabulation and Messaging Software for Debate Tournaments"
description: "Desktop system for AP & BP debate tabbing and judge coordination"
img: /assets/img/projects/Debate-Tabulation/Debate-Tabulation-Slide-0.png
importance: 203
category: academic
---

<div style="max-width: 600px; margin: auto;">
  <style>
    .slideshow-container {
      position: relative;
      overflow: hidden;
      height: 400px;
      background: #000;
    }
    .slideshow-slide {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: none;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .slideshow-slide img {
      max-height: 90%;
      max-width: 100%;
      object-fit: contain;
      margin: auto;
      display: block;
    }
    .slide-caption {
      color: #f0f0f0;
      font-size: 16px;
      margin-top: 8px;
      font-weight: 500;
    }
    .prev, .next {
      cursor: pointer;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      padding: 12px;
      color: white;
      font-weight: bold;
      font-size: 18px;
      background-color: rgba(0,0,0,0.5);
      border-radius: 4px;
      z-index: 10;
      user-select: none;
    }
    .next {
      right: 0;
    }
    .prev {
      left: 0;
    }
  </style>

  <div class="slideshow-container" onclick="togglePause()">
    <!-- Slides with captions -->
    <div class="slideshow-slide">
      <img src="/assets/img/projects/Debate-Tabulation/Debate-Tabulation-Slide-0.png" alt="🚪 Welcome Screen" />
      <div class="slide-caption">🚪 Welcome Screen – Secure & Streamlined Entry for Organizers</div>
    </div>
    <div class="slideshow-slide">
      <img src="/assets/img/projects/Debate-Tabulation/Debate-Tabulation-Slide-1.png" alt="🗨️ Real-Time Messaging" />
      <div class="slide-caption">🗨️ Real-Time Messaging Between Admin & Assistants</div>
    </div>
    <div class="slideshow-slide">
      <img src="/assets/img/projects/Debate-Tabulation/Debate-Tabulation-Slide-2.png" alt="📝 Tournament Creation" />
      <div class="slide-caption">📝 Effortless Creation of New Tournaments in Seconds</div>
    </div>
    <div class="slideshow-slide">
      <img src="/assets/img/projects/Debate-Tabulation/Debate-Tabulation-Slide-3.png" alt="🗂️ Project View" />
      <div class="slide-caption">🗂️ Structured Project View in Apache NetBeans 12.0</div>
    </div>
    <div class="slideshow-slide">
      <img src="/assets/img/projects/Debate-Tabulation/Debate-Tabulation-Slide-4.png" alt="📜 Rule Configuration" />
      <div class="slide-caption">📜 Configure Core Debate Rules for Any Format</div>
    </div>
    <div class="slideshow-slide">
      <img src="/assets/img/projects/Debate-Tabulation/Debate-Tabulation-Slide-5.png" alt="👥 Role Management" />
      <div class="slide-caption">👥 Role-Based User Creation with Smart Setup Options</div>
    </div>
    <div class="slideshow-slide">
      <img src="/assets/img/projects/Debate-Tabulation/Debate-Tabulation-Slide-6.png" alt="📊 Score Weights" />
      <div class="slide-caption">📊 Define Score Weightage & Judging Criteria</div>
    </div>
    <div class="slideshow-slide">
      <img src="/assets/img/projects/Debate-Tabulation/Debate-Tabulation-Slide-7.png" alt="🏆 Standings Logic" />
      <div class="slide-caption">🏆 Customize Standings Logic with Ranking Preferences</div>
    </div>
    <div class="slideshow-slide">
      <img src="/assets/img/projects/Debate-Tabulation/Debate-Tabulation-Slide-8.png" alt="➕ Add Teams" />
      <div class="slide-caption">➕ Add Teams Smoothly with Integrated Validation</div>
    </div>
    <div class="slideshow-slide">
      <img src="/assets/img/projects/Debate-Tabulation/Debate-Tabulation-Slide-9.png" alt="📈 Standings View" />
      <div class="slide-caption">📈 Dynamic Team Standings View with Live Updates</div>
    </div>
    <div class="slideshow-slide">
      <img src="/assets/img/projects/Debate-Tabulation/Debate-Tabulation-Slide-10.png" alt="✅ Check-ins" />
      <div class="slide-caption">✅ Track Judge & Team Check-Ins with Precision</div>
    </div>

    <!-- Navigation -->
    <a class="prev" onclick="plusSlides(-1); event.stopPropagation();">&#10094;</a>
    <a class="next" onclick="plusSlides(1); event.stopPropagation();">&#10095;</a>

  </div>

  <script>
    let slideIndex = 0;
    let paused = false;
    const slides = document.getElementsByClassName("slideshow-slide");

    function showSlides() {
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[slideIndex].style.display = "flex";
    }

    function plusSlides(n) {
      slideIndex = (slideIndex + n + slides.length) % slides.length;
      showSlides();
    }

    function nextSlide() {
      plusSlides(1);
    }

    function togglePause() {
      paused = !paused;
    }

    function autoSlide() {
      if (!paused) nextSlide();
      setTimeout(autoSlide, 3000);
    }

    function preloadImages() {
      const imgs = document.querySelectorAll(".slideshow-slide img");
      imgs.forEach(img => {
        const preImg = new Image();
        preImg.src = img.src;
      });
    }

    window.addEventListener("load", () => {
      preloadImages();
      showSlides();
      autoSlide();
    });
  </script>
</div>

---

### 🧩 Project Overview

This Java-based desktop application supports smooth coordination of debate tournaments through real-time **tabulation** and **admin-judge communication**. Built with Java Swing and socket programming, the tool facilitates **Asian Parliamentary (AP)** and **British Parliamentary (BP)** tabbing formats, offering organizers a streamlined, on-premise system for event-day operations.

---

### 🔐 System Highlights

- **Admin-assistant dual login system** with secure credential handling
- **AP & BP debate mode support** with role-based adjudicator input tracking
- **Socket-based messaging module** for instant judge-admin communication
- **Intuitive GUI** built with Java Swing, styled for clarity and usability
- **Timestamped data handling** using built-in Calendar and Date APIs

---

### 🛠️ Technologies Used

- **Core Language**: Java
- **GUI Toolkit**: Java Swing, AWT
- **Messaging Protocol**: Java Socket Programming
- **Database & I/O**: Java I/O Streams
- **Environment**: NetBeans IDE

---

### 🎞️ Feature Demonstration

<div style="display: flex; justify-content: center; margin: 2em 0;">
  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/LTSWU1sY0Co?si=peC2jA3yt3Lqbrvi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

This short clip walks through the application—from login to round tabbing to real-time messaging—in action.

---
