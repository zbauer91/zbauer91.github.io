---
layout: post
title:  "Bootstrap and Me"
subtitle: "You just have to pull yourself up by your shoelaces."
date:   2018-03-06 09:00:00 -0500
categories: bootstrap design learning
img: http://syndicode.co/wp-content/uploads/2018/01/Bootrap4-arrived-e1516612818493.png
---

I figured the best way to style my [new jekyll blog]({{site.baseurl}}{%post_url 2018-03-05-jekyll-the-easy-way%}) was to use a design framework. It ended up being a frustratingly cool look into how to cram things together to make a viable product

{:.section-header .container .h3}
### Bootstrap

I've had some experience with it before, but only with the LESS version. Since bumping to version 4.0, the team behind Bootstrap has migrated to SASS, making it a little easier to integrate into a Jekyll project. 



{:.section-header .container .h3}
### The big problem
the bootstrap gem is not on the approved list of approved gems for building a static GitHub pages website. That means that I can't just install the gem and be on my merry way with styling components. I had to get a little creative.



{:.section-header .container .h3}
### The solution
[This article](https://simpleit.rocks/how-to-add-bootstrap-4-to-jekyll-the-right-way/) gave me a great starting point for getting bootstrap integrated into Jekyll. The tl;dr is that I needed to install bootstrap as a `node_module`, and tell jekyll to include the folder in the build. I had to keep some things in mind, however:

* running jekyll in safe mode will prevent this from working
* the makefile is super important to ensuring my entire `node_modules` folder doesn't get built with the site


