# lego 自动证书管理

lego 是一个强大的自动证书管理工具，它支持多种证书颁发机构（CA）和多种协议（如ACME、DNS-01、HTTP-01等）。nascore 支持lego的自动安装和跟随启动，以及自动反向代理。

虽然 nascore 集成的caddy2 也可以自动管理证书。但是lego支持更多的协议和更多的证书颁发机构，因此在某些情况下，尤其是你没有80/443端口的时候，lego可能更适合使用。

## nascore和lego的集成

nascore提供lego的自动安装，以及自动续订证书功能。

但是你首次使用lego时，你需要手动执行一次。因为提供证书的厂商可能有一些用户协议需要你在命令行模式下按y同意。

nascore 会在你配置的时间 重新执行 lego的证书部署/申请命令。用来自动更新证书。

## lego 小技巧

```sh
export LEGO_DEBUG_CLIENT_VERBOSE_ERROR=true
export LEGO_DEBUG_ACME_HTTP_CLIENT=true
export LEGO_EMAIL=you@example.com
export LEGO_PATH=${LEGO_PATH}
export CF_DNS_API_TOKEN=your-api-token
export LEGO_SERVER=https://acme.zerossl.com/v2/DV90
export LEGO_EAB_HMAC=your-hmac
export LEGO_EAB_KID=your-kid
${BinPath} --accept-tos  --dns cloudflare  -d exp1.com -d *.exp1.com  --eab -k ec256 run &nascore
export ALICLOUD_ACCESS_KEY=abcdefghijklmnopqrstuvwx
export ALICLOUD_SECRET_KEY=your-secret-key
${BinPath} --accept-tos  --dns alidns  -d exp2.com -d *.exp2.com --eab -k ec256 run &nascore
export CF_DNS_API_TOKEN=your-api-token2
${BinPath} --accept-tos  --dns cloudflare  -d exp3.com -d '*.exp3.com' --eab -k ec256 run &nascore

```
### 同dns厂商不同账号
可以在 在域名的前面添加 一行环境变量

### 使用zerossl而不是letsencrypt 
需要配置环境变量 `LEGO_SERVER=https://acme.zerossl.com/v2/DV90` 并且配置 LEGO_EAB_HMAC 和 LEGO_EAB_KID  并在运行参数增加`--eab`

### 并发执行
行的末尾增加字符 `&nascore` 执行的时候 会自动删除这个字符,并在执行完成前面的环境变量后 后台执行本行命令 不等待完成 直接进入下一行
### 环境变量识别
开头是 `export ` 或 `set ` 的行 视作临时环境变量

## 其他说明

CF_DNS_API_TOKEN 请登陆 [cloudflare 创建令牌 - 编辑区域 DNS 使用模板] (https://dash.cloudflare.com/profile/api-tokens)

如要使用cloudflare全局token 请参考 [lego docs cloudflare](https://go-acme.github.io/lego/dns/cloudflare/index.html)

lego更多使用说明和DNS厂商支持可以参考官方文档 [lego docs](https://go-acme.github.io/lego/dns/)

