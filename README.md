# Passage + Next.js Examples
This repository contains Next.js examples for different use cases with Passage.

# What is Passage
Passage is a passwordless authentication system that leverages biometrics (with a fallback of magic links) to authenticate users on your websites or mobile applications.  By leveraging the [WebAuthn protocol](https://webauthn.io/) from the [FIDO Alliance](https://fidoalliance.org/), Passage can increase security and reduce end user friction.   

Passage provides a full UI/UX login and registration in a web component that can be added to any application, as well as backend libraries in Python, Go, and Node.js to support user verification. To learn more [visit our website](https://passage.id).


# Examples in This Repo

This repository contains two examples:

* [Authenticating with Passage](./01-Login) -- a simple example implementing passwordless authentication
* [Login with Profile](./02-Login-With-Profile) -- an example using passwordless authentication that displays information about registered devices

We have posted a blog entry describing [how these demos can be built from scratch](https://passage.id/post/building-a-next-js-app-with-biometrics).