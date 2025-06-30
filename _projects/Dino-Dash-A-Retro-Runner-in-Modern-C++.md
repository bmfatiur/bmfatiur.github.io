---
layout: page
title: "🦖 Dino Dash: A Retro Runner in Modern C++"
description: "A 2D Chrome-inspired endless runner combining legacy BGI graphics and modern OpenGL in C++."
img: /assets/img/projects/Dino-Dash/Dino.webp
importance: 204
category: academic
---

## 🎮 Project Overview

**Dino Dash** is a 2D endless runner game inspired by the iconic Chrome offline dinosaur game. Developed entirely in **C++**, this project blends **legacy BGI-style graphics** with **OpenGL (GLUT, GLaux)** rendering to deliver a retro yet responsive arcade experience.

It demonstrates modular game architecture through custom libraries, bitmap integration, and interactive gameplay—all structured within a Visual Studio solution.

---

## 🧩 Technical Stack

- **Language:** C++
- **Graphics:** OpenGL (GLUT, GLaux), BGI compatibility
- **IDE:** Visual Studio (v110 & v142 toolsets)
- **Platform:** Windows
- **Executable:** `Debug/Project6.exe`

---

## ✨ Key Features

- **Custom Graphics Engine** combining procedural BGI and OpenGL rendering.
- **Modular Design:** source files for drawing, input, bitmap handling, and more.
- **Bitmap Assets:** retro `.bmp` graphics for characters and scenes.
- **Interactive Input:** mouse and keyboard support.
- **Clean Codebase:** ideal for learning 2D graphics programming.

---

## 🖼️ Visual Highlights

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
    <div class="slideshow-slide">
      <img src="/assets/img/projects/Dino-Dash/Dino-1.webp" alt="🦖 Cover Screen – Chrome-Inspired Retro Dino Adventure" />
      <div class="slide-caption">🦖 Cover Screen – Chrome-Inspired Retro Dino Adventure</div>
    </div>
    <div class="slideshow-slide">
      <img src="/assets/img/projects/Dino-Dash/Dino-2.webp" alt="🎮 Gameplay Menu – Tap to Run, Jump to Survive" />
      <div class="slide-caption">🎮 Gameplay Menu – Tap to Run, Jump to Survive</div>
    </div>
    <div class="slideshow-slide">
      <img src="/assets/img/projects/Dino-Dash/Dino-3.webp" alt="🏁 Result Menu – Game Over with Score Summary " />
      <div class="slide-caption">🏁 Result Menu – Game Over with Score Summary </div>
    </div>
    <div class="slideshow-slide">
      <img src="/assets/img/projects/Dino-Dash/Dino-4.webp" alt="🌵 Background Scene – Endless Desert with Cacti" />
      <div class="slide-caption">🌵 Background Scene – Endless Desert with Cacti</div>
    </div>
    <div class="slideshow-slide">
      <img src="/assets/img/projects/Dino-Dash/Dino-5.webp" alt="🧠 Header File – Core Functions for Graphics & Logic" />
      <div class="slide-caption">🧠 Header File – Core Functions for Graphics & Logic</div>
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

## 🎓 Educational Value

Dino Dash serves as a classroom-ready example for:

- Understanding **event-driven game loops** in C++
- Bridging **legacy graphics APIs** and modern pipelines
- Working with **bitmap rendering** and **palette management**
- Structuring modular game applications for clarity and scalability

---

_This project was developed as part of my academic exploration into low-level graphics systems and educational game design. It stands as a tribute to both classic programming styles and hands-on experimentation._

---

#### 🔗 Source Code

[![Dino Dash Repo](https://img.shields.io/badge/Dino_Dash-GitHub-0366d6?style=for-the-badge&logo=github)](https://github.com/bmfatiur/The-Dinosaur-Game)

---
