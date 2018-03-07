---
layout: post
title:  "Jekyll, The Easy Way"
subtitle: "Dr. Jekyll would never be complete without Mr. Hyde"
date:   2018-03-05 17:00:00 -0500
categories: learning new_framework
tags: new_framework jekyll
img: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLtaVfX_ZOC3go_Iu9ByQKFFd6hPjNWZzns8drogrhmAVbEdlC
---

I had to come up with a project idea for the General Assembly showcase, and I was stumped...


<span class="page-img container">![jekyll]({{page.img}})</span>


{:.section-header .container .h3}
#### Backstory

I had previously spent a significant amount of time writing an [incomplete react frontend](https://github.com/zbauer91/habitrack-react) and an [incomplete rails api](https://github.com/zbauer91/habitrack) for this lofty app idea I've been mulling around the last few months: HabiTrack. It wasn't a bad idea, it was just woefully out of my grasp. My first attempt was during project two, and this time around, I was unprepared in ways I could not have seen coming. I'll leave the meat of the story to a future post.

{:.section-header .container .h3}
#### So what then?...
I wanted to do something complete, ambitious (sort of), and interesting enough to talk to potential employers about. It hit me like a ton of feathers: A blog!

{:.section-header .container .h3}
#### How?

I couldn't just show them my twitter, right?....right?

I had known about Jekyll for some time now and decided to give it a go and see if I could make a functioning blog! It turns out you can, but woe is you if you try and integrate things outside the github allow-o-sphere.

{:.section-header .container .h3}
#### Concepts Learned:
* Liquid - Templating from Shopify
* Bootstrap 4 - SASS version
* Kramdown - Markdown superset
* Make - Tried and true *nix build utility language. I personally didn't learn much, but I can modify predefined files to better suit my needs.

{:.section-header .container .h3}
#### Design Decisions:
* bootstrap: This was an easy choice. I hadn't worked much with it [until recently]({{site.baseurl}}{%post_url 2018-03-06-bootstrap-and-me%}), and wanted to see how I liked it compared to material design. Turns out I'm lukewarm to it. It's super powerful, but ultimately requires more theming that I would like. <strong>Please, change my mind</strong>
* minima: Jekyll comes reinstalled with this theme. I was careful to leave the MIT license attached to this project, because I did use some of the assets in the gem to build up this website. 
* File structure - I feel I need to defend this one. I technically copy the entirety of Bootstrap and all dependencies to jekyll during build. Terrible? yes, necessary? I think so...I can't really seem to get it built on GitHub-Pages any other way
* For now, I'm keeping this website and [my portfolio website]() as separate entities. This will make it a lot easier to find the time to further update the design, look, and feel of this site, while maintaining a more polished portfolio




