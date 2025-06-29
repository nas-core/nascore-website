# 配置文件

配置文件使用toml文本格式。toml格式是类似ini的一种简单的配置文件格式。

## 指定配置文件

如果你在启动nascore的时候，指定了配置文件路径 例如 `nascore -c /mypath/my.toml` 那么会直接使用这个文件。如果你没有指定，那么会尝试从当前目录下的`nascore.toml`文件中读取配置。如果当前目录下不存在这个文件，会自动创建一个。

## 特别说明

### 配置文件的用户密码

如果密码不是以 sha256: 开头的，那么就是一个明文密码。字符就是密码。

否则是通过Secret.Sha256HashSalt 单向加密后的密码

## 关于 WebUIPubLicCdn DefaultStaticFileServiceRoot DefaultStaticFileServicePrefix

为了降低nascore核心文件的尺寸，web界面不包含前端的一些文件。

默认配置文件已经提供了这部分配置可以让你从互联网公共CDN服务器上自动按需加载，但是这些服务器有很小概率无法访问。你可以[自行搭建](cdn_and_static)。

## 配置文件例子

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
  AESkey = '5c8e633bd720070c4c497bcada3b4d4f'

[WebUIPubLicCdn]
Header = '''

<link href="https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/bootstrap/5.1.2/css/bootstrap.min.css" type="text/css"    rel="stylesheet" />
<link href="https://cdn.jsdmirror.com/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.css"    type="text/css" rel="stylesheet" />
<script src="https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/axios/0.26.0/axios.min.js" type="application/javascript"></script>

'''
Footer = '''

<script src="https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/bootstrap/5.1.2/js/bootstrap.bundle.min.js"  type="application/javascript"></script>

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

${BinPath} mount oss_qd: /home/yh/tmp/oss_qd --vfs-cache-mode writes --allow-non-empty  --config=/home/yh/.config/rclone/rclone.conf
${BinPath}  mount jianguoyun: /home/yh/tmp/jianguoyun --vfs-cache-mode writes --allow-non-empty  --config=/home/yh/.config/rclone/rclone.conf

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
    DownLoadlink = 'https://github.com/jeessy2/ddns-go/releases/download/v{ver}/ddns-go_{ver}_{os}_{arch}.tar.gz'
    Version = '6.11.0'

  [ThirdPartyExt.AdGuard]
    IsAdGuardProxyEnable = false
    ReverseproxyUrl = 'http://192.168.1.1:3000/'
    Upstream_dns_file = './adguard_upstream_dns_file.txt'
    Upstream_dns_fileUpdateUrl = 'https://raw.githubusercontent.com/joyanhui/adguardhome-rules/refs/heads/release_file/ADG_chinaDirect_WinUpdate_Gfw.txt'
    YouDohUrlDomain = 'dns.cloudflare.com'
    YouDohUrlSuffix = 'dns-query'
    AutoUpdateRulesEnable = false
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

export CF_DNS_API_TOKEN=b9841238feb177a84330febba8a83208921177bffe733
${BinPath}  --dns cloudflare  -d example.com -d '*.example.com' --key-type ec256 run
export ALICLOUD_ACCESS_KEY=abcdefghijklmnopqrstuvwx
export ALICLOUD_SECRET_KEY=your-secret-key
${BinPath}  --dns alidns  -d example2.com -d '*.example2.com' --key-type ec256 run


'''
    LEGO_PATH = './lego_cert'

  [ThirdPartyExt.Caddy2]
    AutoStartEnable = false
    DownLoadlink = 'https://github.com/caddyserver/caddy/releases/download/v{ver}/caddy_{ver}_{os}_{arch}.tar.gz'
    Version = '2.10.0'
    BinPath = './caddy'
    ConfigPath = './Caddyfile'

```
