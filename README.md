# 🚚 Delivery App

## Requirements

You must have all the following applications installed:

- [NodeJS 12+](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/en/docs/install)

## Running the application

First, install all the dependencies running the following command: `yarn`

Start the server and the application with: `yarn start`

There you go! A tab should be shown on http://localhost:3000 (if not, just click here)

## Making google maps work

1. Go to [Google maps API](https://developers.google.com/maps/documentation/javascript/get-api-key) page and get an API Key
2. Create a file called `.env` in the root of your project's directory.
3. Inside the `.env` file, adds your api key to the variable: `REACT_APP_GOOGLE_API_KEY=your_api_key_here`
4. In order to read env variables, you should restart your server.
5. The `.env` file is already in the `.gitignore` file, if it’s appearing to add to commit it means your `.env` file is not in root.

## How to run the tests

### Unit Tests

`yarn test:unit`

> to run the e2e, api and visual regression tests you need to run first: "`yarn start`"

### e2e Tests

`yarn test:e2e`

### API Tests

`yarn test:api`

### Visual Regression Tests

`yarn test:visual`

### Updating Visual Regression Tests

`yarn test:visual-update`

## Troubleshooting

If you had any problem trying to run the application or the tests make sure that you have met the following requirements:

```
Node version: v12.8.0
Npm version: v6.13.1
Yarn version: v1.17.3
```

## Technical Decisions

Here is a document with all my technical decisions: [link](./docs/technical-decisions.md)

## Technical debts

A list of technical debits I keep working on: [link](./docs/technical-debts.md)
