# Configuration file

The configuration file uses the toml text format. The toml format is a simple configuration file format similar to ini.

## Specify the configuration file

If you specify the configuration file path when starting nascore, for example `nascore -c /mypath/my.toml`, then this file will be used directly. If you do not specify it, it will try to read the configuration from the `nascore.toml` file in the current directory. If this file does not exist in the current directory, it will be automatically created.

## Special instructions

### User password of the configuration file

If the password does not start with sha256:, it is a plain text password. The characters are the password.

Otherwise, it is a password encrypted one-way through Secret.Sha256HashSalt

### WebUIPubLicCdn

In order to reduce the size of the nascore core file, the web interface does not include some front-end files.

The default configuration file already provides this part of the configuration so that you can automatically load on demand from the Internet public CDN server, but there is a small probability that these servers cannot be accessed. You can [build it yourself](cdn_and_static).

### GitHubDownloadMirror

Some installation commands of nascore rely on github, but github cannot be accessed in some cases. So you need to configure a download mirror address.

The default configuration file already provides one, but such services are personal and easy to be targeted, and there is not much stability guarantee.

If you have a domain name and it is hosted on cloudflare, you can refer to this github project [https://github.com/joyanhui/gh-proxy](joyanhui/gh-proxy) to build it yourself. You can also use the bing search engine to search for keywords `github mirror` [bing](https://cn.bing.com/search?q=github+mirror) `github proxy` [bing](https://cn.bing.com/search?q=github+proxy)

As of 2025-06-29, tested and available

```
https://github.akams.cn/
https://hub.gitmirror.com/
```

## Configuration file example

```toml
[Server]
HttpPort = 9000
HttpsEnable = false
HttpsPort = 8181
TlsCert = 'cert.pem'
TlsKey = 'key.pem'
IsRunInServerLess = false
WebUIPrefix = '/@webui/'
WebuiAndApiEnable = true
ApiEnable = true
WebDavEnable = true
DefaultStaticFileServicePrefix = '/@static/'
DefaultStaticFileServiceEnable = true
DefaultStaticFileServiceRoot = './static/'
DefaultStaticFileServiceDownloadUrl = 'https://raw.githubusercontent.com/nas-core/nascore/refs/heads/main/static.tarz'

[JWT]
UserAccessTokenExpires = 2592000
UserRefreshTokenExpires = 7776000
Issuer = 'nascore'

# Some keys used for encryption will be automatically generated if they are empty, but this may cause the login status or password to become invalid after a restart
[Secret]
JwtSecret = 'a612dfec65ef1d1f92cec5ef02f095c5'
Sha256HashSalt = '689471faa183fe302731e8436482005d'
AESkey= '5c8e633bd720070c4c497bcada3b4d4f'

[WebUIPubLicCdn]
Header = '''

<link href="https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/bootstrap/5.1.2/css/bootstrap.min.css" type="text/css" rel="stylesheet" />
<link href="https://cdn.jsdmirror.com/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.css" type="text/css" rel="stylesheet" />
<script src="https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/axios/0.26.0/axios.min.js" type="application/javascript"></script>

'''
Footer = '''

<script src="https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/bootstrap/5.1.2/js/bootstrap.bundle.min.js" type="application/javascript"></script>

'''
Dropzone = '<script src="https://cdn.jsdmirror.com/npm/dropzone@5.9.3/dist/min/dropzone.min.js"></script><!--cdn.jsdelivr.net-->'
Artplayer = '''

<script src="https://cdn.jsdmirror.com/npm/hls.js@1.5.18/dist/hls.min.js"></script>
<script src="https://cdn.jsdmirror.com/npm/artplayer/dist/artplayer.js"></script><!--cdn.jsdelivr.net-->

'''
# Permissions Is Json string
# RUCc R(ReadFile) U(UpdateFile) C(CreateFile) c(CreateDir) D(DeleteFile)
[[Users]]
home = '/tmp'
isadmin = 'yes'
passwd = 'admin'
username = 'admin'

[[Users]]
home = '/home/yh/tmp'
isadmin = 'no'
passwd = 'yh'
username = 'yh'

[Limit]
OnlineEditMaxSizeKB = 10240
MaxFailedLoginsIpMap = 1000
MaxFailedLoginSleepTimeSec = 10

[ThirdPartyExt]
GitHubDownloadMirror = 'https://github.akams.cn/'

[ThirdPartyExt.Rclone]
DownLoadlink = 'https://github.com/rclone/rclone/releases/download/v{ver}/rclone-v{ver}-{os}-{arch}.zip'
AutoMountEnable = false
AutoMountCommand = '''

${BinPath} mount oss_qd: /home/yh/tmp/oss_qd --vfs-cache-mode writes --allow-non-empty --config=/home/yh/.config/rclone/rclone.conf
${BinPath} mount jianguoyun: /home/yh/tmp/jianguoyun --vfs-cache-mode writes --allow-non-empty --config=/home/yh/.config/rclone/rclone.conf

'''
AutoUnMountCommand = '''

fusermount3 -u /home/yh/tmp
fusermount3 -u /home/yh/jianguoyun

'''
Version = '1.70.1'
BinPath = './rclone'

[ThirdPartyExt.DdnsGO]
AutoStartEnable = false
IsDDnsGOProxyEnable = false
ReverseproxyUrl = 'http://localhost:9876/'
ConfigFilePath = './config-ddnsgo.yaml'
BinPath = './ddns-go'
DownLoadlink= 'https://github.com/jeessy2/ddns-go/releases/download/v{ver}/ddns-go_{ver}_{os}_{arch}.tar.gz'
Version = '6.11.0'

[ThirdPartyExt.AdGuard]
IsAdGuardProxyEnable = false
ReverseproxyUrl = 'http://192.168.1.1:3000/'
Upstream_dns_file = './adguard_upstream_dns_file.txt'
Upstream_dns_fileUpdateUrl = 'https://raw.githubusercontent.com/joyanhui/adguardhome-rules/refs/heads/release_file/ADG_chinaDirect_WinUpdate_Gfw.txt'
YouDohUrlDomain = 'dns.cloudflare.com'
YouDohUrlSuffix = 'dns-query' AutoUpdateRulesEnable = false
AutoUpdateRulesInterval = 48

[ThirdPartyExt.AcmeLego]
IsLegoAutoRenew = false
DownLoadlink = 'https://github.com/go-acme/lego/releases/download/v{ver}/lego_v{ver}_{os}_{arch}.tar.gz'
Version = '4.23.1'
BinPath = './lego'
AutoUpdateCheckInterval = 24
Command = '''

export LEGO_EMAIL="you@example.com"
export LEGO_PATH="${LEGO_PATH}"

export CF_DNS_API_TOKEN=b9841238f
```
