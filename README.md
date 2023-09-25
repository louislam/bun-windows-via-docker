# Bun for Windows via Docker Desktop

A temporary solution for running Bun on Windows. In case you don't have WSL or don't want to use it.

<img src="https://github.com/louislam/bun-windows-via-docker/assets/1336778/5091f690-de7b-4c52-9a80-66b67f684004" width="400" />


## Installation

Required tools:
- [Docker Desktop](https://www.docker.com/products/docker-desktop)
- [Node.js](https://nodejs.org/en/download/)

```bash
npm install bun-windows-via-docker -g
```

## Usage

1. Make sure Docker Desktop is running.
2. Use like a regular Bun CLI, example:

    ```bash
    bun index.ts
    ```

3. Since Bun needs to access your current directory, you have to click `Share it`.

    ![](https://github.com/louislam/bun-windows-via-docker/assets/1336778/7921a3f8-ad1f-4547-93fb-16eaa4e582a7)

