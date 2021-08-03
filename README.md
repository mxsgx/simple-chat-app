# Simple Chat App

Simple chat app with Node.js. Using Fastify as web framework, Socket.IO for real-time communication, and React as Front-End.

## Requirements

- Node.JS LTS or latest

## Installation

Clone this repository

```bash
git clone https://github.com/mxsgx/simple-chat-app.git
```

Move to cloned repository directory

```bash
cd simple-chat-app
```

Install all dependencies

```bash
npm install
```

Configure `.env` file if necessary. Then compile assets

```bash
npm run build:production
```

Run server

```bash
npm run server:start
```

Now application running at http://localhost:3000

## Appendix

The directory structure inspired from Laravel, I also use Laravel Mix for compiling assets.