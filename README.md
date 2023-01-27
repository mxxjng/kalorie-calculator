# Kalorie Calculator

Calculates your daily burnt kalories based on the harris & benedict formula and MET values.

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## How to update training data

1. login to gainzfire go to the "statistik" page

2. select exercise maximum date range and export to csv

3. send csv file to pc via whatsapp

4. convert csv to json https://csvjson.com/csv2json

5. paste json in datafolder in this repo
