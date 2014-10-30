# api-stuff

Simple wrapper REST APIs for Twitter, Vine and Instagram

## Running locally

### Environment Variables

The following environment variables are required:

- **PORT** (defaults to 3141)

- **REDIS_PORT** (defaults to 6379)
- **REDIS_HOST** (defaults to 127.0.0.1)
- **REDIS_AUTH** (defaults to null)

- **CACHE_EXPIRE** (max age of cached responses in seconds; defaults to 3600)

- **TWITTER_CONSUMER_KEY**
- **TWITTER_CONSUMER_SECRET**
- **TWITTER_CONSUMER_ACCESS_TOKEN**
- **TWITTER_CONSUMER_ACCESS_TOKEN_SECRET**

- **INSTAGRAM_CLIENT_ID**

This project uses parts of the inofficial Vine API (partly outdated [API Reference](https://github.com/starlock/vino/wiki/API-Reference)).

### Dependencies

- Node.JS

    You can either install it with your favorite package manager or with [the installer](http://nodejs.org/download) found on [nodejs.org](http://nodejs.org).

- Redis

  [Redis](http://redis.io/) is being used for caching. You can install it view `brew install redis` or compile it yourself.

### Getting started

`npm install && npm start`
