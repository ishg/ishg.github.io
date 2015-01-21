---
layout: page
title: Travels
---

{% for page in site.travels %}
  * <a href="/blog/travels{{ page[1] }}">{{ page[0] }}</a>
{% endfor %}