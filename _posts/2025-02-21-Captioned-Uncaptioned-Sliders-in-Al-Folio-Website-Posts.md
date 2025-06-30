---
layout: post
title: "🖼️ Captioned & Uncaptioned Sliders in Al-Folio Website Posts"
description: "A practical comparison of slideshow layouts in al-folio using custom HTML + CSS + JS"
date: 2025-02-21 21:19:11+0600
tags: [slider, Jekyll, al-folio, writing, blog, website]
categories: al-folio
permalink: /blog/2025/Captioned-Uncaptioned-Sliders-in-Al-Folio-Website-Posts
---

When showcasing projects on your al-folio site, visuals matter—a lot. Whether you're presenting an app dashboard, game preview, or team photo series, sliders give your audience a dynamic, immersive look at your work.

In this post, I’ll walk through **two types of image sliders** I've implemented: one with captions and one without. Both are built using plain HTML, CSS, and JavaScript for full control and maximum flexibility.

---

## 📸 Slider Without Captions

This version is clean, minimalist, and fully responsive. It works great for walkthroughs or visual summaries where text isn't needed.

```html
<!-- Minimalist Slider Without Captions -->
<div style="max-width: 600px; margin: auto;">
  <style>
    .slideshow-container {
      position: relative;
      overflow: hidden;
      height: 400px;
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
    .prev,
    .next {
      cursor: pointer;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      padding: 12px;
      color: white;
      font-weight: bold;
      font-size: 18px;
      background-color: rgba(0, 0, 0, 0.5);
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
    <div class="slideshow-slide"><img src="/assets/img/0.jpg" alt="Group Photo 1" /></div>
    <div class="slideshow-slide"><img src="/assets/img/1.jpg" alt="Group Photo 2" /></div>
    <div class="slideshow-slide"><img src="/assets/img/2.webp" alt="Group Photo 3" /></div>
    <!-- Add more slides as needed -->
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
      imgs.forEach((img) => (new Image().src = img.src));
    }

    window.addEventListener("load", () => {
      preloadImages();
      showSlides();
      autoSlide();
    });
  </script>
</div>
```

---

## 📝 Slider With Captions

This version builds on the first, adding `.slide-caption` elements beneath each image. It's perfect for walkthroughs or UI breakdowns where visual context needs a short description.

```html
<!-- Slider With Captions -->
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
      margin-top: 5px;
      font-weight: 500;
    }
    .prev,
    .next {
      cursor: pointer;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      padding: 12px;
      color: white;
      font-weight: bold;
      font-size: 18px;
      background-color: rgba(0, 0, 0, 0.5);
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
    <div class="slideshow-slide">
      <img src="/assets/img/a.png" alt="Login Page" />
      <div class="slide-caption">Login Page</div>
    </div>
    <div class="slideshow-slide">
      <img src="/assets/img/b.png" alt="Dashboard" />
      <div class="slide-caption">Dashboard</div>
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
      imgs.forEach((img) => {
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
```

---
