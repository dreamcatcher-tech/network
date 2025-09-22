FROM ubuntu:24.04

ARG DEBIAN_FRONTEND=noninteractive

RUN apt-get update

RUN apt-get install -y --no-install-recommends \
    bash-completion \
    ca-certificates \
    curl \
    git \
    gnupg \
    jq \
    openssh-client \
    ripgrep \
    sudo \
    unzip \
    man-db \
    gh

RUN curl -fsSL https://deb.nodesource.com/setup_20.x -o /tmp/nodesource_setup.sh

RUN bash /tmp/nodesource_setup.sh

RUN rm /tmp/nodesource_setup.sh

RUN apt-get install -y --no-install-recommends nodejs

RUN npm install -g @openai/codex

RUN rm -rf /var/lib/apt/lists/*

RUN bash <<'EOS'
set -euo pipefail
if ! id -u ubuntu >/dev/null 2>&1; then
  useradd -m -s /bin/bash ubuntu
fi
usermod -aG sudo ubuntu
echo 'ubuntu ALL=(ALL) NOPASSWD:ALL' > /etc/sudoers.d/90-ubuntu
chmod 0440 /etc/sudoers.d/90-ubuntu
mkdir -p /workspace
chown ubuntu:ubuntu /workspace
EOS

RUN curl -fsSL https://deno.land/install.sh -o /tmp/install_deno.sh

RUN DENO_INSTALL=/usr/local sh /tmp/install_deno.sh

RUN rm /tmp/install_deno.sh

RUN deno --version

USER ubuntu

WORKDIR /workspace
