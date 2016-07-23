---
title: My Photos
layout: page
comments: true
modified: 2015-08-13 20:00:00 -04:00
---

# #365Project

### I am taking one picture a day for a year.

<figure class="third">
<div id="instafeed"></div>
</figure>

<script type="text/javascript">
var feed = new Instafeed({
  get: 'user',
  userId: 725726607,
  accessToken: '725726607.467ede5.bbb4edebf30c48d5a28e859ca1c769b3',
  filter: function(image) {
    return image.tags.indexOf('365project') >= 0;
  },
  resolution: 'standard_resolution'
});
feed.run();
</script>