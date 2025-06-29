# Caddy2

Caddy2 is a high-performance web server that can easily implement reverse proxy, load balancing, static file service and other functions.

nascore uses it to expand website services.

## Integration of nascore and Caddy2

nascore provides automatic installation of caddy2, followed by startup and visual management of configuration files.

## Visual management interface

Because the format of caddyfile is too flexible, the visual management interface of nascore here agrees to manage Caddyfile in a similar format as the one at the end of the article

### About URLs and ports

Example

- `http://youdomian.com` does not enable https/ssl on port 80

- `http://youdomian.com:8081` does not enable https/ssl on port 8081

- `https://youdomian.com:8082` enables https/ssl on port 8082 You must configure the certificate/tls related fields, otherwise it cannot be used

### caddy2's certificate

Although the automatic https that comes with caddy2 is very useful, it is not suitable for most scenarios, so it is not recommended to disable it.

After the `Automatic configuration of HTTPS` in the visual interface is enabled, it corresponds to the default configuration of caddy `auto_https on`

It will make caddy2 automatically configure https/ssl. It may be necessary to occupy port 80 and 443, because the port number is too low and requires administrator privileges, or your two ports are unavailable. This will cause Caddy2 to fail to start, or the certificate to fail to take effect.

In addition, Caddy2 will not renew the certificate for a domain name that has not been visited for a long time, or the first visit after the certificate expires will be very slow.

#### Certificate Management Suggestions

Do not use caddy2's certificate management, use nascore's integrated lego to manage certificates, and specify the certificate path when using the caddy2 website.

### Caddyfile Example

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
root * /home/yh/myworkspace/nas-core/code-private/static file_server
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
