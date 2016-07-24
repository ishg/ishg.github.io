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

<div id="wrapper">

  <!-- Header -->
    <header id="header">
      <div class="inner">

        <!-- Logo -->
          <a href="index.html" class="logo">
            <span class="symbol"><img src="{{site.url}}/images/avatar.jpg" alt="" /></span><span class="title">Ishmeet Grewal</span>
          </a>

        <!-- Nav -->
          <nav>
            <ul>
              <li><a href="#menu">Menu</a></li>
            </ul>
          </nav>

      </div>
    </header>

  <!-- Menu -->
    <nav id="menu">
      <h2>Menu</h2>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="generic.html">Ipsum veroeros</a></li>
        <li><a href="generic.html">Tempus etiam</a></li>
        <li><a href="generic.html">Consequat dolor</a></li>
        <li><a href="elements.html">Elements</a></li>
      </ul>
    </nav>

  <!-- Main -->
    <div id="main">
      <div class="inner">
        <header>
          <h1>I write profound pieces sometimes.</h1>
          <p>I love and live to learn. I have written down some of the more interesting things that have happened to me in my life.</p>
        </header>
        <section class="tiles">
          <article class="style1">
            <span class="image">
              <img src="images/pic01.jpg" alt="" />
            </span>
            <a href="generic.html">
              <h2>Magna</h2>
              <div class="content">
                <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
              </div>
            </a>
          </article>
          <article class="style2">
            <span class="image">
              <img src="images/pic02.jpg" alt="" />
            </span>
            <a href="generic.html">
              <h2>Lorem</h2>
              <div class="content">
                <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
              </div>
            </a>
          </article>
          <article class="style3">
            <span class="image">
              <img src="images/pic03.jpg" alt="" />
            </span>
            <a href="generic.html">
              <h2>Feugiat</h2>
              <div class="content">
                <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
              </div>
            </a>
          </article>
          <article class="style4">
            <span class="image">
              <img src="images/pic04.jpg" alt="" />
            </span>
            <a href="generic.html">
              <h2>Tempus</h2>
              <div class="content">
                <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
              </div>
            </a>
          </article>
          <article class="style5">
            <span class="image">
              <img src="images/pic05.jpg" alt="" />
            </span>
            <a href="generic.html">
              <h2>Aliquam</h2>
              <div class="content">
                <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
              </div>
            </a>
          </article>
          <article class="style6">
            <span class="image">
              <img src="images/pic06.jpg" alt="" />
            </span>
            <a href="generic.html">
              <h2>Veroeros</h2>
              <div class="content">
                <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
              </div>
            </a>
          </article>
          <article class="style2">
            <span class="image">
              <img src="images/pic07.jpg" alt="" />
            </span>
            <a href="generic.html">
              <h2>Ipsum</h2>
              <div class="content">
                <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
              </div>
            </a>
          </article>
          <article class="style3">
            <span class="image">
              <img src="images/pic08.jpg" alt="" />
            </span>
            <a href="generic.html">
              <h2>Dolor</h2>
              <div class="content">
                <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
              </div>
            </a>
          </article>
          <article class="style1">
            <span class="image">
              <img src="images/pic09.jpg" alt="" />
            </span>
            <a href="generic.html">
              <h2>Nullam</h2>
              <div class="content">
                <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
              </div>
            </a>
          </article>
          <article class="style5">
            <span class="image">
              <img src="images/pic10.jpg" alt="" />
            </span>
            <a href="generic.html">
              <h2>Ultricies</h2>
              <div class="content">
                <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
              </div>
            </a>
          </article>
          <article class="style6">
            <span class="image">
              <img src="images/pic11.jpg" alt="" />
            </span>
            <a href="generic.html">
              <h2>Dictum</h2>
              <div class="content">
                <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
              </div>
            </a>
          </article>
          <article class="style4">
            <span class="image">
              <img src="images/pic12.jpg" alt="" />
            </span>
            <a href="generic.html">
              <h2>Pretium</h2>
              <div class="content">
                <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
              </div>
            </a>
          </article>
        </section>
      </div>
    </div>

  <!-- Footer -->
    <footer id="footer">
      <div style="text-align:center; margin: 0 auto;">
        <ul class="icons" >
          <li><a href="http://facebook.com/{{ site.owner.facebook }}" class="icon style2 fa-facebook"><span class="label">Facebook</span></a></li>
          <li><a href="http://instagram.com/{{ site.owner.instagram }}" class="icon style2 fa-instagram"><span class="label">Instagram</span></a></li>
          <li><a href="http://linkedin.com/in/{{ site.owner.linkedin }}" class="icon style2 fa-linkedin"><span class="label">LinkedIn</span></a></li>
          <li><a href="http://github.com/{{ site.owner.github }}" class="icon style2 fa-github"><span class="label">Github</span></a></li>
        </ul>
        <p>&copy;2016 Ishmeet Grewal | Design: <a href="http://html5up.net">HTML5 UP</a></p>
      </div>
    </footer>

</div>