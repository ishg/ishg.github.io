---
title: Ishmeet Grewal Photography
layout: photography
images:
- path: "whitney.jpg"
  title: Mount Whitney, CA
  caption: Highest point in the continguous United States.
- path: "lone_pine.jpg"
  title: Lone Pine Lake, CA
- path: "havasu_falls.jpg"
  title: Havasu Falls, Supai, AZ
- path: "mooney_falls.jpg"
  title: Mooney Falls, Supai, AZ
- path: "supai.jpg"
  title: Supai, AZ
- path: "kings_canyon.jpg"
  title: Kings Canyon National Park
- path: "wtc.jpg"
  title: One World Trade Center, New York
- path: "vienna.jpg"
  title: Sch&ouml;nbrunn Palace, Vienna, Austria
  caption: Possibly my favorite place to nap on Earth.
- path: "como.jpg"
  title: Lake Como, Italy
- path: "madrid.jpg"
  title: Madrid, Spain
- path: "gendarmenmarkt.jpg"
  title: Gendarmenmarkt, Berlin, Germany
- path: "zwinger.jpg"
  title: Zwinger, Dresden, Germany
- path: "bratislava.jpg"
  title: Bratislava, Slovakia
- path: "lapedriza.jpg"
  title: La Pedriza, Spain
- path: "porto.jpg"
  title: Porto, Portugal
- path: "bruges.jpg"
  title: Bruges, Belgium
- path: "tower_bridge.jpg"
  title: Tower Bridge, London
- path: "prague.jpg"
  title: Prague, Czech Republic
- path: "montserrat.jpg"
  title: Montserrat, Spain
- path: "barcelona.jpg"
  title: Barcelona, Spain
- path: "bigben.jpg"
  title: Big Ben, London
- path: "lisbon.jpg"
  title: Lisbon, Portugal
- path: "brandenburg.jpg"
  title: Brandenburg Gate, Berlin, Germany
- path: "bath.jpg"
  title: Bath, UK
---

<div id="wrapper">

  <!-- Header -->
    <header id="header">
      <h1><strong>Photography</strong> by <a href="{{site.url}}">Ishmeet Grewal</a></h1>
      <nav>
        <ul class="icons">
          <li><a href="http://instagram.com/{{ site.owner.instagram }}" class="icon fa-instagram"><span class="label">Instagram</span></a></li>
          <li><a href="{{site.url}}/blog" class="icon fa-pencil"><span class="label">Blog</span></a></li>
          <li><a href="{{site.url}}" class="icon fa-home"><span class="label">Home</span></a></li>
        </ul>
      </nav>
    </header>

  <!-- Main -->
    <div id="main">
      {% for image in page.images %}
        <article class="thumb">
          <a href="fulls/{{ image.path }}" class="image"><img src="thumbs/{{ image.path }}" alt="" /></a>
          <h2>{{ image.title }}</h2>
          <p>{{ image.caption }}</p>
        </article>
      {% endfor %}
    </div>

</div>
