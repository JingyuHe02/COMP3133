# Lab Exercise 10 - Multi Environment Angular Demo

This project demonstrates Angular multi-environment setup for **TEST**, **UAT**, and **PROD**.

## Included environment files
- `src/environments/environment.ts` -> TEST
- `src/environments/environment.uat.ts` -> UAT
- `src/environments/environment.prod.ts` -> PROD

## Run commands
```bash
npm install
ng serve
ng serve --configuration uat
ng serve --configuration production
```

## What the app shows
- Current environment name
- API URL
- Environment-specific message
- Production mode true/false

## Main files to screenshot
- `src/environments/environment.ts`
- `src/environments/environment.uat.ts`
- `src/environments/environment.prod.ts`
- `src/app/app.ts`
- app output for TEST / UAT / PROD
