# frida-node-portable

Build portable (single executable) with [frida](https://www.frida.re/) included.

## Prerequisites

[bun](https://bun.com/docs/bundler/executables)

## Build

```sh
bun i
bun run build
```

Then check `./bin/portable`, it is a single executable file with frida included.

## Cross Compile

```sh
bun i
bun run build:all
```

It's going to generate following files under `./bin/`, who are all single executable for their corresponding platform:

* bun-darwin-arm64
* bun-darwin-x64
* bun-linux-arm64
* bun-linux-arm64-musl
* bun-linux-x64
* bun-linux-x64-musl
* bun-windows-x64.exe
