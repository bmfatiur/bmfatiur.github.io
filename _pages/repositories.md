---
layout: page
permalink: /repositories/
title: repositories
description: >
  Welcome to my repositories page! Here, you'll find a curated list of projects from my GitHub profile, showcasing my journey and interests in the field of Computer Science and Engineering. Each repository reflects my passion for exploring diverse domains—from building interactive applications and tackling machine learning challenges to delving into the intricacies of computer graphics, digital signal processing, and microcontroller interfacing.

  Whether it's the development of practical web application like "Padmaoil," innovative experiments like "Sleep Disorder Prediction using ML," or explorations into foundational subjects like data structures and operating systems, these projects highlight my `commitment of learning`, `problem-solving`, and creating meaningful solutions. Dive in to discover how these repositories reflect my growth as a developer and researcher, with a strong focus on advancing my expertise in `computer vision` and beyond.

  Feel free to explore and be inspired by the diverse range of projects that celebrate both technical depth and creative innovation!
nav: true
nav_order: 4
---

{% if site.data.repositories.github_users %}

## GitHub users

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for user in site.data.repositories.github_users %}
    {% include repository/repo_user.liquid username=user %}
  {% endfor %}
</div>

---

{% if site.repo_trophies.enabled %}
{% for user in site.data.repositories.github_users %}
{% if site.data.repositories.github_users.size > 1 %}

  <h4>{{ user }}</h4>
  {% endif %}
  <div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% include repository/repo_trophies.liquid username=user %}
  </div>

---

{% endfor %}
{% endif %}
{% endif %}

{% if site.data.repositories.github_repos %}

## GitHub Repositories

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}
