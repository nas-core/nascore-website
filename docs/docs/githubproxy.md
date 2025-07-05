# GitHub proxy configuration

Some installation commands of nascore rely on GitHub, but in some cases GitHub cannot be accessed. So you need to configure a download mirror address.

The default configuration file already provides one, but such services are personal and easy to be targeted, and there is not much stability guarantee.

If you have a domain name and it is hosted on cloudflare, you can refer to this github project [https://github.com/joyanhui/gh-proxy](joyanhui/gh-proxy) to build it yourself. You can also use the bing search engine to search for keywords `github mirror` [bing](https://cn.bing.com/search?q=github+mirror) `github proxy` [bing](https://cn.bing.com/search?q=github+proxy)

### Tested as of 2025-06-29

```
https://github.akams.cn/
https://hub.gitmirror.com/
```

### About proxy rules

Use a link containing github.com or githubusercontent.com in the original download address, and nascore will use the github proxy address for downloading.

Otherwise, use the original download address for downloading.
