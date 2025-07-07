# nascore_tv 使用说明

## 简介

`nascore_tv` 是 NasCore 的一个扩展程序，用于提供视频点播 (VOD) 或电视 (TV) 功能。它通过代理豆瓣API，以及缓存视频列表和详情，来优化视频播放体验。

## 安装

1.  **下载 `nascore_tv` 二进制文件**：
    - 根据你的操作系统下载二进制文件并解压( **TODO: 添加实际的下载链接或编译说明** )

2.  **存放位置**：将解压后得到的 `nascore_tv` 或者 `nascore_tv.exe` 文件放置在以下目录之一：
    - 与 NasCore 主程序（例如 `nascore`）可执行文件同目录。
    - 与 NasCore 主程序可执行文件同目录下的 `extended` 子目录。 推荐使用此方法。
    - 环境变量 `NASCOTE_EXTENDED_PATH` 指定的目录。

    推荐将 `nascore_tv` 放在 `extended` 子目录下，这样可以更好地组织文件结构。

## 配置

`nascore_tv` 的配置通过 `nascore_tv.toml` 文件进行。该文件需要放置在与 `nascore_tv` 可执行文件相同的目录。 如果没有此配置文件，则会使用默认值启动。

### 配置文件示例

```toml
doubanCacheMax = 50
doubanCacheExpire = 150
vodlistCacheMax = 120
vodlistCacheExpire = 150
voddetailCacheMax = 120
vodCacheMax = 120
otherCacheMax = 120
otherCacheExpire = 15
```

### 配置项说明

| 配置项               | 说明                                                                                                |
| -------------------- | --------------------------------------------------------------------------------------------------- |
| `doubanCacheMax`     | 豆瓣 API 缓存的最大条目数。 用于缓存从豆瓣获取的电影信息，减少对豆瓣 API 的请求频率。               |
| `doubanCacheExpire`  | 豆瓣 API 缓存的过期时间，单位为分钟。 超过此时间后，缓存的豆瓣信息将失效，需要重新从豆瓣 API 获取。 |
| `vodlistCacheMax`    | 视频列表缓存的最大条目数。 用于缓存视频列表，例如电影列表、电视剧列表等。                           |
| `vodlistCacheExpire` | 视频列表缓存的过期时间，单位为分钟。                                                                |
| `voddetailCacheMax`  | 视频详情缓存的最大条目数。 用于缓存视频的详细信息，例如演员、导演、剧情简介等。                     |
| `vodCacheMax`        | 视频缓存的最大条目数。 这个配置项可能没有实际作用，建议设置为与 `voddetailCacheMax` 相同的值。      |
| `otherCacheMax`      | 其他缓存的最大条目数。 用于缓存其他类型的资源，例如图片、CSS 文件等。                               |
| `otherCacheExpire`   | 其他缓存的过期时间，单位为秒。                                                                      |

## 运行

将 `nascore_tv` 放置在正确的目录，并配置好 `nascore_tv.toml` 文件后， NasCore 会自动启动它。 你可以在 NasCore 的日志中看到 `nascore_tv` 的启动信息。

## 注意事项

- 如果 `nascore_tv` 无法正常启动，请检查 NasCore 的日志，查看是否有错误信息。
- 如果修改了 `nascore_tv.toml` 配置文件，需要重启 NasCore 才能使配置生效。

## 卸载

要卸载 `nascore_tv` ，只需将其从相应的目录删除即可。 同时删除 `nascore_tv.toml` 文件。
