---
title: Blog
layout: blog
---

<!-- This loops through the paginated posts -->
{% for post in site.posts %}
  <div class="article-wrapper z-depth-1 white">
    {% if post.image.feature %}
      <div class="feature-image">
        <img src="{{site.url}}/images/{{post.image.feature}}" alt="{{post.title}}">
      </div>
    {% endif %}
    <article>
      <h1><a href="{{ post.url }}">{{ post.title }}</a></h1>
      <span class="post-meta"><time datetime="{{ post.date | date_to_xmlschema }}" itemprop="datePublished">{{ post.date | date: "%b %-d, %Y" }}</time></span>
      <div class="content {{post.layout}}">
        {{ post.content }}
      </div>
    </article>
  </div>
{% endfor %}