---
layout: project
title:  "BarberHub"
subtitle: "GA Project Three"
img: "/assets/images/barberhub.png"
---

A review aggregator to help DC find a quality barber. It is a full-stack MERN application with an express API that connects to Foursquare and Google Maps. It was written as a group project with two other General Assembly students.

<span class="page-img container">![elixir]({{page.img}})</span>

{:.section-header .container}
## GA Project Three

* [Deployed game](http://pixelrabbit.me/barber-find-dc/)
* [GitHub Frontend Repo](https://github.com/zbauer91/barber-find-dc)
* [GitHub Backend Repo](https://github.com/zbauer91/barber-find-api)

{:.section-header .container}
#### The Process

I lead a group project wth two other students to produce a website to help new people to DC. 

We used Trello to manage individual tasks, and implemented GitFlow for our commits. Every morning during the wek we had to work on it, we first stopped to discuss the goals for the day and get a feeling for how close we were to MVP, silver, and gold level goals.

{:.section-header .container}
#### The Design

The front-end was built with React and Semantic UI. we decided to us the standard Semantic theme to save time on design since there were a lot of small components that needed to be built.

{:.section-header .container}
#### The Code

###### The Frontend
We used react to built out the site, and have several pages, each with a dedicated purpose. We employed the react router to navigate around the pages. We also has several components with props and state management built in.

###### The Backend
We built an Express backend that served two functions. First, it acted as the proxy for our MongoDB database. The frontend would hit an endpoint and retrieve data to consume. Second, we designed a seeding function that queried the Foursquare database and populated our database with some dummy data. 

