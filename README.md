<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
   <a href="http://tiktok.com/" target="blank"><img src="https://logo.svgcdn.com/l/tiktok.png" width="120" alt="Tiktok Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A <a href="http://nestjs.com/" target="_blank">NestJS</a> app that implements <a href="https://oauth.net/2/" target="_blank">OAuth</a>   with <a href="http://nestjs.com/" target="_blank">Tiktok</a>.</p>
    <p align="center">
<!-- <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a> -->
  <!-- <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p> -->
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

This app uses [PassportJs](https://www.passportjs.org/) with [Tiktok Strategy](https://www.npmjs.com/package/passport-tiktok-oauth2) to implement Sign in with Tiktok.<br>
After successful authentication, a [JWT](https://www.jwt.io/) is issued to be used to make further requests via REST API.<br>
[MongoDB](https://www.mongodb.com/) is used as the database for managing users. It is implemented with [Mongoose](https://mongoosejs.com/) as an ODM.

## Prerequisites

- A [Tiktok Developer](https://developers.tiktok.com/) account
- A MongoDB database

## Project setup

```bash
$ npm install
```

## Environment Variables

- `TIKTOK_CLIENT_ID` (Client ID from Tiktok Developer account)
- `TIKTOK_CLIENT_SECRET` (Client secret from Tiktok Developer account)
- `TIKTOK_CALLBACK_URL` (Callback url for Tiktok after successful authentication)
- `MONGO_URI` (MongoDB connection string)
- `ACCESS_TOKEN_SECRET` (Secret string for signing access tokens / JWTs)

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Endpoints

- `/auth/tiktok` <br>
  (route for initiating Sign in With Tiktok process)<br><br>
- `/auth/tiktok/callback`<br>
  (route for confirming signin. Automatically called by Tiktok)<br><br>
- `/auth/profile` <br>
  Route for getting user info,<br>
  Requires a Bearer token in the `Authorization` header.<br>
  Returns `200` status code for a successful request and the following response body structure.
  ```ts
  {
    _id: string; // id from mongodb
    openId: string; // id from Tiktok
    displayName: string; // displayName from Tiktok
  }
  ```

## Try it out

A simple website has been hosted temporarily for testing out this implementation.
You may find it [here](https://tiktok-auth-frontend.vercel.app).

<!-- ## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
``` -->

<!-- ## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure. -->

<!-- ## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com). -->

<!-- ## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support). -->

## Stay in touch

- [Email](mailto:mickylarbi28@gmail.com)
- [LinkedIn](https://www.linkedin.com/in/michael-larbi-0338a7196/)
- [WhatsApp](https://wa.me/00233559100608)
- [Instagram](https://instagram.com/mr.__larbi)

<!-- ## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE). -->
