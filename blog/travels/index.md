---
title: Travels
layout: page
comments: false
share: false
---

I travel the world and share my experiences.

{% for page in site.travels %}
  * <a href="/travels{{ page[1] }}">{{ page[0] }}</a>
{% endfor %}