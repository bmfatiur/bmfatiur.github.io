---
layout: post
title: "💻 Tab Director – CDC District Intra 1.0 Debate Competition"
date: 2015-10-22 15:59:00+0600
inline: true
related_posts: false
---

**💻 A Defining Moment in My Tab Journey**

---


I had the privilege of serving as **Tab Director** at the **CDC District Intra 1.0 Debate Competition**, organized by *Chatmohar Debate Club (CDC)*. This was my **first tabbing experience beyond PUSTDS**, and it marked a significant milestone in my debating and organizing journey.

I owe immense gratitude to **Shuvro Hasan** vai ([Facebook](https://www.facebook.com/happy.hasan.52)) for mentoring me in tab direction. From my very first steps in learning the tab system to this very day, his guidance has been unwavering. I truly cannot express my appreciation in words.

Beyond the debate, this experience allowed me to explore **Chatmohar’s rich heritage**, its colonial-era legacy, and its renowned sweets. The **CDC organizing committee** was energetic, welcoming, and inspiring. It was a vibrant and formative chapter in my early tabbing career.

---

### 📌 Official Event Banner

<p align="center">
  <a href="https://www.facebook.com/events/1149355182266881/?active_tab=discussion" target="_blank" rel="noopener noreferrer">
    <img src="/assets/img/news/CDC-district-intra/cdc-banner-tab-director.webp" alt="CDC Tab Director Banner" width="600" style="max-width: 100%; height: auto;" />
  </a>
</p>

*Click the banner to view the official Facebook post*

---

### 🏵️ Event Crest

<p align="center">
  <img src="/assets/img/news/CDC-district-intra/cdc-district-intra-1.0-crest.webp" alt="CDC Crest" height="400" style="max-height: 60%; width: auto;" />
</p>

*Official crest of the CDC District Intra 1.0*

---

### 📸 Glimpses from the Event

<div style="max-width: 600px; margin: auto;">
  <style>
    .slideshow-container {
      position: relative;
      overflow: hidden;
    }
    .slideshow-slide {
      display: none;
      text-align: center;
    }
    .slideshow-slide img {
      width: 100%;
      height: auto;
      cursor: pointer;
    }
    .prev, .next {
      cursor: pointer;
      position: absolute;
      top: 50%;
      width: auto;
      padding: 12px;
      margin-top: -22px;
      color: white;
      font-weight: bold;
      font-size: 18px;
      background-color: rgba(0,0,0,0.5);
      border-radius: 4px;
      user-select: none;
      z-index: 1;
    }
    .next {
      right: 0;
    }
    .prev {
      left: 0;
    }
  </style>

  <div class="slideshow-container" onclick="togglePause()">
    <div class="slideshow-slide">
      <img src="/assets/img/news/CDC-district-intra/cdc-group-photo-1.jpg" alt="Group Photo 1" />
    </div>
    <div class="slideshow-slide">
      <img src="/assets/img/news/CDC-district-intra/cdc-group-photo-2.webp" alt="Group Photo 2" />
    </div>
    <div class="slideshow-slide">
      <img src="/assets/img/news/CDC-district-intra/cdc-group-photo-3.jpg" alt="Group Photo 3" />
    </div>
    <div class="slideshow-slide">
      <img src="/assets/img/news/CDC-district-intra/cdc-group-photo-4.webp" alt="Group Photo 4" />
    </div>

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
      slides[slideIndex].style.display = "block";
    }

    function nextSlide() {
      slideIndex = (slideIndex + 1) % slides.length;
      showSlides();
    }

    function plusSlides(n) {
      slideIndex = (slideIndex + n + slides.length) % slides.length;
      showSlides();
    }

    function togglePause() {
      paused = !paused;
    }

    function autoSlide() {
      if (!paused) nextSlide();
      setTimeout(autoSlide, 3000);
    }

    // Initialize
    showSlides();
    autoSlide();
  </script>
</div>

---
