---
title: Blog
layout: blog
---

<!-- This loops through the paginated posts 
<div class="row blog-posts-featured">
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
</div>
-->
<div class="row blog-posts-featured">
{% for post in site.posts %}
  <div class="col s12 m6 l4">
    <div class="card">
      <div class="card-image waves-effect waves-block waves-light">
        {% if post.image.feature %}
          <img src="{{site.url}}/images/{{post.image.feature}}" alt="{{post.title}}">
        {% else %}
          <img src="{{site.url}}/images/costa-rica-feature.jpg">
        {% endif %}
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">{{post.title}}<i class="material-icons right">more_vert</i></span>
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">{{post.title}}<i class="material-icons right">close</i></span>
        <p>{{post.summary}}</p>
      </div>
    </div>
  </div>
{% endfor %}
</div>