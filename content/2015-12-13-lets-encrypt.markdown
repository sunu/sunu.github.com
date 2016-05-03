---
layout: post
title: SSL/TLS certificates in minutes with Let's Encrypt and Caddy
date: 2015-12-13 17:52
tags: letsencrypt, https, caddy
category: on code
---

[Let's Encrypt](https://letsencrypt.org/) has entered public beta for a while now. So I decided to play with it today and get a certificate. With [Caddy server](https://caddyserver.com), I was able to set up a web page with a free SSL/TLS certificate issued by Let's Encrypt within minutes. This stuff is surely amazing!

Let's walk through the steps.

First I installed Caddy on the server and pointed my domain to the server. Standard stuff.

Then I create a Caddyfile. My Caddyfile looks like this

    test.sunu.in {
        gzip
        tls sunu0000@gmail.com
        root /srv/www/test.sunu.in
    }

`test.sunu.in` is the domain I want to server and there's of course my email and the website root.

Next I put a index.html file in the website root and start Caddy server by pointing it to the config file

    caddy --conf /srv/www/Caddyfile --agree --email sunu0000@gmail.com

And voila! My SSL/TLS enabled website is being served at [test.sunu.in](https://test.sunu.in).

I really love the work people are doing on Let's Encrypt so far. Self signed certificates were a pain in the ass; it's great to have free automated SSL/TLS certificates. Warm hugs to all the people putting in the hard work to make it possible!
