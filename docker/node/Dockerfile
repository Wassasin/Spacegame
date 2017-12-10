FROM node:8

ARG USER_ID=1000

RUN useradd tg -u ${USER_ID} -m -G sudo,adm,systemd-journal || echo "Using exsisting node user"

VOLUME /app

USER $USER_ID

WORKDIR /app
