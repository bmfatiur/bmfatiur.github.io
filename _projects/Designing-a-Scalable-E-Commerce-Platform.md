---
layout: page
title: "🛒 Designing a Scalable E-Commerce Platform for Padma Oil Mill Ltd"
description: "Web-based Laravel e-commerce system with robust admin & user interfaces"
img: /assets/img/projects/E-Commerce/Login.png
importance: 202
category: academic
---

<!-- Swiper Styles -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
/>

<!-- Swiper Container -->
<div class="swiper uniform-swiper">
  <div class="swiper-wrapper">   
    <div class="swiper-slide">
        <div class="slide-wrapper">
            <img src="/assets/img/projects/E-Commerce/Login.png" alt="Login Page" />
            <div class="slide-caption">Login Page</div>
        </div>
    </div>
    <div class="swiper-slide">
        <div class="slide-wrapper">
            <img src="/assets/img/projects/E-Commerce/Admin-Dashboard.png" alt="Admin Dashboard Page" />
            <div class="slide-caption">Admin Dashboard Page</div>
        </div>
    </div>
    <div class="swiper-slide">
        <div class="slide-wrapper">
            <img src="/assets/img/projects/E-Commerce/Database.png" alt="Database Page" />
            <div class="slide-caption">Database Page</div>
        </div>
    </div>
    <div class="swiper-slide">
        <div class="slide-wrapper">
            <img src="/assets/img/projects/E-Commerce/Category.png" alt="Category Page" />
            <div class="slide-caption">Category Page</div>
        </div>
    </div>
    <div class="swiper-slide">
        <div class="slide-wrapper">
            <img src="/assets/img/projects/E-Commerce/Coupon.png" alt="Coupon Page" />
            <div class="slide-caption">Coupon Page</div>
        </div>
    </div>
    <div class="swiper-slide">
        <div class="slide-wrapper">
            <img src="/assets/img/projects/E-Commerce/Order.png" alt="Order Page" />
            <div class="slide-caption">Order Page</div>
        </div>
    </div>
    <div class="swiper-slide">
        <div class="slide-wrapper">
            <img src="/assets/img/projects/E-Commerce/Products.png" alt="Products Page" />
            <div class="slide-caption">Products Page</div>
        </div>
    </div>
    <div class="swiper-slide">
        <div class="slide-wrapper">
            <img src="/assets/img/projects/E-Commerce/Testimonial.png" alt="Testimonial Page" />
            <div class="slide-caption">Testimonial Page</div>
        </div>
    </div>
    <div class="swiper-slide">
        <div class="slide-wrapper">
            <img src="/assets/img/projects/E-Commerce/Tokens.png" alt="Tokens Page" />
            <div class="slide-caption">Tokens Page</div>
        </div>
    </div>
  </div>

  <!-- Navigation Arrows -->
  <div class="swiper-button-next"></div>
  <div class="swiper-button-prev"></div>

  <!-- Pagination Dots -->
  <div class="swiper-pagination"></div>
</div>

<!-- Swiper Script -->
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
<script>
  new Swiper(".uniform-swiper", {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 16,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
</script>

<!-- Slider Styling -->
<style>
  .uniform-swiper {
    max-width: 800px;
    margin: auto;
    position: relative;
  }

  .swiper-slide {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    height: 300px;
    width: auto;
    object-fit: contain;
    border-radius: 8px;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #007aff;
  }

  .swiper-pagination-bullet {
    background: #007aff;
    opacity: 0.7;
  }

  .slide-wrapper {
  position: relative;
  display: inline-block;
}

.slide-caption {
  position: absolute;
  bottom: 12px;
  left: 12px;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  padding: 4px 10px;
  font-size: 14px;
  border-radius: 4px;
  font-weight: 500;
  max-width: 80%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

  @media (max-width: 600px) {
    .swiper-slide img {
      height: 200px;
    }
  }

  @media (max-width: 600px) {
    .slide-caption {
        font-size: 12px;
        padding: 3px 8px;
    }
  }
</style>

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
