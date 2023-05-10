---
title: Fix GitHub blog post publisher action 
date: 2023-05-10
tags: [github, productivity]
---

Today I was wondering about what productivity is. 
Productivity is all the things you can say not to do.

Wait, what? I need to do something. I need to pay the rent, buy stuff, go to work, etc.

Well,  technically, yes. But you may choose to delegate a task to other people or for automation.

## Story

Yesterday, I finally decided to separate my two "sides". I still need to figure out what I should call it. 

One of them is my personal life. Like Youtuber, I admire. Tools, books, software, and services I like to use. Games, Ideas, and all the shiny and sometimes not-so-shiny things that make me who I am.

The other one is GoSecNinja, where I want to search, promote, develop, and contribute to Open-source, security, and/or Go development. I have a couple of ideas of my own as well, but that's another story.

So now I have two sites and two youtube channels, and I need a way to automate some actions. 

I want to improve my open-source contributions. And If you have a look at my GitHub Profile Readme, you may notice a section where I list some of my content.

![](/images/github-bppa/20230510144644.png)

Yesterday, I tried to modify it and broke it :D

## GitHub Action

GitHub actions are powerful tools. With a simple YAML file under the ```.github/workflows``` folder, you can automate almost anything.

Can you automate Blog post entries on your Readme?

Yes, You can! With [gautamkrishnar/blog-post-workflow](https://github.com/gautamkrishnar/blog-post-workflow)

The Steps are simple:

1.  Star this repo 😉 (Not this, His repo :D )
2.  Go to your repository
3. Create a file at ```.github/workflows/blog-post-workflow.yml``` with the following contents inside the workflows folder 
```yaml
name: Latest blog post workflow
on:
  schedule: # Run workflow automatically
    - cron: '0 * * * *' # Runs every hour, on the hour
  workflow_dispatch: # Run workflow manually (without waiting for the cron to be called), through the GitHub Actions Workflow page directly
permissions:
  contents: write # To write the generated contents to the readme

jobs:
  update-readme-with-blog:
    name: Update this repo's README with latest blog posts
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - name: Pull in dev.to posts
        uses: gautamkrishnar/blog-post-workflow@v1
        with:
          feed_list: "https://dev.to/feed/gautamkrishnar,https://www.gautamkrishnar.com/feed/"
```

See more about it in his [How to use](https://github.com/gautamkrishnar/blog-post-workflow#how-to-use) it sections.

## Fix my actions

### Update action version

Well, I'm using this action for years now and I have a warning next to it

```
Update this repo's README with GoSecNinja Videos

Node.js 12 actions are deprecated. Please update the following actions to use Node.js 16: actions/checkout@v2. For more information see: https://github.blog/changelog/2022-09-22-github-actions-all-actions-will-begin-running-on-node16-instead-of-node12/.
```

![](/images/github-bppa/20230510151042.png)

Basically, this means I should change:

```
steps:
- uses: actions/checkout@v2
```
to:
```
steps:

- uses: actions/checkout@v3
```
And press the manual trigger to see the result.
![](/images/github-bppa/20230510151258.png)

### Add write permission

It's been a while since I last checked if my readme has actually been updated.

My current workflow starts like:

```
name: Latest GoSecNinja Content
on:
schedule:
# Runs every hour
- cron: '0 * * * *'
workflow_dispatch:
```

This means I enabled a cron job, Which runs every hour, and I am also able to trigger it manually.

Let's update it to be speechy and to grant write permission as well.

```
on:
  schedule: # Run workflow automatically
    - cron: '0 * * * *' # Runs every hour, on the hour
  workflow_dispatch: # Run workflow manually (without waiting for the cron to be called), through the GitHub Actions Workflow page directly
permissions:
  contents: write # To write the generated contents to the readme
```

See more about GitHub job permissions at: https://docs.github.com/en/actions/using-jobs/assigning-permissions-to-jobs

### Separate workspaces

I don't really want to duplicate actions, but I think I should separate my personal and GoSecNinja activities.

Previously I had two workflows. One for updating my posts and one for updating my video entries.

I still want to have two workflows, but now one for updating my personal and one for updating GoSecNinja contents. But this time they need to do two tasks. Updating blog posts and video content entries as well.

Probably this is where I made a mistake.

My current jobs look like this:

```
jobs:
  update-readme-with-youtube:
    name: Update this repo's README with GoSecNinja Videos
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: gautamkrishnar/blog-post-workflow@master
        with:
          comment_tag_name: "GS-YOUTUBE"
          readme_path: ./readme.md
          feed_list: "https://www.youtube.com/feeds/videos.xml?channel_id=UCcrWxBaxcYh7xsumEaya9Hw"
  update-readme-with-blog:
    name: Update this repo's README with GoSecNinja latest blog posts
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: gautamkrishnar/blog-post-workflow@master
        with:
          comment_tag_name: "GS-BLOG"
          readme_path: ./readme.md
          feed_list: "https://gosec.ninja/index.xml#feed"
```

I'm not sure why, but maybe the two separate jobs interfere with each other. And I don't have any blog posts yet on GoSecNinja. Maybe the jobs overwrite each other, and it results as if nothing changed.

Let's try adding the blog post updater as a step instead of a job.

Now my workflow looks like this:

```
jobs:
  update-readme-with-GoSec-content:
    name: Update this repo's README with GoSecNinja content
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: gautamkrishnar/blog-post-workflow@master
        with:
          comment_tag_name: "GS-YOUTUBE"
          readme_path: ./readme.md
          feed_list: "https://www.youtube.com/feeds/videos.xml?channel_id=UCcrWxBaxcYh7xsumEaya9Hw"
      - uses: gautamkrishnar/blog-post-workflow@master
        with:
          comment_tag_name: "GS-BLOG"
          readme_path: ./readme.md
          feed_list: "https://gosec.ninja/index.xml#feed"
```

Run the trigger, and the result is: SUCCESS ˆˆ

![](/images/github-bppa/20230510160804.png)

## Adding a template

Now that I have fixed the readme updater, I wonder how it looks. I'm not a design guru, but I found there is a way to provide more details when we want to list our videos.

Shout-out for the example to [Dexters-Hub](https://github.com/Dexters-Hub/Dexters-Hub).

So I've updated my blog post step as:
```
- uses: gautamkrishnar/blog-post-workflow@master
        with:
          comment_tag_name: "GS-YOUTUBE"
          readme_path: ./readme.md
          feed_list: "https://www.youtube.com/feeds/videos.xml?channel_id=UCcrWxBaxcYh7xsumEaya9Hw"
          custom_tags: "channelId/yt:channelId/,videoId/yt:videoId/"
          date_format: "yyyy-mm-dd"
          template: '<table><tr><td><a href="$url"><img width="140px" src="https://i.ytimg.com/vi/$videoId/mqdefault.jpg"></a></td>$newline<td><a href="$url">$title</a><br/>$date</td></tr></table>$newline'

```

Before this change, the video section looked like this:

![](/images/github-bppa/20230510162351.png)

And now it looks like this:

![](/images/github-bppa/20230510162553.png)

## Final touches

Now I need to fix the actions for my personal workflow and also make it more clear the separation. And also need to update my reach outs. But it's progress. :D

Thanks for this wonderful action [Gautam krishna R](https://github.com/gautamkrishnar)!

