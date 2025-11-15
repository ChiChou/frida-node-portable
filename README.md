# portable-frida

Build portable (single executable) with [frida](https://www.frida.re/) included.

## requirements

[bun](https://bun.com/docs/bundler/executables)

## build

```sh
bun i
bun run build
```

Then check `./bin/portable`, it is a single executable file with frida included.
