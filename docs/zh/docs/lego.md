# lego 自动证书管理

lego 是一个强大的自动证书管理工具，它支持多种证书颁发机构（CA）和多种协议（如ACME、DNS-01、HTTP-01等）。nascore 支持lego的自动安装和跟随启动，以及自动反向代理。

虽然 nascore 集成的caddy2 也可以自动管理证书。但是lego支持更多的协议和更多的证书颁发机构，因此在某些情况下，尤其是你没有80/443端口的时候，lego可能更适合使用。

## nascore和lego的集成

nascore提供lego的自动安装，以及自动续订证书功能。

但是你首次使用lego时，你需要手动执行一次。因为提供证书的厂商可能有一些用户协议需要你在命令行模式下按y同意。

nascore 会在你配置的时间 重新执行 lego的证书部署/申请命令。用来自动更新证书。

## lego 小技巧

```sh
export LEGO_EMAIL="you@example.com"
export LEGO_PATH="./lego_cert"
export CF_DNS_API_TOKEN=b111111feb177a84330febba8a83208921177bffe733
./lego  --dns cloudflare  -d example1.com -d '*.example1.com' --key-type ec256 run
export CF_DNS_API_TOKEN=b222222feb177a84330febba8a83208921177bffe733
./lego  --dns cloudflare  -d example2.com -d '*.example2.com' --key-type ec256 run
export ALICLOUD_ACCESS_KEY=abcdefghijklmnopqrstuvwx
export ALICLOUD_SECRET_KEY=your-secret-key
./lego  --dns alidns  -d example3.com -d '*.example3.com' --key-type ec256 run
```

可以让不同域名在同一个dns厂商用不同的账号申请证书。例如example1和example2都是从cloudfalre的dns验证域名所有权。但是使用的不同的APItoken

CF_DNS_API_TOKEN 请登陆 [cloudflare 创建令牌 - 编辑区域 DNS 使用模板] (https://dash.cloudflare.com/profile/api-tokens)

如要使用cloudflare全局token 请参考 [lego docs cloudflare](https://go-acme.github.io/lego/dns/cloudflare/index.html)

lego更多使用说明和DNS厂商支持可以参考官方文档 [lego docs](https://go-acme.github.io/lego/dns/)
