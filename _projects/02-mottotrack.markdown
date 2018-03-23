---
layout: project
title:  "Mottotrack"
subtitle: "GA Project Two"
img: "/assets/images/mottotrack.png"
---

A VueJS + Vuetify app that allow you to Create, Read, Update, and Delete entries from a remote database through an Express API.

<span class="page-img container">![elixir]({{page.img}})</span>



{:.section-header .container}
## GA Project One

This was my first project at General assembly. We had to build one of a few games, and I decided to pick the hardest one. 

* [Deployed game](http://pixelrabbit.me/MottoTrack/#/)
* [GitHub Frontend Repo](https://github.com/zbauer91/MottoTrack)
* [GitHub Backend Repo](https://github.com/zbauer91/project-two-api)

{:.section-header .container}
#### The Design

I wanted to learn a front-end design library, and I'm a really big fan of Google's Material Design. Since I built this application in Vue, I used Vuetify for all of my stylings. 

{:.section-header .container}
#### The Code

The code is largely comprised of a large HTML template, and the basic setup for a Vue app. I have various fields bound to the model at all times to handle real-time updating.

The update form is bound to a separate object in the model so you're not live updating the table as you type. I achieved this by copying the object of the clicked row to a new object, using that to send to the database, and copying it back once the form is submitted. I didn't implement any sort of websockets with this project, so instead of querying the database for the change, it both sends the change and modifies the local object. 


