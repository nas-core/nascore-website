# rclone 云储存

nascore 目前支持rclone的自动下载安装 和 自动挂载目录

你可以把rclone支持的云盘挂载到nascore的用户目录中，以便在nascore中使用这些云盘。

## 注意事项

- rclone的挂载目录需要提前创建
- rclone的挂载命令 最好复制到nascore的运行设备中 手动执行测试通过后开启 `启用 Rclone自动挂载`
- rclone的挂载命令 首次开启后后续如果改变，可能需要重启nascore才能生效
