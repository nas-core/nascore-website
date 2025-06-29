# ddns-go

ddns-go 负责自动获得你的公网 IPv4 或 IPv6 地址，并解析到对应的域名服务。

nascore 支持 ddns-go 的自动安装和跟随启动 以及自动反向代理

反向代理地址 是 `http://youdomain:9000/@ddnsgo/`

ddns-go 自己有一个管理界面，有独立的管理员密码。你可以在nascore中开启ddns-go的反向代理。这样可以不用另外配置域名或额外配置外部端口就使用 ddns-go 管理动态域名解析功能。

其他 ddns-go 的使用方法可以参考 [ddns-go 官方文档](https://github.com/jeessy2/ddns-go/blob/master/README.md)。
