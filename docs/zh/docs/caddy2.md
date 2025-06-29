# Caddy2

Caddy2 是一个高性能的Web服务器，可以轻松实现反向代理、负载均衡、静态文件服务等功能。

nascore 使用它做网站服务的扩展。

## nascore和Caddy2的集成

nascore提供caddy2的自动安装 跟随启动和可视化管理配置文件。

## 可视化管理界面

因为caddyfile的格式过于的灵活，所以这里nascore的可视化管理界面约定文末类似的格式来管理Caddyfile

### 关于网址和端口

举例

- `http://youdomian.com` 在 80端口上 不启用https/ssl
- `http://youdomian.com:8081` 在 8081端口上 不启用https/ssl
- `https://youdomian.com:8082` 在 8082端口上 启用https/ssl 你必须配置 证书/tls相关字段，否则无法使用

### caddy2的证书

caddy2 自带的自动https虽然很好用，但是不适合大部分场景，所以不建议不启用。

可视化界面的 `自动配置HTTPS` 启用后 也就是对应caddy的默认配置 `auto_https on`

会让caddy2自动配置https/ssl。有可能会需要占用端口80和443，因为端口号太低需要管理员权限，或者你的这两个端口无法使用。都会导致Caddy2无法启动，或者证书无法生效等问题。

另外 长期无人访问的域名，Caddy2也不会为它续订证书，或者证书失效首首次访问非常缓慢。

#### 证书管理建议

不使用caddy2的证书管理，使用nascore集成的lego来管理证书，caddy2网站的时候 指定证书的路径即可。

### Caddyfile 实例

```json
{
	auto_https off
}

:8080 {
	respond "I am 8080"
}

http://hello.mydomain.com:8081 {
	respond "Hello from hello.mydomain.com on port 8081"
}

http://baseauth.mydomain.com:8081 {
	basic_auth * {
		httpadmin JDJhJDE0JFpQblVxUVpYdUd1YzIyTURTQlRRei5IYllLQlk2UlNTcmFjbE5tOUdrcDFsdll0VUtETHlt
	}
	respond "Hello from baseauth.mydomain.com on port 8081"
}

http://file.mydomain.com:8086 {
	root * /home/yh/myworkspace/nas-core/code-private/static
	file_server
}

http://proxy.mydomain.com:8086 {
	reverse_proxy http://192.168.1.1:80
}

http://doh.mydomain.com:8086 {
	reverse_proxy https://192.168.1.1:30443
}

http://doh2.mydomain.com:8086 {
	reverse_proxy https://192.168.1.1:30443
}

ssl.mydomain.com:8082 {
	tls /cert/certificates/_.mydomain.com.crt /cert/certificates/_.mydomain.com.key
	respond "Hello from ssl.mydomain.com on port 8081"
}

test.mydomain.com:8082 {
	tls /cert/certificates/mydomain.com.crt /cert/certificates/mydomain.com.key
	respond "Hello from ssl.mydomain.com on port 8081"
}

http://my.domain.com:8201 {
	reverse_proxy http://192.168.1.1
}

http://yy.mydomain.com:8201 {
	respond "sss"
}
```
