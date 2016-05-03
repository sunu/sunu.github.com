#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = u'Tarashish Mishra'
SITENAME = u"sunu's weblog"
SITEURL = ''

PATH = 'content'

TIMEZONE = 'Asia/Kolkata'

DEFAULT_LANG = u'en'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
# LINKS = (('Pelican', 'http://getpelican.com/'),
#          ('Python.org', 'http://python.org/'),
#          ('Jinja2', 'http://jinja.pocoo.org/'),
#          ('You can modify those links in your config file', '#'),)

# Social widget
SOCIAL = (('Twitter', 'https://twitter.com/tarashish'),
          ('Github', 'https://github.com/sunu'),)

DEFAULT_PAGINATION = False

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True


## OVERRIDDEN CONFIG
ARTICLE_URL = '{slug}/'
ARTICLE_SAVE_AS = '{slug}/index.html'
PAGE_URL = '{slug}/'
PAGE_SAVE_AS = '{slug}/index.html'

THEME = "medius"

FEED_ATOM = 'atom.xml'

MEDIUS_AUTHORS = {
    'Tarashish Mishra': {
        'description': """
            Professional code whisperer. Taming wild computers for a living.
        """,
        'cover': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Milky_Way_Arch.jpg/1920px-Milky_Way_Arch.jpg',
        'image': 'http://2.gravatar.com/avatar/b7c7c168cd76bbae514d1c97f55b8fee',
        'links': (('github', 'https://github.com/sunu'),
                  ('twitter-square', 'https://twitter.com/tarashish')),
    }
}

DISQUS_SITENAME = 'sunuin'
