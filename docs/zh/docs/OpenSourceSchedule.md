# Schedule&OpenSource

nascore 目前还在快速迭代,更多的功能正在开发中。

虽然核心功能已经稳定，但是扩展模块的功能还在优化中。我们计划在未来一段时间内推出扩展插件功能，以及更多对第三方的模块的集成。

目前nascore 正在开源全部的核心代码和全部的前端ui的代码，欢迎加入nascore的开发，一起推动nascore的发展。

## 计划表

> 有一个更新可能略滞后的计划表

### 特性

- [x] 可以在低性能硬件上运行,可以在高性能硬件上拓展。
- [x] 核心文件控制在10M以内，目前6M。
- [x] webdav功能 [rfc4918](https://datatracker.ietf.org/doc/html/rfc4918)
- [x] 多用户管理不依赖数据库,使用toml格式
- [x] webui的实现 登陆 上传 下载 剪切 复制 文本编辑 粘贴板 右键功能
- [x] 自动反向代理 AdGuard 自动更新分流规则
- [x] 自动部署lego ssl证书管理
- [x] webui 一键安装 rclone 跟随启动挂载命令 可选使用rclone作为后端文件系统
- [x] webui 一键安装 ddns-go 自动反向代理
- [x] webui 可视化多用户管理 可视化配置
- [x] webui 多文件上传
- [x] webui 文件夹上传
- [x] webui 在线解压 zip rar 7z tar tar.gz tar.xz tagz（部分依赖系统命令 且只有linux可用）
- [x] webui 在线压缩 tagz 格式
- [x] webui 图片预览和开关
- [x] webui 常见文本各种在线编辑
- [x] 兼容ServerLess部署兼容无状态服务 当然配置文件和数据文件要另外持久化
- [x] webui caddy2自动安装跟随启动，可视化图形配置。
- [x] webui 反向代理 完整的web服务器功能（依赖caddy）

### 计划表

- [ ] webui 视频缩略图和开关
- [ ] webui 图片缩略图压缩
- [ ] 目录缓存功能
- [ ] sftp
- [ ] nfs
- [ ] smb
- [ ] 在线更新
- [ ] 储存桶/s3直连

- [ ] webui websocket chat
- [ ] webui mail center
- [ ] webui alist
- [ ] webui frps frpc 或者 ngrok
- [ ] webui 基于m3u8订阅的视频点播
- [ ] CalDAV
- [ ] CardDAV
- [ ] webui 对 mosdns 的支持
- [ ] 包管理 优先级 openwrt debian nixos archlinux winget
- [ ] webui mihomo 管理 模板和订阅
