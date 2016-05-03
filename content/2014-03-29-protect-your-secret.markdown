---
layout: post
title: Protect your secrets!
date: 2014-03-29 17:52
tags: django, python
category: on code
---

Django has a SECRET\_KEY settings among many others. This SECRET\_KEY is really important for security purposes as it is used for cryptographic signing functionality in Django ([More](https://docs.djangoproject.com/en/dev/topics/signing/) about cryptographic signing). We are expected to keep the value secret. Running Django with a known SECRET_KEY defeats many of Django’s security protections, and can lead to privilege escalation and remote code execution vulnerabilities.

So putting the SECRET_KEY setting of Django in version control and putting the code out on a public repository on Github or Bitbucket is not really a good idea and should be avoided. Same can be said for other secret keys like API keys for different services, OAuth tokens, passwords for your database. They are all supposed to be, you know, "secret"!

![Secret](http://i.imgur.com/G0qc8Lr.gif)

As a solution to this problem, most people edit this configurations on the production machine. Unfortunately, it is not a good idea. Editing source files on production is often troublesome. Also, while editing these keys in your development setup, you may just commit and push them accidentally to the public repository. So this practice is somewhat troublesome and dangerous.

Environment variables to the rescue
-----------------------------------
Environment variables are the answer to our problem. Using environment variables to store our secret keys gives us a ton of benefits.

  + We can now put all our settings files in version control without hesitation.
  + No need to edit source files on production.
  + No risk of accidentally committing secret keys.

![Yay!](http://i.imgur.com/EuEKhSr.gif)

How to set environment variables
--------------------------------
Environment variables can be set easily using bash commands. For example:

``` bash
$ export MY_SECRET_KEY=SuP3r-S3Kr31-K3y
```
We can put this line at the end of our `.bashrc` or `.bash_profile` files. Another way to do this for individual projects is to put this line at the end of `bin/activate` script of the virtualenv.

Most platform-as-a-service platforms also provide ways to set environment variables easily. For example, on Heroku you can set environment variables like this.

``` bash
$ cd myapp
$ heroku config:set SECRET_KEY=mySuP3rS3cr31K3yRul3s
```
Here is the [documentation](https://devcenter.heroku.com/articles/config-vars) from Heroku.

These environment variables can be easily accessed in the settings file to set the secret key by doing something like:

```python
import os
SOME_SECRET_KEY = os.environ["SOME_SECRET_KEY"]
```

And that's the way to do it.

