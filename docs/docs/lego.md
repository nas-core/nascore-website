# lego automatic TLS/Https management

lego is a powerful automatic certificate management tool that supports multiple certificate authorities (CA) and multiple protocols (such as ACME, DNS-01, HTTP-01, etc.). nascore supports automatic installation and follow-up startup of lego, as well as automatic reverse proxy.

Although caddy2 integrated with nascore can also automatically manage certificates. But lego supports more protocols and more certificate authorities, so in some cases, especially when you don’t have port 80/443, lego may be more suitable for use.

## Integration of nascore and lego

nascore provides automatic installation of lego and automatic certificate renewal.

But when you use lego for the first time, you need to do it manually once. Because the manufacturer providing the certificate may have some user agreements that require you to press y to agree in command line mode.

nascore will re-execute the certificate deployment/application command of lego at the time you configure. It is used to automatically renew the certificate.

## lego tips

```sh
export LEGO_EMAIL="you@example.com"
export LEGO_PATH="./lego_cert"
export CF_DNS_API_TOKEN=b111111feb177a84330febba8a83208921177bffe733
./lego --dns cloudflare -d example1.com -d '*.example1.com' --key-type ec256 run
export CF_DNS_API_TOKEN=b222222feb177a84330febba8a83208921177bffe733
./lego --dns cloudflare -d example2.com -d '*.example2.com' --key-type ec256 run
export ALICLOUD_ACCESS_KEY=abcdefghijklmnopqrstuvwx
export ALICLOUD_SECRET_KEY=your-secret-key
./lego --dns alidns -d example3.com -d '*.example3.com' --key-type ec256 run
```

You can use different accounts to apply for certificates for different domain names on the same DNS vendor. For example, both example1 and example2 verify domain ownership from cloudfalre's DNS. But different API tokens are used

CF_DNS_API_TOKEN Please log in to [cloudflare Create Token - Edit Zone DNS Use Template] (https://dash.cloudflare.com/profile/api-tokens)

If you want to use the cloudflare global token, please refer to [lego docs cloudflare](https://go-acme.github.io/lego/dns/cloudflare/index.html)

For more instructions and DNS vendor support, please refer to the official document [lego docs](https://go-acme.github.io/lego/dns/)
