---
layout: post
title:  "Deployment and Kramdown Mini-Post"
subtitle: "It's Aliiiive!!!!"
date:   2018-03-07 07:50:00 -0500
categories: mini
tags: design markdown gh-pages
img: https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/2000px-Markdown-mark.svg.png
extra_img: https://raw.githubusercontent.com/github/explore/95db15839d9d404742e1dc3aebc83bc8ea42eb24/collections/github-pages-examples/github-pages-examples.png
---

This mini post highlights some of the things I learned about the Kramdown superset and my eventual deployment to GitHub Pages

<span class="page-img container">![markdown]({{page.img}}) ![gh-pages]({{page.extra_img}})</span>

{:.section-header .container .h3}
### Kramdown

`{:}` <-- this is the _block inline attribute list_ label, and boy is it useful. I can use it to define classes and other options on some eventual HTML element, a la
<pre><code>
&#9;{:.section-header .container .h3}
&#9;### Kramdown
</code></pre>
I used this to define my header, which is what makes it look so fancy. Add a little SCSS behind the scenes, and you can completely change the way the markdown content is rendered. 


{:.section-header .container .h3}
### Deployment

This was a challenge in understanding the difference between absolute and relative URLs, how to configure my `site.url` in `_config.yml`, and playing nicely with GitHub Pages. 

It turns out I needed absolute URLs, and to make sure that I prepend the `site.baseurl` in case that is populated in my `_config.yml`

My biggest challenge moving forward is _how on earth I get GHP to use bootstrap without the need to push the entirety of the compiled CSS and JS to the frontend. 
