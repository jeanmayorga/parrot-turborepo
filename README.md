# Parrot Challenge

In this challenge, i'm using turborepo.

### Apps

- `auth-signin`: [Next.js](https://nextjs.org) app
- `menu`: [Next.js](https://nextjs.org) app
- `web`: [Next.js](https://nextjs.org) app

### Packages

- `components`: a stub React component library shared by `auth-signin`, `menu` and `web` applications

- `config`: app configuration shared to `auth-signin`, `menu` and `web`

- `hooks`: hooks in `auth-signin`, `menu` and `web`

- `services`: services

- `store`: zustand store

- `tsconfig`: `tsconfig.json`s used throughout the monorepo

- `types`: types of app

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Setup

This repository is used in the `npx create-turbo` command, and selected when choosing which package manager you wish to use with your monorepo (Yarn).

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
yarn run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
yarn run dev
```
