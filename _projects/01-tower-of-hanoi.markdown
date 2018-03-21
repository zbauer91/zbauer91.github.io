---
layout: project
title:  "Tower of Hanoi"
subtitle: "GA Project One"
img: "/assets/images/hanoi.png"
---

Tower of Hanoi built in HTMl, CSS, and JS, with a little jQuery peppered in. It even comes with the ability to solve itself if you're feeling particularly lazy.

<span class="page-img container">![elixir]({{page.img}})</span>



{:.section-header .container}
## GA Project One

This was my first project at General assembly. We had to build one of a few games, and I decided to pick the hardest one. 

* [Deployed game](http://pixelrabbit.me/Tower-of-Hanoi/)
* [GitHub Repo](https://github.com/zbauer91/Tower-of-Hanoi)

{:.section-header .container}
#### The Design

Clearly, I'm the best at CSS. Nobody can top my use of border-radius and built in CSS colors...

It was the best I could do in 4 days with very little design skills. 

{:.section-header .container}
#### The Code

The game is object-oriented, with each disk being it's own object with a state consisting of it's color x-position, y-position, and width. Each disk also contains th methods necessary to translate relative position to absolute position. 

I initially tried using flexbox to manage disk location, but it would be been terribly cumbersome, so I switched to using CSS grid. Because all elements are on screen in the same grid (a horrible oversight on my part), each disk's methods help determine, for example, which absolute grid position is equivalent to the relative position x:0, y:0

{:.section-header .container}
#### The Solve Button

It actually does work, however I didn't know anything about updating views before controller methods continue, so it ends up running the whole solve function, then updating view. 

Go into the console, and put breakpoints at lines 343 and 351, where the code runs the `swapDisks` function. Step through and watch the magic!
