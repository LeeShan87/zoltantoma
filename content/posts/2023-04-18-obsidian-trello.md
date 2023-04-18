---
trello_board_card_id: 643bebecdThisISNotValid
trello_plugin_note_id: 6sSJkTNope
title: Using Trello with Obsidian
date: 2023-04-18
tags: [Trello, Obsidian, automation]
---

I realized that using a project management framework is not an option for me. Usually, I adapt how my current company works, but this may not be a good choice if you already have a so-called working system.

I like the idea of what I call scrumban. It is a mixture of Scrum and Kanban.

In this framework, I have:
- a backlog
- a prioritized list of the current sprint activities
- daily standups
- the in-progress queues should only contain 2-4 active items that I'm working on
- if something important lands on my desk, I can add the todo to my current tasks.
- if I have done everything in the "sprint", I can pick anything from my backlog
- And eventually, I have an opportunity to reevaluate my working habits.

When I showed my [Obsidian Kanban](https://github.com/mgmeyers/obsidian-kanban) board to my spouse, she said:
"This is great! But it would be better if I could also add some tasks to you."
You know, like cleaning, going to the grocery, fixing this, anything like these.

I wanted to know how I could share my obsidian board with her. One way is to buy obsidian for her, but she is not used to markdown, which is a blocker with this route.

She is already using Trello at work, and I used it in the past, so let's try it.

## Requirements

- You need a Trello account
- You should use Obsidian :)
- And you need to search for Trello in the Obsidian community plugins. I only found one called: [Obsidian Trello](https://github.com/OfficerHalf/obsidian-trello)

## Setup

1. Create a Trello account
2. Enable the [MetaEdit](https://github.com/chhoumann/MetaEdit) Obsidian plugin (install from inside Obsidian). The Trello plugin relies on this plugin
3. Enable [Obsidian Trello](https://github.com/OfficerHalf/obsidian-trello) plugin
4. Create a Trello API token with this link https://trello.com/1/authorize?expiration=never&scope=read,write&response_type=token&name=Obsidian%20Trello%20Token&key=9537467993aefd6dca9ee7788179c298
	1. I copied this link unedited from the plugin's GitHub page
	2. Never click on a link that you don't trust :)
5. Add the created token to your Trello plugin setup

## How it works

### Now you can create Trello cards from your Obsidian.
![](/images/trello/20230418115150.png)
![](/images/trello/20230418115211.png)
![](/images/trello/20230418115232.png)
![](/images/trello/20230418115254.png)
![](/images/trello/20230418115502.png)
![](/images/trello/20230418115550.png)

This will create and attach a Trello card to your current Obsidian note.

### Comment on an attached card

![](/images/trello/20230418115752.png)
![](/images/trello/20230418115834.png)
![](/images/trello/20230418120040.png)
![](/images/trello/20230418120111.png)
![](/images/trello/20230418120132.png)

### Move cards between queues

![](/images/trello/20230418120426.png)
![](/images/trello/20230418120448.png)
![](/images/trello/20230418120511.png)

### Detach card

![](/images/trello/20230418120707.png)

This action will unlink your note from your note. However, the Trello card and your note still will be available.

### Attach an existing card to a note.

![](/images/trello/20230418121000.png)

Almost the same as creating a new card, except you select an existing one.

## Limitations

### There is no board view
Maybe I was the one who couldn't find this feature, but I would love to see the whole Trello board in one of my Obsidian notes or Obsidian in general, like in Obsidian Kanban.

Because of this limitation, I will not be notified about a new task I should do in the future. 

Of course, you could allow push notifications or check your boards daily.

### Can't add images to comments inside the plugin

![](/images/trello/20230418122530.png)

To add an image, I need to login to Trello.

### Not able to update card description after it was created

## Final thoughts

This plugin could help you add notes to your tasks in Trello, but it has some limitations. Nevertheless, you may want to give it a try.

For me, some of the limitations are deal breakers for daily use. For example, I want to limit how many applications or websites I use. If I could make my processes simpler, smoother, or even better automated, it would be better.

## P.S.

If you want to share your note publicly, remember to detach your card from it. The plugin adds references to your YAML front matter. The devil never sleeps :)

![](/images/trello/20230418124049.png)