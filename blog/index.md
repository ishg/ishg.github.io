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
<!-- Main -->
<div id="main">
  <div class="inner">
    <header>
      <h1>I write profound pieces sometimes.</h1>
      <p>I love and live to learn. Here, I have written down some of the more interesting things that have happened to me in my life.</p>
    </header>
    <section class="tiles">
      {% for post in site.posts %}
        {% assign loopindex = forloop.index | modulo: 6 %}
        <article class="style{{loopindex}}">
          <span class="image">
            {% if post.image.feature %}
              <img src="{{site.url}}/images/{{post.image.feature}}" alt="{{post.title}}">
            {% else %}
              <img src="" alt="" />
            {% endif %}
          </span>
          <a href="{{post.url}}">
            <h2>{{post.title}}</h2>
            <div class="content">
              <p>{{post.summary}}</p>
            </div>
          </a>
        </article>
      {% endfor %}
    </section>
  </div>
</div>