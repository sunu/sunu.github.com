---
layout: post
title: On Summer of Code
date: '2015-06-02 11:52:44'
tag: ['programming', 'gsoc']
---

Bit of a late news, but yes, I am participating in [Google Summer of Code 2015](https://www.google-melange.com/gsoc/homepage/google/gsoc2015) under [Python Software Foundation](https://www.python.org/psf/). I am working on [Splash](https://github.com/scrapinghub/splash) developed by [Scrapinghub](http://scrapinghub.com/).

Splash is a lightweight, scriptable web browser with an HTTP API written on top of Qt and Twisted. Currently it supports Python 2.7+ only and runs on Qt4/PyQt4. My goal is to add Python 3 support and make Splash use Qt5/PyQT5.

So far the first week of the development phase has passed. And Splash is almost ready to run on Qt5/PyQt5. We are using [qt5reactor](https://github.com/sunu/qt5reactor) for integrating Twisted and Qt5 eventloop. It is pulled out of the [Aether](https://github.com/nehbit/aether-public/blob/master/qt5reactor.py) project. So far the transition from Qt4/PyQt4 to Qt5/PyQt5 has been rather seemless.

I'll work on completeing the Qt5/PyQt5 transition and porting some tests to Python3 next week.

That's all I have to share for now. Thanks for reading.
Here's to a fruitful summer.
Ciao.
