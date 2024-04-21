FROM mcr.microsoft.com/devcontainers/base:debian-11

ENV BUN_INSTALL="/bun"    

RUN mkdir -p /bun \
    && curl -fsSL https://bun.sh/install | bash -s "bun-v1.1.0" \
    && chown -R vscode /bun

ENV PATH="$BUN_INSTALL/bin:$PATH"