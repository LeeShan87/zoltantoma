FROM klakegg/hugo:0.110.0-ext-alpine

RUN apk add git && \
  git config --global --add safe.directory /src

COPY . /src