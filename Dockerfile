## Build image and name it 'custom-next'
# docker build -t custom-next .

## Run container and name it 'wwwviasa'. Webpage is localhost:3000
# docker run -it --rm -dp 3000:3000 --name wwwviasa custom-next

## Connect to container
# docker exec -it wwwviasa sh

## Stop docker container
# docker stop wwwviasa

## All together
# docker stop wwwviasa & docker image rm -f custom-next & docker build -t custom-next . && docker run -it --rm -dp 3000:3000 --name wwwviasa custom-next && docker exec -it wwwviasa sh

# Start Dockerfile
ARG VERSION=18.16.0-alpine3.17
ARG DIR=wwwviasa

FROM node:${VERSION} as builder
# redeclare ARG because ARG not in build environment
ARG DIR 
WORKDIR /${DIR}
COPY . .
RUN apk update
RUN apk add git
RUN yarn
RUN NODE_ENV=production yarn build

FROM node:${VERSION} as runner
# redeclare ARG because ARG not in build environment
ARG DIR
WORKDIR /${DIR}
COPY --from=builder /${DIR}/public ./public
COPY --from=builder /${DIR}/.next/standalone .
COPY --from=builder /${DIR}/.next/static ./.next/static

EXPOSE 3000
ENTRYPOINT ["node", "server.js"]
