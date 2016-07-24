---
title: Raspberry Pi Timelapse
date: 2014-09-22 00:00:00 -04:00
tags:
- tech
layout: post
summary: I set up a Raspberry Pi to take a picture every 10 seconds at an autocross
  event. The result was a timelapse video showcasing all the cars that autocrossed.
comments: true
share: false
---

This weekend, [Byers Imports](http://www.byersimports.com/index.htm) unveiled the new [Jaguar F-Type Coupe](http://www.jaguarusa.com/all-models/f-type/f-type-models/f-type-coupe.html) and invited people to autocross for free. I set up a Raspberry Pi at the start line to record a picture every 10 seconds. It managed to capture every car that autocrossed and a pretty cool view of the moving clouds.  

<p style="text-align:center">
<iframe src="//player.vimeo.com/video/106693628" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> </p>

## Connect the camera

The folks over at [Raspberry Pi](http://www.raspberrypi.org/help/camera-module-setup/) have created a nice tutorial of how to setup the camera and connect it to Pi.

<p style="text-align:center">
<iframe width="560" height="315" src="//www.youtube.com/embed/GImeVqHQzsE" frameborder="0" allowfullscreen></iframe></p>

## Enable the camera

I will assume that you know how to start up a Raspberry Pi running Raspbian and connect a monitor and keyboard/mouse to it. If not, some quick google searches should help you get there.

Open a LXTerminal in Pi and open `raspi-config`.

{% highlight python %}
sudo raspi-config
{% endhighlight %}

Select `Enable camera` and hit `Enter`, then go to `Finish` and you will be asked to reboot.

## Taking pictures

The `raspistill` command is used to take pictures along with various configuration flags.

{% highlight python %}
raspistill -o test.jpg
{% endhighlight %}

This will place a `test.jpg` file in your home folder. The 'raspistill' command takes about six seconds to take a picture.

## Timelapse script

I wrote a simple python script to take a picture every ten seconds.

{% highlight python %}
import os
import time
import RPi.GPIO as GPIO
from datetime import datetime

# Determine the current date and time
d = datetime.now()
startYear = "%04d" % (d.year)
startMonth = "%02d" % (d.month)
startDate = "%02d" % (d.day)
startHour = "%02d" % (d.hour)
startMin = "%02d" % (d.minute)

#Define the location where files need to be saved
saveFolder = "/home/pi/timelapse/timelapse_" + str(startYear) + str(startMonth)+str(startDate)+ str(startHour) + str(startMin)

os.mkdir(saveFolder)

#First File
fileIndex = 1

#Infinite Loop
while True:
	d = datetime.now()
	if True:
		#Set file number
		fileNumber = "%04d" %(fileIndex)

		#Get current time
		hour = "%02d" %(d.hour)
		mins = "%02d" %(d.minute)

		imgWidth = 800
		imgHeight = 600

		print "===============Saving file at " + hour + ":" + mins

		#Capture image
		os.system("raspistill -w " + str(imgWidth) + " -h " + str(imgHeight) + " -o " + str(saveFolder) + "/" + str(fileNumber) + "_" + str(hour) + str(mins) + ".jpg -sh 40 -awb auto -mm average -ex auto")

		#Increment file number
		fileIndex += 1

		#Wait ten seconds before the next image
		time.sleep(10)

	else:
		print "==================Nothing is happening"

{% endhighlight %}

The code is pretty well commented, but I will delve into the actual capture image part. I have included some flags with the `raspistill` command, and they are described below.

<table>
  <thead>
    <tr>
      <th>Flag</th>
      <th>Description</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>-w</td>
      <td>width</td>
      <td>800</td>
    </tr>
    <tr>
      <td>-h</td>
      <td>height</td>
      <td>600</td>
    </tr>
    <tr>
      <td>-o</td>
      <td>output file name</td>
      <td>/path/to/file.jpg</td>
    </tr>
    <tr>
      <td>-sh</td>
      <td>sharpness</td>
      <td>40</td>
    </tr>
    <tr>
      <td>-awb</td>
      <td>auto white balance</td>
      <td>auto</td>
    </tr>
    <tr>
      <td>-mm</td>
      <td>metering mode</td>
      <td>average</td>
    </tr>
    <tr>
      <td>-ex</td>
      <td>exposure</td>
      <td>auto</td>
    </tr>
  </tbody>
</table>

More detailed flag specifications are available [here](http://www.raspberrypi.org/documentation/raspbian/applications/camera.md).

## Automatic startup on boot

In order to make the Pi start taking pictures when it was powered on, I added a cron job to the crontab.

Navigate to the home directory in Pi using `cd`. Then, use `crontab -e` and add the following command to the crontab.

{% highlight python %}
@reboot python /path/to/timelapse/file.py
{% endhighlight %}

Make sure you shutdown.

{% highlight python %}
sudo shutdown -h "now"
{% endhighlight %}

This will ensure that your `timelapse.py` script will start running every time you reboot the Pi.

## Making the Video

Install the `mencoder` package that converts all the pictures into a video.

{% highlight python %}
sudo apt-get install mencoder
{% endhighlight %}

Then, navigate to your directory that has all the pictures and execute the following commands

{% highlight python %}
/* This adds all the pictures to a list */
ls *.jpg stills.txt
/* Make the video */
mencoder -nosound -ovc lavc -lavcopts vcodec=mpeg4:aspect=16/9:vibrate=8000000 -vf scale=1920:1080 -o timelapse.avi -mf type=jpeg:fps=24 mf://@stills.txt
{% endhighlight %}

Now you can copy the `timelapse.avi` file from the Pi using a FTP client or from the SD card itself. Enjoy your video!

## BONUS! - Pi Remote Access

Instead of having to keep connecting the Pi to the monitor and keyboard and switching out the SD card every time I needed to copy files, I bought a [USB wireless dongle](http://www.amazon.com/Edimax-EW-7811Un-Adapter-Raspberry-Supports/dp/B003MTTJOY/ref=lp_13983791_1_1?s=pc&ie=UTF8&qid=1411610906&sr=1-1) and added it to a USB port on the Pi. The dongle is very easy to install and connect to WiFi using the Raspbian Desktop environment.

Once it was online, I found out the hostname for the Pi using this command:
{% highlight python %}
hostname -I
{% endhighlight %}

This should give you an address that looks something like `192.168.1.199`.

Now, using a Mac/Linux terminal or Putty on Windows, you can create an ssh connection directly to the Pi.
{% highlight python %}
ssh pi@192.168.1.199
{% endhighlight %}

If you set up a different username, you can replace 'pi' with that username. Now, you should be able to access your Pi remotely and copy files over using an FTP client like FileZilla or a bash command like `scp`.
