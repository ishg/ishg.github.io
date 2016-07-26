---
title: Ishmeet Grewal Photography
layout: photography
images:
- path: "/images/photography/vienna.jpg"
  title: Sch&ouml;nbrunn Palace, Vienna, Austria
  caption: My favorite place on Earth.
- path: "/images/photography/como.jpg"
  title: Lake Como, Italy
  caption: Something I still have to visit.
- path: "/images/photography/madrid.jpg"
  title: Madrid, Spain
  caption: Something I still have to visit.
- path: "/images/photography/gendarmenmarkt.jpg"
  title: Gendarmenmarkt, Berlin, Germany
  caption: Something I still have to visit.
- path: "/images/photography/zwinger.jpg"
  title: Zwinger, Dresden, Germany
  caption: Something I still have to visit.
- path: "/images/photography/bratislava.jpg"
  title: Bratislava, Slovakia
  caption: Something I still have to visit.
- path: "/images/photography/lapedriza.jpg"
  title: La Pedriza, Spain
  caption: Something I still have to visit.
- path: "/images/photography/porto.jpg"
  title: Porto, Portugal
  caption: Something I still have to visit.
- path: "/images/photography/bruges.jpg"
  title: Bruges, Belgium
  caption: Something I still have to visit.
- path: "/images/photography/tower_bridge.jpg"
  title: Tower Bridge, London
  caption: Something I still have to visit.
- path: "/images/photography/prague.jpg"
  title: Prague, Czech Republic
  caption: Something I still have to visit.
- path: "/images/photography/montserrat.jpg"
  title: Montserrat, Spain
  caption: Something I still have to visit.
- path: "/images/photography/barcelona.jpg"
  title: Barcelona, Spain
  caption: Something I still have to visit.
- path: "/images/photography/bigben.jpg"
  title: Big Ben, London
  caption: Something I still have to visit.
- path: "/images/photography/lisbon.jpg"
  title: Lisbon, Portugal
  caption: Something I still have to visit.
- path: "/images/photography/brandenburg.jpg"
  title: Brandenburg Gate, Berlin, Germany
  caption: Something I still have to visit.
- path: "/images/photography/howth.jpg"
  title: Howth, Ireland
  caption: Something I still have to visit.
- path: "/images/photography/bath.jpg"
  title: Bath, UK
  caption: Something I still have to visit.
---

<!--remember to tab using spaces in yaml-->

<!-- Main -->
<div id="main">
	<header id="header">
		<h1>Ishmeet Grewal Photography</h1>
		<p>As an aspiring photographer, I document my travels and adventures with my Nexus 6P.</p>
		<ul class="icons">
			<li><a href="https://www.instagram.com/ishmeetgrewal/" class="icon fa-instagram"><span class="label">Instagram</span></a></li>
			<li><a href="{{site.url}}" class="icon fa-home"><span class="label">Home</span></a></li>
      <li><a href="{{site.url}}/blog" class="icon fa-pencil"><span class="label">Blog</span></a></li>
		</ul>
	</header>
	<section id="thumbnails">
		{% for image in page.images %}
			<article>
				<a class="thumbnail" href="{{ site.baseurl }}{{ image.path }}" data-position="left center"><img src="{{ site.baseurl }}{{ image.path }}" alt="" /></a>
				<h2>{{image.title}}</h2>
				<!-- <p>{{image.caption}}</p> -->
			</article>
		{% endfor %}
	</section>
	<footer id="footer">
		<ul class="copyright">
			<li>&copy;2016 Ishmeet Grewal |</li><li>Design: <a href="http://html5up.net">HTML5 UP</a>.</li>
		</ul>
	</footer>
	

</div>
