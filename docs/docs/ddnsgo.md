# ddns-go

ddns-go is responsible for automatically obtaining your public IPv4 or IPv6 address and resolving it to the corresponding domain name service.

nascore supports automatic installation and follow-up startup of ddns-go and automatic reverse proxy

The reverse proxy address is `http://youdomain:9000/@ddnsgo/`

ddns-go has its own management interface and an independent administrator password. You can enable the reverse proxy of ddns-go in nascore. In this way, you can use ddns-go to manage dynamic domain name resolution without configuring domain names or external ports.

For other usage methods of ddns-go, please refer to [ddns-go official documentation](https://github.com/jeessy2/ddns-go/blob/master/README.md).
