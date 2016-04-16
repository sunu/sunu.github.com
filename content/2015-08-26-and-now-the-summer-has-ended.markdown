---
layout: post
title: And now the summer has ended.
date: '2015-07-29 00:59:30'
tags: python, gsoc
category: on code
---

So the end is here. 24th August was the "hard pencil down" date of GSoC 2015. And with that GSoC has come to an end.

In the end, we have come fairly close to the goals we set in the beginning. Splash now has a branch which runs on Qt5. My [pull request](https://github.com/scrapinghub/splash/pull/251) for Python 3 support, updated installation documentation and updated Docker images is waiting for a final review. Unfortunately, we've encountered a [bug in QtWebkit](https://bugreports.qt.io/browse/QTBUG-47654) that is blocking us from merging the Qt5 branch into master for now.

But all in all this has been a wonderful experience. I have learned a lot this summer; at least I think I know a lot more about asynchronous programming and debugging now, than I knew before the summer. I have contributed to Twisted, which I have [tried doing and failed](http://irclogs.jackgrigg.com/irc.freenode.net/openhatch/2014-04-27#i_3338742) in the past.

Next step will be to keep things tidy until the Qt bug is fixed. Also, I plan to port some more Twisted packages (like twisted.conch.telnet) that we use in Splash. There are several issues open that talk about easily extending Splash's functionalities through a library of Lua scripts using [custom Lua module support](http://splash.readthedocs.org/en/latest/scripting-tutorial.html#custom-lua-modules). This is something I'm interested in working on.

On the other hand, the end of GSoC means I am no longer working full time on anything. So I have actively started looking for interesting career opportunities. Do let me know if you have something in mind.

Thanks for reading.
