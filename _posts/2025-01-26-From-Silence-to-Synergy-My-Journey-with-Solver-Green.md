---
layout: post
title: "From Silence to Synergy: My Journey with Solver Green 🌱"
date: 2025-01-26 20:40:16+0600
description: "A reflective farewell to Solver Green and its impact on my leadership, community building, and undergraduate journey at PUST"
tags: ECA
categories: undergraduate-life
permalink: /blog/2025/From-Silence-to-Synergy-My-Journey-with-Solver-Green
---

<p align="center">
  <img src="/assets/img/blog/2025/Solver-Green/solvergreen-crest.webp" alt="Solver Green Farewell Crest" height="600" style="max-height: 60%; width: auto;" />
</p>

---

What started as a quiet step through **PUSTDS**, where I first met **Shafiul vai**, quickly turned into one of the most defining chapters of my university life—**my journey with Solver Green**.

Back when Solver Green saw only a few active members, I witnessed it firsthand. I remember carrying the projector alone from the **proctor’s office** to our event, then to my **mess room**, and returning it the next day. Small steps. But they were the beginning.

Over time—and especially **after the COVID-19 gap**—Solver Green transformed into a **renowned organization**, recognized for pioneering something unprecedented at our campus: bringing **industry professionals into university events through a student-led initiative**.

As General Secretary, I had the honor of helping organize impactful programs that reignited technical enthusiasm across campus. One of the most fulfilling contributions was **reviving the tradition of programming contests**—previously held only within the CSE department—with full support from **ICT Cell**, our **Student-Advisor**, the **Proctor**, and our **Vice-Chancellor**.

A cornerstone in that success was **CodePanja Online Judge**, developed and maintained by **Atul vai**, whose platform and financial support were instrumental in making those contests a reality.

### 🖼️ Snapshot of the Journey

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
    <div class="slideshow-slide"><img src="/assets/img/blog/2025/Solver-Green/solver-green-group-0.jpg" alt="Group Photo 1" /></div>
    <div class="slideshow-slide"><img src="/assets/img/blog/2025/Solver-Green/solver-green-group-1.jpg" alt="Group Photo 2" /></div>
    <div class="slideshow-slide"><img src="/assets/img/blog/2025/Solver-Green/solver-green-group-2.webp" alt="Group Photo 3" /></div>
    <div class="slideshow-slide"><img src="/assets/img/blog/2025/Solver-Green/solver-green-group-3.webp" alt="Group Photo 4" /></div>
    <div class="slideshow-slide"><img src="/assets/img/blog/2025/Solver-Green/solver-green-group-4.webp" alt="Group Photo 5" /></div>
    <div class="slideshow-slide"><img src="/assets/img/blog/2025/Solver-Green/solver-green-group-5.jpg" alt="Group Photo 6" /></div>
    <div class="slideshow-slide"><img src="/assets/img/blog/2025/Solver-Green/solver-green-group-6.jpg" alt="Group Photo 7" /></div>

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

---

None of this would have been possible without the unwavering help and dedication of **Shafiul vai**, **Niloy**, **Bashar**, and the tireless efforts of our **committed executive team**. Solver Green didn’t just give me leadership experience—it became **woven into the memory of my undergraduate life**.

I remain deeply thankful to every mentor, friend, and supporter who stood beside us. This journey has ended—but its impact echoes on.

---
