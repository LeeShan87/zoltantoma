---
Title: Common email issues
date: 2023-05-04
tags: [Ops, troubleshooting]
draft: false
---
![](/images/email-dns/20230504_101403.jpeg)

Recently, I had to help a friend with email problems. So I thought I should write a little blog post about the thought process of how I solved it in the first place.

So you have a small business, and suddenly something changed, and something is fishy when it comes to emails. In my experience, most of the time, the following cases need to be checked:

1. Emails do not arrive at their destination
2. Emails did not land in our inbox
3. IP is blocked by a security solution

## Emails do not arrive at their destination

Email is an old textual protocol. In the early email-sending time, there where no encryption or validation supporting it. I can still send an email from the command line if I want and say anything about my identity. (Side note spammers often use this technique for sending ransom/blackmail emails.)

For better identification, you want to prove your Domain Control. Basically, it means you need to add additional information to your DNS settings. Like [SPF](https://www.rfc-editor.org/rfc/rfc7208) record or [DMARC](https://datatracker.ietf.org/doc/html/rfc7489).  If you fail to provide this information, there is a high chance that your emails land in the spam folder. Or not arrive at all. If you are lucky, you may find a bounce-back email in your inbox explaining the mail delivery issue. The [SMTP Reply codes](https://www.rfc-editor.org/rfc/rfc5321#section-4.2) may help you further understand the issue.

On freshly moved email services, this is the first place I look. 
- Is the domain's SPF and DMARC records set, and is it correct? 

## Emails did not land in our inbox

On freshly moved email service, I often faced with this issue. Emails or replies do not arrive. In the first run, you may want to check the email address with an external solution like: https://email-checker.net

Most of the time to root cause is:
- Where is the Name Server? (Not always, the one where you set the DNS settings.)
- Is the domain's MX records set?
- Is the email service is on the same server, or an A record is pointing to the correct server address?

## It is almost always DNS

![](/images/email-dns/dns_haiku.png)

Source: [reddit](https://www.reddit.com/r/sysadmin/comments/4oj7pv/network_solutions_haiku/)

Every domain registrar has a bit different view of how they present DNS settings. This is why I find it more efficient to use Linux command line to figure out DNS issues.

My personal favorite is the ```host``` command.

The common commands I use:

### Where is the Name server

```
host -t ns <targerdomain>
```

More often than you think, clients or admins have no clue about where are their name servers. And they may change settings on a service provider, where there is no effect.

### What is the IP address of a domain 

```
host -t a <targetdomain>
```

I stopped counting how many times I got access to the wrong server. You may want to verify it manually.

### Check the mail server records (MX)

```
host -t mx <targetdomain>
```

Often these records are not set. And if they are set, you may want to check every response entry to see if they have an associated IP address to them as well.

### Check SPF and DMARC records

```
host -t txt <targetdomain>
```

Providers tend to add special web form fields for these records. But they are actually TXT DNS entries.

## IP is blocked by a security solution

This is the most annoying issue. We bought a new workspace for our business site; the subscription contains ftp access and email services, and all the fancy stuff a site needs to be successful. And suddenly, our emails did not arrive. So what has changed since the last month or so?

My forehand advice is don't rely on a service provider with one IP address.

### Shared Hosting

Many times when a client had similar issues, I had to realize; they were using a shared hosting service, who were using software like CPanel, Plesk, DirectAdmin, and so on. The problem with many of the service providers is that they serve hundreds of websites, and they only have one IP address for sending emails. On services like this, it is very likely to have sites with vulnerabilities, and spammers can do their jobs without any notice. Well, at least on the server side. Gmail and many bigger companies have sophisticated spam filtering solutions which will detect and share spammer IP addresses.

Most of the time, you don't need to handle this; your provider's responsibility to make the service available. And this is the annoying part; figuring out which blacklist provider blocked my IP address?  For this [MXToolbox](https://mxtoolbox.com/blacklists.aspx) can be a real help

For demonstration purpose, I searched a spammer IP on [IBM X-Force Exchange](https://exchange.xforce.ibmcloud.com/statshistory/spam)

![](/images/email-dns/20230509132806.png)

If you know which list provider caught your IP, then you can start begging for a delisting. In 3-30 days, your IP may get off the list. 

### Your Mail Transfer Agent is on a Blacklist

It is a good known fact that sending emails is not point-to-point communication. When you send an email, there are multiple servers participating in the delivery. They are called MTA or Mail Transfer Agents. And in some cases, one of the MTA servers can be on a blacklist, and it does not belong to you or your destination service provider. 

Now you may want to figure out which MTA server's IP address got blocked and try to reach out to that service provider for assistance.

When you send an email, every MTA adds their address to the email headers, and they can provide additional details as well. You can check and analyze headers if you want. I'll show you an example in Gmail.

1. Open a random email 
2. Click on the three dots
3. Click on Show original

![](/images/email-dns/20230509134921.png)

This will show something similar:

![](/images/email-dns/20230509135218.png)

If you copy the text to the first blank line, you get the headers, and you may analyze it on MXToolbox's  [Email Header Analyzer](https://mxtoolbox.com/EmailHeaders.aspx) and see where the issue is.

![](/images/email-dns/20230509135640.png)

