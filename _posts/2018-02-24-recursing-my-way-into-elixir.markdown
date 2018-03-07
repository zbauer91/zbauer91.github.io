---
layout: post
title:  "Recursing My Way into Elixir"
subtitle: "How I learned to stop worrying and love permanent state"
date:   2018-02-24 17:00:00 -0500
categories: learning new_language elixir 
img: https://avatars0.githubusercontent.com/u/1481354?s=400&v=4
---

Today I learned [elixir](https://github.com/elixir-lang/elixir) and got my first true taste of a functional programming language!

<span class="page-img container">![elixir]({{page.img}})</span>

{:.section-header .container .h3}
#### Backstory

A few days ago I received a call from a recruiter looking to fill a position for a junior web developer that knew a little bit of Elixir, Elm, and Phoenix. They were willing to put all candidates through a 2.5 hour training course on Udemy to get them up to speed if they didn't already know some.

I obliged, and off I went to learn my first truly functional language

{:.section-header .container .h3}
#### First Impressions
Let me start by saying that before today, i'd never heard of Erlang, but wow am I glad Elixir is an option. I took one glance at Erlang and thanked whatever syntactic-sugar-spirit guided Matz for guiding the creators of Elixir

* Tail-optimized recursion is the bomb. I used it a little bit at Pitt, but I didn't know how running function calls in this manner helps reduce call-stack bloat as more calls are made. They're all the same size!
* I also think it's cool how the goal of the language is to prevent any set variable from being changed. Ever. Each new recursive call on a function generates a new variable in memory, so you can always go back in time and troubleshoot if necessary

{:.section-header .container .h3}
#### Takeaway
* Functional programming is fun and super useful for when you absolutely cannot have side effects. I'll be exploring this language further and seeing if I can use it to build anything cool!
