---
title: Ghost publisher for Obsidian
date: 2023-03-30
---

I always had trouble finding time or content for a blog post. But in reality, my main blockers were:
- What should I write about? Yeh, I know. I'm reading a lot, and I'm interested in many areas of cyber security, DevOps, Go development, and software development in general.
- I'm still not satisfied with my language skills. Is what I'm trying to say correct?
- Am I blocked by a contract saying that what you are trying to say is confidential? And also it's a secret business know-how. But my notes about tools, techniques, and books are almost available for free, or with a personal subscription.

Maybe I need to change how I'm learning. So in the last couple of months, I have implemented a workflow that allows me to focus on collecting and sorting my knowledge base. And this blog post is a result of this effort.

## The beginnings

After leaving BitNinja, I thought I had time to prepare and learn for my OSCP exam. I still own the materials from my previous attempts, but I need to practice how to effectively pentest an infrastructure against vulnerabilities. But I only want to spend money once I feel prepared. This is why I joined [hackthebox](https://www.hackthebox.com). Here I found a lot of boxes that I could practice on. And it's much cheaper than setting up my own VMs. I was a fan of [Sliim/pentest-env](https://github.com/Sliim/pentest-env) and tried to introduce something similar to our guys where they could practice with the agent and improve its defensive and detective capabilities. But it's a pain to update the ruby gems and fix some of the issues with the setup. After all, the last commit was in 2019.

But where should I start? Hum, maybe the retired boxes that have walkthroughs? I've worked with nmap, and I can look up exploits on exploit-db, but how to document the process professionally was a mystery. This is how I found [IppSec's](https://www.youtube.com/@ippsec) youtube channel, where he shows how these boxes can be pwned. 

In one of his videos, he showed how he collects evidence and information about a VM. This is how I found [Obsidian](https://obsidian.md), an advanced note-taking app that uses simple [markdown](https://www.markdownguide.org). 

When I subscribed to [PEN-200 Labs](https://help.offensive-security.com/hc/en-us/articles/360050473812-PEN-200-Labs-Learning-Path), the suggested note-taking app was [KeepNote](http://keepnote.org) (Their SSL certificate expired. Not a good sign.), but I wasn't able to start it, not on my Windows laptop, nor in my Kali VM. Maybe they fixed it in the meantime, but I had to find an alternative solution.  

The alternative I found was [cherrytree](https://www.giuspen.net/cherrytree/), but storing notes in a local SQLite database was not so good UX. For example, how would you pipe the result of a long-running nmap scan to it?

But what about Obsidian? I could create a folder, and in it, I could create a subfolder, like scan results. 

```bash
nmap -sT 10.0.0.5 >> companyX/scan_results/nmap.md
```

What a relief! Now I can write some scripts to automate some of these manual steps, and the results will be available in my note vault.

## Redteam

While I tried hacking boxes and taking notes, I had to realize I'm not really interested in doing penetration testing as a living. While I have fun finding flaws in applications and figuring out how I could implement a mitigation strategy against them. The only reason I was doing labs was to prepare for an exam about hacking applications to prove I have experience in cyber security. But it will not bring me closer to my passion. Making the internet a safer place. But my note-taking journey began.

## How can I use Obsidian to improve my workflow?

Obviously, Obsidian has a lot of plugins. Taking notes is almost copy paste. And I can use markdown or [Wikilinks](https://help.obsidian.md/Linking+notes+and+files/Internal+links#Supported+formats+for+internal+links) in my notes to reference other notes. Now I need to collect, organize and somehow publish my thoughts.

For collecting notes, I found [Readwise reader](https://readwise.io/read). With it, I can highlight almost anything I find online. And it can be synced to my vault with the official [obsidian-readwise](https://github.com/readwiseio/obsidian-readwise) plugin.

The [P.A.R.A method](https://fortelabs.com/blog/para/) was a fantastic change to organize my notes. Structuring my digital assets into projects, areas, resources, and archives was a significant achievement after using tmp, tmp_tmp, and so on to try experimental apps or projects. I'm still working on it.

Sharing and publishing my notes is a more difficult decision. Where and how should I post anything? What is the niche? What technology should I use? I know a lot. But what is the easiest way? Maybe a simple static blog could work for me. Like [ghost](https://ghost.org), maybe? But can I write my notes and push a button to publish it achievable? The answer to this question is this blog post. I used the [obsidian-ghost-publish](https://github.com/jaynguyens/obsidian-ghost-publish) plugin to do so. But I will probably need to find a more suitable way.

And what about my content? I still misspell a lot of words. My Hungarian mind is still overthinking a lot of sentences, which can be achieved with just a few words. This is where [Grammarly](https://www.grammarly.com) comes in place and solves many of my issues.