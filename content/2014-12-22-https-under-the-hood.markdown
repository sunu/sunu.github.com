---
layout: post
title: HTTPS - Under the hood.
date: '2014-12-22 16:09:30'
tags: https
category: on code
---

While browsing the web we often see a padlock symbol and the letters `https` before the web address. When we click on the padlock, the browser assures us that our connection to the website is secure and gives us some info about who runs the website and stuff like that.

![padlock info](http://i.imgur.com/JMgIyNt.png)

This secure connection is achieved by `HTTPS`. HTTPS makes it possible for us to transmit our passwords, back account details securely across the Internet without making it accessible to people like [the infamous Eve](http://en.wikipedia.org/wiki/Alice_and_Bob#Cast_of_characters). But `HTTPS` does not guarantee 100% security. Things still can [go wrong](http://en.wikipedia.org/wiki/Transport_Layer_Security#Attacks_against_TLS.2FSSL).

## What is HTTPS?

HTTPS stands for *Hypertext Transfer Protocol Secure*. Basically it's plain old HTTP secured by a layer of [SSL/TLS](http://en.wikipedia.org/wiki/Transport_Layer_Security) encryption on top. The server and client still speak HTTP to each other; the only difference is the requests and responses are encrypted and decrypted in turn to make this communication secure.

In  order to make the communication secure, the SSL layer does 2 things for us

- It verifies that we are talking directly to the server that we think we are talking to.
- It makes sure that only the server can read what we send and only we can read what it sends back.

## How does a HTTPS connection work?

Let's take a look at a overview of how a HTTP connection is established. Suppose we want to connect to `https://example.com` over a secure connection. Here is the entire process that takes place with a few simplifications.

1. Our browser sends a request to `https://example.com` (just `example.com` from now on).

2. `example.com` sends us a `certificate`. This certificate contains the public key of `example.com`'s server. It also provides some evidence that this public key actually belongs to `example.com`.

3. Our browser then verifies this certificate. The certificate is [digitally signed](http://en.wikipedia.org/wiki/Digital_signature) by a [certificate authority](http://en.wikipedia.org/wiki/Certificate_authority) (CA). The browser checks that it trusts the CA (browsers come with a built-in list of trusted ones) and that the certificate was properly signed.

4. After successful verification, our browser chooses a new random symmetric key (say K) to use for its connection to `example.com`. It encrypts the key with `example.com`'s public key that it got from the certificate.

  A symmetric key is a key used in a symmetric algorithm for message encryption and decryption. Unlike asymmetric algorithms which require public/private key pair for encryption/decryption, symmetric algorithms require only a single key for both encryption and decryption.
5.  `example.com` decrypts the key using its private key. Now both our browser and the `example.com` server know the key K, but no one else does.

6. Now when our browser sends something to `example.com`, it encrypts it with the key K. The server decrypts the message with the key K.
If the server wants to send something to our browser it encrypts it with the key K and the browser decrypts with the key K on receipt. This goes on until we disconnect from the server.

The important thing to note here is your connection is secure as long as

- The private key of the server is actually private.
- Trust can not be faked.
- Your secret key is known to you and the server only.

HTTPS can no longer protect you if any of these conditions is left unsatisfied. One interesting example of such a case will be the [Lavabit-FBI situation](http://www.wired.com/2013/10/lavabit_unsealed/), where a US court forced the webmail provider company to hand over its SSL private keys to the FBI. Once the private keys are compromised HTTPS is no longer secure.

So all in all, HTTPS is gives us a secure, private way to talk to others over the web, but it can't always be fully trusted. We can rely on it for some level of privacy, but still have to be vigilant.

### Thanks for reading
Thanks for taking time to read this post. Hope you found it interesting. If you have some comments feel free to tweet at [@tarashish](https://twitter.com/tarashish) or shoot me a [mail](mailto:tarashish.mishra@gmail.com).

### Links

- [How HTTPS secures connections](http://blog.hartleybrody.com/https-certificates/)
- [Public-key cryptography explained without jargons](https://medium.com/@vrypan/explaining-public-key-cryptography-to-non-geeks-f0994b3c2d5)
- [How digital certificates work](https://en.wikipedia.org/wiki/Public_key_certificate)


