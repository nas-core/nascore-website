# Schedule&OpenSource

nascore is still iterating rapidly, and more functions are being developed.

Although the core functions are stable, the functions of the extension modules are still being optimized. We plan to launch extension plug-in functions and more integration of third-party modules in the future.

Currently, nascore is open-sourcing all core codes and all front-end UI codes. Welcome to join the development of nascore and promote the development of nascore together.

## Schedule

> There is a schedule that may be slightly delayed in updates

## Features

- [x] Can run on low-performance hardware and can be expanded on high-performance hardware.

- [x] The core file is controlled within 10M, currently 6M.
- [x] webdav function [rfc4918](https://datatracker.ietf.org/doc/html/rfc4918)
- [x] Multi-user management does not rely on database, using toml format
- [x] Implementation of webui login upload download cut copy text editing pasteboard right-click function
- [x] Automatic reverse proxy AdGuard automatic update diversion rules
- [x] Automatic deployment of lego ssl certificate management
- [x] webui one-click installation rclone follow the startup mount command optional use of rclone as the backend file system
- [x] webui one-click installation ddns-go automatic reverse proxy
- [x] webui visual multi-user management visual configuration
- [x] webui multiple file upload
- [x] webui folder upload
- [x] webui online decompression zip rar 7z tar tar.gz tar.xz tagz (partially dependent on system commands And only available on Linux)
- [x] webui online compression tagz format
- [x] webui image preview and switch
- [x] webui various online editing of common texts
- [x] compatible with ServerLess deployment and compatible with stateless services. Of course, configuration files and data files must be persisted separately
- [x] webui caddy2 automatically installs and starts, with visual graphical configuration.
- [x] webui reverse proxy complete web server function (depends on caddy)

### schedule

- [ ] webui video thumbnails and switches
- [ ] webui image thumbnail compression
- [ ] directory cache function
- [ ] sftp
- [ ] nfs
- [ ] smb
- [ ] online update
- [ ] storage bucket/s3 direct connection

- [ ] webui websocket chat
- [ ] webui mail center
- [ ] webui alist
- [ ] webui frps frpc or ngrok
- [ ] webui video on demand based on m3u8 subscription
- [ ] CalDAV
- [ ] CardDAV
- [ ] webui support for mosdns
- [ ] package management priority openwrt debian nixos archlinux winget
- [ ] webui mihomo management templates and subscriptions
