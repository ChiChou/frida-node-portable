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

* portable-darwin-arm64
* portable-darwin-x64
* portable-linux-arm64
* portable-linux-arm64-musl
* portable-linux-x64
* portable-linux-x64-musl
* portable-windows-x64.exe
