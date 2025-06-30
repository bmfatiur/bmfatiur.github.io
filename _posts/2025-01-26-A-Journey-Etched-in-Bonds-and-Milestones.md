---
layout: post
title: "🎓 A Journey Etched in Bonds and Milestones"
date: 2025-01-26 18:00:00+0600
description: "A heartfelt reflection on my journey through CSE at PUST—filled with bonds, resilience, and gratitude"
tags: PUST
categories: undergraduate-life
permalink: /blog/2025/Journey-Etched-in-Bonds-and-Milestones
---

From **March 9, 2019** to **January 25, 2025**, my time in the **Department of Computer Science and Engineering at Pabna University of Science and Technology (PUST)** was far more than an academic pursuit—it was a journey of growth, community, and unforgettable connection.

<p align="center">
  <img src="/assets/img/blog/2025/cse-farewell/cse-farewell-crest.webp" alt="CSE Farewell Crest" height="600" style="max-height: 60%; width: auto;" />
</p>

It began in **Ghospara**, near the fire service station, where a deep **bond** formed with **Jakaria vai, Badiul vai, Mahmudul vai, Reza vai, and Sumon vai**—not just friendship, but a connection rooted in mutual respect, guidance, and shared experiences. During those early days, when our mess khala wasn’t around, I would often head to Dadur Hotel for meals. It became a familiar stop—simple, essential, and quietly woven into the rhythm of student life.

After the pandemic pause, our academic life restarted with renewed intensity. A new chapter unfolded at **Bangla Clinic**, where I found another layer of brotherhood with **Bashar vai, Ramim vai, Shamim vai, Utsho vai, Rokib vai, Omid**, and **Raihan**. Their companionship brought fresh energy and perspective that made every moment—even the challenging ones—feel purposeful.

As I close this chapter of university life, I look back with immense gratitude. This **Honorary Crest**, awarded during this transformative journey, symbolizes not just personal achievement, but the shared story of every soul that walked alongside me.

## 🖼️ Snapshot of the Event

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
    <div class="slideshow-slide"><img src="/assets/img/blog/2025/cse-farewell/cse-farewell-photo-1.webp" alt="CSE Farewell Photo 1" /></div>
    <div class="slideshow-slide"><img src="/assets/img/blog/2025/cse-farewell/cse-farewell-photo-2.webp" alt="CSE Farewell Photo 2" /></div>

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
