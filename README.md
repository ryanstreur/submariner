# Submariner

*A bailing bucket for obtrusive subscription requests*

Websites often ask users to subscribe to their services. That makes sense, and I am aware that it's an important step in their marketing pipelines. When I have already subscribed, however, I would expect them not to continue asking me to subscribe. This is not always the case, so I made a quick and dirty browser extension for my own personal use to remove subsription requests from websites which continue to ask you to subscribe once you're already subscribed.

It has a JSON object which maps hostnames to the selectors of their subscription request elements. If a user goes to one of the sites listed, it finds the corresponding selector and removes it. It uses exponential backoff to account for situations where the request element may be added to the DOM after the exension initializes.

## Getting started

1. Clone repository to your local system.
2. `npm install` from project directory.
3. `npx web-ext run` to run the extension locally

## See also

- [MDN Browser Extension Docs](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions)
- [Getting Started with web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/) - Firefox Workshop