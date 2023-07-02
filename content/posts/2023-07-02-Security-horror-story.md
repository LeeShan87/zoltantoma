---
date: 2023-07-02
title: A Security horror story
tags: [security, youtube, bitninja]
---

{{< youtube BLOCi8j5tAo >}}

## Intro

My new teammates asked me if I had any juice security horror stories. This was a very memorable one. In the video above I tried to tell it in a standup-like fashion because if I write a script for it I would not publish it to day.

## Story

Imagine you use a website daily. Like sharing cat images, getting information about the local news, or buying your daily grocery needs from a webshop. And suddenly, the site is not loading.

This was the beginning of one of my favorite stories when I was working with [BitNinja](https://bitninja.com). We had a call or a support ticket saying: BitNinja sucks.

"We had many other security solutions but haven't experienced site downs. But now, every time we try to run the Agent, this site will not load."

I've checked the server remotely, and it responded. So the service is running. The sites are loading. So I was... nah... this is not true. The Agent will not bring a site down.

But they persisted. The site will not load. So I checked. They used the minimal functionality of the Agent. They did not enable the [WAF](https://doc.bitninja.io/docs/Modules/waf2), the [malware detection](https://doc.bitninja.io/docs/Modules/malware-detection), or any other advanced detection or prevention functionalities of the Agent. They only had the [IP reputation](https://doc.bitninja.io/docs/IP%20filter/ip_reputation). At that time, we protected thousands of servers and haven't faced issues like this with the IP reputation module. There must be something other behind it. I've asked if I could have a look at the site. Maybe I could figure out the root cause.

When I got access and had a look at the site's PHP scripts, I was shocked. The site was infected. Heavily infected. And this was the reason why the site wasn't able to load.

## Root cause

You know, the BitNinja Agent, when blocking an IP, will not just block incoming connections. It will also prevent outgoing connections to malicious IP addresses. And those malwares tried to leak visitor information to a blocked IP address.

An example of the information available on the server side, when you visit a website, can be demonstrated with this PHP code snippet:

```php
<?php
var_dump($_SERVER);
var_dump($_REQUEST);
var_dump($_ENV);
var_dump($_COOKIE);
var_dump($GLOBALS);
```

It is shocking to see how much info is available just by visiting a site. But let's go a bit further. The shortest PHP malware/backdoor is:

```
<? eval($_POST['a']);
```

With it, I can do anything on the server side with the same user privileges as the owner of the site. This signature is in most of the malware detection solutions out there. But if I change even a character, it will become a different signature like:

```
<? eval($_POST['b']);
```

or

```
<? eval($_POST['a'.'b']);
```

or I could use a bunch of other obfuscation techniques to change the code or even a code generator to create a completely random one. We can find these kinds of generators in Kali, and it is free to use for anyone.

These are very easily detectable signatures, even for the bare eye. And I wasn't the first one debugging the site. So why weren't the system administrators able to find them?

## The simplest script hiding ever

A Linus terminal window is typically 80x24 characters. On a Linux server, you are typically going to use Vim, Nano, or some other similar text-based editors to open a script file. If I just add a bunch of whitespaces before the malware, you may not even notice it present when you open up a file.

## Solution

I wrote a simple script that was able to find these malwares and clean them up. The result was more than 20 000 malware on a single WordPress website. And after the cleanup, the site was able to load correctly.

## Closing Thoughts

If you find this story terrifying, you may want to search on blind XSS. Or even the story about the Google Pixel lock screen bypass.

If you speak Hungarian, I include links to Szabolcs Csermák's youtube channel, who made a video of them.  
Egy hacker naplója: https://www.youtube.com/@Egyhackernaploja  
Blind XSS : https://youtu.be/_M_zCLxuPLo  
70 000 USD, véletlenül: https://youtu.be/05hylEHxocY

Dávid Schütz blog post about his bug bounty:  
https://bugs.xdavidhu.me/google/2022/11/10/accidental-70k-google-pixel-lock-screen-bypass/

I value Your work, Szabolcs, and I often reference it when someone asks me about security.

And I also want to thank the BitNinja team for the time we worked together. We really made a difference and made the internet a bit safer place together. ^^
