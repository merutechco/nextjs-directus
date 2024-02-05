FROM mcr.microsoft.com/devcontainers/base:alpine-3.18

ARG USER_UID=1000
ARG USER_GID=$USER_UID
RUN if [ "$USER_GID" != "1000" ] || [ "$USER_UID" != "1000" ]; then groupmod --gid $USER_GID vscode && usermod --uid $USER_UID --gid $USER_GID vscode; fi

RUN  apk update \
    && apk upgrade \
    && apk add ca-certificates \
    && update-ca-certificates \
    && apk add --update coreutils openjdk11 tzdata curl unzip bash && rm -rf /var/cache/apk/* \
    && apk add --no-cache nss \
    && rm -rf /var/cache/apk/*

RUN apk add --update nodejs=18.18.2-r0 npm