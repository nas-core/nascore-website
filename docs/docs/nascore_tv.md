# nascore_tv Usage Instructions

## Introduction

`nascore_tv` is an extension of NasCore that provides video on demand (VOD) or TV (TV) functionality. It optimizes the video playback experience by proxying the Douban API and caching video lists and details.

## Installation

1. **Download the `nascore_tv` binary file**:

- Download the binary file according to your operating system and unzip it ( **TODO: add actual download links or compilation instructions** )

2. **Storage location**: Place the unzipped `nascore_tv` or `nascore_tv.exe` file in one of the following directories:

- In the same directory as the executable file of the NasCore main program (such as `nascore`).
- In the `extended` subdirectory in the same directory as the executable file of the NasCore main program. This method is recommended.
- In the directory specified by the environment variable `NASCOTE_EXTENDED_PATH`.

It is recommended to put `nascore_tv` in the `extended` subdirectory to better organize the file structure.

## Configuration

`nascore_tv` is configured via the `nascore_tv.toml` file. This file needs to be placed in the same directory as the `nascore_tv` executable file. If this configuration file is not present, the default values ​​will be used.

### Configuration file example

```toml CodeSpace/nascore_vod/nascore_tv.toml
[cache]
douban_max = 50
douban_expire=150
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
jwt_secret= "your_jwt_secret_key"
disable = false
users = [
{ username = "nascore", password = "nascore" },
{ username = "nascore1", password = "nascore1" }
]
```

### Configuration item description

| Configuration item | Description |
| :-- | :-- |
| `[cache]` | Cache configuration |
| `douban_max` | The maximum number of cached records of Douban popular movies and TV shows. If the device memory is low, it can be appropriately reduced. One data is about 10-80k. |
| `douban_expire` | The cache expiration time of Douban popular movies, in minutes. |
| `vodlist_max` | The maximum number of cached records of resource station video lists/search results. If the device memory is low, it can be appropriately reduced. One data is about 1-10k. |
| `vodlist_expire` | The cache expiration time of resource station video lists/search results, in minutes. |
| `voddetail_max` | Maximum number of cached records for video details. If the device memory is low, it can be appropriately reduced. One piece of data is about 1-30k. |
| `voddetail_expire` | Video details cache expiration time, in minutes. |
| `other_max` | Maximum number of cached records for other caches. If the device memory is low, it can be appropriately reduced. |
| `other_expire` | Other cache expiration time, in minutes. |
| `[subscription]` | Subscription configuration |
| `urls` | Subscription address connection. If the url contains the characters github.com raw.githubusercontent.com and is started by nascore, the GitHubDownloadMirror acceleration address configured by the nascore system will be used automatically for download. |
| `interval_hour` | Subscription automatic update period, in hours. |
| `default_selected_api_site` | The resource site identifier that is started by default. |
| `[auth]` | Authentication configuration |
| `jwt_secret` | JWT secret key, please replace it with a strong one. |
| `disable` | Set to `true` to disable authentication. |
| `users` | Username and password list, passwords are saved in plain text. If empty, a single authentication user with username "nascore" and password "nascore" is enabled by default. |

## Run

After placing `nascore_tv` in the correct directory and configuring the `nascore_tv.toml` file, NasCore will automatically start it. You can see the startup information of `nascore_tv` in the NasCore log.

## Notes

- If `nascore_tv` fails to start properly, check the NasCore log to see if there is any error information.
- If the `nascore_tv.toml` configuration file is modified, you need to restart NasCore for the configuration to take effect.

## Uninstall

To uninstall `nascore_tv`, simply delete it from the corresponding directory. Also delete the `nascore_tv.toml` file.
