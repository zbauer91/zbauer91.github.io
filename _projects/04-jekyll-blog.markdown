---
layout: project
title:  "Jekyll Blog"
subtitle: "GA Project Four"
img: "/assets/images/jekyll.png"
---

A blog site built from scratch with Jekyll and the latest Bootstrap 4. There are some other visual goodies sprinkled in as well.

<span class="page-img container">![elixir]({{page.img}})</span>

{:.section-header .container}
## GA Project Three

* [Deployed game](http://pixelrabbit.me/barber-find-dc/)
* [GitHub Frontend Repo](https://github.com/zbauer91/barber-find-dc)
* [GitHub Backend Repo](https://github.com/zbauer91/barber-find-api)

{:.section-header .container}
#### The Guts of a blog

###### First Iteration
I built the site in Jekyll with the minima theme, and didn't really do much with it. I could host it locally and add an remove posts, but I wanted more!

###### Second Iteration
I figure out how to add Bootstrap 4, which was recently rewritten in Sass, into the website. By installing and managing Bootstrap with `Yarn`, and using a makefile to move the required components into the vendor directory at build time, I could incorporate any `npm` package that I wanted without worrying about compatibility on GitHub Pages.

At this point, it had a nice orange theme and a card layout for each post.

###### Third Iteration (current)
I decided to merge my portfolio website and my blog into one repo for simplicity. I revamped the theme to light on dark, and separated out my projects from my main portfolio page. I added easings and other visual effects with `anime.js`, and wrote out detailed descriptions of all of my projects. 


