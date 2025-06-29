# 静态文件服务 和cdn配置

默认配置下，会在nascore同路径/或执行路径的`static`目录下提供静态文件服务。

你可以在配置文件或者后台修改这个目录名 和url的路径。

## 使用方法

默认配置下，在nascore所在目录 新建文件夹 `static`，然后在里面新建一个文本文件 `test.txt`，内容随意。

那么你访问 `http://yourdomain.com:9000/@static/test.txt` 就可以显示文件的内容。

同样你可以放 压缩包 图片等方式 实现直接分享文件的功能。

## 如何给自己的nascore部署cdn

把 nascore需要在公共CDN上访问的文件 下载到这个目录，然后解压。

下载地址 任选

```
https://raw.githubusercontent.com/nas-core/nascore/refs/heads/main/static.tarz
https://testingcf.jsdelivr.net/gh/nas-core/nascore@refs/heads/main/static.tarz
https://cdn.jsdmirror.com/gh/nas-core/nascore@refs/heads/main/static.tarz
```

网盘/网友提供的地址

```
https://kkdy.lanzoum.com/it4ZN2zu6o7a
```

从配置文件 或者后台修改cdn配置。

header

```html
<link href="/@static/bootstrap@5.1.2/dist/css/bootstrap.min.css" type="text/css" rel="stylesheet" />
<link href="/@static/bootstrap-icons@1.13.1/font/bootstrap-icons.css" type="text/css" rel="stylesheet" />
<script src="/@static/axios@0.26.0/dist/axios.min.js" type="application/javascript"></script>
```

footer

```html
<script src="/@static/bootstrap@5.1.2/dist/js/bootstrap.bundle.min.js" type="application/javascript"></script>
```

Dropzone

```html
<script src="/@static/dropzone@5.9.3/dist/min/dropzone.min.js"></script>
```

Artplayer

```html
<script src="/@static/hls.js@1.5.18/dist/hls.min.js"></script>
<script src="/@static/artplayer@5.2.2/dist/artplayer.js"></script>
```
