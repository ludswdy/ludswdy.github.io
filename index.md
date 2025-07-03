---
layout: default
title: Home
---

<div class="content-wrapper py-16">
    <div class="post-list">
        {% for post in site.posts %}
        <a href="{{ post.url | relative_url }}" class="post-item block p-4 -mx-8">
            <h2 class="text-3xl font-semibold mb-2">{{ post.title }}</h2>
            <p class="post-meta text-sm">
                {{ post.date | date: "%B %-d, %Y" }}
                </p>
        </a>
        {% endfor %}
    </div>
</div>
