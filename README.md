# Overview

This repo contains boilerplate for creating a Next.js app that can source/write data to a Hasura endpoint. Users are also able to Login/Signup utilizing an Auth0 integration. Below you will find instructions on everything needed to get up and rolling.

### What you'll Need

- [Auth-0 Tenant & API](https://auth0.com/docs/get-started)
- [Hasura Graphql Endpoint](https://hasura.io/learn/)
- That's it!

# Quick Start Guide

##### Install dependencies

`npm install`

##### Set Environment Variables

Navigate into your project directory and run:
`cp .env.template .env.local`

Add the corresponding info (while in development you can leave `https://localhost:3000`)

##### Update `./lib/apolloClient.js`

You will need to update the uris on line 36 && line 46 to correspond with your Hasura Endpoint.

## Auth0 Updates

Within your Auth0 application settings:

- Add `https://localhost:3000/callback` && `https://localhost:3000/api/callback` to Allowed Callback URLs
- Add `https://localhost:3000` to Allowed Logout URLs && Allowed Web Origins

[Add rules for user creation into Hasura](https://hasura.io/learn/graphql/hasura/authentication/)

### Boom. You should be all set!

`npm run dev`
