---
layout: post
title: Using Bower with Flask.
date: '2014-11-15 09:12:00'
tag: ['programming']
---

[Bower](http://bower.io/) is a package manager that fetches and installs all kinds of static resources and tools. So it is very useful for managing the static resources for our Flask project. We just put our requirements in a file called `bower.json` and Bower fetches all those requirements for us and puts them in a directory called `bower_components`.
Then we use something like [Grunt](http://gruntjs.com/) to move the static resources to their final location.

But wouldn't it be nice if we could just use them directly with Flask. Well, turns out that we can easily do that.

First let's create a file called `.bowerrc` in the root directory. This is the configuration file for Bower. Let's put the following configuration in it.


    {
    	"directory" : "static/bower_components"
    }


Now Bower will put everything in the static/bower_components directory and Flask will know how to serve those resources properly.

Let's try installing Jquery.

	bower install jquery

Jquery will be fetched and stored at `static/bower_components/jquery`. Now we can use Jquery in the template as

	<script src="/static/bower_components/jquery/dist/jquery.min.js"></script>

Also doing `bower init` will store all the installed dependencies in the `bower.json` file.

Now we can manage our static resources with ease.

### Thanks for reading
Thanks for taking the time to read this post, I hope you found it interesting.
