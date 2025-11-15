---
layout: post
title: "⚓ Two Months at the International Maritime Academy: Lessons, Bonds & Reflections"
date: 2025-10-09 22:29:00+0600
inline: false
related_posts: true
---

My two-month tenure as a **Computer Science Lecturer at the International Maritime Academy (IMA), Gazipur** was unlike any other chapter in my life. Though brief, it was filled with discipline, camaraderie, and moments that shaped both my teaching and personal growth.

---

## 👥 Bonds with Colleagues

I was fortunate to form meaningful relationships:

- **Rifat Sir** felt like a close friend.
- **Mithila Mam** guided me with the warmth of an elder sister.
- **Saiful Sir** were like elder brother.
- **Nusrat Mam and Rafi Sir** added to the supportive academic circle.

These bonds made the Academy feel like a family.

---

## 🏛 Discipline & Office Life

IMA’s culture was defined by discipline and respect.

- Lunch with the **Commandant and Deputy Commandant** was astonishing—formal yet lightened by the DC Sir’s instant jokes.
- The structured environment of senior and junior cadets reflected the Academy’s mission of excellence.

---

## 🌅 Unforgettable Moments

- The **night sky from the parade ground** was breathtaking.
- The **morning parade drill** became my daily alarm.
- The **sunrise from my balcony** was unforgettable.
- Even the **tea from the galley** had a unique flavor.

---

## 💻 Teaching & Cadet Relations

Teaching Computer Science in a condensed timeframe was challenging yet rewarding.

- **Efficient teaching methods** helped cadets build strong technical foundations quickly.
- **Computer lab sessions** strengthened bonds with junior cadets.
- **Night dormitory inspections** built respect with senior cadets.
- Covering lectures within limited hours sharpened my adaptability.

---

## 🌍 Broader Exposure

Beyond teaching, I had the chance to:

- Meet with a **Malaysian team**.
- Engage with the **Department of Shipping, Bangladesh**.
- Contribute to **course plan design**.

These experiences added international and institutional dimensions to my role.

---

## ✨ Reflections

This short journey taught me:

- The value of **discipline and structure**.
- The importance of **adaptability and efficiency** in teaching.
- The power of **relationships and community** in academic life.

Though only two months, my time at IMA was transformative — an experience I will carry forward.

---

## 📸 Photo Gallery

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
    <div class="slideshow-slide"><img src="/assets/img/news/IMA/IMA-1.JPG" alt="Academic team at IMA" /></div>
    <div class="slideshow-slide"><img src="/assets/img/news/IMA/IMA-2.JPG" alt="Front Gate (Personal)" /></div>
    <div class="slideshow-slide"><img src="/assets/img/news/IMA/IMA-3.JPG" alt="Front Gate (Group)" /></div>
    <div class="slideshow-slide"><img src="/assets/img/news/IMA/IMA-4.JPG" alt="Malaysian Delegate Briefing" /></div>
    <div class="slideshow-slide"><img src="/assets/img/news/IMA/IMA-5.JPG" alt="Shipyard Projects" /></div>
    <div class="slideshow-slide"><img src="/assets/img/news/IMA/IMA-6.JPG" alt="At Parade Ground" /></div>
    <div class="slideshow-slide"><img src="/assets/img/news/IMA/IMA-7.JPG" alt="IMA Shipyard Group Photo" /></div>

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
