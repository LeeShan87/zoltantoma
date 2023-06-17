---
date: 2023-06-16
title: Which language should I use
---

Hi all, curious minds!
And welcome to another episode about What I would like to see in an IT candidate.

---

I often receive this question from those who are new to IT and are trying to make a carrier in it. Which language should I use or learn?

This may sound rude, but I always answer like: English.

---

If you have some experience in IT, you may skip this video. But I hope I will still be able to give you some value.

---

So Why I'm saying this?

---

## Learning

The IT is huge. You will never be able to learn everything, and more importantly, you will never be able to keep your knowledge up-to-date. You will need to learn almost every day, and If you manage to be in a team, you will learn even more.
Unfortunately, no matter what project you are working on, you will not be able to reuse your knowledge 100% on a new project.

---

## Find up-to-date knowledge

The best IT advice I ever received from a professional was: Google is your friend. Any difficulties I ever had, there where a solution for it available online. I just had to google it.

I don't want to get into search engines, AI, or forums right now. It's a topic for the future.

---

The most recent and relevant information, tutorials, and best practices are all available online. But the fact is it is in English.

---

## Collaboration first code second

I really like [Eddie Jaoude's](https://www.youtube.com/c/eddiejaoude) words. Collaboration first, code second.

Eventually, every project will want to scale. You may want to find new customers or market or new college. And you will find yourself in a multinational project or company in no time.

You will need to communicate with others. With a team member, with the HR, with your boss. Even with customers sometimes. And if you are not able to understand their objectives, you will not going to like your job.

---

## Coding standards

Every project should implement a coding standard. You can use already working ones, like PRS in PHP or like Go standards. This will guide you on how to format the code to be more readable. But let's be honest. Developers don't know how to name things. I had multiple colleges when it came to naming a class or a function, or even a variable I had to read the whole pull request multiple times. Ask them what this change was supposed to do and eventually reject the PR because the naming was terrible.

---

So when It comes to choosing candidates, I would really like to see that they are capable of learning by themselves. They can understand and even make arguments about a topic. And If I read through the commit history, I could understand the reasoning behind the changes.

---

So the second question I receive after this little conversation is something like this:

- Ok, I get it English is important. But I really want to learn a programming language. Which one should I choose?

---

The thing is, you should not focus on a specific language. If you know the basics, you can learn the second third quite easily. As a matter of fact, I had an excellent professor at my university. He said:

- You need two weeks to learn a programming language.
- You need two months to learn a framework in a specific language.
- To learn every aspect and master a language, not even a lifetime will be enough.

And I had a similar experience.

---

You should be thinking in stacks. Every project will have a different stack of tools. For example, if you want to work on a web application. You may want to learn javascript and PHP or other tools capable of generating HTML.

---

But I would warn you at this point. This is a rabbit hole. And if you go deep down on this road, you will feel terrible and eventually lose every interest in this beautiful field of profession.

---

I would advise you to use the rule of seven. The rule of seven came from frontend or UI development. Basically, it says never to use more layers than 7. Never use more than 7 colors. Never use more than 7 depths in submenus. And so on. The reason behind this is an average person will not be able to remember more layers, and they will feel overwhelmed. This is also true for people working on a project.

---

So with this in mind. Every language you learn is going to be one layer. Every framework is another layer. Every supporting solution will be a plus one. You may try to learn more than 7 layers, but you will never be good at all of them. At some point, you will need to choose your seven layers on a project.

---

This is another thing I would like in a candidate. Humbleness. They understand their limits, and they are willing to work with others putting all the pieces together to solve a problem.

---

So the third question I receive after this little conversation; Can you guess it?

- Ok, I get it 7 stacks of tech are important. But I really want to learn a programming language. Which one should I choose? You still have not answered my question.

---

My answer is a question. What are you want to do? Where would you think you will be comfortable helping the others on the team?

Let's go back to the web development example.

---

Let's say, you're going to work on a website. Now it doesn't matter if it is a blog, a webshop, or a SaaS solution. Stay with me; this is going to hurt. I do not want to scare you, but this is the reality if you really want to learn.

The project could need:

- Some graphics. Photoshop
- It needs a design. It needs talent.
- It will need HTML.
- It will probably need some styling, so it is CSS.
- But you will not want to implement the wheel over again. You may need to learn Bootstrap or something similar.
- It may require some client-side features. So you may need Javascript.
- But good luck with raw Javascript. You may require to use JQuery.
- Other solutions. Angular, React, Vue. This counts 3.
- You may want to make it more easily findable. So you need SEO.

Now we are at level 12, and it is just a simple frontend project. And we did not even deploy it.

---

Speaking of deployment.

- You may need to decide where to upload your code. It could be a simple shared hosting service. Or an AWS S3 bucket. One needs to learn how the hosting provider works.
- One needs to upload it. You may choose to use FTP, or upload the code in a ZIP file. Or you may choose to skip this part and develop it on the server itself. Please, please never use any of these options if you have an alternative.
- If you do not want to have a headache, you will use a version control system. Like git, push every change you have into the repository and pull it somehow to the server.

I've just said 6 more techs you may need.

---

I was still talking about a static site. But most of the time, you want a dynamic solution. Which can alter the html code on the server side to store and recover information if needed. This is the backend part.

- PHP has many critics, but it is still the most used solution on the web. If you don't believe me check it out on [Wappalyzer](https://www.wappalyzer.com/technologies/programming-languages/). But you can choose almost any language to generate html code or to receive or respond to an HTTP request. You can use Java, DotNet, Python, Node, Go, or whatever. The only restriction is, is the language tools available on the server.
- You may need to use a database. Still, the most used databases are relation-based, like MySQL or PostgreSQL. So you need some understanding of SQL.
- Your project may also need to send regular notifications, for example, via email.

These are the most common scenarios I can think of right now.

---

Now we have a dynamic application out there. But the customers and the visitors are not satisfied. There are issues.

- We need an issue tracker, some kind of support solution.
- We try to solve the problem. And, like, we have 9 little bugs in the system. After the fix, we have 99 little bugs in the system. We haven't talked about writing tests. So you will need a testing solution, hopefully, an automatic one.
- But who will run the tests? Everyone, of course. Ehh, nope. People forget things if it is more complex than 7 steps. You will need a pipeline like code change comes in, and only deployable code can get through it.
- This code looks awful. How is it made to production? And automatic review process can format and check your code against team conventions. And it also can be a part of the pipeline.
- I need to make a change. But I don't understand this piece of beeed. who wrote it? Oh, I did. Six months ago. Documentation is a key part of a project if it wants to be successful.
- Oh, we got hacked. How had this happened? Some little advice from a security expert would have helped...

---

I've lost count of the layers, but now you may get it. The question of which programming language I should use doesn't matters if you want to get into a development team.

What matters is the stack you will need to work with. You do not need to be an expert in all of it. It is impossible. Development is a team play. I know a whole lot of many different stacks. But if someone approaches me like we need a full-stack developer or a DevOps, I am always tempted to ask back. What does DevOps or full-stack mean to you? Do you understand it is a label for teams, not for individuals?

---

This is the third thing I like to see when it comes to candidates. They should have a basic understanding of DevOps. It is not a system administrator who can write bash scripts. It is a team dedicated to solving a problem, which includes security as well.

---

After all these topics, the ones who still have the courage to ask tempts to become part of a project.

And their question is like this:

- Can you give me some advice on what I should learn if I want to be a software developer?

---

And I usually respond like this:

- If you really need help to learn the basics of coding. Choose any simple language like Python or PHP or Pascal. Don't get too fancy with it. You only need to practice variables, if, loops, and functions. For this, you can use online services like HackerRank, and the Go Playground. Or other online sandbox environments.
- Learn how to write tests. Here I'm talking about XUnit tests. The key point is to learn the concept of TDD. The best book I've ever read on the topic is [Learn Go with Tests](https://quii.gitbook.io/learn-go-with-tests/).
- After you know the basics. You should switch to learning the basics of git. Create a repository, git clone, git add, git commit, git push, git pull. Go to GitHub, sign up for a free account, and practice.
- You will need to learn how to write documentation. My recommendation is to use markdown. You don't need to go fancy here, either. Create a docs folder and learn how you can link to them.

And here comes the fun part. My advice is you should try to create Your Own project with that in mind; How can I make my project easy for others to use?

- You will need to learn how to use Docker. And docker-compose. Don't be afraid. It is just a virtualization solution. It will make your development environment more reliable.
- You may want to learn the basics of Linux. Like how to install something on Ubuntu.
- If you feel comfortable with a chosen language. You may want to make some requests against databases. So basic SQL selects, and inserts updates.
- You probably want to automate things in the long run. You have 2000 minutes of build time monthly on GitHub. Try out some pipelines.

# Thoughts

## Jun 16

I planned to create a video about this topic for ages now. I've started to create the script hours now and it is almost 18:00 now.

Probably I will on make a video about it next week. I still need to make it in a format I can use in the future.

## Jun 17

Yesterday I got tired in the end when I tried to collect memories and advices about this topic. After some time resting and a quick review from my friend I found this little project of mine is too long. It doesn't provide enough help for those who really need it. And it sounds so stuck-up, especially from me, who needs to use Grammarly. Who still has only a ~B+ level of competency in English. But as a matter of fact, I'm working on it and I try to get out of my comfort zone. Maybe I should reference these tools and techniques along with the content.

Every thought, every motive has a story behind it. This one as well. I help a couple of people to get into IT or to find a more challenging job with a better salary. Most of the time they were asking the wrong question. A programming language change is not going to help. If they were able to understand the reasoning why they want to do something then choosing the right tool for the right job help them more in the long run.

I had many doughts about whether should I speak about or write about it in English or should I speak in Hungarian. I know so many good IT professionals and also who are very passionate and they are struggling. They are not able to get to the next level. They are not able to pass the first round of an interview, which is usually in English, or notable to ask for help because they need to speak or write to someone in English. I know their struggle. I was one of them. Many people I know have a basic skill in this lanuage, but getting to the next level may require a little push.

I will work on the script and how I could provide more help along the way probably next week. This weekend I need some time with my family before I start my next assignment.
