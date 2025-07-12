# nascore_tv 使用说明

## 简介

`nascore_tv` 是 NasCore 的一个扩展程序，用于提供视频点播 (VOD) 或电视 (TV) 功能。它通过代理豆瓣API 以及订阅视频资源库的API，并缓存少量热数据，来优化视频播放体验。

## 安装

1.  **下载 `nascore_tv` 二进制文件**：
    - 根据你的操作系统下载二进制文件并解压( **TODO: 添加实际的下载链接或编译说明** )

2.  **存放位置**：将解压后得到的 `nascore_tv` 或者 `nascore_tv.exe` 文件放置在以下目录之一：
    - 与 NasCore 主程序（例如 `nascore`）可执行文件同目录。
    - 与 NasCore 主程序可执行文件同目录下的 `extended` 子目录。 推荐使用此方法。
    - 环境变量 `NASCOTE_EXTENDED_PATH` 指定的目录。

    推荐将 `nascore_tv` 放在 `extended` 子目录下，这样可以更好地组织文件结构。

## 配置

`nascore_vod` 的配置通过 `nascore_vod.toml` 文件进行。该文件需要放置在与 `nascore_vod` 可 executable 文件相同的目录。 如果没有此配置文件，则会使用默认值启动。

### 配置文件示例

```toml CodeSpace/nascore_vod/nascore_vod.toml
[cache]
douban_max = 50
douban_expire = 150
vodlist_max = 120
vodlist_expire = 150
voddetail_max = 120
voddetail_expire = 120
other_max = 120
other_expire = 15

[subscription]
urls=["https://nascore.eu.org/nascore_tv/subscription_example1.toml","https://nascore.eu.org/nascore_tv/subscription_example2.toml"]
interval_hour = 24
default_selected_api_site = ["tyyszy", "bfzy", "dyttzy", "ruyi"]

[auth]
jwt_secret = "your_jwt_secret_key"
disable = false
users = [
  { username = "nascore", password = "nascore" },
  { username = "nascore1", password = "nascore1" }
]
```

### 配置项说明

| 配置项 | 说明 |
| :-- | :-- |
| `[cache]` | 缓存配置 |
| `douban_max` | 豆瓣热门影视最多缓存记录数量，如设备内存较低可以适当降低，一条数据大概10-80k。 |
| `douban_expire` | 豆瓣热门影片缓存过期时间，单位为分钟。 |
| `vodlist_max` | 资源站视频列表/搜索结果最多缓存记录数量，如设备内存较低可以适当降低，一条数据大概1-10k。 |
| `vodlist_expire` | 资源站视频列表/搜索结果缓存过期时间，单位为分钟。 |
| `voddetail_max` | 视频详情最大缓存记录数量，如设备内存较低可以适当降低，一条数据大概1-30k。 |
| `voddetail_expire` | 视频详情缓存过期时间，单位为分钟。 |
| `other_max` | 其他缓存最大缓存记录数量，如设备内存较低可以适当降低。 |
| `other_expire` | 其他缓存过期时间，单位为分钟。 |
| `[subscription]` | 订阅配置 |
| `urls` | 订阅地址连接，如果url里面 包含字符 github.com raw.githubusercontent.com 并且是nascore负责启动的，会自动使用nascore系统配置的GitHubDownloadMirror加速地址下载。 |
| `interval_hour` | 订阅自动更新周期，单位小时。 |
| `default_selected_api_site` | 默认启动的资源站标识名。 |
| `[auth]` | 认证配置 |
| `jwt_secret` | JWT 密钥，请替换为一个强密钥。 |
| `disable` | 设置为 `true` 可以禁用认证功能。 |
| `users` | 用户名和密码列表，密码为明文保存。如果为空，默认启用一个用户名为 "nascore"、密码为 "nascore" 的认证用户。 |

## 运行

将 `nascore_vod` 放置在正确的目录，并配置好 `nascore_vod.toml` 文件后， NasCore 会自动启动它。 你可以在 NasCore 的日志中看到 `nascore_vod` 的启动信息。

## 注意事项

- 如果 `nascore_vod` 无法正常启动，请检查 NasCore 的日志，查看是否有错误信息。
- 如果修改了 `nascore_vod.toml` 配置文件，需要等待几秒才会生效。

## 卸载

要卸载 `nascore_tv` ，只需将其从相应的目录删除即可。 同时删除 `nascore_vod.toml` 文件。
