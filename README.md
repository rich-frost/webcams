# Webcams

This repo takes in a configuration of your webcams defined in the `.env.local` file and renders them in the app.

## Setup

### Configure your .env.local file

Rename the `.env.local.sample` to `.env.local` and add the countries and locations you want to render in the application.

For more countries, add to the `NEXT_PUBLIC_COUNTRIES` variable, i.e. NEXT_PUBLIC_COUNTRIES=spain,greece

For each country you will need an equivalent locations record listing all the locations `,` separated. For each location it should be listed as Location display name and camera identifier separated by a `|`; i.e. `Madrid FC|madrid-fc`

### Running the app locally:

```bash
npm i
npm run dev
```

## Tech stack

-   Next13
-   TypeScript
