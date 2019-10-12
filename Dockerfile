# --- Installing stage
FROM node:carbon-stretch-slim AS installer

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

# ---

# Building stage
FROM installer AS builder

## Workdir is shared between the stage so let's reuse it as we neeed the packages
WORKDIR /usr/src/app

COPY ./src src
COPY tsconfig.json .
RUN npm run build

# ---

# Running code under slim image (production part mostly)
FROM node:carbon-stretch-slim

## Clean new directory
WORKDIR /app

## We just need the build and package to execute the command
COPY --from=builder /usr/src/app/out out

CMD [ "node", "out/index.js" ]
