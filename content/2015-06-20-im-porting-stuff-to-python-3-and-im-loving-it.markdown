---
layout: post
title: I'm porting stuff to Python 3. And I'm loving it.
date: '2015-06-20 14:09:04'
tags: python, gsoc
category: on code
---

GSoC update time! In case you didn't read my previous post, I'm [participating in GSoC](http://sunu.in/on-summer-of-code/) and porting [Splash](https://github.com/scrapinghub/splash) to Python 3.

Quick update on what has been done so far. The pull request to add support for Qt5 and PyQt5 has been merged into the [qt5 branch](https://github.com/scrapinghub/splash/tree/qt5). The plan is to merge it into `master` after Python 3 porting and some other cleanup(fixing the docs, Vagrantfile etc) is done.

So now on to Python 3 porting.

The main road block in porting Splash to Python 3 is that some dependencies don't (fully) support Python 3 yet. The major one at that is [Twisted](https://twistedmatrix.com/trac/). But the good thing is the most used parts of Twisted already support Python 3 and the developers behind Twisted are actively working on porting more and more modules. Also Twisted has a fairly well laid out [guide for Python 3 porting](https://twistedmatrix.com/trac/wiki/Plan/Python3) and the community is really responsive with feedback and reviews. Thanks to that I have ported a module already and working on porting `twisted.web.proxy` for now.

Among other dependencies, [my fork of qt5reactor](https://github.com/sunu/qt5reactor) is Python 3 compatible. And [pyre2](https://github.com/axiak/pyre2/), a faster drop-in replacement of the `re` module from standard library, is now Python 3 compatible after [my PR](https://github.com/axiak/pyre2/pull/31) was merged.

For now, I'm porting the Splash code base one test at a time. Splash has a good test coverage and lots of tests. So that's working in my favor. That and [pdb](https://docs.python.org/2/library/pdb.html).

That's all I have to share for now. Thanks for reading.
