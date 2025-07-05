# GitHub代理配置

nascore的部分安装命令依赖github,但是某些情况下github无法访问。所以需要配置一个下载镜像地址。

默认配置文件已经提供了一个，但是这类服务都是个人的，而且比较容易被针对，没有太大稳定保证。

如果你有域名并且托管到了cloudflare可以参考这个github项目[https://github.com/joyanhui/gh-proxy](joyanhui/gh-proxy)自建。 也可以使用bing搜索引擎搜索 关键词 `github mirror` [bing](https://cn.bing.com/search?q=github+mirror) `github proxy` [bing](https://cn.bing.com/search?q=github+proxy)

### 截至2025-06-29 测试可用的

```
https://github.akams.cn/
https://hub.gitmirror.com/
```

### 关于代理规则

在原始下载地址用 包含 github.com 或 githubusercontent.com 的链接，nascore使用github代理地址进行下载。

否则使用原始下载地址进行下载。
