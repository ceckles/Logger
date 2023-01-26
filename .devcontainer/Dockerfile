FROM "mcr.microsoft.com/devcontainers/javascript-node:0-18"

#PROXY
#ENV http_proxy http://username:password@proxy_url:proxy_port
#ENV https_proxy http://username:password@proxy_url:proxy_port
#ENV no_proxy http://username:password@proxy_url:proxy_port

# Create app directory
WORKDIR /logger

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install git

