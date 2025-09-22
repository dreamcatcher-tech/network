FROM ubuntu:24.04

ARG DEBIAN_FRONTEND=noninteractive

RUN apt-get update \
 && apt-get install -y --no-install-recommends \
    bash-completion \
    ca-certificates \
    curl \
    git \
    jq \
    openssh-client \
    ripgrep \
    sudo \
    unzip \
    mandb \
    gh \
 && rm -rf /var/lib/apt/lists/*

RUN usermod -aG sudo ubuntu \
 && echo 'ubuntu ALL=(ALL) NOPASSWD:ALL' > /etc/sudoers.d/90-ubuntu \
 && chmod 0440 /etc/sudoers.d/90-ubuntu \
 && mkdir -p /workspace \
 && chown ubuntu:ubuntu /workspace

RUN curl -fsSL https://deno.land/install.sh | DENO_INSTALL=/usr/local sh \
 && deno --version

USER ubuntu

WORKDIR /workspace
