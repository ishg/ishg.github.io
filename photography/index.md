---
title: Ishmeet Grewal Photography
layout: photography
---

<!-- Main -->
<div id="main">
	<header id="header">
		<h1>Ishmeet Grewal Photography</h1>
		<p>As an aspiring photographer, I document my travels and adventures with my Nexus 6P.</p>
		<ul class="icons">
			<li><a href="https://www.instagram.com/ishmeetgrewal/" class="icon fa-instagram"><span class="label">Instagram</span></a></li>
			<li><a href="mailto:ishmeetsinghgrewal@gmail.com" class="icon fa-envelope-o"><span class="label">Email</span></a></li>
		</ul>
	</header>
	<section id="thumbnails">
		{% for image in site.static_files %}
	    {% if image.path contains 'images/photography/' %}
	      <article>
	      	<a class="thumbnail" href="{{ site.baseurl }}{{ image.path }}" data-position="left center"><img src="{{ site.baseurl }}{{ image.path }}" alt="" /></a>
	      	<h2>Diam tempus accumsan</h2>
	      	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
	      </article>
	    {% endif %}
		{% endfor %}
	</section>
	<footer id="footer">
		<ul class="copyright">
			<li>&copy;2016 Ishmeet Grewal |</li><li>Design: <a href="http://html5up.net">HTML5 UP</a>.</li>
		</ul>
	</footer>
	

</div>
