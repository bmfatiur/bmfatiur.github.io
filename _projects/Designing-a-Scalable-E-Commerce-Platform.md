---
layout: page
title: "🛒 Designing a Scalable E-Commerce Platform for Padma Oil Mill Ltd"
description: "Web-based Laravel e-commerce system with robust admin and user interfaces"
img: /assets/img/projects/E-Commerce/Login.png
importance: 202
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
      margin-top: 5px;
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
    <div class="slideshow-slide">
      <img src="/assets/img/projects/E-Commerce/Login.png" alt="Login Page" />
      <div class="slide-caption">Login Page</div>
    </div>
    <div class="slideshow-slide">
      <img src="/assets/img/projects/E-Commerce/Admin-Dashboard.png" alt="Admin Dashboard" />
      <div class="slide-caption">Admin Dashboard</div>
    </div>
    <div class="slideshow-slide">
      <img src="/assets/img/projects/E-Commerce/Database.png" alt="Database Page" />
      <div class="slide-caption">Database Page</div>
    </div>
    <div class="slideshow-slide">
      <img src="/assets/img/projects/E-Commerce/Category.png" alt="Category Page" />
      <div class="slide-caption">Category Page</div>
    </div>
    <div class="slideshow-slide">
      <img src="/assets/img/projects/E-Commerce/Coupon.png" alt="Coupon Page" />
      <div class="slide-caption">Coupon Page</div>
    </div>
    <div class="slideshow-slide">
      <img src="/assets/img/projects/E-Commerce/Order.png" alt="Order Page" />
      <div class="slide-caption">Order Page</div>
    </div>
    <div class="slideshow-slide">
      <img src="/assets/img/projects/E-Commerce/Products.png" alt="Products Page" />
      <div class="slide-caption">Products Page</div>
    </div>
    <div class="slideshow-slide">
      <img src="/assets/img/projects/E-Commerce/Testimonial.png" alt="Testimonial Page" />
      <div class="slide-caption">Testimonial Page</div>
    </div>
    <div class="slideshow-slide">
      <img src="/assets/img/projects/E-Commerce/Tokens.png" alt="Tokens Page" />
      <div class="slide-caption">Tokens Page</div>
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

This project presents the design and implementation of a scalable **web-based e-commerce system** for **Padma Oil Mill Ltd**, offering a responsive and intuitive experience for both customers and administrators. The system was built using a modern Laravel-Docker architecture and focused on performance, usability, and secure transactions.

---

### 🔐 Admin-Driven Architecture

- **Role-based admin panel** with dynamic control over product lifecycle, category segmentation, user management, and testimonial approval.
- **Coupon system**, order tracking, and real-time product updates integrated directly into the dashboard.
- Intuitive analytics via **Chart.js** for monitoring revenue and purchase trends.

---

### 🛒 Customer-Facing Features

- Fully responsive home page with **product discovery**, filtering, feedback submission, and simplified checkout.
- Built-in support for **discounted pricing**, coupon logic, and order management.
- Streamlined onboarding with **Laravel Sanctum** for secure user sessions.

---

### 🛠️ Technologies Used

- **Frameworks**: Laravel 10, Docker, PHP 8, MySQL
- **Frontend**: Blade Templates, Tailwind CSS, Bootstrap, Toastr, SweetAlert, Dropify, Select2
- **Libraries**: Chart.js, Carbon, Image Intervention
- **Cart Engine**: `anayarojo/shoppingcart`

---

### 📦 Key Deliverables

- Admin & customer portals with authentication and role control
- Category and product CRUD operations
- Shopping cart with custom pricing rules
- Order & inventory handling system
- Feedback and testimonial manager
- Coupon generator and usage tracker
- Real-time analytics dashboard

---

### 🧠 Repository Link

[![Web App Repo](https://img.shields.io/badge/Web_App-GitHub-0366d6?style=for-the-badge&logo=github)](https://github.com/bmfatiur/padmaoil)

---
