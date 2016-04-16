---
layout: post
title: The curious case of mutable default arguments in Python
date: '2014-11-25 09:12:00'
tags: python
category: on code
---

Python's handing of default arguments trips up most Pythonistas at some point in their journey. Sometimes it makes people pull out their hair in frustration because they can't figure out what's wrong.

Consider the following example.

```language-python
	def foo(bar=[]):
    	bar.append(1)
        return bar
```

One would expect the function `foo` to return the list `[1]` every time it is called. And the result will take them by total surprise.

Let's try calling the function multiple times.

```language-python
	>>> foo()
	[1]
	>>> foo()
	[1, 1]
	>>> foo()
	[1, 1, 1]
```

That's certainly not what we expected the function `foo` to return. Turns out the list gets bigger and bigger each time we call the function.

Let's take a deeper look. We'll use the built-in funtion `id` which returns the unique identity of an object. For example:

```language-python
    >>> a = 12
	>>> b = 12
	>>> id(a)
	13979728
	>>> id(b)
	13979728
    >>> id(a) == id(b)
    True
```

Here id of a and b are same since they refer to the same object, the integer 12. Similarly

```language-python
	>>> a = foo()
    >>> a
    [1]
    >>> b = foo()
    >>> b
    [1, 1]
    >>> id(a) == id(b)
    True
```

This explains why our issue. The function keeps using the same list everytime it's called. Which means we are appending 1 to the same list everytime we call the function. That's why the list keeps getting bigger.

---

### Why does this happen?
The reason default arguments work this way is that fuctions are first class objects in Python. And they are treated like other first class objects, not as just some piece of code.

Function definition is an executable statement in Python. The default arguments are initialized only once (during the execution of the funtion definition). No more initialization is done for subsequent function executions.

---

### What's the solution?
The solution to the above example is to use `None` as the default argument.

```language-python
	def foo(bar=None):
    	if bar is None:
        	bar = []
        # Do your stuff here.
```

---

### Thanks for reading
Thanks for taking time to read this post. Hope you found it interesting. There are some cool things you can do by taking advantage of mutable default arguments. Go through the [links section](#links) if you want to learn more.

### Links
- [Common gotchas in Python](http://docs.python-guide.org/en/latest/writing/gotchas/)
- [Must-read article about default arguments by Effbot](http://effbot.org/zone/default-values.htm)
- [Question on StackOverflow](http://stackoverflow.com/questions/1132941/least-astonishment-in-python-the-mutable-default-argument)
