---
title: Observability in a nutshell
date: 2024-03-30
tags:
  [
    MentalInCyber,
    Observability,
    BusinessDevelopment,
    SystemThinking,
    TechnologyExplained,
  ]
description: "Uncover the essence of Observability and its impact beyond IT. A fresh perspective on seeing the digital world."
---

After I presented an internal training session about proxy chains and how we could solve the issue when bad actors visit our sites through trusted sources, I received a feedback note:

_"It's unbelievable how quickly you become an expert in anything you delve into. You should give a lecture on this sometime."_

Now, I try to reveal my secret. I love to see the world as Lego boxes. :) We have never invented anything new, but we have found many clever ways to use it. When it comes to the digital world, we like to come up with new and catchy things. This is partly because we genuinely created something new in concept and partly because it's a bit of marketing. Do you know the saying? If you want to be successful, be the first! And how else could you be the first, if not by inventing a new category or perhaps a concept... or even a new abbreviation?

![](/images/2024-03-30-observability-in-a-nutshell/obs_cover_image.png)

In this blog post, I would like to write about Observability. I know... this is, again, an IT concept that only system administrators or security experts tend to throw around. But stay with me because what I want to say might change the way you see things. It can bring a different light to how you see the digital world. You might realize what I came to realize a while ago: that security is not an extra cost that can be postponed but the driving force that can make you successful in our changed world today.

By the way, I will mention this concept a lot in relation to mental health, digital security, social networking, and business development, so it might not hurt to get to know the basis of my thinking. :) If you're not interested in more, here is the final diagram, but feel free to read on if you want to understand it.

![](/images/2024-03-30-observability-in-a-nutshell/obs_in_nutshell.png)

## Why am I talking about this? Who am I?

Don't worry... I also hate the 20-minute introductions we usually see at the beginning of presentations. But if you've previously developed a security software that protected thousands of servers and millions of websites on them, maybe what I say has a bit of relevance.

Just a thought for the professional skeptics. How do you create a one-click installable, locally running, fully transparent proxy for both client and server that establishes a web application firewall through ModSecurity, almost regardless of the website it's in front of, and is capable of protecting content hidden by CloudFlare, or other CDN providers without disturbing the visitors' experience and the server's operation, but still finds and blocks attacks?

I created one... although the company is not mine (but I hope our friendship has remained since then). The solution was in the mode of thinking, and the essence is Observability.

## What is Observability (According to others)?

Every tool, company, training, etc, has its own definition. I will bore you with a few examples... But bear with me.... or skip to the next point :)

“Observability is the ability to provide insights, automated analytics, and actionable intelligence through the application of cross-domain data correlation, machine learning (ML), and AIOps across massive real-time and historical metrics, logs, and trace data.”

Source: [https://www.solarwinds.com/resources/it-glossary/observability](https://www.solarwinds.com/resources/it-glossary/observability)

“Observability is a management strategy focused on keeping the most relevant, important and core issues at or near the top of an operations process flow. The term is also used to describe software processes that facilitate the separation of critical information from routine information. It can also refer to the extraction and processing of critical information at the highest-level architecture of operations systems.”

Source: [https://www.techtarget.com/searchitoperations/definition/observability](https://www.techtarget.com/searchitoperations/definition/observability)

‘Observability is the ability to measure the internal states of a system by examining its outputs. A system is considered “observable” if the current state can be estimated by only using information from outputs, namely sensor data.’

Source: [https://www.splunk.com/en_us/data-insider/what-is-observability.html](https://www.splunk.com/en_us/data-insider/what-is-observability.html)

(I do not judge any tool or company. I admire everyone who does something to make our lives safer.)

## What is Observability (In my opinion)?

My approach is different, and It does not connect to concrete tools. I say, Observability is the most fundamental way we learn and react. It is more related to how humans learn, and the steps are the following:

1. We observe with our Sensory Input
2. Learn and recognize patterns
3. Store this information for later use
4. Create tags and assign them to objects
5. Iterate on the process

You have the sensory input like your eyes and ears. If you find my example valuable, then you may store the information in your memory. Now, I just need to show you the pattern to recognize and the required tags, and I will iterate on the concept to give you a different perspective.

The pattern of observability:

![](/images/2024-03-30-observability-in-a-nutshell/obs_pattern.png)

It's not so complicated, right? :) Three little boxes connected with lines. But this doesn't say much since it could be anything. That's exactly the point. (By the way, this mode of thinking is also the basis of [subtraction](https://geni.us/ABKEL) (Amazon).) What if we, just for fun, also added some labels to it?

![](/images/2024-03-30-observability-in-a-nutshell/obs_tags.png)

There, the foundation of the concept is ready. If you like, you can go now. Everything that's needed is there. Observable objects, the observer, and it's capable of generating meanings from it... But what if I showed you a few examples as well?

## Example Elements

Let's start with the observable objects. (I know... the first point meant to be trees)

![](/images/2024-03-30-observability-in-a-nutshell/observed_examples.png)

Yes, intentionally, I tried to include examples in the diagram that are not necessarily tied to IT. (By the way, if you're curious about how I created these drawings, visit [PlantUML](https://plantuml.com))

Now, let's speed up with the examples a bit. Observer examples:

![](/images/2024-03-30-observability-in-a-nutshell/observer_examples.png)

Report examples:

![](/images/2024-03-30-observability-in-a-nutshell/report_examples.png)

Reports are not helpful if we don’t store them somewhere for later use:

![](/images/2024-03-30-observability-in-a-nutshell/obs_with_datastore.png)

With our stored knowledge, we can assign tags to objects and recognize patterns in the input.

![](/images/2024-03-30-observability-in-a-nutshell/obs_pattern_and_tags.png)

If we simplify this example-filled diagram, we can see the image at the beginning of the blog post.

![](/images/2024-03-30-observability-in-a-nutshell/obs_in_nutshell.png)

You might not see it yet, but this model helped me understand the operation of countless tools in moments. It helped me understand the operation of some products and services. It explained human interactions. It aided in understanding my own mental and physical needs. And just because it's trendy... why and how the existence of AI can be justified in this system.

You know the saying, follow the money?

![](/images/2024-03-30-observability-in-a-nutshell/obs_follow_the_money.png)

I would rephrase it to follow the information. :)

In my definition, observability is a process that collects metrics about observed entities and creates a report about its findings. This is a very simplified way to build our knowledge base.

## Operations with Observability

For simplicity's sake, let's call the boxes nodes. The lines, then, are connections. The database is the knowledge base. And the whole thing is a knowledge system. Any node and connection can be replaced or developed arbitrarily. A system can have multiple nodes and connections. A node can even be a completely independent knowledge system. These are the Lego boxes. :)

You should be able to recognize another pattern.

![](/images/2024-03-30-observability-in-a-nutshell/obs_pipelining.png)

Software that collects metrics from a log can produce output as a log. This is the classical IT approach for observability. You can think about Fail2ban, ELK, CloudWatch, or whatever log collector you want.

What does this mean?

An observer's output can be an input for another observer, and we can chain observers together. This is called piping or pipelining.

What happens when the pipe breaks?

![](/images/2024-03-30-observability-in-a-nutshell/obs_trigger.png)

The result of a report can affect our next step. This is a trigger. When an event occurs, it can trigger an alert and motivate us to take action.

(BTW, have you ever heard about event-driven development? :)

Can we have multiple observers? This way, we can gather more information in parallel. Sure, why not?

![](/images/2024-03-30-observability-in-a-nutshell/obs_multiple.png)

This is scalability. Don't think about IT. IT is just a tool enabling you to know how to and when to scale in a probably more cost-effective way. We are just replacing the nodes or upgrading them to a more efficient one or we could just add more nodes.

I want you to remember one thing. In this example, multiple actors build a shared knowledge base. What if one of the actors misbehaves?

![](/images/2024-03-30-observability-in-a-nutshell/obs_access_controll.png)

We can assign tags to misbehaving observers and limit their access to the data store.

To remember this concept, think about your loan credibility. You will lose your credibility if you do not repay your loans on time. The lender may give you less money or raise your interest rate next time because they tagged you. (I hope I wrote this right; I’m not a native speaker.)

This is why tags play an essential role, not just as a method of categorizing information but also in tracing the source or limiting or controlling access to resources. Security :)

This is why security plays an essential role in observability. It defines how nodes interact with each other. You cannot create an information system without security. And everything is, in fact, an information system.

## What do you think?

This might seem a lot to take in at first, but this model has helped me understand the functionality of numerous "things" in moments. With this perspective on observability, we can start to see its application far beyond the confines of IT, influencing areas such as mental health, digital security, business development, and even social networking in profound ways.

Do you see how observability might impact your work or personal life? How could enhancing observability in your systems or projects provide new insights or efficiencies? I invite you to reflect on these questions and consider how the principles of observability can be applied in diverse areas of your life and work.

Your thoughts and feedback are invaluable as we explore this concept together. What parts of observability do you find most intriguing or useful? Are there areas in your life or work where you could implement these ideas to foster improvement or innovation?

Please share your thoughts, experiences, and any questions you might have in the comments below. Let's delve into the vast potential of observability together, learning and growing as we navigate the complexities of the digital and beyond.

So, if you're curious about who I am and what I do, feel free to contact me on [LinkedIn](https://www.linkedin.com/in/toma-zoltan/) or another platform. I'm always open to new connections and conversations. And if you're interested in learning more about observability or other topics, let me know. I'm here to help you explore new ideas and expand your horizons.
