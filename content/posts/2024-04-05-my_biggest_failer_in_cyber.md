---
title: My biggest failer in cyber security
date: 2024-04-05
description: "The story of my greatest challenges and learnings in cybersecurity."
tags:
  [
    MentalInCyber,
    Cybersecurity,
    CyberAwareness,
    PersonalJourney,
    SecretManagement,
  ]
---

I recently received a reminder from a service I use that my next annual subscription installment is due soon. (Of course, when I first wrote this thought and when it was published are completely different questions.) This reminded me of my biggest failure in cybersecurity, which I had to endure.

Throughout my career, I have faced numerous difficulties and failures, but I managed to overcome them. For example, when I wrote a web application firewall rule, instead of the expected mass catches, we only had one-off catches. Or when the software I wrote caused a kernel panic. Of course, it wasn't my fault. On a certain version of a certain operating system, if a certain application was installed and a certain request was sent..., then indeed, the system would crash, and it affected more than 200 servers. (These stories are also worth telling. :))

So, what do I consider such a failure? And why do I still try to use it as inspiration for my career and personal goals?

![](/images/2024-04-05-my_biggest_failer_in_cyber/cyber_route.png)

## The Service

I won't keep you in suspense any longer. The service I received a reminder about is related to my current password manager subscription. (I'll talk about them in a later post.) My first year had expired. It never crossed my mind not to renew my subscription, but this year has been filled with disappointments in terms of password management.

I can't even count how many years I've been using password managers, and I couldn't imagine my life without one. I've tried so many services, some to evaluate the competition and others to bring potential new solutions into the current company or project I was working on. And if I had used "admin123" everywhere... I would be in serious trouble now. :D

Especially since you wouldn't believe how many website owners or operators have no clue that their sites have been hacked. I try not to be too technical, as I want... or rather, I hope that my content will be followed by those for whom information security has an entirely new charm. But I can reveal that the websites you visit do not store your passwords but somehow transform them... this is called hashing. Assuming the site developer is aware that passwords should not be stored unencrypted.

## Lack of Technical Security Knowledge

Unfortunately, this is **nooooooot** the case. Speaking from experience, I have had access to website providers' content. (Not anymore, so please don't try to access them through me :D). And sometimes, I was horrified to see that the passwords were stored in plain text behind the login logic in the website's source code. After seeing this, I was not surprised that they quickly contacted us to help figure out what was wrong with their service.

- _Should we give you access to our system?_
- _(Small smile) Thanks, but no need. Your password is: **dash space dash dash one equals one**._

Of course, they didn't get the sarcastic joke. This was intentionally not a complete SQL Injection, but you can imagine it like this: There are websites where if I enter such an expression, I immediately get the entire database, including the unencrypted passwords. How many places do you use the same password? How do you know the website developer maintains security?

## Technology is Not the Problem

Of course... I know... this might be offensive to developers. I don't want to hurt them. I, too, enjoy writing code, and sometimes, when I look back at my old codes, I shiver a bit. But everyone has to start somewhere. And why not with the development of a website or web service? After all, it's trendy. And talking about trendy... did you know that 73% of websites are written in PHP? Don't believe me? Check out the [Wappalyzer](https://www.wappalyzer.com/technologies/programming-languages/) website.

And guess who else can develop in PHP? Just about every self-respecting hacker. So it's not hard for them to insert a line somewhere in the code that, without the website operator's knowledge, leaks our passwords... no matter how much the developers try to ensure the code they release is secure. And now I hear the argument in my head that I hear almost every time I mention PHP.

- _Ha! PHP should not be used for web development!_
- If I look at your code, which is apparently not in PHP, how are you so sure I won't find the exact same errors you criticize this language for?
- _..._

Exactly... The problem is technology-independent. Thus, this problem should not be solved on the website side. Still want to use the same password everywhere?

## Why Is This My Problem?

Now, you might be thinking...

- _Okay, but why would that be my problem? They got my login to 'catfriendly dot com'. So what?_
- What was your username on that site? Wasn't it your email address? What is the password for your email address?

How many places require an email address to register? Have you ever considered this? This, my friends, is marketing. Why ask for your email if you're already using the service in this way?

But did you know that usernames are not usually encrypted server-side? So, if someone manages to get your login data somehow, they already know your email address and then can guess your password, too?

- _Nothing important comes to my email. It's not worth much._
- Maybe you don't use it for anything important now. But what would you say if someone registered on a Porn site using your email address, then posted it on your Facebook publicly and sent it to your acquaintances?

That's why please use a **different password** at least **for your email**. You might have multiple email addresses; it wouldn't hurt if each had a different password.
(It deeply saddens me that I can't even convey this basic thought to many people. :( )

**Still want to use the same password everywhere?**

## What Password Should I Use?

- _So what can be done to keep my things safe?_

I hope this thought has formed in your mind. And not that I've read too much about this already... But we still haven't gotten to what your biggest failure is. So, let's have a little spoiler. It's related to the password manager. This service I subscribed to. And I have a family package.

![](/images/2024-04-05-my_biggest_failer_in_cyber/password_strenght.png)

I've had to talk about this more than once before. I even had to draft corporate policy recommendations about it... Most of them are nonsense. **The essence of a password is that it be long.** How long? You might ask. How many characters can you type into the field? It sounds like a joke, but it's not. Now I could say it should be at least 8 characters, or 20, 40, etc. But this is an entirely unnecessary metric.

The longer a password, the longer it takes to crack. Sorry, I'm going to bore you a bit now, but you might find the following part useful.

## Password Strength Online

If someone tries to log in to a site online... hopefully, this will be visible to the operators. And they can ban the attacker in time. But most often, this is not the case. It's disappointing that companies that may spend millions on security technologies don't do as much for their security as to monitor these events. If I can, the first thing I do is check the server logs and see that nothing is being done against it.

The total random combination of lowercase letters and numbers 8 characters long represents 2,821,109,907,456 variations. That's a heck of a lot of requests to a server... Unless our password is "admin123" :D or some similarly easily guessable password... or they already have our login details from somewhere else. The longer and more complex our password, the more requests have to be sent to the website. But if this event is not monitored, it's only a matter of time before an attacker finds the right login. But the speed of the internet is limited. And a server can only process a certain number of requests.

That's why I recommend companies to monitor events on their servers. Use [CrowdSec](https://www.crowdsec.net), [BitNinja](https://bitninja.com), Im... (I still can't write it down), but at least a [Fail2Ban](https://github.com/fail2ban/fail2ban). Don't rely on your "Cloud" provider's security solutions. After all, these are all completely valid requests. And you know marketing? _You pay for what you use._ Why would they prevent these attacks if **they're actually using resources**? (With respect to the exceptions... though I haven't seen many.)

## Password Strength Locally

What if the attacker manages to download the password hashes? Or perhaps accessed a file protected by a password? This is an entirely different question. What do we call local? In this case, I would phrase that the attacker has access to the password database or a file to be cracked. Then, at home or on a rented server, they can quietly crack the passwords. The online available password strength calculations consider this possibility. (Or maybe 1000 requests per second, but this is just a wild guess also.) With this computational power, it takes this much time to figure out a password of this length.

But the statement here is also true. The longer a password, the longer it takes to crack. But for this, our password should not be "adminadminadminadmin". Because that's 4x admin. **There's no twist in it**.

Note: Never, ever use an online password strength calculator. At least not to test your actual password. How do you know it's actually a trustworthy site? And not just created by someone collecting passwords? Do you want someone to post Porn on your Facebook to your acquaintances?

## Why We Still Use Short Passwords

When I talk about long passwords, of course, this is the first thought... I can't remember such long passwords. Isn't there a better solution? Of course, there is. And here is where password management connects to the #MentalInCyber topic.

The human brain wasn't designed to memorize random gibberish. The longer something is, the harder it is to remember. I often mention this: The Rule of Seven. We can only remember 7 elements of a given thing. (I know, everyone's a genius except me, so others remember more. :D) I will write more about this later.

What if we don't have to remember random letters and numbers, but a passphrase? Thus, we only need to remember 4-7 words. If you're interested in this concept, visit https://www.useapassphrase.com. They have a similar opinion to mine.

A quote from the site:

_"Because humans are terrible at creating secure passwords. The [famous xkcd comic](http://xkcd.com/936/) got it right: humans have been trained to use **hard-to-remember** passwords that are **easy** for computers to guess."_

![http://xkcd.com/936/](https://imgs.xkcd.com/comics/password_strength.png)

> Source: xkcd comic

(Before you click:))

The cartoon excellently indicates the problem. Why would it be so hard to come up with and use long passwords?

## The Elephant in the Room

Have you ever heard of entropy? Essentially, how chaotic something is. The more possibilities there are in something, and the more there are, the more variations are possible. In the case of passwords:

|                                                                                                                                               |                                                |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------: |
| Using the lowercase letters of the English alphabet, that's 26 characters. If we repeat this 8 times, it's 26x26x26x26 x26x26x26x26, which is |                                208,827,064,576 |
| If we add uppercase letters to that, then it becomes 52 raised to the eighth power, which is                                                  |                             53,459,728,531,456 |
| If we add special characters to that, say an additional 32, then 84 raised to the eighth power, which is                                      |                          2,478,758,911,082,496 |
| If we consider an average person's vocabulary to be about 10,000-30,000 words. From this, 4 words that we can easily remember gives us        | 10,000,000,000,000,000-120,000,000,000,000,000 |

So, even a random 8 character password is almost as strong as a passphrase. What? Do you think hackers don't know about this passphrase formation? The [Kali Linux](https://www.kali.org) comes with a lot of dictionary libraries by default, and it's just a few lines of code to write that puts random words together. So, is a passphrase safer?

No matter how good this solution sounds, we can't use it most places. Why? You ask. Information security spent years strengthening the use of strong passwords. There's hardly any website or application that allows you to use a password that doesn't have lowercase and uppercase letters, numbers, and special characters (...and the blood of a virgin girl.) So, we are forced to use this method.

I hope this part shows how difficult it is to come up with even one adequately long and "secure" password. And an even bigger challenge is to remember it. Unfortunately, I haven't been able to convey this thought, not to companies, teams, or even my immediate acquaintances and family.

## How Would I Get Your Password?

I've delved into technicalities again... Although I hope you've learned a lot from what I've written. But I haven't yet answered a question that many security experts can't answer.

- _"How would you get my password?"_
- I'd ask for it.

You didn't expect that, did you? :D But it's true. The simplest thing we can do, it work against anyone and we could use any tool against it... But we just need to ask. And we almost always get an answer. This is called Social Engineering. A friendly message, say on Facebook. An email asking you to check why your order didn't go through or an SMS indicating your package is delayed. Only imagination limits the stories that can convince someone to hand over their carefully used and painstakingly created login password.

![](/images/2024-04-05-my_biggest_failer_in_cyber/social_engineering.png)

So we can talk for hours about cryptographically strong passwords if the attacker doesn't have to guess at all. The question is not whether our password leaks and takes a long time to crack, but when this happens. And if it does happen, what else can the attacker access? This is called minimizing the blast zone. _Still want to use just one password?_

## How Did I Form My Passwords?

I also had to go through this secure web usage path. Of course, there was a time when I used just one password, but when I realized my older email address was the victim of a data leak, I quickly realized that this wasn't enough. If you want, you can check it out at https://haveibeenpwned.com.

So, I spent a tough time coming up with a new password, but I knew that wouldn't be enough. I looked into several strong password suggestion solutions and, of course, didn't remember any of my passwords. So I changed my thinking. Why remember my passwords if I'm not going to remember them anyway? Instead, I should remember how I form passwords.

I came up with a strong 8-character password. Over the years, of course, this has changed a few times. I memorized this. Remember the passphrases? We can't use them... Imagine if the first or one of the components of your passphrase is actually a strong password. Now it's usable. :) I suggest it be the first component of the passphrase since, unfortunately, there are still websites where the maximum password size is 8 characters... If you can, avoid such sites.

One of the components of my passphrase refers to the particular site. Have you heard of the Rorschach test? When they show you a picture of a blob and the first thing that comes to your mind about it you have to say. This is a technique similar with sites for me. Let's say for email: here, associations could be like contact, mail, private, business, etc. But we can use some memorable hashing methods. E.G.: G00gL3. (Of course, I don't use any of these :))

**Never write down your passwords anywhere.** If it's not the correct login interface and you start typing or writing your password's first letter, remember. **Never write down passwords!**

This can be continued as long as we can remember it. If you can remember two or more passwords, they can also be parts of the passphrase. And if the site's association is reliably the same, that can be multiple too.

This way, I had a unique password for every site. I could use them everywhere, and they were sufficiently secure.

Unfortunately, when I tell someone this method, they still don't apply it, although it's effective. This is also a reason why our password management culture is so disappointing. But I hope this tip will be useful to you. If so, share this tip or leave a comment, or like the content. You know the stuff. :)

## What Do I Use Now?

![](/images/2024-04-05-my_biggest_failer_in_cyber/pass_manager.png)

As I mentioned, I use a password manager. One reason is, what if the password formed by the new method leaks? Yes, they can only access one website or service, but they might figure out our password formation method. People think in patterns, so what's memorable for us is guessable for others. The solution is relatively simple. It's enough to create a new passphrase, and the rest can stay the same. Or we might come up with a similar yet different password formation.

However, it's worth changing our passwords everywhere at this point because now we have to remember where and what method we use. If we only use a few sites, this doesn't take long, but what if we use more than 7 sites? (Remember... those you visited years ago or only needed to log in to once.) This can be long and tiring. That's why I switched to a password manager. Through it, I only need to remember one password, the one to log into my password manager. The password manager can generate a completely random password 24+ characters long, fill it in the appropriate places, and much more.

What happens if such a password leaks? I generate a new one and forget it ever happened. I don't need to spend mental energy coming up with complex passwords. Remember where and what I use. I don't need to write them down anywhere to remember. In fact, I don't even know what they are. I only remember how to log into my password vault.

And believe me... there was a time when I traveled, and I couldn't even log into my password manager vault myself. Because I forgot to bring my hardware security key. You didn't think I'd protect my valuables with just one password, did you? :D (One of the best investments of my life was buying a bunch of [YubiKeys](https://geni.us/irA8b) from Amazon.) Is there anything safer? (Yes :))

## Why This Is My Biggest Failure

As I approach the end of my writing, you might rightfully wonder why this is my biggest cybersecurity failure. As you can see, I've invested a lot of energy, research, and even money into my current "protection". I still wouldn't consider it sufficient. There are many other measures I would like to introduce into my repertoire.

However, when I interact with a company, not only do I not see more serious measures, but I can't even apply my own more severe measures I've tested. _Change your password every 3 months; it can't be one of your last 5 passwords..._ and you can't use a password manager to store them. Hardware security keys, biometric identification... out of the question. Company passwords are accessible to anyone on a Shared Point, Confluence, or maybe on another type of site, which anyone can access. (Hopefully, just within the company.) Of course, none of these have been changed for years. And their complexity barely exceeds the "admin123" level, _just so colleagues can remember them._ Customer access data is shared via company chat, on public channels. And when I think about the fact that they actually spend money on "cyber security", I rightfully wonder... Why is there no sign of it? And why am I being condemned to follow bad habits? Why anyone needs to suffer?

It's no use lamenting over this. Maybe I will be able to help them sometime. The point is, I've done what I could for myself, my growing business (By the way, feel free to contact me on [LinkedIn](https://www.linkedin.com/in/toma-zoltan/) and other platforms if you want to know more :)), and my family... none of whom use any of the ideas I described above, let alone the password manager. Which I subscribed to, would be free for them to use, and would make their lives much simpler and safer.

This is my biggest failure. The fact that I couldn't convey this security awareness to my own loved ones, let alone companies and colleagues. And the thought that they needed these measures in the first place. But that will be the topic of another post. :)

## Closing Thoughts

I'm slowly starting to circle the thought that two worlds exist: the physical and the digital world. And the digital world operates under different rules than the physical world. One of the basic laws is that we have more "personalities" in the digital world than the human brain can handle.

It may not seem so for now, but password, or rather, secret management, is an essential part of Observability. As a reminder, the diagram:

![](/images/2024-04-05-my_biggest_failer_in_cyber/obs_in_nut.png)

> You can read it on medium: https://medium.com/@zoltantoma/observability-in-a-nutshell-752305256a1e.

Passwords are meant to identify the connection that is established between two nodes. Is there a safer and more reliable way to establish and identify a connection? Yes... there are many alternatives that don't require mental energy and are safer. Why don't we use them anyway?

**PS**: Now, if you want, you can find me on Patreon: [Curious Minds Collective](https://www.patreon.com/CuriousMindsCollective). (I'll figure out something worth your support shortly. :))
