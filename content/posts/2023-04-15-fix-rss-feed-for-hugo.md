---
title: Fix rss feed for Hugo
date: 2023-04-15
---

I've just moved my personal site from Ghost.io to a Hugo generated static site. It was a challenge that I would cover in more detail in the future. But now I want to test my workflow and a little mistake I made... again.

## Why a static site?

I use Markdown almost every day, and Hugo can generate a decent-looking site from it. Why should I build upon it?

## What was the issue?

When I moved my site to GitHub with Netlify I was wondering if my GitHub action, which reads RSS feeds from my blog still working. Well, obviously, it was not working because the feed URL changed, but after I updated the URL, the links were not correct.

## Story

I use [gautamkrishnar/blog-post-workflow](https://github.com/gautamkrishnar/blog-post-workflow) to update my GitHub profile readme. You can see it in action in my [blog-post.workflow.yml](https://github.com/LeeShan87/leeshan87/blob/master/.github/workflows/blog-post-workflow.yml).

It gives an expression that I am more active in creating content. Well, I thought I would create more blog posts and YouTube videos, but sometimes I don't have the time or the energy for that. This is why I'm trying to make this process effortless.

But the URLs on my readme were pointing to my GitHub repo instead of my actual site. 

- Is it an issue with my Hugo template? which is cactus by the way.
- Is my GH action out date?
- Something not right on Netlify?
- Or do I just forget about something?

And the winner is:

I've forgotten to update my [baseurl](https://github.com/LeeShan87/leeshan87/blob/master/.github/workflows/blog-post-workflow.yml) in the Hugo config. (Like every time...)
