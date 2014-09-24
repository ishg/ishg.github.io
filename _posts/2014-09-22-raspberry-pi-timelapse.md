---
layout: post
title: Raspberry Pi Timelapse
comments: True
---

This weekend, [Byers Imports](http://www.byersimports.com/index.htm) unveiled the new [Jaguar F-Type Coupe](http://www.jaguarusa.com/all-models/f-type/f-type-models/f-type-coupe.html) and invited people to autocross for free. I set up a Raspberry Pi at the start line to record a picture every 10 seconds. It managed to capture every car that autocrossed and a pretty cool view of the moving clouds.  

<p style="text-align:center">
<iframe src="//player.vimeo.com/video/106693628" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> </p>

## Setup

### Connect the camera

The folks over at [Raspberry Pi](http://www.raspberrypi.org/help/camera-module-setup/) have created a nice tutorial of how to setup the camera and connect it to Pi.

<p style="text-align:center">
<iframe width="560" height="315" src="//www.youtube.com/embed/GImeVqHQzsE" frameborder="0" allowfullscreen></iframe></p>

### Enable the camera

Open a terminal in Pi and open `raspi-config`.

{% highlight python %}
sudo raspi-config
{% endhighlight %}

Select `Enable camera` and hit `Enter`, then go to `Finish` and you will be asked to reboot.
