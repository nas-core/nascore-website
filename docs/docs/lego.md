# lego automatic certificate management

lego is a powerful automatic certificate management tool that supports multiple certificate authorities (CA) and multiple protocols (such as ACME, DNS-01, HTTP-01, etc.). nascore supports automatic installation and follow-up startup of lego, as well as automatic reverse proxy.

Although caddy2 integrated with nascore can also automatically manage certificates. But lego supports more protocols and more certificate authorities, so in some cases, especially when you don’t have port 80/443, lego may be more suitable for use.

## Integration of nascore and lego

nascore provides automatic installation of lego and automatic certificate renewal.

But when you use lego for the first time, you need to do it manually once. Because the manufacturer providing the certificate may have some user agreements that require you to press y to agree in command line mode.

nascore will re-execute the certificate deployment/application command of lego at the time you configure. It is used to automatically renew the certificate.

## lego tips

```sh
export LEGO_DEBUG_CLIENT_VERBOSE_ERROR=true
export LEGO_DEBUG_ACME_HTTP_CLIENT=true
export LEGO_EMAIL=you@example.com
export LEGO_PATH=${LEGO_PATH}
export CF_DNS_API_TOKEN=your-api-token
export LEGO_SERVER=https://acme.zerossl.com/v2/DV90
export LEGO_EAB_HMAC=your-hmac
export LEGO_EAB_KID=your-kid
${BinPath} --accept-tos --dns cloudflare -d exp1.com -d *.exp1.com --eab -k ec256 run &nascore
export ALICLOUD_ACCESS_KEY=abcdefghijklmnopqrstuvwx
export ALICLOUD_SECRET_KEY=your-secret-key
${BinPath} --accept-tos --dns alidns -d exp2.com -d *.exp2.com --eab -k ec256 run &nascore
export CF_DNS_API_TOKEN=your-api-token2
${BinPath} --accept-tos --dns cloudflare -d exp3.com -d '*.exp3.com' --eab -k ec256 run &nascore

```
### Different accounts for the same DNS vendor
You can add a line of environment variables in front of the domain name

### Use zerossl instead of letsencrypt
You need to configure the environment variable `LEGO_SERVER=https://acme.zerossl.com/v2/DV90` and configure LEGO_EAB_HMAC and LEGO_EAB_KID and add `--eab` to the running parameters

### Concurrent execution
Add the characters `&nascore` at the end of the line. When executing, this character will be automatically deleted, and after the previous environment variables are executed, the command of this line will be executed in the background without waiting for completion and directly enter the next line
### Environment variable recognition
Lines starting with `export` or `set` are considered temporary environment variables

## Other instructions

CF_DNS_API_TOKEN Please log in to [cloudflare Create Token - Edit Zone DNS Use Template] (https://dash.cloudflare.com/profile/api-tokens)

If you want to use the cloudflare global token, please refer to [lego docs cloudflare](https://go-acme.github.io/lego/dns/cloudflare/index.html)

For more instructions and DNS vendor support, please refer to the official document [lego docs](https://go-acme.github.io/lego/dns/)