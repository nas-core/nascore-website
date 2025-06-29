# Static file and cdn

Under the default configuration, static file service will be provided in the `static` directory in the same path/or execution path of nascore.

You can modify the directory name and url path in the configuration file or background.

## Usage

Under the default configuration, create a new folder `static` in the directory where nascore is located, and then create a new text file `test.txt` in it, with any content.

Then you can visit `http://yourdomain.com:9000/@static/test.txt` to display the content of the file.

Similarly, you can put compressed files, pictures, etc. to achieve the function of directly sharing files.

## How to deploy cdn for your own nascore

Download the files that nascore needs to access on the public CDN to this directory, and then decompress them.

Download address optional

```
https://raw.githubusercontent.com/nas-core/nascore/refs/heads/main/static.tarz
```

```
https://testingcf.jsdelivr.net/gh/nas-core/nascore@refs/heads/main/static.tarz
```

```
https://cdn.jsdmirror.com/gh/nas-core/nascore@refs/heads/main/static.tarz
```

Network disk/address provided by netizens

```
https://kkdy.lanzoum.com/it4ZN2zu6o7a
```

Modify the cdn configuration from the configuration file or backend.

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
