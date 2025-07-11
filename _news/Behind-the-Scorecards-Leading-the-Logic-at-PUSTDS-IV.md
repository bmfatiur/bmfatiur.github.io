---
layout: post
title: "🎙️ Behind the Scorecards: Leading the Logic at PUSTDS IV"
date: 2025-07-11 10:00:00+0600
inline: false
related_posts: true
---

> _“In the language of rivers, history whispers through the walls of old zamindar estates.”_

From the vibrant threads of Sujanagar’s weaving traditions to the soul-stirring melodies of Pabna’s folk stages, the cultural heartbeat of Bengal echoed once again—this time through the power of words and reason.

---

## 🏛️ PUSTDS IV: National Inter-University Debate Championship 2025

On **July 4–5**, the **Pabna University of Science and Technology (PUST)** proudly hosted the **2nd National Inter-University Debate Championship**, bringing together **32 teams** from across the country to compete in the **Asian Parliamentary format (Bangla)**.

As the **Tab Director**, I had the honor of orchestrating the tournament’s technical backbone—ensuring fair matchups, smooth transitions, and a thrilling progression from tab rounds to the grand finale. I am so happy to have been a part of this event.

---

## 📍 Event Details

- **Dates:** July 4 (Tab Rounds) & July 5 (Semifinal + Final)
- **Format:** Asian Parliamentary (Bangla)
- **Teams:** 32 universities
- **Venue:** PUST Campus, Pabna
- 🔗 [View the Event on Facebook](https://www.facebook.com/events/1856374478543738/)

---

## 🖼️ Poster

<div style="text-align: center;">
  <img src="/assets/img/news/PUSTDS-IV/poster.webp" alt="Tab Director Poster" style="max-width: 60%; height: auto; border-radius: 8px;" />
</div>

---

## 🛡️ Crest of Honor

<div style="text-align: center;">
  <img src="/assets/img/news/PUSTDS-IV/crest.webp" alt="PUSTDS IV Crest" style="max-width: 60%; height: auto; margin-top: 1em;" />
</div>
<!-- https://imgresizeronline.com/ -->
<!-- https://codebeautify.org/markdown-formatter# -->
---

## 📸 Event Highlights

<div style="max-width: 600px; margin: auto;">
  <style>
    .slideshow-container {
      position: relative;
      overflow: hidden;
      height: 400px; /* 🔒 Consistent height */
    }
    .slideshow-slide {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: none;
      text-align: center;
    }
    .slideshow-slide img {
      max-height: 100%;
      max-width: 100%;
      object-fit: contain;
      margin: auto;
      display: block;
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
    }
    .next {
      right: 0;
    }
    .prev {
      left: 0;
    }
  </style>

  <div class="slideshow-container" onclick="togglePause()">
    <!-- Slides -->
    <div class="slideshow-slide"><img src="/assets/img/news/PUSTDS-IV/PUSTDS-IV-group-1.webp" alt="PUSTDS IV Photo 1" /></div>
    <div class="slideshow-slide"><img src="/assets/img/news/PUSTDS-IV/PUSTDS-IV-group-2.webp" alt="PUSTDS IV Photo 2" /></div>
    <div class="slideshow-slide"><img src="/assets/img/news/PUSTDS-IV/PUSTDS-IV-group-3.webp" alt="PUSTDS IV Photo 3" /></div>

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
      slides[slideIndex].style.display = "block";
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
        const src = img.getAttribute("src");
        const preImg = new Image();
        preImg.src = src;
      });
    }

    window.addEventListener("load", () => {
      preloadImages();
      showSlides();
      autoSlide();
    });
  </script>
</div>

### 🙌 Reflections

PUSTDS IV wasn’t just a tournament—it was a tribute to Pabna’s cultural soul, stitched with the threads of history, heritage, and hope. Being the **Tab Director** was more than a role—it was a responsibility, a joy, and a moment I’ll always cherish.

---