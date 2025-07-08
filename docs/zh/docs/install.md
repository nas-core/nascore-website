# 安装 nascore

## 安装基本组件

暂时只提供linux和windwos下的安装指南

### 下载

你可以通过以下链接下载 nascore：[下载链接](https://nascore.eu.org/download.html)

nascore是绿色软件，没有任何外部依赖。解压后即可使用，可以放到任意目录下，例如 `/overlay/data/nascore`

nascore不需要安装即可使用。如果你需要安装为后台服务，请参考后面的步骤。

### 安装

#### windows

暂时不提供

#### linux

以openwrt为例

##### 在 OpenWRT 上安装 nascore 服务

###### 安装步骤

1.  **配置 nascore**

直接运行 下面的命令会自动在当前目录创建一个默认配置 配置文件名 `nascore.toml` ，请确保`nascore.toml`所在的目录有写入权限。

```sh
cd /overlay/data/nascore
chmod +x nascore
./nascore  #ctrl+c 关闭
```

2. **创建服务启动脚本**

   创建 `/etc/init.d/nascore` 启动脚本，并添加以下内容。确保脚本中的路径与您实际的安装路径相符。

   ```sh
   echo '
   #!/bin/sh /etc/rc.common
   START=99
   start() {
           /overlay/data/nascore/nascore -c /overlay/data/nascore/nascore.toml > /dev/null 2>&1 &
           echo "nascore is started"
   }

   stop() {
           killall -q -9 nascore
           echo "nascore is stopped"
   }
   '>/etc/init.d/nascore
   ```

3. **设置执行权限**

   为启动脚本添加执行权限：

   ```sh
   chmod +x /etc/init.d/nascore
   ```

4. **设置开机启动**

   将 nascore 服务设置为开机启动：

   ```sh
   service nascore enable
   ```

5. **启动 nascore**

   手动启动 nascore 服务，并检查进程是否存在：

   ```sh
   service nascore start
   ps | grep nascore
   ```

###### 卸载

如果需要卸载 nascore，请执行以下步骤：

```sh
service nascore stop
service nascore disable
rm -rf /etc/init.d/nascore
rm -rf /overlay/data/nascore
```
